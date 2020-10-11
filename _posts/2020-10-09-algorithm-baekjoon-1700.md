---
layout: post
title: "[백준 1700] 멀티탭 스케줄링"
subtitle: "백준 1700 멀티탭 스케줄링"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

기숙사에서 살고 있는 준규는 한 개의 멀티탭을 이용하고 있다. 준규는 키보드, 헤어드라이기, 핸드폰 충전기, 디지털 카메라 충전기 등 여러 개의 전기용품을 사용하면서 어쩔 수 없이 각종 전기용품의 플러그를 뺐다 꽂았다 하는 불편함을 겪고 있다. 그래서 준규는 자신의 생활 패턴을 분석하여, 자기가 사용하고 있는 전기용품의 사용순서를 알아내었고, 이를 기반으로 플러그를 빼는 횟수를 최소화하는 방법을 고안하여 보다 쾌적한 생활환경을 만들려고 한다.

예를 들어 3 구(구멍이 세 개 달린) 멀티탭을 쓸 때, 전기용품의 사용 순서가 아래와 같이 주어진다면, 

1. 키보드
2. 헤어드라이기
3. 핸드폰 충전기
4. 디지털 카메라 충전기
5. 키보드
6. 헤어드라이기

키보드, 헤어드라이기, 핸드폰 충전기의 플러그를 순서대로 멀티탭에 꽂은 다음 디지털 카메라 충전기 플러그를 꽂기 전에 핸드폰충전기 플러그를 빼는 것이 최적일 것이므로 플러그는 한 번만 빼면 된다. 

## 입력

첫 줄에는 멀티탭 구멍의 개수 N (1 ≤ N ≤ 100)과 전기 용품의 총 사용횟수 K (1 ≤ K ≤ 100)가 정수로 주어진다. 두 번째 줄에는 전기용품의 이름이 K 이하의 자연수로 사용 순서대로 주어진다. 각 줄의 모든 정수 사이는 공백문자로 구분되어 있다. 

## 출력

하나씩 플러그를 빼는 최소의 횟수를 출력하시오. 

## 예제 입력 1 복사

```
2 7
2 3 2 3 1 2 7
```

## 예제 출력 1 복사

```
2
```

## 내가 생각하는 문제 풀이 포인트

1. 그리디 문제이다. 



# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Baekjoon1700 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int N,K;
    static int[] order;
    static ArrayList<Integer> plug;

    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(br.readLine());
        order = new int[K];
        plug = new ArrayList<>();
        for(int i=0;i<K;i++){
            order[i] = Integer.parseInt(st.nextToken());
        }
        int result = 0;
        for(int i=0;i<K;i++){
            if(plug.contains(order[i]))
                continue;
           if(plug.size()<N){
               plug.add(order[i]);
               continue;
           }

           int[] willUse = new int[N];
           for(int j=0;j<N;j++){
               willUse[j] = K;
           }
           for(int j=0;j<N;j++){
               for(int k=i+1;k<K;k++){
                   if(order[k] == plug.get(j)){
                       willUse[j] = k;
                       break;
                   }
               }
           }
           int changeIdx = 0;
           int lastIdx = 0;
           for(int j=0;j<N;j++){
               if(lastIdx<willUse[j]){
                   lastIdx = willUse[j];
                   changeIdx = j;
               }
           }
           plug.set(changeIdx,order[i]);
           result++;
        }
        System.out.println(result);
    }
}

~~~



# 느낀점

그리디 문제

[문제 링크](https://www.acmicpc.net/problem/1700)

