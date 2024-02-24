# Dubbo 全版本漏洞分析

# 0x01 序言

最近学习了一下 Dubbo 这个框架，把目前已公开的漏洞都进行了一次复现，网上师傅们的分析文章缺少关键点，或者缺少复现环境搞起来确实是有不少的坑点，所以复现的同时详细记录了一下。在复现的时候也发现了一些有趣的地方，关于 CVE-2020-1948 这个洞引发了很多讨论、后续的很多漏洞其实都是对这个编号的延伸，最后也发现确实还存在 <=2.7.23 版本的漏洞利用。

- CVE-2019-17564
- CVE-2020-1948
- CVE-2020-11995
- CVE-2021-25641
- CVE-2021-30179
- CVE-2021-30180
- CVE-2021-30181
- CVE-2021-32824
- CVE-2021-36162
- CVE-2021-36163
- CVE-2021-37579
- CVE-2021-43297
- CVE-2022-39198
- CVE-2023-23638

# 0x02 环境搭建

## zookeeper

### docker

```
docker run --rm --name zookeeper -p 2181:2181 zookeeper:3.8
```

### 手动

[下载](https://zookeeper.apache.org/releases.html)

1. 修改 zoo_sample.cfg 为 zoo.cfg ，根目录新建data和logs

2. 加目录

```
dataDir=/env/apache-zookeeper-3.8.1-bin/data
dataLogDir=/env/apache-zookeeper-3.8.1-bin/logs
```

3. bin 下 zkServer 启动，默认端口2181，3.6之后占用8080端口作为AdminService服务，zoo.cfg 中添加 `admin.serverPort=12181` 可更改服务端口

## Dubbo 代码用例

该文的漏洞都是在官方给的 Demo 基础上复现 github 安全中心报告的问题，漏洞配套代码都上传至 [PPPVULNS](https://github.com/Whoopsunix/PPPVULNS/tree/master/components/Apache/DubboDemo) ，使用时注意切换 consumer、provider 的版本。

官方 Demo：

https://github.com/apache/dubbo-samples

https://github.com/apache/dubbo-spring-boot-project/releases

# 参考

复现时带来很大帮助的文章 🫡

> https://securitylab.github.com/advisories/GHSL-2021-034_043-apache-dubbo/
>
> https://securitylab.github.com/advisories/GHSL-2021-094-096-apache-dubbo/
>
> https://github.com/Dor-Tumarkin/CVE-2021-25641-Proof-of-Concept?tab=readme-ov-file
>
> https://checkmarx.com/blog/the-0xdabb-of-doom-cve-2021-25641/
>
> https://tttang.com/archive/1747/#toc__1
>
> https://github.com/bitterzzZZ/CVE-2021-43297-POC?tab=readme-ov-file
>
> https://yml-sec.top/2022/12/30/%E4%BB%8Ecve-2022-39198%E5%88%B0%E6%98%A5%E7%A7%8B%E6%9D%AFdubboapp/
>
> https://xz.aliyun.com/t/11961
>
> https://xz.aliyun.com/t/12396
>
> https://xz.aliyun.com/t/12818

