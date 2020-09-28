---
layout: post
title: "[백준 1967] 트리의 지름"
subtitle: "백준 1967 트리의 지름"
categories: algorithm
tags: baekjoo java algorithm 
comments: true
---

# 문제설명

## 문제

트리(tree)는 사이클이 없는 무방향 그래프이다. 트리에서는 어떤 두 노드를 선택해도 둘 사이에 경로가 항상 하나만 존재하게 된다. 트리에서 어떤 두 노드를 선택해서 양쪽으로 쫙 당길 때, 가장 길게 늘어나는 경우가 있을 것이다. 이럴 때 트리의 모든 노드들은 이 두 노드를 지름의 끝 점으로 하는 원 안에 들어가게 된다.

![img](https://www.acmicpc.net/JudgeOnline/upload/201007/ttrrtrtr.png)

이런 두 노드 사이의 경로의 길이를 트리의 지름이라고 한다. 정확히 정의하자면 트리에 존재하는 모든 경로들 중에서 가장 긴 것의 길이를 말한다.

입력으로 루트가 있는 트리를 가중치가 있는 간선들로 줄 때, 트리의 지름을 구해서 출력하는 프로그램을 작성하시오. 아래와 같은 트리가 주어진다면 트리의 지름은 45가 된다.

![img](https://www.acmicpc.net/JudgeOnline/upload/201007/tttttt.png)

 

## 입력

파일의 첫 번째 줄은 노드의 개수 n(1 ≤ n ≤ 10,000)이다. 둘째 줄부터 n-1개의 줄에 각 간선에 대한 정보가 들어온다. 간선에 대한 정보는 세 개의 정수로 이루어져 있다. 첫 번째 정수는 간선이 연결하는 두 노드 중 부모 노드의 번호를 나타내고, 두 번째 정수는 자식 노드를, 세 번째 정수는 간선의 가중치를 나타낸다. 간선에 대한 정보는 부모 노드의 번호가 작은 것이 먼저 입력되고, 부모 노드의 번호가 같으면 자식 노드의 번호가 작은 것이 먼저 입력된다. 루트 노드의 번호는 항상 1이라고 가정하며, 간선의 가중치는 100보다 크지 않은 양의 정수이다.

## 출력

첫째 줄에 트리의 지름을 출력한다.

## 예제 입력 1 복사

```
12
1 2 3
1 3 2
2 4 5
3 5 11
3 6 9
4 7 1
4 8 7
5 9 15
5 10 4
6 11 6
6 12 10
```

## 예제 출력 1 복사

```
45
```

## 내가 생각하는 문제 풀이 포인트

1. dfs 를 이용하여 루트노드에서 가장 먼 노드를 찾는다.
2. 그리고 그 노드로부터 가장 먼노드를 다시 찾는다. 그 거리가 트리의 지름이다.

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Baekjoon1967 {
    static int N;
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static ArrayList<Node>[] graph;
    static boolean[] visited;
    static int maxDist;
    static int maxDistNodeIdx;

    public static void main(String[] args) throws IOException {
        N = Integer.parseInt(br.readLine());
        graph = new ArrayList[N+1];
        for(int i=1;i<=N;i++){
            graph[i] = new ArrayList<>();
        }
        for(int i=0;i<N-1;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int c = Integer.parseInt(st.nextToken());
            graph[a].add(new Node(b,c));
            graph[b].add(new Node(a,c));
        }

        visited = new boolean[N+1];
        visited[1] = true;
        maxDist = 0;
        maxDistNodeIdx = 0;
        dfs(0,1);

        visited = new boolean[N+1];
        visited[maxDistNodeIdx] =true;
        maxDist = 0;
        dfs(0,maxDistNodeIdx);
        System.out.println(maxDist);
    }

    private static void dfs(int dist,int idx) {
        for(Node node : graph[idx]){
            if(!visited[node.dest]){
                visited[node.dest] = true;
                if(maxDist <dist+node.dist){
                    maxDist = dist+node.dist;
                    maxDistNodeIdx = node.dest;
                }
                dfs(dist + node.dist,node.dest);
            }
        }
    }


    static class Node{
        int dest;
        int dist;

        public Node(int dest, int weight) {
            this.dest = dest;
            this.dist = weight;
        }
    }
}

~~~



# 느낀점

유사한 문제를 푼 경험이 있어서 쉽게 풀었다.

[문제 링크](https://www.acmicpc.net/problem/1967)

