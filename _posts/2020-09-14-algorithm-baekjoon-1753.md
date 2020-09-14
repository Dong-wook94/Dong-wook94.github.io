---
layout: post
title: "[백준 1753] 최단 경로"
subtitle: "백준 1753 최단 경로"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

방향그래프가 주어지면 주어진 시작점에서 다른 모든 정점으로의 최단 경로를 구하는 프로그램을 작성하시오. 단, 모든 간선의 가중치는 10 이하의 자연수이다.

## 입력

첫째 줄에 정점의 개수 V와 간선의 개수 E가 주어진다. (1≤V≤20,000, 1≤E≤300,000) 모든 정점에는 1부터 V까지 번호가 매겨져 있다고 가정한다. 둘째 줄에는 시작 정점의 번호 K(1≤K≤V)가 주어진다. 셋째 줄부터 E개의 줄에 걸쳐 각 간선을 나타내는 세 개의 정수 (u, v, w)가 순서대로 주어진다. 이는 u에서 v로 가는 가중치 w인 간선이 존재한다는 뜻이다. u와 v는 서로 다르며 w는 10 이하의 자연수이다. 서로 다른 두 정점 사이에 여러 개의 간선이 존재할 수도 있음에 유의한다.

## 출력

첫째 줄부터 V개의 줄에 걸쳐, i번째 줄에 i번 정점으로의 최단 경로의 경로값을 출력한다. 시작점 자신은 0으로 출력하고, 경로가 존재하지 않는 경우에는 INF를 출력하면 된다.

## 예제 입력 1 복사

```
5 6
1
5 1 1
1 2 2
1 3 3
2 3 4
2 4 5
3 4 6
```

## 예제 출력 1 복사

```
0
2
3
7
INF
```

# 내가 생각하는 문제 풀이 포인트

1. dijkstra 문제

   하나의 source 에서 모든 노드에 이르는 path를 구해야 되는 문제 일때 사용되는 알고리즘

   * 원래 학교에서 배울때는 pq를 사용하지 않고 사용했지만 여기서는 pq를 사용했다.

   * ~~~java
     private static void dijkstra(int start){
     
             boolean[] visited = new boolean[V+1];
             PriorityQueue<Node> pq = new PriorityQueue<Node>();
     
             distance[start] = 0;
             pq.add(new Node(start,0));
     
             while(!pq.isEmpty()){
                 int cur = pq.poll().dest;
     
                 if(visited[cur]) continue;
     
                 for(Node node : graph[cur]){
                     if(distance[node.dest] > distance[cur] + node.distance){
                         distance[node.dest] = distance[cur] + node.distance;
                         pq.add(new Node(node.dest, distance[node.dest]));
                     }
                 }
             }
         }
     ~~~

   * 기존  start -> node(dest) 로 기록된 현재까지 최단거리와 start->현재노드 + 현재->dest 를 비교하여 최신화 해준다 

# 코드

~~~java
import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Baekjoon1753 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static int V;
    static int E;
    static ArrayList<Node>[] graph;
    static int[] distance;

    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        V = Integer.parseInt(st.nextToken());
        E = Integer.parseInt(st.nextToken());
        distance = new int[V + 1];
        graph = new ArrayList[V+1];

        int start = Integer.parseInt(br.readLine());


        Arrays.fill(distance,Integer.MAX_VALUE);

        for(int i=1;i<=V;i++){
            graph[i] = new ArrayList<>();
        }

        for (int i = 0; i < E; i++) {
            st = new StringTokenizer(br.readLine());
            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            int w = Integer.parseInt(st.nextToken());
            graph[u].add(new Node(v,w));
        }

        dijkstra(start);

        for(int i=1;i<=V;i++){
            if(distance[i] == Integer.MAX_VALUE){
                bw.write("INF\n");
            }
            else{
                bw.write(distance[i] + "\n");
            }
        }
        bw.flush();
        bw.close();
    }

    private static void dijkstra(int start){

        boolean[] visited = new boolean[V+1];
        PriorityQueue<Node> pq = new PriorityQueue<Node>();

        distance[start] = 0;
        pq.add(new Node(start,0));

        while(!pq.isEmpty()){
            int cur = pq.poll().dest;

            if(visited[cur]) continue;

            for(Node node : graph[cur]){
                if(distance[node.dest] > distance[cur] + node.distance){
                    distance[node.dest] = distance[cur] + node.distance;
                    pq.add(new Node(node.dest, distance[node.dest]));
                }
            }
        }
    }

    static class Node implements Comparable<Node> {
        int dest;
        int distance;

        public Node(int dest, int distance) {
            this.dest = dest;
            this.distance = distance;
        }

        @Override
        public int compareTo(Node o) {
            return this.distance - o.distance;
        }
    }
}

~~~



# 느낀점

다익스트라 플로이드와샬 이제 알고리즘에도 자주 등장하는 개념인것 같다. 연습하자! 

> # 최소 경로 알고리즘들 비교
>
> 1. 벨만 포드
> 2. 다익스트라
> 3. Floyd-Washall
> 4. BFS (간선간의 weight가 없을 때 사용)
>
> ### 유형에 따른 구분
>
> 1. Single-source : 하나의 출발 노드 s로 부터 다른 모든 노드까지의 최단 경로를 찾아라 (**Dijkstra, 벨만 포드 알고리즘**)
> 2. Single-destination : 모든 출발 노드로부터 하나의 목적지 노드 까지의 최단 경로를 찾아라 //**무방향 그래프이면 single-source 문제와 같다**
> 3. Singe-pair : 하나의 출발 노드 -> 하나의 목적적지 노드 // **worst case가 single-source보다 항상 나쁘다.** but 가장 효율성, 실용성 있는 문제
> 4. All-paris : 모든 노드 쌍에 대해서 최단 경로를 찾아라 (**플로이드 알고리즘**)



[문제 링크](https://www.acmicpc.net/problem/1753)

