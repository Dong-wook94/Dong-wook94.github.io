---
layout: post
title: "Gradle 프로젝트 생성"
categories: dev
tags: gradle 
comments: true
---

> 기존에 운영하던 [아무코딩](https://dong-co.tistory.com/42?category=860250)에서 작성한 post입니다.

그레이들 프로젝트 생성과정은 메이븐과 유사하다. 

 

둘다 src\main\java  폴더를 자바 소스폴더로 사용하며, src\main\resources 폴더를 XML이나 프로퍼티 파일과 같은 자원 파일을 위한 소스 폴더로 사용한다.

 

build.gradle 파일 구성

~~~groovy
apply plugin: 'java'
 
sourceCompatibility = 1.8
targetCompatibility = 1.8
compileJava.options.encoding = "UTF-8"
 
repositories {
    mavenCentral()
}
 
dependencies {
    compile 'org.springframework:spring-context:5.0.2.RELEASE'
}
 
task wrapper(type: Wrapper) {
    gradleVersion = '4.4'
}

~~~

> 1행 : 그레이들 java 플러그인을 적용한다.
>
> 3~4행 : 소스와 컴파일 결과를 1.8 버전에 맞춘다.
>
> 5행 : 소스 코드 인코딩으로  UTF-8을 사용한다.
>
> 7~9행 : 의존 모듈을 메이븐 중앙 리포지토리에서 다운로드 한다.
>
> 12행 : spring-context 모듈에 대한 의존을 설정한다.
>
> 15~17행 : 그레이들 래퍼 설정이다. 소스를 공유할 때 그레이들 설치 없이 그레이들 명령어를 실행할 수 있는 래퍼를 생성해준다.

책에나온 코드는 이러했고 15행에서 오류가나서

나는 

```
wrapper(){
	gradleVersion = '4.4'
}
```

로 변경하니 해결되었다.

 

 

맥에서 gradle 설치

```
brew install gradle
```