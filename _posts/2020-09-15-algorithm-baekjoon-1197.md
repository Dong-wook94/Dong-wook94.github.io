---
layout: post
title: "[백준 1197] 최소 스패닝 트리"
subtitle: "백준 1197 최소 스패닝 트리"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

그래프가 주어졌을 때, 그 그래프의 최소 스패닝 트리를 구하는 프로그램을 작성하시오.

최소 스패닝 트리는, 주어진 그래프의 모든 정점들을 연결하는 부분 그래프 중에서 그 가중치의 합이 최소인 트리를 말한다.

## 입력

첫째 줄에 정점의 개수 V(1 ≤ V ≤ 10,000)와 간선의 개수 E(1 ≤ E ≤ 100,000)가 주어진다. 다음 E개의 줄에는 각 간선에 대한 정보를 나타내는 세 정수 A, B, C가 주어진다. 이는 A번 정점과 B번 정점이 가중치 C인 간선으로 연결되어 있다는 의미이다. C는 음수일 수도 있으며, 절댓값이 1,000,000을 넘지 않는다.

그래프의 정점은 1번부터 V번까지 번호가 매겨져 있고, 임의의 두 정점 사이에 경로가 있다. 최소 스패닝 트리의 가중치가 -2,147,483,648보다 크거나 같고, 2,147,483,647보다 작거나 같은 데이터만 입력으로 주어진다.

## 출력

첫째 줄에 최소 스패닝 트리의 가중치를 출력한다.

## 예제 입력 1 복사

```
3 3
1 2 1
2 3 2
1 3 3
```

## 예제 출력 1 복사

```
3
```

# 내가 생각하는 문제 풀이 포인트

크루스칼 알고리즘을 사용한다.

1. 엣지를 가중치기준으로 오름차순 정렬을 한다.
2. union-find를 이용한다.
   1. union(x,y)
      * x가 속한 집합과 y가 속한 집합을 합친다.
   2. find(x)
      * x가 속한 집합의 대표값을 반환한다. x가 어떤 집합에 속해 있는지 찾는 연산.

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;

public class Baekjoon1197 {
    static int V;
    static int E;
    static int[] parent;
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static ArrayList<Edge> edgeList;

    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        V = Integer.parseInt(st.nextToken());
        E = Integer.parseInt(st.nextToken());
        edgeList = new ArrayList<>();

        for (int i = 0; i < E; i++) {
            st = new StringTokenizer(br.readLine());
            int v1 = Integer.parseInt(st.nextToken());
            int v2 = Integer.parseInt(st.nextToken());
            int cost = Integer.parseInt(st.nextToken());
            edgeList.add(new Edge(v1,v2,cost));
        }
        parent = new int[V+1];
        for(int i=1;i<=V;i++){
            parent[i] = i;
        }

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
            if(this.cost < o.cost)
                return -1;
            else if(this.cost == o.cost)
                return 0;
            else
                return 1;
        }
    }


}
~~~



# 느낀점

크루스칼 연습 문제다. 



[문제 링크](https://www.acmicpc.net/problem/1197)

