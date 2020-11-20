---
layout: post
title: "[네트워크] Nagle 알고리즘"
subtitle: "네트워크 네이글 알고리즘"
categories: cs
tags: cs network
comments: true
---

# 네이글 알고리즘이란?

> **"가능하면 조금씩 여러 번 보내지 말고 한번에 많이 보내라(Effective TCP)"** 라는 원칙을 기반으로 만들어진 알고리즘입니다.



## 원리

ACK를 받은 다음에 데이터를 보내고 ACK를 받을 때까지 출력버퍼의 데이터를 저장하였다가 ACK를 받으면 버퍼의 데이터를 모두 패킷으로 만들어 보낸다는 것 입니다. 예를들어 A가 'N'이라는 데이터를 패킷으로 만들어 보내고, 계속해서 다음 데이터를 보내는 것이 아니라 출력버퍼로 보내어 저장시켜 둡니다. 그러다가 ACK가 오면 출력버퍼에 저장된 'agle'라는 데이터를 보냅니다.

![image](https://user-images.githubusercontent.com/36303777/99758752-b2535980-2b35-11eb-91ce-74f41ab3a5cd.png)



TCP 소켓은 디폴트로 Nagle 알고리즘을 적용하고 있습니다.



## Nagle 알고리즘의 장점

네트워크의 효율성이 높아진다. (똑같은 데이터를 보내더라도 생산하는 패킷의 수가 적기 때문.)

## Nagle 알고리즘의 단점

송신 호스트가 ACK를 받을 때까지 기다려야 하므로 전송 속도가 느려진다.



## Nagle 알고리즘 on/off 방법

\- TCP_NODELAY 옵션이

   1(TRUE) : Nagle 알고리즘을 적용하지 않습니다.

   2(FALSE): Nagle 알고리즘을 적용합니다.

```c
int opt_val = TRUE;

setsockopt(sock, IPPROTO_TCP, TCP_NODELAY, &opt_val, sizeof(opt_val));
```

하지만 네트워크의 부하를 극대화 시켜주면서 서버 전체의 성능을 무척 감소시키는 방법이기 때문에 조심해서 사용해야 된다. 