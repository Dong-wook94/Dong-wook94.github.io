---
layout: post
title: "[네트워크] ARP 프로토콜"
subtitle: "네트워크 ARP 프로토콜"
categories: cs
tags: cs 네트워크 network
comments: true
---

# ARP

**A**ddress **R**esolution **P**rotocol : 주소 결정 프로토콜 

* 네트워크 상에서 IP 주소를 물리적 네트워크 주소로 대응 시키기 위해 사용되는 프로토콜이다. 
  * 3계층의 IP주소를 2계층의 MAC주소와 매칭 해주는 프로토콜.
* 여기서 물리적 네트워크 주소는 이더넷 48비트 네트워크 카드(NIC) 주소를 뜻한다.



## 물리적 네트워크 주소 (Media Access Control address)

물리적 네트워크 주소란 다른말로 MAC 주소라고 하는데 데이터 링크 계층(2계층)에서 사용하는 네트워크 인터페이스 카드(NIC) 즉, **하드웨어에 할당된 고유 식별 주소**입니다.



## IP 주소(Internet Protocol address)

인터넷에 연결되어 있는 모든 호스트나 라우터 장비의 인터페이스에 할당된 **논리적인 주소** 입니다. 

#### Public IP

* 전세계에서 유일한 공인된 주소
* 우리나라는 한국인터넷진흥원(KISA)에서 국내에서 사용할 주소를 관리.

#### Private IP

* 네트워크안에서 사용되는 주소
* 하나의 네트워크 안에서 유일하며 인터넷상에서 확인할 수 없음.
* 다른 네트워크의 IP와 중복될 수 있음.



하나의 네트워크 안에서 사용되는 Private IP는 외부와 통신할 때 공유기와 같은 기기에서 Public IP로 변경됩니다.



즉, **IP주소를 이용해 알 수 있는 것**은 목적지 컴퓨터 주소가 아닌 Internet Protocol로서 컴퓨터가 위치한 **인터넷 네트워크를 찾을 수 있습니다.**



## ARP 동작 원리

1. 송신자는 목적지 물리주소가 필요하므로, 물리주소 요청을 위한 ARP요청 패킷을 브로드캐스트로 전송.
   * 브로드캐스트를 하는 이유는 목적지의 물리주소를 모르므로 모두에게 요청함.
   * 요청 패킷에는 수신자가 수신자 주소를 응답할 때 필요한 송신자 주소가 포함 

2. 모든 호스트와 라우터는 송신자가 보낸 ARP 요청 패킷을 수신함.

3. 해당되는 수신자만 자신의 논리주소와 물리주소를 넣어 응답 패킷을 유니캐스트로 전송.



### Reference

- https://www.youtube.com/watch?v=KMEPEdsK71I