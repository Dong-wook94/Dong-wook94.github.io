---
layout: post
title: "네트워크 면접질문 "
subtitle: "네트워크 면접질문"
categories: cs
tags: network 네트워크 cs interview 면접
comments: true
---

## OSI 7계층

### OSI 7계층이란?

> 네트워크에서 통신이 일어나는 과정을 7단계로 나눈 것

### OSI 7계층으로 나눈 이유는?

> 통신이 일어나는 과정을 단계별로 파악할 수 있다. 

### OSI 7계층의 장점?

- 흐름을 한눈에 알아보기 쉽다
- **7단계 중 특정한 곳에 이상이 생기면 다른 단계의 장비 및 소프트웨어를 건들이지 않고도 이상이 생긴 단계만 고칠 수 있기 때문이다.**
  (소프트웨어, 하드웨어에 독립적인 단위로 네트워크 구성을 했음을 의미)



![계층별이미지](https://camo.githubusercontent.com/900c4392b9bbad9218244e2bdfae2fc14545ac43/68747470733a2f2f74312e6461756d63646e2e6e65742f6366696c652f746973746f72792f393935454646333535423734313739303335)

1. **Physical layer**: 물리적 특성을 이용해 통신 케이블로 데이터를 전송. (단위: bit) (장비: 케이블, 리피터, 허브)

2. **Data Link layer**: 포인트 투 포인트(Point to Point) 간 신뢰성있는 전송을 보장하기 위한 계층 (단위: frame) (ex: 이더넷)

   * MAC address 기반으로 물리적 연결 과정에서 생기는 오류 검출, 흐름 제어 등을 수행. 

   * 에러검출/재전송/흐름제어

   * 같은 네트워크에 있는 여러 대의 컴퓨터들이 데이터를 주고받기 위해서 필요한 모듈

   * 프레이밍 작업 수행

     > 프레이밍이란 데이터 베열에 data, header , trailer 등을 넣어서 캡슐화를 하는 작업.

3. **Network layer**: 논리적 주소인 IP address를 담당하며, 패킷의 전달 경로를 결정. (단위: Packet) (ex: Router)

   * 주소부여(IP), 경로설정(Route)
   * 자신의 다음 라우터에게 데이터를 넘겨줌(forwarding)

4. **Transport layer**: End to End간 메시지 전송에서 오류 검출과 흐름 제어를 담당. (단위: Segment) (ex: TCP, UDP)

   * 포트번호를 사용하여 도착지 컴퓨터의 최종 도착지인 프로세스에 까지 데이터가 도달하게 하는 모듈
   * 송신자는 데이터를 보낼때 데이터를 받을 수신자 컴퓨터에 있는 프로세스의 포트번호를 붙여서 보냅니다.
   * 포트번호 : 하나의 컴퓨터에서 동시에 실행되고 있는 프로세스들이 서로 겹치지 않게 가져야하는 정수 값.

5. **Session layer**: 양쪽 Host 간 연결을 수립/유지/종료시키는 역할. 통신장치 간 상호작용 및 동기화를 제공

6. **Presentation layer**: 코드 간의 번역을 담당.

7. **Application layer**: 사용자에게 통신을 위한 서비스 제공. 인터페이스 역할.



## 흐름제어 vs 혼잡제어 vs 오류제어

### 흐름제어

> 수신측과 송신측의 데이터처리 속도차이를 해결하기 위한 기법.

기법 : 정지-대기(Stop-and-wait), 슬라이딩 윈도우(Sliding Window)

> **정지-대기** : 매번 전송한 패킷에 대해 응답을 받아야만 그 다음 패킷을 전송 가능, 간단함, **비효율적**
>
> **슬라이딩 윈도우** : 수신측에서 설정한 윈도우 크기만큼 송신측에서 확인 응답 없이 세그먼트를 전송하여 데이터 흐름을 동적으로 조절

### 혼잡제어

> 송신측과 네트워크의 데이터처리 속도 차이를 해결하기 위한 기법. 

기법 : AIMD , Slow Start

> **AIMD** : 문제 없이 도착하면 window size 1씩 증가, 패킷 전송 실패하거나 타임아웃되면 패킷 전송 속도를 절반으로 줄인다. 
>
> 	* 문제점 : 네트워크 혼잡해지는 상황 미리 감지 불가. 전송 속도 올리는 데 걸리는 시간이 너무 김.
>
> **Slow Start** : 문제 없이 도착하면 window size를 2배씩 증가(지수함수), 혼잡 현상이 발생하면 Window size를 1로 떨어뜨리고, 1씩 증가(선형)

### 오류제어

* 오류검출(error detection)과 재전송(retransmisstion)
* ARQ : 재전송을 기반으로 한 에러 제어 방식
* 기법 : Stop & Wait ARQ , GBN ARQ, SR ARQ

> **Stop & Wait ARQ** : 데이터나 ACK가 분실되었을 경우 일정 간격의 시간을 두고 타임아웃이 되면 송신측은 데이터를 재전송
>
> **GBN ARQ vs SR ARQ**
>
> ![img](https://woovictory.github.io/img/error_flow_control_9.png)



## TCP vs UDP

| 프로토콜 종류  | TCP            | UDP                      |
| -------------- | -------------- | ------------------------ |
| 연결 방식      | 연결형 서비스  | 비연결형 서비스          |
| 패킷 교환 방식 | 가상 회선 방식 | 데이터그램 방식          |
| 전송 순서      | 전송 순서 보장 | 전송 순서가 바뀔 수 있음 |
| 수신 여부 확인 | 수신 여부 확인 | 수신 여부 확인하지 않음  |
| 통신 방식      | 1:1 통신       | 1:1 or 1:N or N:N 통신   |
| 신뢰성         | 높다           | 낮다                     |
| 속도           | 느리다         | 빠르다                   |



### TCP 3-way handshaking

> TCP 연결을 초기화 할 때 사용
>
> 양쪽 모두 데이터를 전송할 준비가 되었다는 것을 보장

![img](https://camo.githubusercontent.com/d6f4e35e5d0c9561f5031bb36536504b1b76a340/68747470733a2f2f74312e6461756d63646e2e6e65742f6366696c652f746973746f72792f323235413936344435324631424236393137)

- Client -> Server : SYN
- Server -> Client : syn+ack
- Client -> Server : Ack



### TCP 4-way handshaking

> 세션을 종료하기 위해 수행되는 절차

![img](https://camo.githubusercontent.com/244b09abce87ae8de3e3015817348e56ddd31dd5/68747470733a2f2f74312e6461756d63646e2e6e65742f6366696c652f746973746f72792f323637384530333535333745454539313236)

- Client -> Server : FIN
- Server -> Client : ACK
- Server -> Client : FIN
- Client -> Server : ACK

#### TIME_WAIT 이란?

그런데 만약 "Server에서 FIN을 전송하기 전에 전송한 패킷이 Routing 지연이나 패킷 유실로 인한 재전송 등으로 인해 FIN패킷보다 늦게 도착하는 상황"이 발생한다면 어떻게 될까요?

Client에서 세션을 종료시킨 후 뒤늦게 도착하는 패킷이 있다면 이 패킷은 Drop되고 데이터는 유실될 것입니다.

이러한 현상에 대비하여 Client는 Server로부터 FIN을 수신하더라도 일정시간(디폴트 240초) 동안 세션을 남겨놓고 잉여 패킷을 기다리는 과정을 거치게 되는데 이 과정을 **"TIME_WAIT"** 라고 합니다.

### **SYN Flooding 공격이란?**

> TCP세션이 연결될 때의 취약성을 이용한 서버공격
>
> client가 server로 연결 요청(SYN)을 보내면 server가 백로그 큐에 저장하는데, 큐가 가득 차게 되면 더 이상 요청을 받을 수 없게 된다. 
>
> Denial of Service(Dos) attack 중 하나.

해결방법 : Cookie 사용, 짧은 타임아웃 설정

1. **Cookie 사용**: 서버가 SYN+ACK 메시지를 보낼 때 SYN Cookie도 함께 보낸다. 일정 시간 동안 해당 쿠키에 대한 응답 패킷이 오지 않는다면 방화벽에서 차단한다.
2. **타임아웃 시간을 짧게** 잡아 백로그 큐를 계속해서 비워줄 수 있다.



## DNS 동작 원리

### DNS란? 

> 도메인 이름을 IP 주소로 변환

### DNS의 구성요소?

- 도메인 네임 스페이스(Domain Name Space)
  - DNS는 거대한 분산 네이밍 시스템, 도메인 네임 스페이스는 이러한 DNS가 저장/관리하는 계층적 구조를 의미.
  - 최상위 루트 DNS 서버가 존재하고 그 하위로 인터넷에 연결된 노드가 연속해서 이어진 계층구조.
  - 일반적으로 PD에서 사용하는 디렉토리구조와 유사하다.
- 네임 서버(Name Server)
  - 영문 도메인을 네 자리의 IP주소로 매핑 시켜주는 서버
- 리졸버(Resolver)
  - 웹 브라우저와 같은 DNS 클라이언트의 요청을 네임 서버로 전달하고 네임 서버로부터 정보(도메인 이름과 IP주소)를 받아 클라이언트에게 제공하는 기능을 수행한다.

### DNS 동작원리?

![image](https://user-images.githubusercontent.com/36303777/80864617-c2513c00-8cbe-11ea-81af-b42d53229997.png)

1. 웹 브라우저에 [www.naver.com을](http://www.naver.xn--com-of0o/) 입력하면 먼저 Local DNS에게 "[www.naver.com](http://www.naver.com/)" 이라는 호스트 네임에대한 IP주소를 질의하여 Local DNS에 없으면 다른 DNS name 서버 정보를 받는다(Root DNS 정보)
2. Root DNS서버에 "[www.naver.com](http://www.naver.com/)" 을 질의.
3. Root DNS서버로 부터 "com 도메인"을 관리하는 TLD(Top-Level Domain) 이름 서버 정보를 전달받음.
4. TLD에 "[www.naver.com](http://www.naver.com/)" 을 질의.
5. TLD에서 "name.com" 관리하는 DNS정보 전달.
6. "naver.com" 도메인을 관리하는 DNS서버에 "[www.naver.com](http://www.naver.com/)" 호스트네임에 대한 IP주소 질의.
7. Local DNS 서버에게 "[www.naver.com](http://www.naver.com/)" 에대한 IP주소 응답.
8. Local DNS는 [www.naver.com에](http://www.naver.xn--com-568n/) 대한 IP주소를 캐싱하고 IP주소 정보 전달.

