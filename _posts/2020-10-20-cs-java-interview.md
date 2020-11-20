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



## Q2. String, StringBuilder, StringBuffer의 차이에 대해 설명해주세요.

**String 객체는 immutable** 합니다.

즉 한번 생성이 되면 변경이 불가능 합니다.

예를 들면 String 2개를 연결하는 작업을 할 때에 새로운 String을 객체를 이용하여 문자열을 참조하게 됩니다.

StringBuilder와 StringBuffer의 차이점은 멀티쓰레드 상태에서 동기화의 지원 여부가 다릅니다.

**StringBuffer은 멀티쓰레드 환경에서 동기화를 보장하지만 StringBuilder은 동기화를 보장하지 않습니다.**



## Q3. String str = new String()과 String str = ""의 차이

> String pool에 저장이 되느냐 그냥 heap에 따로 저장되느냐의 차이.

String을 생성하는 두가지 방식

1. new 연산자를 이용한 방식
2. 리터럴을 이용한 방식

Java의 Heap에는 `String Pool` 이라는 특별한 영역에서 String 객체들을 관리합니다. 이 String Pool의 실체는 `HashMap`입니다. 다음 코드와 같이 문자열 리터럴을 사용하여 String 객체를 생성하면 `String Pool`에 기존에 같은 값을 가지는 String 객체가 있는지 검사하고 있으면 그 객체의 참조값을, 없으면 String Pool에 새로 String 객체를 생성하고 그 참조값을 리턴합니다.

그러므로 아래와 같은 결과를 확인할 수 있습니다. new 를 통한 객체 생성시에는 string pool에 생성되지 않고 따로 생성됩니다.

```
String a = "aaa";
String b = "aaa";
String c = new String("aaa");
String d = new String("aaa");

System.out.println(a==b); //true
System.out.println(a==c);//false
System.out.println(a==d);//false
System.out.println(c==d);//false
System.out.println(a.equals(b));//true
System.out.println(a.equals(c));//true
System.out.println(c.equals(d));//true
```

