---
layout: post
title: "자바 면접질문"
subtitle: "자바 면접 예상질문 정리"
categories: cs
tags: java 자바 interview 면접
comments: true
---

## Q1. 가비지 컬렉터에 대해 설명해보세요.

가비지 객체를 효과적으로 처리하는 작업을 Garbage Collect 라고 합니다. jVM 의 Garbage Collector는 정리되지 않은 채로 남겨져 있는 메모리들을 다른 용도로 사용할 수 있게 메모리를 해제 시키는 프로그램 입니다.

### Q1-1. 가비지란 무엇인가요?

가비지란 정리되지 않은 메모리, 유효하지 않은 메모리 주소입니다. 

### Q1-2. 가비지 컬렉터가 실행되는 시점? 

가비지 컬렉터는 메모리를 더 달라고 요청하는 시점에 실행됩니다. JVM은 메모리를 부여받고 열심히 프로그램들을 실행하다가 메모리가 부족해지는 순간이 오면 OS에게 추가로 메모리를 더 요청하게 됩니다. 이시점에서 Garbage Collector가 실행됩니다.

### Q1-3. GC 과정에 대해 설명해 주세요.

GC의 과정을 `Mark and Sweep`이라고도 합니다. GC가 스택의 모든 변수 또는 Reachable 객체를 스캔하면서 각각 어떤 객체를 참조하고 있는지 찾는 과정이 **Mark** 라고 합니다. 이 과정에서 **Stop the world** 가 발생합니다. 이후 Mark 되어있지 않은 객체들을 힙에서 제거하는 과정이 **Sweep** 입니다.

여기서 자바는 가비지 객체를 판별하기 위해  **reachability** 라는 개념을 사용 합니다. 어떤 객체에 유효한 참조가 있으면 **'reachable'** , 없으면 **'unreachable'** 로 구별하고 **'unreachable'객체를 가비지로 간주** 한다.

### Q1-4. Stop the world 란 무엇이죠?

 GC 실행을 위해 JVM이 애플리케이션 실행을 멈추는 것입니다. 



## Q. String, StringBuilder, StringBuffer의 차이에 대해 설명해주세요.

**String 객체는 immutable** 합니다.

즉 한번 생성이 되면 변경이 불가능 합니다.

예를 들면 String 2개를 연결하는 작업을 할 때에 새로운 String을 객체를 이용하여 문자열을 참조하게 됩니다.

StringBuilder와 StringBuffer의 차이점은 멀티쓰레드 상태에서 동기화의 지원 여부가 다릅니다.

**StringBuffer은 멀티쓰레드 환경에서 동기화를 보장하지만 StringBuilder은 동기화를 보장하지 않습니다.**

> 





## Reference

* https://blockchain-baam.tistory.com/34