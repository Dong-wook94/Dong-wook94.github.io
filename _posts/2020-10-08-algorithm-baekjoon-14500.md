---
layout: post
title: "[백준 14500] 테트로미노"
subtitle: "삼성 sw 역량테스트 테트로미노"
categories: algorithm
tags: baekjoon java algorithm 역량테스트 삼성기출
comments: true
---

# 문제설명

## 문제

폴리오미노란 크기가 1×1인 정사각형을 여러 개 이어서 붙인 도형이며, 다음과 같은 조건을 만족해야 한다.

- 정사각형은 서로 겹치면 안 된다.
- 도형은 모두 연결되어 있어야 한다.
- 정사각형의 변끼리 연결되어 있어야 한다. 즉, 꼭짓점과 꼭짓점만 맞닿아 있으면 안 된다.

정사각형 4개를 이어 붙인 폴리오미노는 테트로미노라고 하며, 다음과 같은 5가지가 있다.

[![img](https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/14500/1.png)](https://commons.wikimedia.org/wiki/File:All_5_free_tetrominoes.svg)

아름이는 크기가 N×M인 종이 위에 테트로미노 하나를 놓으려고 한다. 종이는 1×1 크기의 칸으로 나누어져 있으며, 각각의 칸에는 정수가 하나 쓰여 있다.

테트로미노 하나를 적절히 놓아서 테트로미노가 놓인 칸에 쓰여 있는 수들의 합을 최대로 하는 프로그램을 작성하시오.

테트로미노는 반드시 한 정사각형이 정확히 하나의 칸을 포함하도록 놓아야 하며, 회전이나 대칭을 시켜도 된다.

## 입력

첫째 줄에 종이의 세로 크기 N과 가로 크기 M이 주어진다. (4 ≤ N, M ≤ 500)

둘째 줄부터 N개의 줄에 종이에 쓰여 있는 수가 주어진다. i번째 줄의 j번째 수는 위에서부터 i번째 칸, 왼쪽에서부터 j번째 칸에 쓰여 있는 수이다. 입력으로 주어지는 수는 1,000을 넘지 않는 자연수이다.

## 출력

첫째 줄에 테트로미노가 놓인 칸에 쓰인 수들의 합의 최댓값을 출력한다.

## 예제 입력 1 복사

```
5 5
1 2 3 4 5
5 4 3 2 1
2 3 4 5 6
6 5 4 3 2
1 2 1 2 1
```

## 예제 출력 1 복사

```
19
```

## 예제 입력 2 복사

```
4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
```

## 예제 출력 2 복사

```
20
```

## 예제 입력 3 복사

```
4 10
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1
```

## 예제 출력 3 복사

```
7
```

## 내가 생각하는 문제 풀이 포인트

1. ㅗ 모양을 예외 처리한다. 나머지는 dfs로 구현 가능한 모양이다.

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Baekjoon14500 {
    static int N,M;
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int[][] map;
    static int result=0;
    static int[] dirRow={1,0,-1,0};
    static int[] dirCol={0,-1,0,1};
    static boolean[][] visited;
    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        map = new int[N][M];
        visited = new boolean[N][M];

        for(int i=0;i<N;i++){
            st = new StringTokenizer(br.readLine());
            for(int j=0;j<M;j++){
                map[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        for(int i=0;i<N;i++){
            for(int j=0;j<M;j++){
                visited[i][j] = true;
                dfs(i,j,1,map[i][j]);
                visited[i][j] = false;
            }
        }
        exception_shape();
        System.out.println(result);
    }

    private static void exception_shape() {//ㅗ모양
        int sum;
        //ㅏ
        for (int i = 0; i < N - 2; i++) {

            for (int j = 0; j < M - 1; j++) {
                sum = 0;
                sum += map[i][j];
                sum += map[i + 1][j];
                sum += map[i + 2][j];
                sum += map[i + 1][j + 1];
                result = Math.max(sum, result);
                sum = 0;
                sum += map[i + 1][j];
                sum += map[i][j + 1];
                sum += map[i + 1][j + 1];
                sum += map[i + 2][j + 1];
                result = Math.max(sum, result);
            }
        }
        for (int i = 0; i < N - 1; i++) {

            for (int j = 0; j < M - 2; j++) {
                sum = 0;
                sum += map[i][j + 1];
                sum += map[i + 1][j];
                sum += map[i + 1][j + 1];
                sum += map[i + 1][j + 2];
                result = Math.max(sum, result);
                sum = 0;
                sum += map[i][j];
                sum += map[i][j + 1];
                sum += map[i][j + 2];
                sum += map[i + 1][j + 1];
                result = Math.max(sum, result);
            }
        }
    }
    private static void dfs(int row,int col,int depth,int sum) {
        if(depth>=4){
            result = Math.max(result,sum);
            return;
        }
        for(int i=0;i<4;i++){
            int nextRow = row + dirRow[i];
            int nextCol = col + dirCol[i];
            if(nextRow<0||nextCol<0||nextRow>=N||nextCol>=M||visited[nextRow][nextCol])
                continue;
            visited[nextRow][nextCol] = true;
            dfs(nextRow,nextCol,depth+1,sum+map[nextRow][nextCol]);
            visited[nextRow][nextCol] = false;
        }
    }
}

~~~



# 느낀점

테트리스 모양을 dfs로 이용하는 건 신박하다. 예외도 생각해야되는 조금 귀찮음이 추가된 문제.



[문제 링크](https://www.acmicpc.net/problem/14500)

