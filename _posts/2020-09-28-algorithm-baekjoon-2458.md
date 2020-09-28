---
layout: post
title: "[백준 2458] 키 순서"
subtitle: "백준 2458 키 순서"
categories: algorithm
tags: baekjoo java algorithm 
comments: true
---

# 문제설명

## 문제

1번부터 N번까지 번호가 붙여져 있는 학생들에 대하여 두 학생끼리 키를 비교한 결과의 일부가 주어져 있다. 단, N명의 학생들의 키는 모두 다르다고 가정한다. 예를 들어, 6명의 학생들에 대하여 6번만 키를 비교하였고, 그 결과가 다음과 같다고 하자. 

- 1번 학생의 키 < 5번 학생의 키
- 3번 학생의 키 < 4번 학생의 키
- 5번 학생의 키 < 4번 학생의 키
- 4번 학생의 키 < 2번 학생의 키
- 4번 학생의 키 < 6번 학생의 키
- 5번 학생의 키 < 2번 학생의 키

이 비교 결과로부터 모든 학생 중에서 키가 가장 작은 학생부터 자신이 몇 번째인지 알 수 있는 학생들도 있고 그렇지 못한 학생들도 있다는 사실을 아래처럼 그림을 그려 쉽게 확인할 수 있다. a번 학생의 키가 b번 학생의 키보다 작다면, a에서 b로 화살표를 그려서 표현하였다. 

![img](https://www.acmicpc.net/upload/images/ccc.png)

1번은 5번보다 키가 작고, 5번은 4번보다 작기 때문에, 1번은 4번보다 작게 된다. 그러면 1번, 3번, 5번은 모두 4번보다 작게 된다. 또한 4번은 2번과 6번보다 작기 때문에, 4번 학생은 자기보다 작은 학생이 3명이 있고, 자기보다 큰 학생이 2명이 있게 되어 자신의 키가 몇 번째인지 정확히 알 수 있다. 그러나 4번을 제외한 학생들은 자신의 키가 몇 번째인지 알 수 없다. 

학생들의 키를 비교한 결과가 주어질 때, 자신의 키가 몇 번째인지 알 수 있는 학생들이 모두 몇 명인지 계산하여 출력하는 프로그램을 작성하시오.

## 입력

첫째 줄에 학생들의 수 N (2<=N<=500)과 두 학생 키를 비교한 횟수 M (0<=M<=N(N-1)/2)이 주어진다. 다음 M개의 각 줄에는 두 학생의 키를 비교한 결과를 나타내는 두 양의 정수 a와 b가 주어진다. 이는 번호가 a인 학생이 번호가 b인 학생보다 키가 작은 것을 의미한다. 

## 출력

자신이 키가 몇 번째인지 알 수 있는 학생이 모두 몇 명인지를 출력한다. 

## 예제 입력 1 복사

```
6 6
1 5
3 4
5 4
4 2
4 6
5 2
```

## 예제 출력 1 복사

```
1
```

## 내가 생각하는 문제 풀이 포인트

1. 플로이드 와샬을 이용한다. 
2. 인접행렬을 이용하여 모든 값을 구한뒤 센다!

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

플로이드를 알고 접근하면 쉬운문제이다.

[문제 링크](https://www.acmicpc.net/problem/2458)

