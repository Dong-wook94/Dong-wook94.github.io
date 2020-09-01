---
layout: post
title: "[2020 카카오 인턴십] 보석 쇼핑"
subtitle: "2020 카카오 인턴십 4번문제"
categories: algorithm
tags: programmers java algorithm two-pointer
comments: true

---

## 문제 설명 

**[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]**

개발자 출신으로 세계 최고의 갑부가 된 `어피치`는 스트레스를 받을 때면 이를 풀기 위해 오프라인 매장에 쇼핑을 하러 가곤 합니다.
어피치는 쇼핑을 할 때면 매장 진열대의 특정 범위의 물건들을 모두 싹쓸이 구매하는 습관이 있습니다.
어느 날 스트레스를 풀기 위해 보석 매장에 쇼핑을 하러 간 어피치는 이전처럼 진열대의 특정 범위의 보석을 모두 구매하되 특별히 아래 목적을 달성하고 싶었습니다.
`진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매`

예를 들어 아래 진열대는 4종류의 보석(RUBY, DIA, EMERALD, SAPPHIRE) 8개가 진열된 예시입니다.

| 진열대 번호 | 1    | 2    | 3        | 4       | 5       | 6           | 7            | 8    |
| ----------- | ---- | ---- | -------- | ------- | ------- | ----------- | ------------ | ---- |
| 보석 이름   | DIA  | RUBY | **RUBY** | **DIA** | **DIA** | **EMERALD** | **SAPPHIRE** | DIA  |

진열대의 3번부터 7번까지 5개의 보석을 구매하면 모든 종류의 보석을 적어도 하나 이상씩 포함하게 됩니다.

진열대의 3, 4, 6, 7번의 보석만 구매하는 것은 중간에 특정 구간(5번)이 빠지게 되므로 어피치의 쇼핑 습관에 맞지 않습니다.

진열대 번호 순서대로 보석들의 이름이 저장된 배열 gems가 매개변수로 주어집니다. 이때 모든 보석을 하나 이상 포함하는 가장 짧은 구간을 찾아서 return 하도록 solution 함수를 완성해주세요.
가장 짧은 구간의 `시작 진열대 번호`와 `끝 진열대 번호`를 차례대로 배열에 담아서 return 하도록 하며, 만약 가장 짧은 구간이 여러 개라면 `시작 진열대 번호`가 가장 작은 구간을 return 합니다.

##### **[제한사항]**

- gems 배열의 크기는 1 이상 100,000 이하입니다.
  - gems 배열의 각 원소는 진열대에 나열된 보석을 나타냅니다.
  - gems 배열에는 1번 진열대부터 진열대 번호 순서대로 보석이름이 차례대로 저장되어 있습니다.
  - gems 배열의 각 원소는 길이가 1 이상 10 이하인 알파벳 대문자로만 구성된 문자열입니다.

------

##### **입출력 예**

| gems                                                         | result |
| ------------------------------------------------------------ | ------ |
| `["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]` | [3, 7] |
| `["AA", "AB", "AC", "AA", "AC"]`                             | [1, 3] |
| `["XYZ", "XYZ", "XYZ"]`                                      | [1, 1] |
| `["ZZZ", "YYY", "NNNN", "YYY", "BBB"]`                       | [1, 5] |

##### **입출력 예에 대한 설명**

**입출력 예 #1**
문제 예시와 같습니다.

**입출력 예 #2**
3종류의 보석(AA, AB, AC)을 모두 포함하는 가장 짧은 구간은 [1, 3], [2, 4]가 있습니다.
`시작 진열대 번호`가 더 작은 [1, 3]을 return 해주어야 합니다.

**입출력 예 #3**
1종류의 보석(XYZ)을 포함하는 가장 짧은 구간은 [1, 1], [2, 2], [3, 3]이 있습니다.
`시작 진열대 번호`가 가장 작은 [1, 1]을 return 해주어야 합니다.

**입출력 예 #4**
4종류의 보석(ZZZ, YYY, NNNN, BBB)을 모두 포함하는 구간은 [1, 5]가 유일합니다.
그러므로 [1, 5]를 return 해주어야 합니다.



##  내가 생각하는 문제 풀이 포인트

1. 투포인터라는 개념을 사용한다.

[https://m.blog.naver.com/kks227/220795165570](https://m.blog.naver.com/kks227/220795165570) 이 블로그를 가면 투포인터에 대해 쉽게 설명해 놓으셨다.

2. 문제의 요구조건 `가장 짧은구간이 여러개 존재할때 왼쪽` 이런 요구사항들을 빠뜨리지 않고 파악해야된다. 



## 코드

~~~java
import java.util.HashMap;

class Solution {
    static int minLength;
    static int leftPos;
    static int rightPos;
    public static int[] solution(String[] gems) {
        int[] answer = {0,0};
        minLength = gems.length;
        HashMap<String,Integer> count = new HashMap();
        leftPos = 0;
        rightPos = 0;


        for(int i=0;i<gems.length;i++){
            rightPos = i;
            if(!count.containsKey(gems[i])){//기존에 없던 문자 추가
                count.put(gems[i],1);
                minLength = rightPos - leftPos +1;
                answer[0] = leftPos+1;
                answer[1] = rightPos+1;
            }
            else{ //있던문자 추가
                count.replace(gems[i], count.get(gems[i])+1);
            }
            for(int j=leftPos;j<rightPos;j++){
                int cntLeftGem = count.get(gems[j]);
                if(cntLeftGem>1){
                    count.replace(gems[j],cntLeftGem-1);
                }
                else{
                    leftPos = j;
                    if(minLength > rightPos - leftPos +1){
                        minLength = rightPos - leftPos +1;
                        answer[0] = leftPos+1;
                        answer[1] = rightPos+1;
                    }
                    break;
                }
            }
        }
        return answer;
    }
}
~~~



## 느낀점

실제 코테칠때 많이 헤맸다. 너무 무작정 떠올린대로 풀었었던것같다!! 꼼꼼히 읽어보는게 중요하다... 인턴 면접을 준비할때 다시 코테문제를 복기해서 풀었어서 기억이 생생하여 문제는 오히려 다시풀때 금방 푼것 같다. 



[문제링크](https://programmers.co.kr/learn/courses/30/lessons/67258)

