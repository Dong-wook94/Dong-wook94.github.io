---
layout: post
title: "[운영체제] 쓰레드 vs 프로세스 "
subtitle: "운영체제 쓰레드 프로세스"
categories: cs
tags: cs os operating-system
comments: true
---

## 프로세스

- 사전적의미
  - 컴퓨터에서 연속적으로 실행되고 있는 컴퓨터 프로그램
  - 메모리에 올라와 실행되고 있는 프로그램의 인스턴스(독립적인 개체)
  - 운영체제로부터 시스템 자원을 할당받는 작업의 단위
- 특징
  - 프로세스는 **각각 독립된 메모리영역(Code, Data, Stack,Heap의 구조)을 할당** 받는다.
  - 기본적으로 **프로세스당 최소 1개의 스레드**를 가지고 있다.
  - 각 프로세스는 별도의 주소 공간에서 실행되며, 한 프로세스는 다른 프로세스의 변수나 자료구조에 접근할 수 없다.
  - 한프로세스가 다른 프로세스의 자원에 접근하려면 **프로세스 간의 통신(IPC, Inter-process communication)**을 사용해야한다.

## 스레드

- 사전적 의미
  - 프로세스 내에서 실행되는 여러 흐름의 단위
  - 프로세스가 할당받은 자원을 이용하는 실행의 단위
- 특징
  - 스레드는 프로세스 내에서 스택만 따로 할당 받고 code, data, heap 영역은 공유한다.
  - 스레드는 한 프로세스 내에서 동작되는 여러 실행 흐름으로, 프로세스 내의 주소 공간이나 자원들을 같은 프로세스 내에 스레드끼리 공유하면서 실행된다.
  - 같은 프로세스 안에 있는 여러 스레드들은 같은 힙 공간을 공유한다. 반면에 프로세스는 다른 프로세스의 메모리에 직접 접근할 수 없어서 프로세스 간의 통신을 이용한다
  - 각각의 스레드는 별도의 레지스터와 스택을 갖고 있지만, 힙 메모리는 서로 읽고 쓸수 있다.
  - 한 스레드가 프로세스 자원을 변경하면, 다른 이웃 스레드도 그 변경 결과를 즉시 볼 수 있다.



## 멀티 프로세스와 멀티 스레드의 차이

### 멀티 프로세스

- 멀티프로세싱이란
  - 하나의 응용프로그램을 여러 개의 프로세스로 구성하여 각 프로세스가 하나의 작업(태스크)을 처리하도록 하는 것이다.
- 장점
  - 여러개의 자식 프로세스 중 하나에 문제가 발생하면 그 자식 프로세스만 죽는 것 이상으로 다른 영향이 확산되지 않는다.
- 단점
  - Context Switching에서의 오버헤드
    - Context Switching 과정에서 캐쉬 메모리 초기화 등 무거운 작업이 진행되고 많은 시간이 소모되는 등의 오버헤드가 발생하게 된다.
    - 프로세스는 각각의 독립된 메모리 영역을 할당받았기 때문에 프로세스 사이에서 공유하는 메모리가 없어, Context Switching 이 발생하면 캐쉬에 있는 모든 데이터를 모두 리셋하고 다시 캐쉬 정보를 불러와야 한다.
  - 프로세스들 사이의 변수를 공유할 수 없다.
    - 프로세스는 각각의 독립된 메모리 영역을 할당받았기 때문.

> Context Switching이란?
>
> - CPU에서 여러 프로세스를 돌아가면서 작업을 처리하는데 이 과정을 Context Switching 이라 한다.
> - 구체적으로, 동작 중인 프로세스가 대기를 하면서 해당 프로세스의 상태(Context)를 보관하고, 대기하고있던 다음 순서의 프로세스가 동작하면서 이전에 보관했던 프로세스의 상태를 복구하는 작업을 말한다.

### 멀티 스레드

- 멀티 스레딩이란
  - 하나의 응용프로그램을 여러 개의 스레드로 구성하고 각 스레드로 하여금 하나의 작업을 처리하도록 하는것이다.
  - 윈도우, 리눅스 등 많은 운영체제들이 멀티 프로세싱을 지원하고 있지만 멀티 스레딩을 기본으로 하고 있다.
  - 웹 서버는 대표적인 멀티 스레드 응용 프로그램이다.
- 장점
  - 시스템 자원 소모 감소 (자원의 효율성 증대)
    - 프로세스를 생성하여 자원을 할당하는 시스템 콜이 줄어들어 자원을 효율적으로 관리할 수 있다.
  - 시스템 처리량 증가(처리비용 감소)
    - 스레드 간 데이터를 주고 받는 것이 간단해지고 시스템 자원 소모가 줄어들게 된다.
    - 스레드 사이의 작업량이 작아 Context Switching이 빠르다.
  - 간단한 통신 방법으로 인한 프로그램 응답 시간 단축
    - 스레드는 프로세스 내의 Stack영역을 제외한 모든 메모리를 공유하기 때문에 통신의 부담이 적다.
- 단점
  - 주의 깊은 설계가 필요하다.
  - 디버깅이 까다롭다.
  - 단일 프로세스 시스템의 경우 효과를 기대하기 어렵다.
  - 다른 프로세스에서 스레드를 제어할 수 없다.
  - 멀티 스레드의 경우 자원 공유의 문제가 발생한다.
  - 하나의 스레드에 문제가 발생하면 전체 프로세스가 영향을 받는다.

### 멀티 프로세스 대신 멀티 스레드를 사용하는 이유?

- 멀티 프로세스 대신 멀티 스레드를 사용하는 것의 의미?
  - 프로그램을 여러개 키는 것 보다 하나의 프로그램 안에서 여러 작업을 해결하는 것이다.
- 여러 프로세스(멀티 프로세스)로 할 수있는 작업들을 하나의 프로세스에서 여러 스레드로 나눠가면서 하는 이유?
  - 자원의 효율성 증대
    - 멀티 프로세스로 실행되는 작업을 멀티 스레드로 실행할 경우, 프로세스를 생성하여 자원을 할당하는 시스템 콜이 줄어들어 자원을 효율적으로 관리할 수 있다.
    - 프로세스 간의 Context Switching 시 단순히 CPU 레지스터 교체 뿐만 아니라 RAM과 CPU 사이의 캐쉬 메모리에 대한 데이터까지 초기화되므로 오버헤드가 크기 때문.
    - 스레드는 프로세스 내의 메모리를 공유하기 때문에 독립적인 프로세스와 달리 스레드 간 데이터를 주고 받는 것이 간단해지고 시스템 자원 소모가 줄어들게 된다.
  - 처리 비용 감소 및 응답시간 단축
    - 프로세스 간의 통신보다 스레드 간의 통신 비용이 적으므로 작업들 간의 통신부담이 줄어든다
      - 스레드는 스택영역을 제외한 모든 메모리를 공유하기때문에
    - 프로세스 간의 전환 속도보다 스레드 간의 전환 속도가 빠르다.
      - Context Switching시 스레드는 Stack영역만 처리하기 때문.
- 주의
  - 스레드간의 자원 공유는 전역변수를 이용하므로 함께 사용할때 충돌이 발생할 수 있다. 동기화문제.

### Reference

- https://gmlwjd9405.github.io/2018/09/14/process-vs-thread.html