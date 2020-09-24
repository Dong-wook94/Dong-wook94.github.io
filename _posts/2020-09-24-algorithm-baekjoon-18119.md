---
layout: post
title: "[백준 18119] 단어 암기"
subtitle: "백준 18119 단어 암기"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

준석이는 영어 단어를 외우려고 한다. 사전에는 *N*가지 단어가 적혀 있다. 모든 단어는 소문자이다. 단어 안에 있는 모든 알파벳을 알 때, 그 단어를 완전히 안다고 한다.

다음과 같은 쿼리들이 주어진다.

- `1 x` : 알파벳 *x*를 잊는다.
- `2 x` : 알파벳 *x*를 기억해 낸다.

처음에 모든 알파벳을 기억하는 상태고, 모음은 완벽하게 외웠기 때문에 절대 잊지 않는다.

각 쿼리마다 완전히 알고 있는 단어의 개수를 출력하여라.

## 입력

첫 번째 줄에는 정수 *N* (1 ≤ *N* ≤ 104)과 *M* (1 ≤ *M* ≤ 5×104)이 주어진다.

다음 *N*개의 줄에는 문자열이 하나씩 주어진다. 문자열의 길이는 103을 넘지 않는다.

다음 *M*개의 줄에는 정수 *o*와 문자 *x*가 한 줄씩 주어진다. *o*는 1, 2중 하나이고, *x*는 알파벳 소문자이다.

*o*가 1이면 *x*를 잊는다는 뜻이고, *o*가 2면 *x*를 기억해낸다는 뜻이다. *o*가 1일 때는 *x*를 기억하고 있었음이 보장되고, *o*가 2일 때는 *x*를 잊고 있었음이 보장된다.

## 출력

각 쿼리마다 정수 하나를 출력한다.

## 예제 입력 1 복사

```
5 10
apple
actual
banana
brick
courts
1 l
1 b
1 c
1 n
2 l
2 b
1 s
2 c
2 s
2 n
```

## 예제 출력 1 복사

```
3
1
0
0
1
1
1
3
4
5
```

## 내가 생각하는 문제 풀이 포인트

1. 비트마스크를 이용한다.

# 코드

~~~java
import java.io.*;
import java.util.StringTokenizer;

public class Baekjoon18119 {
    static int N,M;
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static int[] wordList;
    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        wordList = new int[N];

        for(int i=0;i<N;i++){
            String input = br.readLine();
            for(char c = 'a'; c<='z';c++){
                if(input.contains(c+"")){
                    wordList[i] |= (1<<(c-'a'));
                }
            }
        }
        int remember = (1<<26)-1;
        for(int i=0;i<M;i++){
            st = new StringTokenizer(br.readLine());
            int o = Integer.parseInt(st.nextToken());
            char x = st.nextToken().charAt(0);
            int mask = 1<<(x-'a');
            if(o==1){//지우기
                if((remember & mask) ==mask)
                    remember -=mask;
            }else{
                remember |= mask;
            }
            int result=0;
            for(int word : wordList){
                if((remember & word)==word)
                    result++;
            }
            bw.write(result+"\n");
        }
        bw.flush();
    }
}

~~~



# 느낀점

map 도 써보고 string 비교등을 이용하면 시간초과가 난다.(참많이 나서 갈아엎었다..) 이문제는 비트마스크가 가장 적절한 문제이다! 비트마스크에 익숙해져야된다.

[문제 링크](https://www.acmicpc.net/problem/18119)

