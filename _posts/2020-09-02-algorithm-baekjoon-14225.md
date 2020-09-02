---
layout: post
title: "[백준 14225] 부분수열의 합"
categories: algorithm
tags: baekjoon java algorithm 브루트포스 brute-force
comments: true
---

## 문제설명

## 문제

수열 S가 주어졌을 때, 수열 S의 부분 수열의 합으로 나올 수 없는 가장 작은 자연수를 구하는 프로그램을 작성하시오.

예를 들어, S = [5, 1, 2]인 경우에 1, 2, 3(=1+2), 5, 6(=1+5), 7(=2+5), 8(=1+2+5)을 만들 수 있다. 하지만, 4는 만들 수 없기 때문에 정답은 4이다.

## 입력

첫째 줄에 수열 S의 크기 N이 주어진다. (1 ≤ N ≤ 20)

둘째 줄에는 수열 S가 주어진다. S를 이루고있는 수는 100,000보다 작거나 같은 자연수이다.

## 출력

첫째 줄에 수열 S의 부분 수열의 합으로 나올 수 없는 가장 작은 자연수를 출력한다.

## 예제 입력 1 복사

```
3
5 1 2
```

## 예제 출력 1 복사

```
4
```

## 예제 입력 2 복사

```
3
2 1 4
```

## 예제 출력 2 복사

```
8
```

## 예제 입력 3 복사

```
4
2 1 2 7
```

## 예제 출력 3 복사

```
6
```



## 내가 생각하는 문제 풀이 포인트

1. 브루트포스
   1. 생각보다 입력시 주어지는 범위가 적다 브루트포스로 가능.

## 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

    static boolean[] checkSum;
    static int[] arr;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        arr = new int[N];
        for(int i=0;i<N;i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }
        checkSum = new boolean[2000000];

        dfs(0,0,N);
        for(int i=1;i<2000000;i++){
            if(checkSum[i]==false){
                System.out.println(i);
                return;
            }
        }
    }

    private static void dfs(int depth,int sum,int N) {
        if(depth==N){
            checkSum[sum] = true;
            return;
        }
        dfs(depth+1,sum,N);
        dfs(depth+1, sum + arr[depth],N);
    }
}

~~~



## 느낀점

브루트포스 문제임을 파악할때는 범위확인을통해!



[문제 링크](https://www.acmicpc.net/problem/14225) 

