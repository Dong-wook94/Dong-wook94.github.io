---
layout: post
title: "[백준 1744] 수 묶기"
subtitle: "백준 1744 수 묶기"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

길이가 N인 수열이 주어졌을 때, 그 수열의 합을 구하려고 한다. 하지만, 그냥 그 수열의 합을 모두 더해서 구하는 것이 아니라, 수열의 두 수를 묶으려고 한다. 어떤 수를 묶으려고 할 때, 위치에 상관없이 묶을 수 있다. 하지만, 같은 위치에 있는 수(자기 자신)를 묶는 것은 불가능하다. 그리고 어떤 수를 묶게 되면, 수열의 합을 구할 때 묶은 수는 서로 곱한 후에 더한다.

예를 들면, 어떤 수열이 {0, 1, 2, 4, 3, 5}일 때, 그냥 이 수열의 합을 구하면 0+1+2+4+3+5 = 15이다. 하지만, 2와 3을 묶고, 4와 5를 묶게 되면, 0+1+(2*3)+(4*5) = 27이 되어 최대가 된다.

수열의 모든 수는 단 한번만 묶거나, 아니면 묶지 않아야한다.

수열이 주어졌을 때, 수열의 각 수를 적절히 묶었을 때, 그 합이 최대가 되게 하는 프로그램을 작성하시오.

## 입력

첫째 줄에 수열의 크기 N이 주어진다. N은 10,000보다 작다. 둘째 줄부터 N개의 줄에, 수열의 각 수가 주어진다. 수열의 수는 -10,000보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

## 출력

수를 합이 최대가 나오게 묶었을 때 합을 출력한다. 정답은 항상 231보다 작다.

## 예제 입력 1 복사

```
4
-1
2
1
3
```

## 예제 출력 1 복사

```
6
```

# 내가 생각하는 문제 풀이 포인트

1. 그리디 문제
2. 음수는 음수끼리곱하면 양수가 되는 성질을 이용한다.
3. 소팅한뒤 양수인경우 1을 제외한 모든 수는 서로 곱했을때 커진다.
4. 1을 곱하게되면 더한것보다 손해다.
5. 음수는 음수끼리 곱하거나 0을 곱했을때 이득이다. 



# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Baekjoon1744 {
    static int N;
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    public static void main(String[] args) throws IOException, IOException {
        int result =0;
        N = Integer.parseInt(br.readLine());
        int[] nums = new int[N];
        for(int i=0;i<N;i++){
            nums[i] = Integer.parseInt(br.readLine());
        }
        Arrays.sort(nums);
        int left = 0;
        int right = nums.length-1;
        for(;left<right;left+=2){
            if(nums[left]<1 && nums[left+1]<1){
                result += (nums[left]*nums[left+1]);
            }
            else
                break;
        }
        for(;right>0;right-=2){
            if(nums[right]>1 && nums[right-1]>1){
                result += (nums[right]*nums[right-1]);
            }
            else
                break;
        }
        for(;right>=left;right--){
            result += nums[right];
        }

        System.out.println(result);
    }
}

~~~



# 느낀점

두수를 곱하는 경우 다양하게 생각해봐야 되는 문제. 그리고 찾아보니 Priority Queue를 활용해서 문제를 푸는 사람도 많았다. 



[문제 링크](https://www.acmicpc.net/problem/1744)

