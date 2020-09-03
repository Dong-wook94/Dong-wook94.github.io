---
layout: post
title: "[백준 7453] 합이 0인 네 정수"
categories: algorithm
tags: baekjoon java algorithm binary-search 이분탐색
comments: true
---

# 문제설명

## 문제

정수로 이루어진 크기가 같은 배열 A, B, C, D가 있다.

A[a], B[b], C[c], D[d]의 합이 0인 (a, b, c, d) 쌍의 개수를 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 배열의 크기 n (1 ≤ n ≤ 4000)이 주어진다. 다음 n개 줄에는 A, B, C, D에 포함되는 정수가 공백으로 구분되어져서 주어진다. 배열에 들어있는 정수의 절댓값은 최대 228이다.

## 출력

합이 0이 되는 쌍의 개수를 출력한다.

## 예제 입력 1 복사

```
6
-45 22 42 -16
-41 -27 56 30
-36 53 -37 77
-36 30 -75 -46
26 -38 -10 62
-32 -54 -6 45
```

## 예제 출력 1 복사

```
5
```



# 내가 생각하는 문제 풀이 포인트

(이문제를 완탐을 이용하면 시간초과가 난다고 한다. )

사실 이분탐색 연습을 위해 푼 문제 이기 때문에 나는 시작부터 풀이를 알고 시작했다...

1. 이분탐색 
   1. 4개의 배열을 2개의 배열로 나눈다. 
   2. 배열의 합으로 이루어진 2개의 배열을 정렬한다. 
   3. 첫번째 두번째 배열의 합으로 이루어진 배열의 부호를 바꾼값이 세번째 네번째 배열의 합으로 이루어진 배열에서 찾는다. 이때 upperbound lowerbound 를 이분탐색을 통해 찾는다.



# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

    static long[] A;
    static long[] B;
    static long[] C;
    static long[] D;
    static long[] AB;
    static long[] CD;
    static int N;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());

        A = new long[N];
        B = new long[N];
        C = new long[N];
        D = new long[N];
        AB = new long[N*N];
        CD = new long[N*N];

        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            A[i] = Long.parseLong(st.nextToken());
            B[i] = Long.parseLong(st.nextToken());
            C[i] = Long.parseLong(st.nextToken());
            D[i] = Long.parseLong(st.nextToken());
        }
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                AB[i*N+j] = A[i] + B[j];
                CD[i*N+j] = C[i] + D[j];
            }
        }

        Arrays.sort(AB);
        Arrays.sort(CD);

        long cnt=0;
        for(int i=0;i<AB.length;i++) {
            cnt += upperBound(0,CD.length, -AB[i]) - lowerBound(0,CD.length, -AB[i]);
        }
        System.out.println(cnt);
    }

    private static int upperBound(int left, int right, long target){
        while(left<right){
            int mid = (left+ right) / 2;
            if(CD[mid] <= target){
                left = mid + 1;
            }else{
                right = mid;
            }
        }
        return right;
    }

    private static int lowerBound(int left, int right, long target){
        while(left<right){
            int mid = (left+ right) / 2;
            if(CD[mid] < target){
                left = mid + 1;
            }else{
                right = mid;
            }
        }
        return right;
    }
}

~~~



# 느낀점

이분탐색은 아직 연습이 좀 더 필요 한것 같다. 이분탐색 방법을 알지라도 어떻게 접근해야 할지 어려운 것 같다.. 이문제 또한 접근이 어려워 찾아보고 풀이의 힌트를 얻었다.



[문제 링크](https://www.acmicpc.net/problem/7453)

