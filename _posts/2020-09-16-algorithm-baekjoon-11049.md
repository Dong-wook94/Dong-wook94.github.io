---
layout: post
title: "[백준 11049] 행렬 곱셈 순서"
subtitle: "백준 11049 행렬 곱셈 순서"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

크기가 N×M인 행렬 A와 M×K인 B를 곱할 때 필요한 곱셈 연산의 수는 총 N×M×K번이다. 행렬 N개를 곱하는데 필요한 곱셈 연산의 수는 행렬을 곱하는 순서에 따라 달라지게 된다.

예를 들어, A의 크기가 5×3이고, B의 크기가 3×2, C의 크기가 2×6인 경우에 행렬의 곱 ABC를 구하는 경우를 생각해보자.

- AB를 먼저 곱하고 C를 곱하는 경우 (AB)C에 필요한 곱셈 연산의 수는 5×3×2 + 5×2×6 = 30 + 60 = 90번이다.
- BC를 먼저 곱하고 A를 곱하는 경우 A(BC)에 필요한 곱셈 연산의 수는 3×2×6 + 5×3×6 = 36 + 90 = 126번이다.

같은 곱셈이지만, 곱셈을 하는 순서에 따라서 곱셈 연산의 수가 달라진다.

행렬 N개의 크기가 주어졌을 때, 모든 행렬을 곱하는데 필요한 곱셈 연산 횟수의 최솟값을 구하는 프로그램을 작성하시오. 입력으로 주어진 행렬의 순서를 바꾸면 안 된다.

## 입력

첫째 줄에 행렬의 개수 N(1 ≤ N ≤ 500)이 주어진다.

둘째 줄부터 N개 줄에는 행렬의 크기 r과 c가 주어진다. (1 ≤ r, c ≤ 500)

항상 순서대로 곱셈을 할 수 있는 크기만 입력으로 주어진다.

## 출력

첫째 줄에 입력으로 주어진 행렬을 곱하는데 필요한 곱셈 연산의 최솟값을 출력한다. 정답은 231-1 보다 작거나 같은 자연수이다. 또한, 최악의 순서로 연산해도 연산 횟수가 231-1보다 작거나 같다.

## 예제 입력 1 복사

```
3
5 3
3 2
2 6
```

## 예제 출력 1 복사

```
90
```

# 내가 생각하는 문제 풀이 포인트

1. dp

   1. Chained Matrix 개념이다. 

   2. ~~~java
      int cnt = dp[start][i] + dp[i+1][end] + matrix[start][0]*matrix[i][1]*matrix[end][1];
                  dp[start][end] = Math.min(cnt,dp[start][end]);
      ~~~

      위의 식을 세우는 과정이 조금 까다로웠다. 

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Baekjoon11049 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int[][] dp;
    static int[][] matrix;
    public static void main(String[] args) throws IOException {
        int N = Integer.parseInt(br.readLine());
        dp = new int[N][N];
        matrix = new int[N][2];
        for(int i=0;i<N;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            matrix[i][0] = Integer.parseInt(st.nextToken());
            matrix[i][1] = Integer.parseInt(st.nextToken());
        }


        for(int i=0;i<N;i++){
            for(int j=0;j<N;j++){
                if(i==j)
                    dp[i][j]=0;
                else
                    dp[i][j]=Integer.MAX_VALUE;
            }
        }

        for(int d=1;d<N;d++){
            for(int i=0;i+d<N;i++){
                setMinMultipleCnt(i,i+d);
            }
        }
        System.out.println(dp[0][N-1]);
    }

    private static void setMinMultipleCnt(int start, int end) {
        for(int i=start;i<end;i++){
            int cnt = dp[start][i] + dp[i+1][end] + matrix[start][0]*matrix[i][1]*matrix[end][1];
            dp[start][end] = Math.min(cnt,dp[start][end]);
        }
    }
}

~~~



# 느낀점

dp는 식을 세우는 부분이 좀 까다롭다.. 매번

알고리즘 수업시간에 배운문제라 기억을 더듬으며 풀었다. 



[문제 링크](https://www.acmicpc.net/problem/11049)

