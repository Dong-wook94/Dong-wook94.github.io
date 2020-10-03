---
layout: post
title: "[백준 1261] 알고스팟"
subtitle: "백준 1261 알고스팟"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

알고스팟 운영진이 모두 미로에 갇혔다. 미로는 N*M 크기이며, 총 1*1크기의 방으로 이루어져 있다. 미로는 빈 방 또는 벽으로 이루어져 있고, 빈 방은 자유롭게 다닐 수 있지만, 벽은 부수지 않으면 이동할 수 없다.

알고스팟 운영진은 여러명이지만, 항상 모두 같은 방에 있어야 한다. 즉, 여러 명이 다른 방에 있을 수는 없다. 어떤 방에서 이동할 수 있는 방은 상하좌우로 인접한 빈 방이다. 즉, 현재 운영진이 (x, y)에 있을 때, 이동할 수 있는 방은 (x+1, y), (x, y+1), (x-1, y), (x, y-1) 이다. 단, 미로의 밖으로 이동 할 수는 없다.

벽은 평소에는 이동할 수 없지만, 알고스팟의 무기 AOJ를 이용해 벽을 부수어 버릴 수 있다. 벽을 부수면, 빈 방과 동일한 방으로 변한다.

만약 이 문제가 [알고스팟](https://www.algospot.com/)에 있다면, 운영진들은 궁극의 무기 sudo를 이용해 벽을 한 번에 다 없애버릴 수 있지만, 안타깝게도 이 문제는 [Baekjoon Online Judge](https://www.acmicpc.net/)에 수록되어 있기 때문에, sudo를 사용할 수 없다.

현재 (1, 1)에 있는 알고스팟 운영진이 (N, M)으로 이동하려면 벽을 최소 몇 개 부수어야 하는지 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 미로의 크기를 나타내는 가로 크기 M, 세로 크기 N (1 ≤ N, M ≤ 100)이 주어진다. 다음 N개의 줄에는 미로의 상태를 나타내는 숫자 0과 1이 주어진다. 0은 빈 방을 의미하고, 1은 벽을 의미한다.

(1, 1)과 (N, M)은 항상 뚫려있다.

## 출력

첫째 줄에 알고스팟 운영진이 (N, M)으로 이동하기 위해 벽을 최소 몇 개 부수어야 하는지 출력한다.

## 예제 입력 1 복사

```
3 3
011
111
110
```

## 예제 출력 1 복사

```
3
```

## 예제 입력 2 복사

```
4 2
0001
1000
```

## 예제 출력 2 복사

```
0
```

## 예제 입력 3 복사

```
6 6
001111
010000
001111
110001
011010
100010
```

## 예제 출력 3 복사

```
2
```

## 내가 생각하는 문제 풀이 포인트

1. 다익스트라 문제이다. 
   1. 일반적인 bfs와는 조금 다르다.  priority queue 와 다익스트라를 이용한다.
   2. 거리순으로 정렬되는 pq를 이용한다.
   3. 왜 다익스트라?
      1. 현재지점까지오는 최단 방법을 이용하여 다음 거리를 계산하기 위함.



# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Baekjoon1261 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int N,M;
    static int[][] map;
    static int[][] dist;
    static int dirRow[] = {1,0,-1,0};
    static int dirCOl[] = {0,-1,0,1};
    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        M = Integer.parseInt(st.nextToken());
        N = Integer.parseInt(st.nextToken());
        map = new int[N+1][M+1];
        dist = new int[N+1][M+1];
        for(int i=1;i<=N;i++){
            String[] split = br.readLine().split("");
            for(int j=1;j<=M;j++){
                map[i][j] = Integer.parseInt(split[j-1]);
                dist[i][j] = Integer.MAX_VALUE;
            }
        }

        bfs();
        System.out.println(dist[N][M]);
    }

    private static void bfs() {
        PriorityQueue<Pos> pq = new PriorityQueue<>();
        dist[1][1] = 0;
        pq.offer(new Pos(1,1,0));
        while(!pq.isEmpty()){
            Pos cur = pq.poll();
            if(cur.row==N & cur.col==M)
                return;
            for(int i=0;i<4;i++){
                int nextRow = cur.row + dirRow[i];
                int nextCol = cur.col + dirCOl[i];
                if(nextRow<=0 || nextCol<=0 || nextRow>N || nextCol>M)
                    continue;
                int distance;
                if(dist[cur.row][cur.col]==Integer.MAX_VALUE)
                    distance = Integer.MAX_VALUE;
                else
                    distance = dist[cur.row][cur.col] + map[nextRow][nextCol];
                if(distance<dist[nextRow][nextCol]){
                    dist[nextRow][nextCol] = distance;
                    pq.offer(new Pos(nextRow,nextCol,distance));
                }
            }
        }
    }

    static class Pos implements Comparable<Pos>{
        int row;
        int col;
        int dist;

        public Pos(int row, int col, int dist) {
            this.row = row;
            this.col = col;
            this.dist = dist;
        }

        @Override
        public int compareTo(Pos o) {
            return this.dist - o.dist;
        }
    }
}

~~~



# 느낀점

다익스트라 같은 문제를 풀때 자바에서 주의해야될 점이 Integer.MAXVALUE 를 사용시 더하기 연산에서 범위 초과로 인해 똥값이 들어갈 수 있다. MAX 체크를 통해 구분해서 MAX 일땐 따로 구분해준다. 이번에는 그동안 하도 데여서 바로 적용하였다.

[문제 링크](https://www.acmicpc.net/problem/1261)

