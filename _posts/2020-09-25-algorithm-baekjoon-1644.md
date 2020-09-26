---
layout: post
title: "[백준 1644] 소수의 연속합"
subtitle: "백준 1644 소수의 연속합"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

하나 이상의 연속된 소수의 합으로 나타낼 수 있는 자연수들이 있다. 몇 가지 자연수의 예를 들어 보면 다음과 같다.

- 3 : 3 (한 가지)
- 41 : 2+3+5+7+11+13 = 11+13+17 = 41 (세 가지)
- 53 : 5+7+11+13+17 = 53 (두 가지)

하지만 연속된 소수의 합으로 나타낼 수 없는 자연수들도 있는데, 20이 그 예이다. 7+13을 계산하면 20이 되기는 하나 7과 13이 연속이 아니기에 적합한 표현이 아니다. 또한 한 소수는 반드시 한 번만 덧셈에 사용될 수 있기 때문에, 3+5+5+7과 같은 표현도 적합하지 않다.

자연수가 주어졌을 때, 이 자연수를 연속된 소수의 합으로 나타낼 수 있는 경우의 수를 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 자연수 N이 주어진다. (1 ≤ N ≤ 4,000,000)

## 출력

첫째 줄에 자연수 N을 연속된 소수의 합으로 나타낼 수 있는 경우의 수를 출력한다.

## 예제 입력 1 복사

```
20
```

## 예제 출력 1 복사

```
0
```

## 예제 입력 2 복사

```
3
```

## 예제 출력 2 복사

```
1
```

## 예제 입력 3 복사

```
41
```

## 예제 출력 3 복사

```
3
```

## 예제 입력 4 복사

```
53
```

## 예제 출력 4 복사

```
2
```

## 내가 생각하는 문제 풀이 포인트

1. 투포인터를 이용한다.

2. 소수를 판별할때 시간단축 방법.

   1. ~~~java
      public static boolean isPrime(int num){
              for(int i=2;i*i<=num;i++){
                  if(num % i==0) return false;
              }
              return true;
          }
      ~~~

      다 볼필요없고 log n 까지만 보면된다.

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Baekjoon1644 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static ArrayList<Integer> primes;
    public static void main(String[] args) throws IOException {
        int N = Integer.parseInt(br.readLine());
        primes = new ArrayList<>();
        int left = 0;
        int right =0;
        int cnt=0;
        if(N==1){
            System.out.println(0);
            return;
        }
        if(N==2){
            System.out.println(1);
            return;
        }
        setPrimeList(N);
        int sum=primes.get(0);
        while(left<=right&&right<primes.size()){
            if(primes.get(right)>N)
                break;
            if(sum> N){
                sum-=primes.get(left);
                left++;
            }
            else if(sum<N){
                right++;
                if(right>=primes.size())
                    break;
                sum+=primes.get(right);
            }
            else{
                cnt++;
                right++;
                if(right>=primes.size())
                    break;
                sum+=primes.get(right);
            }

        }
        System.out.println(cnt);
    }

    private static void setPrimeList(int N){
        int i=2;

        while(i<=N){
            if(isPrime(i))
                primes.add(i);
            i++;
        }
    }
    public static boolean isPrime(int num){
        for(int i=2;i*i<=num;i++){
            if(num % i==0) return false;
        }
        return true;
    }
}

~~~



# 느낀점

소수 판별식 효율때문에 시간초과로 고생했다..



[문제 링크](https://www.acmicpc.net/problem/1644)

