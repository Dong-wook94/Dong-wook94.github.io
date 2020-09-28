---
layout: post
title: "[백준 1182] 부분수열의 합"
subtitle: "백준 1182 부분수열의 합"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

N개의 정수로 이루어진 수열이 있을 때, 크기가 양수인 부분수열 중에서 그 수열의 원소를 다 더한 값이 S가 되는 경우의 수를 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 정수의 개수를 나타내는 N과 정수 S가 주어진다. (1 ≤ N ≤ 20, |S| ≤ 1,000,000) 둘째 줄에 N개의 정수가 빈 칸을 사이에 두고 주어진다. 주어지는 정수의 절댓값은 100,000을 넘지 않는다.

## 출력

첫째 줄에 합이 S가 되는 부분수열의 개수를 출력한다.

## 예제 입력 1 복사

```
5 0
-7 -3 -2 5 8
```

## 예제 출력 1 복사

```
1
```

## 내가 생각하는 문제 풀이 포인트

1. 완전 탐색

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Baekjoon1182 {
    static int N,S;
    static int[] nums;
    static int cnt=0;
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        S = Integer.parseInt(st.nextToken());

        nums = new int[N];
        st = new StringTokenizer(br.readLine());
        for(int i=0;i<N;i++){
            nums[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(nums);
        cnt=0;

        dfs(0,0);
        if(S==0)
            cnt--;
        System.out.println(cnt);
    }

    static void dfs(int depth, int sum){

        if(depth>=N){
            if(sum == S)
                cnt++;
            return;
        }


        dfs(depth+1, sum);
        dfs(depth+1, sum+nums[depth]);
    }
}

~~~



# 느낀점

최근 푼 코테 문제와 유사한 문제라고 해서 풀었는데 전혀 유사한 느낌은 아니었다. 그냥 이문제는 완탐!

[문제 링크](https://www.acmicpc.net/problem/1182)

