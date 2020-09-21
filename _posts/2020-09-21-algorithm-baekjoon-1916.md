---
layout: post
title: "[백준 1916] 최소비용 구하기"
subtitle: "백준 1916 최소비용 구하기"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 입력

첫째 줄에 도시의 개수 N(1 ≤ N ≤ 1,000)이 주어지고 둘째 줄에는 버스의 개수 M(1 ≤ M ≤ 100,000)이 주어진다. 그리고 셋째 줄부터 M+2줄까지 다음과 같은 버스의 정보가 주어진다. 먼저 처음에는 그 버스의 출발 도시의 번호가 주어진다. 그리고 그 다음에는 도착지의 도시 번호가 주어지고 또 그 버스 비용이 주어진다. 버스 비용은 0보다 크거나 같고, 100,000보다 작은 정수이다.

그리고 M+3째 줄에는 우리가 구하고자 하는 구간 출발점의 도시번호와 도착점의 도시번호가 주어진다. 출발점에서 도착점을 갈 수 있는 경우만 입력으로 주어진다.

## 출력

첫째 줄에 출발 도시에서 도착 도시까지 가는데 드는 최소 비용을 출력한다.

## 예제 입력 1 복사

```
5
8
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
1 5
```

## 예제 출력 1 복사

```
4
```

# 내가 생각하는 문제 풀이 포인트

1. 다익스트라 문제
   1. pq를 이용한다.

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Baekjoon1916 {
    static int N,M;
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static ArrayList<Node>[] graph;
    static int[] distance;

    public static void main(String[] args) throws IOException {
        N = Integer.parseInt(br.readLine());
        M = Integer.parseInt(br.readLine());
        graph = new ArrayList[N+1];
        distance = new int[N+1];

        Arrays.fill(distance,Integer.MAX_VALUE);
        for(int i=1;i<=N;i++){
            graph[i] = new ArrayList<>();
        }
        for(int i=0;i<M;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int src = Integer.parseInt(st.nextToken());
            int dest = Integer.parseInt(st.nextToken());
            int dist = Integer.parseInt(st.nextToken());
            graph[src].add(new Node(dest,dist));
        }
        StringTokenizer st = new StringTokenizer(br.readLine());
        int start = Integer.parseInt(st.nextToken());
        int end = Integer.parseInt(st.nextToken());

        dijkstra(start);

        System.out.println(distance[end]);
    }

    private static void dijkstra(int start) {
        distance[start] = 0;
        PriorityQueue<Node> pq = new PriorityQueue<>();

        pq.add(new Node(start,0));

        while(!pq.isEmpty()){
            int cur = pq.poll().dest;

            for(Node node : graph[cur]){
                int dist = distance[cur] + node.dist;
                if(distance[node.dest] > dist){
                    distance[node.dest] = dist;
                    pq.add(new Node(node.dest, distance[node.dest]));
                }
            }

        }

    }

    static class Node implements Comparable<Node>{
        int dest;
        int dist;

        public Node(int dest, int dist) {
            this.dest = dest;
            this.dist = dist;
        }

        @Override
        public String toString() {
            return "Node{" +
                    "dest=" + dest +
                    ", dist=" + dist +
                    '}';
        }

        @Override
        public int compareTo(Node o) {//오름차
            return this.dist - o.dist;
        }
    }
}

~~~



# 느낀점

다익스트라 연습으로 최고의 문제이다. 



[문제 링크](https://www.acmicpc.net/problem/1916)

