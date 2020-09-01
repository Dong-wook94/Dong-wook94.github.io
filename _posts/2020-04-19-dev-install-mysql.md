---
layout: post
title: "Mysql 설치 (Mac)"
categories: dev
tags: mysql Mac
comments: true
---

> 기존에 운영하던 [아무코딩](https://dong-co.tistory.com/42?category=860250)에서 작성한 post입니다.



### Mysql 설치

> 맥북에서 Mysql 설치를 진행해본다.

 

brew udpate 를 통해 최신버전으로 업데이트 해준다

brew search mysql 을 통해 원하는 mysql 버전을 확인할 수 있다.

 

현재 5.7버전의 mysql을 설치할 예정이라

brew install mysql@5.7 으로 설치를 진행하였다.

 

최신버전을 설치하고 싶은 경우에는

brew install mysql 로 진행해주면 된다.

 

 

mysql 시작

brew services start mysql@5.7

/usr/local/opt/mysql@5.7/bin/mysql.server start

 

mysql 비밀번호 설정

mysql 접속 (초기에 비밀번호가 설정되어있지 않은 상태)

mysql -u root 로 접속한다.

 

mysql> set password = password('원하는 비밀번호'); 들어가서 원하는 비밀 번호를 설정한다.

 

------

### Mysql workbench 설치

http://dev.mysql.com/downloads/workbench/ 



[ MySQL :: Download MySQL WorkbenchSelect Operating System: Select Operating System… Microsoft Windows Ubuntu Linux Red Hat Enterprise Linux / Oracle Linux Fedora macOS Source Code Select OS Version: All Windows (x86, 64-bit) Recommended Download: Other Downloads: Windows (x86, 64-bit), MSIdev.mysql.com](http://dev.mysql.com/downloads/workbench/)

위 링크에 접속하여 다운받는다.

 



![img](https://blog.kakaocdn.net/dn/Ui1WP/btqDyErEo7L/BC77jxhk3PX4rfGkPImgM0/img.png)



다운로드 버튼 누르면된다.

 



![img](https://blog.kakaocdn.net/dn/yBZMm/btqDwdvsp7Y/qDo5YCWWhnx2iNVYKZ0b8k/img.png)



빨간색 테두리부분 누르면 로그인 없이 다운로드 가능하다.

이후 그대로 진행하면 설치가 완료된다.