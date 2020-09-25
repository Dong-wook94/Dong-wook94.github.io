---
layout: post
title: "[백준 1766] 문제집"
subtitle: "백준 1766 문제집"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

민오는 1번부터 N번까지 총 N개의 문제로 되어 있는 문제집을 풀려고 한다. 문제는 난이도 순서로 출제되어 있다. 즉 1번 문제가 가장 쉬운 문제이고 N번 문제가 가장 어려운 문제가 된다.

어떤 문제부터 풀까 고민하면서 문제를 훑어보던 민오는, 몇몇 문제들 사이에는 '먼저 푸는 것이 좋은 문제'가 있다는 것을 알게 되었다. 예를 들어 1번 문제를 풀고 나면 4번 문제가 쉽게 풀린다거나 하는 식이다. 민오는 다음의 세 가지 조건에 따라 문제를 풀 순서를 정하기로 하였다.

1. N개의 문제는 모두 풀어야 한다.
2. 먼저 푸는 것이 좋은 문제가 있는 문제는, 먼저 푸는 것이 좋은 문제를 반드시 먼저 풀어야 한다.
3. 가능하면 쉬운 문제부터 풀어야 한다.

예를 들어서 네 개의 문제가 있다고 하자. 4번 문제는 2번 문제보다 먼저 푸는 것이 좋고, 3번 문제는 1번 문제보다 먼저 푸는 것이 좋다고 하자. 만일 4-3-2-1의 순서로 문제를 풀게 되면 조건 1과 조건 2를 만족한다. 하지만 조건 3을 만족하지 않는다. 4보다 3을 충분히 먼저 풀 수 있기 때문이다. 따라서 조건 3을 만족하는 문제를 풀 순서는 3-1-4-2가 된다.

문제의 개수와 먼저 푸는 것이 좋은 문제에 대한 정보가 주어졌을 때, 주어진 조건을 만족하면서 민오가 풀 문제의 순서를 결정해 주는 프로그램을 작성하시오.

## 입력

첫째 줄에 문제의 수 N(1 ≤ N ≤ 32,000)과 먼저 푸는 것이 좋은 문제에 대한 정보의 개수 M(1 ≤ M ≤ 100,000)이 주어진다. 둘째 줄부터 M개의 줄에 걸쳐 두 정수의 순서쌍 A,B가 빈칸을 사이에 두고 주어진다. 이는 A번 문제는 B번 문제보다 먼저 푸는 것이 좋다는 의미이다.

항상 문제를 모두 풀 수 있는 경우만 입력으로 주어진다.

## 출력

첫째 줄에 문제 번호를 나타내는 1 이상 N 이하의 정수들을 민오가 풀어야 하는 순서대로 빈칸을 사이에 두고 출력한다.

## 예제 입력 1 복사

```
4 2
4 2
3 1
```

## 예제 출력 1 복사

```
3 1 4 2
```

## 내가 생각하는 문제 풀이 포인트

1. 위상정렬

   먼저 풀어야 되는 문제는 위상정렬을 이용

2. 가능하면 쉬운문제를 고르기위해 priority queue를 이용.

# 코드

~~~java
import java.io.*;
import java.util.ArrayList;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Baekjoon1766 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static int N,M;
    static int[] inDegreeCnt;
    static ArrayList<Integer>[] graph;
    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        inDegreeCnt = new int[N+1];
        graph = new ArrayList[N+1];
        for(int i=1;i<=N;i++)
            graph[i] = new ArrayList<>();
        for(int i=0;i<M;i++){
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            graph[a].add(b);
            inDegreeCnt[b]++;
        }
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int i=1;i<=N;i++){
            if(inDegreeCnt[i]==0) {
                pq.add(i);
            }
        }
        while(!pq.isEmpty()){
            int idx = pq.poll();
            for(int node : graph[idx]){
                inDegreeCnt[node]--;
                if(inDegreeCnt[node]==0){
                    pq.offer(node);
                }
            }
            graph[idx].clear();
            bw.write(idx+" ");
        }
        bw.flush();
    }
}

~~~



# 느낀점

오류 없이 한번에 됐다. 오예~~~

 비슷한 유형을 몰아서 푸는것도 좋은 방법인 것 같다. 이제 위상정렬 구현방법은 조금 익숙해 진것 같다.



[문제 링크](https://www.acmicpc.net/problem/1766)
