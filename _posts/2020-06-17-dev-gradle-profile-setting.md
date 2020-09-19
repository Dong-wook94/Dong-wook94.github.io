---
layout: post
title: "gradle의 profile(개발용/배포용)을 분리하여 보자"
categories: dev
tags: gradle 
comments: true
---

> 기존에 운영하던 [아무코딩](https://dong-co.tistory.com/42?category=860250)에서 작성한 post입니다.

이전에 프로젝트의 원활한 배포를 위해 자동배포를 설정했었다.

하지만 문제가 있었다. 배포를 위한 서버용 db와 개발시 사용하는 db의 url 이나 나뉘어지는 설정이 많은데 그때마다

application.yml에서 설정을 변경한뒤 실행 할 수는 없었다.

그래서 간단하게 내가 분리한 방법을 설명하고자 한다.

------

## 먼저 resource 분리



![img](https://blog.kakaocdn.net/dn/bkU91A/btqFeDx3n4y/2yhH9ohejrAKDfkFLC01o0/img.png)



공통되는 부분은 resources폴더에 두고 application.yml 파일은 분리한다.

 

 

resources-dev/application.yml

```
spring:
  profiles:
    active: dev # 기본 환경 선택

--- # dev 환경

spring:
  profiles: dev

  datasource:
    url: jdbc:mysql://localhost:3306/amitie_db?serverTimezone=UTC&characterEncoding=utf8
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: dongwook
    password: dongwook

  mybatis:
    type-aliases-package: com.project.amitie.mapper
    mapper-locations: mybatis/mapper/**/*.xml


# SQL Log 볼 때 사용하는 옵션
logging:
  level:
    jdbc.sqlonly: info
    org.springframework.web: DEBUG
    com.zaxxer.hikari.HikariDataSource: warn
```

##  

resource-release/application.yml

```
spring:
  profiles:
    active: release # 기본 환경 선택

--- # 운영 환경
spring:
  profiles: release

  datasource:
    url: jdbc:mysql://{서버ip주소}:3306/amitie_db?serverTimezone=UTC&characterEncoding=utf8
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: dongwook
    password: dongwook

    mybatis:
      type-aliases-package: com.project.amitie.mapper
      mapper-locations: mybatis/mapper/**/*.xml
```

##  

## gradle 설정

build.gradle 파일에 다음과 같이 내용을 추가한다.

```
ext.profile = (!project.hasProperty('profile') || !profile) ? 'dev' : profile

sourceSets {
    main {
        resources {
            srcDirs "src/main/resources", "src/main/resources-${profile}"
        }
    }
}
```

기본적으로 default로 dev를 사용하도록 하고 입력으로 들어온 값으로 리소스폴더를 매핑시켜줍니다.

## 젠킨스 설정



![img](https://blog.kakaocdn.net/dn/cB1S7b/btqEVVL09w1/DkPUu8BukN7zbCKxkioj6k/img.png)



젠킨스에서 빌드시 위와같이 profile명을 주입하여 실행하면 resource-release에 있는 yml이 실행된다.