---
layout: post
title: "[2020 KAKAO BLIND RECRUITMENT] 문자열 압축"
subtitle: "2020 카카오 기출 문자열 압축"
categories: algorithm
tags: programmers java algorithm 
comments: true
---

# 문제설명

데이터 처리 전문가가 되고 싶은 **어피치**는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
간단한 예로 aabbaccc의 경우 2a2ba3c(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, abcabcdede와 같은 문자열은 전혀 압축되지 않습니다. 어피치는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

예를 들어, ababcdcdababcdcd의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 2ab2cd2ab2cd로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 2ababcdcd로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

다른 예로, abcabcdede와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 abcabc2de가 되지만, 3개 단위로 자른다면 2abcdede가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.

### 제한사항

- s의 길이는 1 이상 1,000 이하입니다.
- s는 알파벳 소문자로만 이루어져 있습니다.

##### 입출력 예

| s                            | result |
| ---------------------------- | ------ |
| `"aabbaccc"`                 | 7      |
| `"ababcdcdababcdcd"`         | 9      |
| `"abcabcdede"`               | 8      |
| `"abcabcabcabcdededededede"` | 14     |
| `"xababcdcdababcdcd"`        | 17     |

### 입출력 예에 대한 설명

**입출력 예 #1**

문자열을 1개 단위로 잘라 압축했을 때 가장 짧습니다.

**입출력 예 #2**

문자열을 8개 단위로 잘라 압축했을 때 가장 짧습니다.

**입출력 예 #3**

문자열을 3개 단위로 잘라 압축했을 때 가장 짧습니다.

**입출력 예 #4**

문자열을 2개 단위로 자르면 abcabcabcabc6de 가 됩니다.
문자열을 3개 단위로 자르면 4abcdededededede 가 됩니다.
문자열을 4개 단위로 자르면 abcabcabcabc3dede 가 됩니다.
문자열을 6개 단위로 자를 경우 2abcabc2dedede가 되며, 이때의 길이가 14로 가장 짧습니다.

**입출력 예 #5**

문자열은 제일 앞부터 정해진 길이만큼 잘라야 합니다.
따라서 주어진 문자열을 x / ababcdcd / ababcdcd 로 자르는 것은 불가능 합니다.
이 경우 어떻게 문자열을 잘라도 압축되지 않으므로 가장 짧은 길이는 17이 됩니다.

# 내가 생각하는 문제 풀이 포인트

1. 문자열 처리 문제이다. 
   잔여 스트링 처리를 조금 신경쓰면 쉽게 풀수 있는 문제이다. 



# 코드

~~~java
class Solution {
    public static int solution(String s) {
        int minLength = s.length();

        for(int i=1;i<=s.length()/2;i++){ //자르는 길
            String prevStr = s.substring(0,i);
            StringBuffer resultStr = new StringBuffer();
            int cnt=0;
            String curStr = "";
            int j=0;
            for(j=0;(j+i)<=s.length();j=j+i){
                curStr = s.substring(j,j+i);
                if(prevStr.equals(curStr)){
                    cnt++;
                }
                else{
                    if(cnt>1)
                        resultStr.append(cnt+prevStr);
                    else
                        resultStr.append(prevStr);
                    prevStr = curStr;
                    cnt=1;
                }
            }
            String remainStr = s.substring(j);
            if(cnt>1){
                resultStr.append(cnt+curStr+remainStr);
            }
            else{
                resultStr.append(curStr+remainStr);
            }
            minLength = Math.min(minLength,resultStr.length());
        }

        return minLength;
    }
}
~~~



# 느낀점

c++ 로 풀때보다 훨씬 더 쉽게 푼거 같다. 그리고 한번 StringBuffer의 효율성을 신경쓰고 문제를 푸니 계속 사용하게 되는 것 같다. append 가 잦을때는 계속 사용할 예정이다.



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/60057?language=java)

