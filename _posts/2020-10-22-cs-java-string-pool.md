---
layout: post
title: "[자바] String "
subtitle: "자바 String"
categories: cs
tags: java 자바 cs
comments: true
---

## String의 특징 

* **Immutable 클래스** 이다. 
  * 레퍼런스 타입의 객체이기 때문에 heap영역에 생성된다. 
  * heap영역에서 변경이 불가능한 것이지 재할당을 못하는것은 아님!!
    * Ex) String a ="aa"; 에서 a ="bb"; 로 재할당이 가능하다.
    * 위의 예제에서 a가 참조하고 있는 heap영역의 객체가 바뀌는 것이지 heap영역에 있는 값이 바뀌는 것이 아니다.
  * 단점 : 객체가 가지는 값마다 새로운 객체가 필요합니다. 따라서 메모리 누수와 새로운 객체를 계속 생성해야하기 때문에 성능저하를 발생시킬 수 있습니다.

## String pool

String을 생성하는 두가지 방식

1. new 연산자를 이용한 방식
2. 리터럴을 이용한 방식

Java의 Heap에는 `String Pool` 이라는 특별한 영역에서 String 객체들을 관리합니다. 이 String Pool의 실체는 `HashMap`입니다. 다음 코드와 같이 문자열 리터럴을 사용하여 String 객체를 생성하면 `String Pool`에 기존에 같은 값을 가지는 String 객체가 있는지 검사하고 있으면 그 객체의 참조값을, 없으면 String Pool에 새로 String 객체를 생성하고 그 참조값을 리턴합니다.

그러므로 아래와 같은 결과를 확인할 수 있습니다. new 를 통한 객체 생성시에는 string pool에 생성되지 않고 따로 생성됩니다. 

~~~java
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
~~~

![image](https://user-images.githubusercontent.com/36303777/96821049-28df3780-1462-11eb-9cc3-389229ad0980.png)



## StringBuffer, StringBuilder 

* 두개다 변경이 가능하다.

* 차이는 동기화 지원 유무이다.

* **String Buffer 는 멀티 쓰레드환경에서 synchronized키워드가 가능하므로 동기화가 가능하다. 즉, thread-safe하다.**

* **반대로 StringBuilder는 thread-safe하지 않다.**

  ## 

## Reference

* https://doohong.github.io/2018/03/04/java-string-pool/