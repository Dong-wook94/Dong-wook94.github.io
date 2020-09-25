---
layout: post
title: "[프로그래머스 43238] 입국심사"
subtitle: "프로그래머스 43238 입국심사"
categories: algorithm
tags: programmers java algorithm 
comments: true
---

# 문제설명

n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.

처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다. 가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다. 하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.

모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.

입국심사를 기다리는 사람 수 n, 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 매개변수로 주어질 때, 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.

##### 제한사항

- 입국심사를 기다리는 사람은 1명 이상 1,000,000,000명 이하입니다.
- 각 심사관이 한 명을 심사하는데 걸리는 시간은 1분 이상 1,000,000,000분 이하입니다.
- 심사관은 1명 이상 100,000명 이하입니다.

##### 입출력 예

| n    | times   | return |
| ---- | ------- | ------ |
| 6    | [7, 10] | 28     |

##### 입출력 예 설명

가장 첫 두 사람은 바로 심사를 받으러 갑니다.

7분이 되었을 때, 첫 번째 심사대가 비고 3번째 사람이 심사를 받습니다.

10분이 되었을 때, 두 번째 심사대가 비고 4번째 사람이 심사를 받습니다.

14분이 되었을 때, 첫 번째 심사대가 비고 5번째 사람이 심사를 받습니다.

20분이 되었을 때, 두 번째 심사대가 비지만 6번째 사람이 그곳에서 심사를 받지 않고 1분을 더 기다린 후에 첫 번째 심사대에서 심사를 받으면 28분에 모든 사람의 심사가 끝납니다.

## 내가 생각하는 문제 풀이 포인트

1. 이분탐색
   1. 시간을 기준으로 이분탐색을 진행한다.
   2. mid 에 해당하는 시간에 n명이상 심사가능한지를 기준으로 탐색한다.

# 코드

~~~java
import java.util.Arrays;

public class Solution {

    public static long solution(int n, int[] times) {
        long answer = Long.MAX_VALUE;
        Arrays.sort(times);
        long left = 0;
        long right= (long)times[times.length-1]*(long)n;

        while(left<=right){
            long mid = (left + right)/2;

            if(isSuccess(mid,times,n)){
                right = mid-1;
                answer = Math.min(mid,answer);
            }else{
                left = mid +1;
            }
        }
        return answer;
    }

    private static boolean isSuccess(long limit, int[] times, long n){
        long cnt=0;
        for(int i=0;i<times.length;i++){
            cnt += (limit/times[i]);
        }
        if(n<=cnt)
            return true;
        return false;
    }

    public static void main(String[] args) {
        int n = 6;
        int[] times = {7,10};
        System.out.println(solution(n,times));
    }
}
~~~



# 느낀점

이분탐색문제는 어떤걸 기준으로 이분탐색을 진행할지 찾는부분이 어려운것 같다. 

매번 느끼지만 창의적인 풀이라 느껴진다. 이분탐색문제는

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/43238?language=java)

