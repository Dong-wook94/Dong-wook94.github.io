---
layout: post
title: "[백준 11404] 플로이드"
subtitle: "백준 11404 플로이드"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

n(1 ≤ n ≤ 100)개의 도시가 있다. 그리고 한 도시에서 출발하여 다른 도시에 도착하는 m(1 ≤ m ≤ 100,000)개의 버스가 있다. 각 버스는 한 번 사용할 때 필요한 비용이 있다.

모든 도시의 쌍 (A, B)에 대해서 도시 A에서 B로 가는데 필요한 비용의 최솟값을 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 도시의 개수 n(1 ≤ n ≤ 100)이 주어지고 둘째 줄에는 버스의 개수 m(1 ≤ m ≤ 100,000)이 주어진다. 그리고 셋째 줄부터 m+2줄까지 다음과 같은 버스의 정보가 주어진다. 먼저 처음에는 그 버스의 출발 도시의 번호가 주어진다. 버스의 정보는 버스의 시작 도시 a, 도착 도시 b, 한 번 타는데 필요한 비용 c로 이루어져 있다. 시작 도시와 도착 도시가 같은 경우는 없다. 비용은 100,000보다 작거나 같은 자연수이다.

시작 도시와 도착 도시를 연결하는 노선은 하나가 아닐 수 있다.

## 출력

n개의 줄을 출력해야 한다. i번째 줄에 출력하는 j번째 숫자는 도시 i에서 j로 가는데 필요한 최소 비용이다. 만약, i에서 j로 갈 수 없는 경우에는 그 자리에 0을 출력한다.

## 예제 입력 1 복사

```
5
14
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
3 5 10
3 1 8
1 4 2
5 1 7
3 4 2
5 2 4
```

## 예제 출력 1 복사

```
0 2 3 1 4
12 0 15 2 5
8 5 0 1 1
10 7 13 0 3
7 4 10 6 0
```

# 내가 생각하는 문제 풀이 포인트

1. 플로이드 와샬 알고리즘을 사용한다.

   1. 모든 src to 모든 dest 일때 사용.

2. `"시작 도시와 도착 도시를 연결하는 노선은 하나가 아닐 수 있다."` 라는 조건때문에 무작정 입력하지말고 가장 작은 것으로 저장한다.

   

# 코드

~~~java
import java.io.*;
import java.util.StringTokenizer;

public class Baekjoon11404 {
    static int N,M;
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static int[][] dist;
    static final int MAX_COST = 987654321;
    public static void main(String[] args) throws IOException {
        N = Integer.parseInt(br.readLine());
        M = Integer.parseInt(br.readLine());
        dist = new int[N+1][N+1];
        for(int i=1;i<=N;i++){
            for(int j=1;j<=N;j++){
                dist[i][j] = MAX_COST;
            }
        }
        for(int i=0;i<M;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int src = Integer.parseInt(st.nextToken());
            int dest = Integer.parseInt(st.nextToken());
            int cost = Integer.parseInt(st.nextToken());
            if(dist[src][dest]>cost)
                dist[src][dest] = cost;
        }

        floydWarshall();

        for(int i=1;i<=N;i++) {
            for (int j = 1; j <= N; j++) {
                if(dist[i][j]==MAX_COST)
                    bw.write(0+" ");
                else
                    bw.write(dist[i][j]+" ");
            }
            bw.write("\n");
        }
        bw.flush();
    }

    public static void floydWarshall() {
        for(int k=1;k<=N;k++){
            for(int i=1;i<=N;i++){
                for(int j=1;j<=N;j++){
                    if(i!=j)
                        dist[i][j] = Math.min(dist[i][j],dist[i][k] + dist[k][j]);
                }
            }
        }
    }
}

~~~



# 느낀점

깔끔한 문제였다. 이제 플로이드 와샬은 왠만해선 기억하고 풀것 같다.



[문제 링크](https://www.acmicpc.net/problem/11404)

