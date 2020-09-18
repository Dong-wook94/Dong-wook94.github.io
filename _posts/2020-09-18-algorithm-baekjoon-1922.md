---
layout: post
title: "[백준 1922] 네트워크 연결"
subtitle: "백준 1922 네트워크 연결"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

도현이는 컴퓨터와 컴퓨터를 모두 연결하는 네트워크를 구축하려 한다. 하지만 아쉽게도 허브가 있지 않아 컴퓨터와 컴퓨터를 직접 연결하여야 한다. 그런데 모두가 자료를 공유하기 위해서는 모든 컴퓨터가 연결이 되어 있어야 한다. (a와 b가 연결이 되어 있다는 말은 a에서 b로의 경로가 존재한다는 것을 의미한다. a에서 b를 연결하는 선이 있고, b와 c를 연결하는 선이 있으면 a와 c는 연결이 되어 있다.)

그런데 이왕이면 컴퓨터를 연결하는 비용을 최소로 하여야 컴퓨터를 연결하는 비용 외에 다른 곳에 돈을 더 쓸 수 있을 것이다. 이제 각 컴퓨터를 연결하는데 필요한 비용이 주어졌을 때 모든 컴퓨터를 연결하는데 필요한 최소비용을 출력하라. 모든 컴퓨터를 연결할 수 없는 경우는 없다.

## 입력

첫째 줄에 컴퓨터의 수 N (1 ≤ N ≤ 1000)가 주어진다.

둘째 줄에는 연결할 수 있는 선의 수 M (1 ≤ M ≤ 100,000)가 주어진다.

셋째 줄부터 M+2번째 줄까지 총 M개의 줄에 각 컴퓨터를 연결하는데 드는 비용이 주어진다. 이 비용의 정보는 세 개의 정수로 주어지는데, 만약에 a b c 가 주어져 있다고 하면 a컴퓨터와 b컴퓨터를 연결하는데 비용이 c (1 ≤ c ≤ 10,000) 만큼 든다는 것을 의미한다. a와 b는 같을 수도 있다.

## 출력

모든 컴퓨터를 연결하는데 필요한 최소비용을 첫째 줄에 출력한다.

## 예제 입력 1 복사

```
6
9
1 2 5
1 3 4
2 3 2
2 4 7
3 4 6
3 5 11
4 5 3
4 6 8
5 6 8
```

## 예제 출력 1 복사

```
23
```

# 내가 생각하는 문제 풀이 포인트

1. union-find 문제이다.
2. [유사한 문제](https://dong-wook94.github.io/algorithm/2020/09/15/algorithm-baekjoon-1197/)



# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;

public class Baekjoon1922 {
    static int N;
    static int M;
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static ArrayList<Edge> edgeList = new ArrayList<>();
    static int[] parent;

    public static void main(String[] args) throws IOException {
        N = Integer.parseInt(br.readLine());
        M = Integer.parseInt(br.readLine());
        parent = new int[N+1];
        for(int i=1;i<=N;i++){
            parent[i] = i;
        }
        for (int i = 0; i < M; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int v1 = Integer.parseInt(st.nextToken());
            int v2 = Integer.parseInt(st.nextToken());
            int cost = Integer.parseInt(st.nextToken());
            edgeList.add(new Edge(v1, v2, cost));
        }
        Collections.sort(edgeList);
        //edgeList.forEach(edge -> System.out.println(edge.v1 + "," + edge.v2 + "," + edge.cost));

        Collections.sort(edgeList);

        int sum = 0;

        for(int i=0; i< edgeList.size();i++){
            Edge edge = edgeList.get(i);
            if(!isSameParent(edge.v1,edge.v2)){
                sum += edge.cost;
                union(edge.v1,edge.v2);
            }
        }
        System.out.println(sum);
    }

    private static void union(int x, int y) {
        x = find(x); //x의 부모 찾기
        y = find(y); //y의 부모 찾기
        if (x != y) { //x의 부모와 y의 부모가 같지 않을때
            parent[y] = x;
        }
    }

    private static int find(int x) {
        if (parent[x] == x) {
            return x;
        }
        return parent[x] = find(parent[x]);
    }

    private static boolean isSameParent(int x, int y) {
        x = find(x);
        y = find(y);
        if (x == y)
            return true;
        return false;
    }

    static class Edge implements Comparable<Edge> {
        int v1;
        int v2;
        int cost;

        public Edge(int v1, int v2, int cost) {
            this.v1 = v1;
            this.v2 = v2;
            this.cost = cost;
        }

        @Override
        public int compareTo(Edge o) {
            return this.cost - o.cost;
        }
    }
}

~~~



# 느낀점

[백준 1197 최소 스패닝 트리](https://www.acmicpc.net/problem/1197)와 유사하다.



[문제 링크](https://www.acmicpc.net/problem/1922)

