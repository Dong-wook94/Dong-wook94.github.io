---
layout: post
title: "Mac 환경 java8 설치방법(JDK 설치 + 환경변수 설정)"
categories: dev
tags: java8설치 mac 
comments: true
---

> 기존에 운영하던 [아무코딩](https://dong-co.tistory.com/30?category=860250)에서 작성한 post입니다.



자바 설치 시에는 jdk를 설치해줄 뿐만 아니라 환경변수를 설정해주는 것까지가 자바 설치라고 볼 수 있습니다.

 

JDK란? 

자바 개발 키트(Java Development Kit)는 자바 애플리케이션을 구축 하기 위한 자바 개발환경 세트라고 보면 된다.

자바 프로그램을 개발하거나 실행할 때 필요한 javac, java doc, javap 등을 모아둔 것이 JDK이다.

 

> 환경변수 : 운영체제가 참조하는 변수. 프로세스가 컴퓨터에서 동작하는 방식에 영향을 미치는, 동적인 값들의 모임.

 

**환경변수를 등록하는 이유?**

운영체제가 어떤 경로에서든 특정 파일(자바 파일)을 인식할 수 있도록 환경변수를 등록하는 것입니다.

 

------

## JDK 설치

 

먼저 java -version을 통해서 java가 설치되었는지부터 확인합니다.

 

없다면

oracle에서 설치하시면 됩니다.

https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html

[ Java SE Development Kit 8 - DownloadsJava SE Development Kit 8 Downloads Thank you for downloading this release of the Java™ Platform, Standard Edition Development Kit (JDK™). The JDK is a development environment for building applications, applets, and components using the Java programming lawww.oracle.com](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)



![img](https://blog.kakaocdn.net/dn/cVyfxR/btqDpfUfIGP/eqT0tLmXJt8qUkncP3I1Yk/img.png)



들어가서 본인에게 해당하는 운영체제를 선택 후 다운로드 진행하시면 됩니다.

 

**설치**



![img](https://blog.kakaocdn.net/dn/oeQLA/btqDpfmotLa/kwqziFNaqmFeN2qShILea1/img.png)



이 뒤로 과정을 따라서 쭉 하시면 됩니다.

 



![img](https://blog.kakaocdn.net/dn/EPRzy/btqDoUCOHNN/zW4YfKYRM2eMkdW53Bw3W0/img.png)



java -version 을 입력해서 설치한 java 버전을 확인할 수 있습니다.

 

 

## 환경설정

```
cd /Library/Java/JavaVirtualMachines
ls -la
```



![img](https://blog.kakaocdn.net/dn/lWO7l/btqDp2UG54j/NwDpkACn8vVoan8KKQ943K/img.png)



```
cd jdk1.8.0_251.jdk/Contents/Home 
```

위 경로로 이동한 뒤

저기 jdk는 본인이 설치한 jdk와 같은 경로. 해당 경로를 JAVA_HOME 경로라고 합니다.

 

```
sudo su - 

vi /etc/paths
```

에 들어가서

 

맨 아래에 다음의 경로를 추가합니다.

```
/Library/Java/JavaVirtualMachines/Library/Java/JavaVirtualMachines/
```

 

```
vi /etc/profile
```

로 파일을 열어서

```
export /Library/Java/JavaVirtualMachines/jdk1.8.0_251.jdk/Contents/Home 
export CLASSPATH=.:$JAVA_HOME/lib/tools.jar
```

맨 아래에 위의 코드를 추가해주면 됩니다. 