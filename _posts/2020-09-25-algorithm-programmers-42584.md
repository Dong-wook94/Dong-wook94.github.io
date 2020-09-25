---
layout: post
title: "[프로그래머스 42584] 주식가격"
subtitle: "프로그래머스 42584 주식가격"
categories: algorithm
tags: programmers java algorithm 
comments: true
---

# 문제설명

초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

##### 제한사항

- prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
- prices의 길이는 2 이상 100,000 이하입니다.

##### 입출력 예

| prices          | return          |
| --------------- | --------------- |
| [1, 2, 3, 2, 3] | [4, 3, 1, 1, 0] |

##### 입출력 예 설명

- 1초 시점의 ₩1은 끝까지 가격이 떨어지지 않았습니다.
- 2초 시점의 ₩2은 끝까지 가격이 떨어지지 않았습니다.
- 3초 시점의 ₩3은 1초뒤에 가격이 떨어집니다. 따라서 1초간 가격이 떨어지지 않은 것으로 봅니다.
- 4초 시점의 ₩2은 1초간 가격이 떨어지지 않았습니다.
- 5초 시점의 ₩3은 0초간 가격이 떨어지지 않았습니다.

## 내가 생각하는 문제 풀이 포인트

1. 이중 포문을 통해 매번 카운트한다.

# 코드

~~~java
class Solution {
    public int[] solution(int[] prices) {
        int[] answer = {};
        answer = new int[prices.length];
        
        for(int i=0;i<prices.length;i++){
            int p = prices[i];
            int cnt=0;
            for(int j=i+1;j<prices.length;j++){
                cnt++;
                if(prices[j]<p){
                    break;
                }
            }
            answer[i] = cnt;
        }
        return answer;
    }
}
~~~



# 느낀점

주의 할 점이 시간이 지난후 판단하는 로직이다. 판단후 시간을 더해주면 안된다. 

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42584)