[![image](https://user-images.githubusercontent.com/36303777/96821049-28df3780-1462-11eb-9cc3-389229ad0980.png)](https://user-images.githubusercontent.com/36303777/96821049-28df3780-1462-11eb-9cc3-389229ad0980.png)



## Q4. 자바의 접근 제어자

- private : 외부에서 접근 불가 (다른 클래스에서 접근이 불가능 해당 클래스에서만 접근이 가능하다. )
- default : 패키지 내에서만 접근이 가능하다. 
- protected : 하위 클래스에서만 접근 가능
- public : 외부에서 접근 가능



## Q5. 직렬화(serialization)란?

자바에서는 입출력을 할때 스트림이라는 통로를 통해 데이터가 이동합니다. 하지만 객체는 바이트형이 아니라서 스트림을 통해 파일에 저장하거나 네트워크로 전송할 수 없습니다. 

객체를 스트림을 통해 입출력하려면 `바이트를 배열로 변환`하는 것이 팔요한데 이를 **직렬화**라고 합니다. 반대로 `스트림을 통해 받은 직렬화된 객체를 원래 모양으로 만드는 과정`을 역직렬화 라고 합니다.



## Q6. 박싱과 언박싱

박싱 : 기본자료형을 Wrappe class로 바꾸어 주는 것

언박싱 : Wrapper class를 기본자료형으로 바꿔주는 것. 



## Q7. HashMap vs HashTable vs ConcurrentHashmap

- HashMap
  - 주요 메서드에 **synchronized 키워드**가 **없습니다**
  - key, value에 null을 입력할 수 **있습니다**.
- HashTable
  - 주요 메서드에 **synchronized 키워드**가 선언 되어 **있습니다**.
  - key, value에 null을 **허용하지 않습니다**.
- ConcurrentHashMap
  - **HashMap**을 **thread-safe** 하도록 만든 클래스
  - key, value에 null을 **허용하지 않습니다**.

## Q8. Vector vs ArrayList

동적인 배열을 다루는 컬렉션 프레임워크로서 둘의 차이점을 알아보겠습니다.

- Vector
  - 동기화된 상태입니다.(Thread safe)
  - 상대적으로 속도가 느립니다.(동기화 되어있기 떄문)
- ArrayList
  - 동기화가 안된 상태입니다.
  - 상대적으로 속도가 빠릅니다.(동기화가 안되어있기 때문)
  - 멀티쓰레드 환경이 아닐 경우 사용 권장합니다.

## Q9. POJO란? 

POJO(Plain Old Java Object)란 평범한 자바 객체라는 의미입니다. 어떤 자바 객체가 있는데, 이 객체를 사용하기 위해서 상속을 받아야 한다거나, 인터페이스를 구현해야 한다거나, 어노테이션을 적용해야 한다거나 하는 제약조건이 없는 객체라는 뜻입니다. 



## Q10. 자바의 장단점

* 장점 : 플랫폼에 상관없이 VM만 있다면 실행 가능하다. (운영체제에 종속적이지 않다.)
* 단점 : VM 위에서 돌아가기 때문에 VM이 있어야하며 이에따라 성능 저하가 있다.

## Q11. OOP의 특징 4가지

* 상속
  * 상위 개념을 하위 개념이 물려받아 재사용성을 높인다.
* 추상화
  * 객체의 공통적인 특징을 파악해 하나의 개념(클래스)으로 다루는 것.
* 캡슐화
  * 객체 지향 프로그래밍에서 기능과 특성의 모음을 "클래스"라는 "캡슐"에 분류해서 넣는것이 캡슐화다.
* 다형성
  * 다양한 형태로 표현이 가능한 구조를 의미한다. 서로 다른 클래스의 객체가 같은 입력을 받았을 때 각자의 방식으로 동작하는 것

## Q12. Objects의 기본 메소드

- equals : 동등성 검사
- hashcode : 해쉬벨류 생성
- toString : 문자열로 만듬



## Q13. 오버라이딩과 오버로딩의 차이

* 오버라이딩: 부모 클래스의 메소드를 자식 클래스에서 재정의 하는 것. 

* 오버로딩: 클래스에서 같은 이름의 메소드를 다른 인자를 받게 하여 여러 개 정의할 수 있는 것.



## Q14. Generic 이란? 

제네릭은 다양한 타입의 객체들을 다루는 메서드나 컬렉션 클래스에 컴파일 시의 타입 체크를 해주는 기능입니다.

즉, **클래스 내부에서 사용할 데이터 타입을 나중에 인스턴스를 생성할 때 확정하는 것**을 **제네릭**이라 합니다.

제네릭의 장점은

1. 컴파일 시 강한 타입 체크를 할 수 있다.
   - 실행시 타입 에러가 나는 것보다 컴파일 시에 미리 타입을 강하게 체크해서 에러를 사전에 방지
2. 타입 변환(casting)을 제거한다.
   - 비제네릭 코드는 불필요하게 타입 변환을 하기 때문에 프로그램 성능에 악영향을 미친다.

> #### 와일드카드란,
>
> 제네릭 클래스의 객체를 메소드의 매개변수로 받을 때, 그 객체의 타입 변수를 제한하는 것을 말한다.
>
> #### 와일드 카드<?>의 제한 종류
>
> - **<? extends T>** 와일드 카드의 상한 제한(upper bound) - T와 그 자손들을 구현한 객체들만 매개변수로 가능
> - **<? super T>** 와일드 카드의 하한 제한(lower bound) -T와 그 조상들을 구현한 객체들만 매개변수로 가능
> - **<?>** 제한 없음



## Q15. 인터페이스와 추상클래스의 차이

- 인터페이스는 다중 확장 가능, 추상 클래스는 불가
- 인터페이스의 필드값는 static final이지만 추상클래스는 non-static, non-final 필드 가능



## Reference

* https://blockchain-baam.tistory.com/34

* https://junjangsee.github.io/2019/05/15/interview/interview/