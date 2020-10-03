---
layout: post
title: "[백준 11725] 트리의 부모 찾기"
subtitle: "백준 11725 트리의 부모 찾기"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

루트 없는 트리가 주어진다. 이때, 트리의 루트를 1이라고 정했을 때, 각 노드의 부모를 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 노드의 개수 N (2 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N-1개의 줄에 트리 상에서 연결된 두 정점이 주어진다.

## 출력

첫째 줄부터 N-1개의 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력한다.

## 예제 입력 1 복사

```
7
1 6
6 3
3 5
4 1
2 4
4 7
```

## 예제 출력 1 복사

```
4
6
1
3
1
4
```

## 예제 입력 2 복사

```
12
1 2
1 3
2 4
3 5
3 6
4 7
4 8
5 9
5 10
6 11
6 12
```

## 예제 출력 2 복사

```
1
1
2
3
3
4
4
5
5
6
6
```

## 내가 생각하는 문제 풀이 포인트

1. bfs 문제이다.
   1. 방문체크하고 연결된 그래프에서 방문하지않은곳은 자식이다.



# 코드

~~~java
import java.io.*;
import java.util.*;

public class Baekjoon11725 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static ArrayList<Integer>[] graph;
    static int[] parents;
    static boolean[] visited;

    public static void main(String[] args) throws IOException {
        int N = Integer.parseInt(br.readLine());
        graph = new ArrayList[N+1];
        visited = new boolean[N+1];
        parents = new int[N+1];
        for(int i=1;i<=N;i++){
            graph[i] = new ArrayList<>();
        }
        for (int i = 0; i < N - 1; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            graph[a].add(b);
            graph[b].add(a);
        }

        bfs();

        for(int i=2;i<=N;i++){
            bw.write(parents[i]+"\n");
        }
        bw.flush();
    }

    private static void bfs(){
        Queue<Integer> q = new LinkedList<>();
        q.offer(1);
        visited[1] = true;

        while(!q.isEmpty()){
            int cur = q.poll();
            for(int next : graph[cur]){
                if(!visited[next]){
                    visited[next] = true;
                    parents[next] = cur;
                    q.offer(next);
                }
            }
        }
    }
}

~~~



# 느낀점

bfs 정석 문제였다.

[문제 링크](https://www.acmicpc.net/problem/11725)

