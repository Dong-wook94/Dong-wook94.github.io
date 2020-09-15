---
layout: post
title: "[백준 9252] LCS2"
subtitle: "백준 9252 LCS2"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

LCS(Longest Common Subsequence, 최장 공통 부분 수열)문제는 두 수열이 주어졌을 때, 모두의 부분 수열이 되는 수열 중 가장 긴 것을 찾는 문제이다.

예를 들어, ACAYKP와 CAPCAK의 LCS는 ACAK가 된다.

## 입력

첫째 줄과 둘째 줄에 두 문자열이 주어진다. 문자열은 알파벳 대문자로만 이루어져 있으며, 최대 1000글자로 이루어져 있다.

## 출력

첫째 줄에 입력으로 주어진 두 문자열의 LCS의 길이를, 둘째 줄에 LCS를 출력한다.

LCS가 여러 가지인 경우에는 아무거나 출력하고, LCS의 길이가 0인 경우에는 둘째 줄을 출력하지 않는다.

## 예제 입력 1 복사

```
ACAYKP
CAPCAK
```

## 예제 출력 1 복사

```
4
ACAK
```

# 내가 생각하는 문제 풀이 포인트

LCS 알고리즘 - 최장 공통 부분 문자열

[LCS 개념](https://www.crocus.co.kr/787)

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baekjoon9252 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    public static void main(String[] args) throws IOException {
        String str1 = br.readLine();
        String str2 = br.readLine();
        int str1Size = str1.length();
        int str2Size = str2.length();
        int[][] LCS = new int[str1Size+1][str2Size+1];

        for(int i=1;i<=str1.length();i++){
            for(int j=1;j<=str2.length();j++){
                if(str1.charAt(i-1)==str2.charAt(j-1)){
                    LCS[i][j] = LCS[i-1][j-1]+1;
                }else{
                    LCS[i][j] = Math.max(LCS[i-1][j], LCS[i][j-1]);
                }
            }
        }

        System.out.println(LCS[str1Size][str2Size]);
        StringBuffer result = new StringBuffer();

        for(int i=str1Size, j=str2Size ; i>=1 && j>=1 ;){
            if(LCS[i][j] == LCS[i-1][j]){
                i--;
            }else if(LCS[i][j] == LCS[i][j-1]){
                j--;
            }
            else{
                result.insert(0,str1.charAt(i-1));
                i--;
                j--;
            }
        }
        System.out.println(result);
    }
}

~~~



# 느낀점

LCS 문제이다.

[문제 링크](https://www.acmicpc.net/problem/9252)

