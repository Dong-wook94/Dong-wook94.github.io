---
layout: post
title: "[더 자바, Java 8] Stream"
subtitle: "백기선 - 더 자바, Java 8 섹션 3 Stream"
categories: cs
tags: cs java stream 
comments: true
---

* # Stream 

  ### Stream 

  *  **sequence of elements** supporting sequential and parallel aggregate operations 

  * 데이터를 담고 있는 저장소 (컬렉션)이 아니다. 

    * 컬렉션과 스트림은 엄연히 다르다. 

  * Funtional in nature, 스트림이 처리하는 데이터 소스를 변경하지 않는다. 

  * 스트림으로 처리하는 데이터는 오직 한번만 처리한다. 

  * 무제한일 수도 있다. (Short Circuit 메소드를 사용해서 제한할 수 있다.) 

  * 중개 오퍼레이션은 근본적으로 lazy 하다. 

    * 중개형 오퍼레이터는 터미널 오퍼레이터가 오기전까지 실행을 안한다. 

  * 손쉽게 병렬 처리할 수 있다. 

    * parralStream을 사용하면 JVM 이 알아서 병렬처리 해준다. 

    * ~~~java
      List<String> parallelCollect = names.parallelStream().map((s)->{
      			System.out.println(s + " "+ Thread.currentThread().getName());
      			return s.toUpperCase();
      		}).collect(Collectors.toList());
      		parallelCollect.forEach(System.out::println);
      ~~~

    * 

    * 병렬처리라는게 매번 빨라지는게 아님 데이터의 양이 방대하다거나 쓰레드간의 Context Switching 비용이 더들면 오히려 느려질수도있다. 

  ### 스트림 파이프라인 

  * 0 또는 다수의 중개 오퍼레이션 (intermediate operation)과 한개의 종료 오퍼레이션 (terminal operation)으로 구성한다. 
  * 스트림의 데이터 소스는 오직 터미널 오퍼네이션을 실행할 때에만 처리한다. 

  ### 중개 오퍼레이션

  *  Stream을 리턴한다. 
  * Stateless / Stateful 오퍼레이션으로 더 상세하게 구분할 수도 있다. (대부분은 Stateless지만 distinct나 sorted 처럼 이전 이전 소스 데이터를 참조해야 하는 오퍼레이션은 Stateful 오퍼레이션이다.) 
  * filter, map, limit, skip, sorted, ... 종료 오퍼레이션 
  * Stream을 리턴하지 않는다.
  *  collect, allMatch, count, forEach, min, max, ... 

  

  참고 

  * https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html 

  * https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html

  

  