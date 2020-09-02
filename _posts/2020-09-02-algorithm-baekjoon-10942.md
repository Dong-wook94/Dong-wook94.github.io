---
layout: post
title: "[백준 10942] 펠린드롬?"
categories: algorithm
tags: baekjoon java algorithm dp dynamic-programming
comments: true
---

## 문제설명

명우는 홍준이와 함께 팰린드롬 놀이를 해보려고 한다.

먼저, 홍준이는 자연수 N개를 칠판에 적는다. 그 다음, 명우에게 질문을 총 M번 한다.

각 질문은 두 정수 S와 E(1 ≤ S ≤ E ≤ N)로 나타낼 수 있으며, S번째 수부터 E번째 까지 수가 팰린드롬을 이루는지를 물어보며, 명우는 각 질문에 대해 팰린드롬이다 또는 아니다를 말해야 한다.

예를 들어, 홍준이가 칠판에 적은 수가 1, 2, 1, 3, 1, 2, 1라고 하자.

- S = 1, E = 3인 경우 1, 2, 1은 팰린드롬이다.
- S = 2, E = 5인 경우 2, 1, 3, 1은 팰린드롬이 아니다.
- S = 3, E = 3인 경우 1은 팰린드롬이다.
- S = 5, E = 7인 경우 1, 2, 1은 팰린드롬이다.

자연수 N개와 질문 M개가 모두 주어졌을 때, 명우의 대답을 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 수열의 크기 N (1 ≤ N ≤ 2,000)이 주어진다.

둘째 줄에는 홍준이가 칠판에 적은 수 N개가 순서대로 주어진다. 칠판에 적은 수는 100,000보다 작거나 같은 자연수이다.

셋째 줄에는 홍준이가 한 질문의 개수 M (1 ≤ M ≤ 1,000,000)이 주어진다.

넷째 줄부터 M개의 줄에는 홍준이가 명우에게 한 질문 S와 E가 한 줄에 하나씩 주어진다.

## 출력

총 M개의 줄에 걸쳐 홍준이의 질문에 대한 명우의 답을 입력으로 주어진 순서에 따라서 출력한다. 팰린드롬인 경우에는 1, 아닌 경우에는 0을 출력한다.

## 예제 입력 1 복사

```
7
1 2 1 3 1 2 1
4
1 3
2 5
3 3
5 7
```

## 예제 출력 1 복사

```
1
0
1
1
```

## 내가 생각하는 문제 풀이 포인트

1. 다이나믹 프로그래밍

   1. 원래 매번 구하면 시간 초과가 난다. 펠린드롬이면 그 안에 같은 좌우간격으로 펠린드롬이라는 성질을 이용하여 dp를 이용한다.

   2. 메인 알고리즘 

      ~~~java
      for(int i=2;i<N;i++){//gap
                  for(int j=1;j<=N-i;j++){//start
                      if(inputArray[j] == inputArray[j+i] && dp[j+1][j+i-1]==1){
                          dp[j][j+i] = 1;
                      }
                  }
              }
      ~~~

2. 입출력으로 시간 절약

   1. 이부분은 원래 출제의도가 맞는지 모르겠다.. 알고리즘은 맞는거 같은데 입출력 시간 절약 때문에 찾느라 시간을 좀 쏟았다. 그냥 System.out.println 을 매번하지않고 StringBuffer로 출력할 String을 만든뒤 한번의 출력으로 시간을절약했다.



## 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

    static int N;
    static int[] inputArray;
    static int[][] dp;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        inputArray = new int[N+1];
        dp = new int[N+1][N+1];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i=1;i<=N;i++){
            inputArray[i] = Integer.parseInt(st.nextToken());
        }
        setDp();
        int M = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<M;i++) {
            st = new StringTokenizer(br.readLine());
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());
            sb.append(dp[start][end]+"\n");
        }
        System.out.println(sb);
    }

    private static void setDp() {
        for(int i=1;i<=N;i++){
            dp[i][i] = 1;
        }
        for(int i=1;i<N;i++){
            if(inputArray[i] == inputArray[i+1])
            dp[i][i+1] = 1;
        }
        for(int i=2;i<N;i++){//gap
            for(int j=1;j<=N-i;j++){//start
                if(inputArray[j] == inputArray[j+i] && dp[j+1][j+i-1]==1){
                    dp[j][j+i] = 1;
                }
            }
        }
    }


}
~~~



## 느낀점

 그래도 전체적인 알고리즘 컨셉과 아이디어는 매우 좋다. 펠린드롬은 좋은 문제소재이다!  하지만 현재 이문제는 좋은 문젠지는 모르겠다. 알고리즘 이외 내가 입출력으로 신경쓰는 문제를 많이 안다뤄 봐서 그런가..ㅎ 

그래도 입출력으로 시간을 절약하는 방법을 알게 된것 같다. 



[문제 링크](https://www.acmicpc.net/problem/10942)



