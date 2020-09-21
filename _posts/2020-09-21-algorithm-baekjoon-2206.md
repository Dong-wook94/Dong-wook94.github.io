---
layout: post
title: "[백준 2206] 벽 부수고 이동하기"
subtitle: "백준 2206 벽 부수고 이동하기"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

N×M의 행렬로 표현되는 맵이 있다. 맵에서 0은 이동할 수 있는 곳을 나타내고, 1은 이동할 수 없는 벽이 있는 곳을 나타낸다. 당신은 (1, 1)에서 (N, M)의 위치까지 이동하려 하는데, 이때 최단 경로로 이동하려 한다. 최단경로는 맵에서 가장 적은 개수의 칸을 지나는 경로를 말하는데, 이때 시작하는 칸과 끝나는 칸도 포함해서 센다.

만약에 이동하는 도중에 한 개의 벽을 부수고 이동하는 것이 좀 더 경로가 짧아진다면, 벽을 한 개 까지 부수고 이동하여도 된다.

맵이 주어졌을 때, 최단 경로를 구해 내는 프로그램을 작성하시오.

## 입력

첫째 줄에 N(1 ≤ N ≤ 1,000), M(1 ≤ M ≤ 1,000)이 주어진다. 다음 N개의 줄에 M개의 숫자로 맵이 주어진다. (1, 1)과 (N, M)은 항상 0이라고 가정하자.

## 출력

첫째 줄에 최단 거리를 출력한다. 불가능할 때는 -1을 출력한다.

## 예제 입력 1 복사

```
6 4
0100
1110
1000
0000
0111
0000
```

## 예제 출력 1 복사

```
15
```

## 예제 입력 2 복사

```
4 4
0111
1111
1111
1110
```

## 예제 출력 2 복사

```
-1
```

# 내가 생각하는 문제 풀이 포인트

1. bfs 문제이다. 

   단순히 bfs로 생각해선 안되고 벽을 1회 부쉈을때와 안부쉈을때 두가지의 경우로 방문체크를 한다. 

   

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Baekjoon2206 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int N, M;
    static int[][] map;
    static int[] dirRow = {1, 0, -1, 0};
    static int[] dirCol = {0, -1, 0, 1};
    static int minDist = Integer.MAX_VALUE;
    static int[][] minDistMap;

    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        map = new int[N + 1][M + 1];
        minDistMap = new int[N + 1][M + 1];
        for (int i = 1; i <= N; i++) {
            String[] token = br.readLine().split("");
            for (int j = 1; j <= M; j++) {
                int input = Integer.parseInt(token[j - 1]);
                map[i][j] = input;
                minDistMap[i][j] = Integer.MAX_VALUE;
            }
        }
        bfs();
        if (minDist == Integer.MAX_VALUE)
            System.out.println(-1);
        else
            System.out.println(minDist);
    }

    private static void bfs() {
        Queue<Pos> q = new LinkedList<>();
        q.offer(new Pos(1, 1, 1, 0));
        boolean[][][] visited = new boolean[N + 1][M + 1][2];
        visited[1][1][0] = true;
        while (!q.isEmpty()) {
            Pos curPos = q.poll();

            if (curPos.dist >= minDist)
                break;
            if (curPos.row == N && curPos.col == M) {
                minDist = Math.min(minDist, curPos.dist);
                break;
            }
            for (int d = 0; d < 4; d++) {
                int nextRow = dirRow[d] + curPos.row;
                int nextCol = dirCol[d] + curPos.col;
                if (!isRange(nextRow, nextCol))
                    continue;
                if (isWall(nextRow, nextCol)) {
                    if (curPos.brokeCnt > 0)
                        continue;
                    else {
                        visited[nextRow][nextCol][1] = true;
                        q.offer(new Pos(nextRow, nextCol, curPos.dist + 1, 1));
                        continue;
                    }
                }
                if (!visited[nextRow][nextCol][curPos.brokeCnt]) {
                    visited[nextRow][nextCol][curPos.brokeCnt] = true;
                    q.offer(new Pos(nextRow, nextCol, curPos.dist + 1, curPos.brokeCnt));
                }
            }

        }
    }

    private static boolean isWall(int nextRow, int nextCol) {
        if (map[nextRow][nextCol] == 1)
            return true;
        return false;
    }

    private static boolean isRange(int nextRow, int nextCol) {
        if (nextRow < 1 || nextCol < 1 || nextRow > N || nextCol > M)
            return false;
        return true;
    }

    static class Pos {
        int row;
        int col;
        int dist;
        int brokeCnt;

        public Pos(int row, int col) {
            this.row = row;
            this.col = col;
            this.dist = 0;
        }

        public Pos(int row, int col, int dist, int brokeCnt) {
            this.row = row;
            this.col = col;
            this.dist = dist;
            this.brokeCnt = brokeCnt;
        }
    }
}

~~~



# 느낀점

한번 시간초과를 겪었다. 처음에는 1개수만큼 bfs를 돌렸었다.. 시간초과가 날지 몰랐다. 생각해보니 그러면 최악의경우 n의 4제곱까지 가기때문이다. 

먼저 시간복잡도부터 생각해보고 풀어야겠다. 



[문제 링크](https://www.acmicpc.net/problem/2206)

