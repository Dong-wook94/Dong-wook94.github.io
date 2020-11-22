---
layout: post
title: "[Web] html의 변천사"
subtitle: "html 변천사 "
categories: cs
tags: html cs html2.0 html1.1 html3.0 web
comments: true

---

> http 란 웹상에서 클라이언트와 서버간 통신을 위한 프로토콜

html 은 어플리케션 계층에 존재한다.

그래서 전송계층을 거쳐야된다. 

html0.9 버전 부터 2버전 까지는 tcp 전송 프로토콜을 사용 한다. 



## HTTP/0.9 원라인 프로토콜

요청과 응답이 매우 심플하다. 심플한대신 확장성이 떨어지는 문제가 있다.

초기에는 버전 번호도 없고 메서드도 GET이 유일했다. 

```html
GET /mypage.html
```

응답 또한 극도로 단순합니다: 오로지 파일 내용 자체로 구성됩니다.

```html
<HTML>
A very simple HTML page
</HTML>
```

이후 버전과 다르게 HTTP 헤더도 없었고 HTML 파일만 전송 될 수 있으며, 다른 유형의 문서는 전송 될 수 없었습니다.



## HTTP/1.0 – 확장성 만들기

* 버전정보가 요청 사이내로 전송.
* 응답에 상태 코드도 붙는다.
* 새로운 http 헤더의 도움으로 content-type이 추가되어 html 파일외에도 다른 문서들을 전송하는 기능이 추가됐다.

다음은 일반적인 요청과 응답입니다:

```html
GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
<HTML> 
A page with an image
  <IMG SRC="/myimage.gif">
</HTML>
```

두 번재 커넥션에 의한 이미지를 내려받기 위한 요청과 그에 대한 응답입니다:

```
GET /myimage.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(image content)
```

* 가장큰 특징 커넥션 하나당 요청하나 응답하나

  ![image](https://user-images.githubusercontent.com/36303777/97106292-108e4780-1704-11eb-8d79-75cc70fc200c.png)

#### 문제점

매번 새로운 연결로  성능이 저하됨. 서버 부하비용은 높아짐.



## HTTP/1.1 - 표준 프로토콜

* Persistent Connection 개념 도입
  * 지정한 timeout 동안 커넥션을 닫지 않는 방식.
* 파이프라이닝 기법 도입.
  * 하나의 커넥션에서 응답을 기다리지 않고 순차적인 여러 요청을 연속적으로 보내 그 순서에 맞춰 응답을 받는 방식이므로 지연시간을 줄일 수 있다.
  * 하지만 병목현상을 발생 시킬수 있다는 문제가 있다.(Head of Line Blocking) 
  * Header 구조의 중복 연속된 데이터의 경우 헤더가 같은 경우가 많다..



## HTTP/2 - 더나은 성능을 위한 프로토콜

* 기존 HTTP/1.x 버전의 성능향상에 초점을 맞춘 프로토콜
* 표준의 대체가 아닌 확장.
* 아래처럼 네이버, 페이스북, 인스타, 다음 등 대부분 http2.0 프로토콜을 사용한다.
* ![image](https://user-images.githubusercontent.com/36303777/97106538-aa0a2900-1705-11eb-8699-aaffb3f4c644.png)
* HTTP 메시지 전송 방식의변화
  * 바이너리 프레이밍 계층 사용 
    * 파싱, 전송속도 증가, 오류발생 가능성 감소
* 스트림을통한 양방향 전송을 통해 요청과 응답 멀티플렉싱이 가능
  * Head of Line Blocking 해결
* Stream Prioritization 
  * 리소스간 우선 순위를 설정 가능.
* 서버 푸시 가능. 

* Header 압축. 헤더의 크기를 줄여 페이지 로드시간 감소.



### TCP 의문제점

신뢰성을 확보하지만 지연을 줄이기 힘든 구조



하지만 UDP는 데이터 전송에 집중한 설계 

별도의 기능이 없어서 원하는 기능을 구현하기 좋고 TCP의 기능을 줄이면서 TCP만큼 신뢰성 확보가 가능하다. 



## HTTP/3 - QUIC (UDP를 사용)

* 전송 속도 향상.
  * 첫연결 설정에서 필요한 정보와 함께 데이터를 전송
  * 연결 성공시 설정을 캐싱하여 다음 연결 때 바로 성립이 가능.

* Connection UUID라는 고유한 식별자로 서버와 연결. 커넥션 재수립이 필요가없다.
* TLS 기본 적용
* IP Spoofing / Replay Attack 방지
* 독립스트림 -> 향상된 멀티플렉싱 가능. 
  * TCP 에도 Head Of Line Blocking 
* 구글은 이미 사용중이다.
  * ![image](https://user-images.githubusercontent.com/36303777/97106874-75976c80-1707-11eb-849f-e72043a320b0.png)



### Reference

https://www.youtube.com/watch?v=xcrjamphIp4

https://m.blog.naver.com/sehyunfa/221680799006

