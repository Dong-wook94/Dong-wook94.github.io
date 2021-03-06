---
layout: post
title: "[데이터베이스] 옵티마이저"
subtitle: "데이터베이스 쿼리 옵티마이저"
categories: cs
tags: cs db database ipc
comments: true
---

## 옵티마이저

SQL을 가장 빠르고 효율적으로 수행할 최적의 처리경로를 생성해주는 DBMS 내부의 핵심엔진이다.

## SQL 최적화 과정

* 사용자가 던진 쿼리 수행을 위해, 후보군이 될만한 실행계획을 찾는다.
* 오브젝트 통계 및 시스템 통계정보를 이용해 각 실행계획의 예상비용을 산정한다.
* 각 실행계획을 비교해서 최저비용을 갖는 하나를 선택한다.



## 옵티마이저 종류

1. 규칙기반 옵티마이저

   * 미리 정해 놓은 규칙에 따라 액세스 경로를 평가하고 실행계획을 선택한다.

2. 비용기반 옵티마이저

   * 테이블과 인덱스에 대한 여러 통계정보를 기초로 각 오퍼레이션 단계별 예상 비용을 산정하고, 이를 합산한 총비용이 가장 낮은 실행 계획을 선택한다.

   



## Reference

https://devmango.tistory.com/24