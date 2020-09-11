---
layout: post
title: "[2018 KAKAO BLIND RECRUITMENT 1차] 다트게임"
subtitle: "2018 카카오 기출 1차 다트게임"
categories: algorithm
tags: programmers java algorithm 
comments: true
---

# 문제설명

## 다트 게임

카카오톡에 뜬 네 번째 별! 심심할 땐? 카카오톡 게임별~

![Game Star](http://t1.kakaocdn.net/welcome2018/gamestar.png)

카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

1. 다트 게임은 총 3번의 기회로 구성된다.
2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
3. 점수와 함께 Single(`S`), Double(`D`), Triple(`T`) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
4. 옵션으로 스타상(`*`) , 아차상(`#`)이 존재하며 스타상(`*`) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(`#`) 당첨 시 해당 점수는 마이너스된다.
5. 스타상(`*`)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(`*`)의 점수만 2배가 된다. (예제 4번 참고)
6. 스타상(`*`)의 효과는 다른 스타상(`*`)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(`*`) 점수는 4배가 된다. (예제 4번 참고)
7. 스타상(`*`)의 효과는 아차상(`#`)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(`#`)의 점수는 -2배가 된다. (예제 5번 참고)
8. Single(`S`), Double(`D`), Triple(`T`)은 점수마다 하나씩 존재한다.
9. 스타상(`*`), 아차상(`#`)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.

0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

### 입력 형식

점수|보너스|[옵션]으로 이루어진 문자열 3세트.
예) `1S2D*3T`

- 점수는 0에서 10 사이의 정수이다.
- 보너스는 S, D, T 중 하나이다.
- 옵선은 *이나 # 중 하나이며, 없을 수도 있다.

### 출력 형식

3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.
예) 37

### 입출력 예제

| 예제 | dartResult | answer | 설명                        |
| ---- | ---------- | ------ | --------------------------- |
| 1    | `1S2D*3T`  | 37     | 11 * 2 + 22 * 2 + 33        |
| 2    | `1D2S#10S` | 9      | 12 + 21 * (-1) + 101        |
| 3    | `1D2S0T`   | 3      | 12 + 21 + 03                |
| 4    | `1S*2T*3S` | 23     | 11 * 2 * 2 + 23 * 2 + 31    |
| 5    | `1D#2S*3S` | 5      | 12 * (-1) * 2 + 21 * 2 + 31 |
| 6    | `1T2D3D#`  | -4     | 13 + 22 + 32 * (-1)         |
| 7    | `1D2S3T*`  | 59     | 12 + 21 * 2 + 33 * 2        |

# 내가 생각하는 문제 풀이 포인트

1. String 조건처리
2. 10이 나올시 처리

# 코드

~~~java
public class Solution {
    public int solution(String dartResult) {
        int answer = 0;
        int curScore=0;
        int prevScore =0;
        for(int i=0;i<dartResult.length();i++){
            if(dartResult.charAt(i)>='0'&&dartResult.charAt(i)<='9'){
                answer +=curScore;
                prevScore = curScore;
                if(dartResult.charAt(i)=='1'&&dartResult.charAt(i+1)=='0'){
                    curScore = 10;
                    i++;
                }
                else{
                    curScore = Integer.parseInt(dartResult.charAt(i)+"");
                }
            }
            else if(dartResult.charAt(i)=='S'){
                //생략
            }
            else if(dartResult.charAt(i)=='D'){
                curScore = (int) Math.pow(curScore,2);
            }else if(dartResult.charAt(i)=='T'){
                curScore = (int) Math.pow(curScore,3);
            }else if(dartResult.charAt(i)=='*'){
                curScore *=2;
                answer += prevScore;
            }else if(dartResult.charAt(i)=='#'){
                curScore *=(-1);
            }
        }
        answer += curScore;
        return answer;
    }
}
~~~



# 느낀점

이런문제는 빨리풀도록 연습하자



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/17682)

