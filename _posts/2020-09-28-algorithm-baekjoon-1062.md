---
layout: post
title: "[백준 1062] 가르침"
subtitle: "백준 1062 가르침"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

남극에 사는 김지민 선생님은 학생들이 되도록이면 많은 단어를 읽을 수 있도록 하려고 한다. 그러나 지구온난화로 인해 얼음이 녹아서 곧 학교가 무너지기 때문에, 김지민은 K개의 글자를 가르칠 시간 밖에 없다. 김지민이 가르치고 난 후에는, 학생들은 그 K개의 글자로만 이루어진 단어만을 읽을 수 있다. 김지민은 어떤 K개의 글자를 가르쳐야 학생들이 읽을 수 있는 단어의 개수가 최대가 되는지 고민에 빠졌다.

남극언어의 모든 단어는 "anta"로 시작되고, "tica"로 끝난다. 남극언어에 단어는 N개 밖에 없다고 가정한다. 학생들이 읽을 수 있는 단어의 최댓값을 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 단어의 개수 N과 K가 주어진다. N은 50보다 작거나 같은 자연수이고, K는 26보다 작거나 같은 자연수 또는 0이다. 둘째 줄부터 N개의 줄에 남극 언어의 단어가 주어진다. 단어는 영어 소문자로만 이루어져 있고, 길이가 8보다 크거나 같고, 15보다 작거나 같다. 모든 단어는 중복되지 않는다.

## 출력

첫째 줄에 김지민이 K개의 글자를 가르칠 때, 학생들이 읽을 수 있는 단어 개수의 최댓값을 출력한다.

## 예제 입력 1 복사

```
3 6
antarctica
antahellotica
antacartica
```

## 예제 출력 1 복사

```
2
```

## 내가 생각하는 문제 풀이 포인트

1. 백트래킹문제이다. 
2. 전에풀었던 [단어암기](https://www.acmicpc.net/problem/18119) 문제와 유사하다.
3. 알고있는 k개의 알파벳을 구하는 조합을 위해 dfs + 백트래킹을 이용한다.

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Baekjoon1062 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int N,K;
    static int[] words;
    static int result=0;
    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());
        words = new int[N];
        for(int i=0;i<N;i++){
            String wordStr = br.readLine();
            for(char c : wordStr.toCharArray()){
                words[i] |= (1<<(c-'a'));
            }
        }

        dfs(0,0,0);
        System.out.println(result);

    }

    private static void dfs(int cnt, int depth,int mask){
        if(cnt>=K){
            int readCnt=0;
            for(int word : words){

                if( (word & mask)==word ){
                    readCnt++;
                }

            }
            if(readCnt>result)
                result = readCnt;
            return;
        }
        if(depth>26){
            return;
        }
        dfs(cnt+1,depth+1,(mask|(1<<depth)));
        dfs(cnt,depth+1,mask);

    }
}

~~~



# 느낀점

유사한 문제 덕에 잘 풀 수 있었다.

[문제 링크](https://www.acmicpc.net/problem/1062)

