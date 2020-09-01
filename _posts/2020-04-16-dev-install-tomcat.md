---
layout: post
title: "Tomcat 개념 및 설치"
categories: dev
tags: tomcat
comments: true

---

> 기존에 운영하던 [아무코딩](https://dong-co.tistory.com/32?category=860250)에서 작성한 post입니다.



**WAS란?**

- server 단에서 Application을 동작 할 수 있도록 지원함
- 기존 웹 서버와 달리 동적인 요구에 대응하기 위해 적합한 형태로 변화, Web Client(브라우저)에게는 결과값만 전송함.
- Container(컨테이너)라는 용어로 쓰이며, 초창기는 CHI, 그후에서는 Servlet, JSP, ASP등의 프로그램으로 사용됨

**Web Application Server의 기능 3가지**

- 프로그램 실행 환경과 데이터베이스 접속 기능을 제공한다.
- 여러개의 트랜잭션을 관리한다.
- 업무를 처리하는 비즈니스 로직을 수행한다.

**그럼 그냥 Web Server는 무엇일까?**

Web Server : Web Client(웹 브라우저)에게 컨텐츠를 제공하는 서버, 정적인 HTML이나 jpeg, gif 같은 이미지를 HTTP 프로토콜을 통해 웹 브라우저에게 전송하는 역할.

 

**Apache Tomcat이란?**

아파치 톰캣(Apache Tomcat)은 아파치 소프트웨어 재단(Apache Software Foundation, ASF)에서 개발한 세계에서 가장 많이 사용되는 WAS(Web Application Server)입니다.

 

설치

https://tomcat.apache.org/download-80.cgi 접속한다.



![img](https://blog.kakaocdn.net/dn/czNdiM/btqDvzpSwLL/woK8z5BtziK1lnshzlc771/img.png)



Mac 의 경우에는 tar.gz를 다운받는다.

**MAC OS 사용자의 경우**

\1. 다운로드 받은  tar.gz 확장자의 톰캣파일의 압축을 해제합니다.

관리의 편의를 위해 압축해제 한 폴더를 ~/ 경로의 apps 폴더로 옮깁니다.

mkdir ~/apps cd ~/apps mv ~/Downloads/apache-tomcat-8.5.24 ~/apps/

```
mkdir ~/apps cd ~/apps mv ~/Downloads/apache-tomcat-8.5.24 ~/apps/
```

\2. 쉘확장자를 가진 파일의 실행권한을 줍니다.

```
chmod +x ./bin/*.sh
```

\3. 터미널에서 다음과 같이 명령어를 실행해 줍니다.

```
./bin/startup.sh 
```

 



![img](https://blog.kakaocdn.net/dn/EhNxA/btqDtBhFdMG/pEQT9Dg70jBOQtUz3p1Ow0/img.png)



완료.

```
./bin/shutdown.sh 
```

를 실행하면 아파치 톰캣이 종료 됩니다.

 

Reference

- https://apponline.tistory.com/entry/Web-Server-와-WAS-란
- https://m.blog.naver.com/PostView.nhn?blogId=on21life&logNo=221161029373&proxyReferer=https:%2F%2Fwww.google.com%2F
- https://www.edwith.org/boostcourse-web/lecture/16684/