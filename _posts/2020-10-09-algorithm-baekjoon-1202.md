---
layout: post
title: "[백준 1202] 보석 도둑"
subtitle: "백준 1202 보석 도둑"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

세계적인 도둑 상덕이는 보석점을 털기로 결심했다.

상덕이가 털 보석점에는 보석이 총 N개 있다. 각 보석은 무게 Mi와 가격 Vi를 가지고 있다. 상덕이는 가방을 K개 가지고 있고, 각 가방에 담을 수 있는 최대 무게는 Ci이다. 가방에는 최대 한 개의 보석만 넣을 수 있다.

상덕이가 훔칠 수 있는 보석의 최대 가격을 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 N과 K가 주어진다. (1 ≤ N, K ≤ 300,000)

다음 N개 줄에는 각 보석의 정보 Mi와 Vi가 주어진다. (0 ≤ Mi, Vi ≤ 1,000,000)

다음 K개 줄에는 가방에 담을 수 있는 최대 무게 Ci가 주어진다. (1 ≤ Ci ≤ 100,000,000)

모든 숫자는 양의 정수이다.

## 출력

첫째 줄에 상덕이가 훔칠 수 있는 보석 가격의 합의 최댓값을 출력한다.

## 예제 입력 1 복사

```
3 2
1 65
5 23
2 99
10
2
```

## 예제 출력 1 복사

```
164
```

## 내가 생각하는 문제 풀이 포인트

1. 그리디 문제이다. 



# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Baekjoon1202 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int N,K;
    static Jewel[] jewels;
    static int[] bag;
    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());
        jewels = new Jewel[N];
        bag = new int[K];
        for(int i=0;i<N;i++){
            st = new StringTokenizer(br.readLine());
            int w = Integer.parseInt(st.nextToken());
            int p = Integer.parseInt(st.nextToken());
            jewels[i] = new Jewel(w,p);
        }
        for(int i=0;i<K;i++){
            bag[i] = Integer.parseInt(br.readLine());
        }
        Arrays.sort(jewels);
        Arrays.sort(bag);

        PriorityQueue<Integer> pq = new PriorityQueue<>(Comparator.reverseOrder());
        long sum = 0;
        int idx =0;
        for(int i=0;i<K;i++){
            while(idx<N&&jewels[idx].weight <=bag[i]){
                pq.add(jewels[idx].price);
                idx++;
            }
            if(!pq.isEmpty()) sum +=pq.poll();
        }
        System.out.println(sum);
    }

    static class Jewel implements Comparable<Jewel>{
        int weight;
        int price;

        public Jewel(int weight, int price) {
            this.weight = weight;
            this.price = price;
        }

        @Override
        public int compareTo(Jewel o) {
            return this.weight - o.weight;
        }
    }
}

~~~



# 느낀점

플로이드 와샬 문제.

[문제 링크](https://www.acmicpc.net/problem/3020)

