---
layout: post
title: "124 나라의 숫자"
subtitle: "프로그래머스 12899"
categories: algorithm
tags: programmers java algorithm
comments: true

---

# 문제설명

124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

1. 124 나라에는 자연수만 존재합니다.
2. 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.

예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

| 10진법 | 124 나라 | 10진법 | 124 나라 |
| ------ | -------- | ------ | -------- |
| 1      | 1        | 6      | 14       |
| 2      | 2        | 7      | 21       |
| 3      | 4        | 8      | 22       |
| 4      | 11       | 9      | 24       |
| 5      | 12       | 10     | 41       |

자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.

##### 제한사항

- n은 500,000,000이하의 자연수 입니다.

------

##### 입출력 예

| n    | result |
| ---- | ------ |
| 1    | 1      |
| 2    | 2      |
| 3    | 4      |
| 4    | 11     |

# 내가 생각하는 문제 풀이 포인트

1. 여긴 0이 존재하지 않는다 이부분이 조금 헷갈 릴수 있는데 나눠서 나머지가 0일때 다음 값에 1을 빼줘서 해결하였다.

# 코드

~~~java
public class Solution {
    public String solution(int n) {
        return decimalTo124(n);
    }

    public String decimalTo124(int decimalNum) {
        StringBuffer sb = new StringBuffer();
        while (decimalNum > 0) {
           if(decimalNum%3 ==0){
               sb.insert(0,"4");
               decimalNum = decimalNum/3 -1;
           }
           else{
               sb.insert(0,Integer.toString(decimalNum%3));
               decimalNum = decimalNum/3;
           }
        }
        return sb.toString();
    }
}
~~~



# 느낀점

생각보다 헷갈렸다...ㅎ 대충 짐작식으로 문제를 풀면 틀리게 된다 꼼꼼하게 예제 비교를 해보며 풀어야 되는 문제이다. 



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12899)

