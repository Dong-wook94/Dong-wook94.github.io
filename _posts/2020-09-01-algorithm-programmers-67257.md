---
layout: post
title: "[2020 카카오 인턴십] 수식 최대화"
subtitle: "2020 카카오 인턴십 2번문제"
categories: algorithm
tags: programmers java algorithm permutation
comments: true
---

## 문제 설명


수식에 연산자가 3개 주어졌으므로 가능한 연산자 우선순위 조합은 3! = 6가지이며, 그 중 `+` > `-` > `*` 로 연산자 우선순위를 정한다면 결괏값은 22,000원이 됩니다.
반면에 `*` > `+` > `-` 로 연산자 우선순위를 정한다면 수식의 결괏값은 -60,420 이지만, 규칙에 따라 우승 시 상금은 절댓값인 60,420원이 됩니다.

참가자에게 주어진 연산 수식이 담긴 문자열 expression이 매개변수로 주어질 때, 우승 시 받을 수 있는 가장 큰 상금 금액을 return 하도록 solution 함수를 완성해주세요.

##### **[제한사항]**

- expression은 길이가 3 이상 100 이하인 문자열입니다.

- expression은 공백문자, 괄호문자 없이 오로지 숫자와 3가지의 연산자(

  ```
  +, -, *
  ```

  ) 만으로 이루어진 올바른 중위표기법(연산의 두 대상 사이에 연산기호를 사용하는 방식)으로 표현된 연산식입니다. 잘못된 연산식은 입력으로 주어지지 않습니다.

  - 즉, `"402+-561*"`처럼 잘못된 수식은 올바른 중위표기법이 아니므로 주어지지 않습니다.

- expression의 피연산자(operand)는 0 이상 999 이하의 숫자입니다.

  - 즉, `"100-2145*458+12"`처럼 999를 초과하는 피연산자가 포함된 수식은 입력으로 주어지지 않습니다.
  - `"-56+100"`처럼 피연산자가 음수인 수식도 입력으로 주어지지 않습니다.

- expression은 적어도 1개 이상의 연산자를 포함하고 있습니다.

- 연산자 우선순위를 어떻게 적용하더라도, expression의 중간 계산값과 최종 결괏값은 절댓값이 263 - 1 이하가 되도록 입력이 주어집니다.

- 같은 연산자끼리는 앞에 있는 것의 우선순위가 더 높습니다.

------

##### **입출력 예**

| expression             | result |
| ---------------------- | ------ |
| `"100-200*300-500+20"` | 60420  |
| `"50*6-3*2"`           | 300    |

##### **입출력 예에 대한 설명**

**입출력 예 #1**
`*` > `+` > `-` 로 연산자 우선순위를 정했을 때, 가장 큰 절댓값을 얻을 수 있습니다.
연산 순서는 아래와 같습니다.
`100-200*300-500+20`
= `100-(200*300)-500+20`
= `100-60000-(500+20)`
= `(100-60000)-520`
= `(-59900-520)`
= `-60420`
따라서, 우승 시 받을 수 있는 상금은 |-60420| = 60420 입니다.

**입출력 예 #2**
`-` > `*` 로 연산자 우선순위를 정했을 때, 가장 큰 절댓값을 얻을 수 있습니다.
연산 순서는 아래와 같습니다.(expression에서 `+` 연산자는 나타나지 않았으므로, 고려할 필요가 없습니다.)
`50*6-3*2`
= `50*(6-3)*2`
= `(50*3)*2`
= `150*2`
= `300`
따라서, 우승 시 받을 수 있는 상금은 300 입니다.



##  내가 생각하는 문제 풀이 포인트

1. 연산자 우선순위 경우의 수 생성
2. 계산방법
   1. 첫번째 방법은 연산자 기준으로 이웃한 피연산자를 제거하는 방법이다.
      ![image](https://user-images.githubusercontent.com/36303777/91846554-2dbf1080-ec95-11ea-8a9e-ba7022114d95.png)
      1. 먼저 이웃한 피연산자들을 합한다
      2. 이웃한 피연산자를 제거한다.
      3. 이웃한 피연산자를 제거하게되면 이전 피연산자의 인덱스로 현재인덱스를 이동시켜줘야한다.
      4. 이동시킨다.
   2. 중위표기법 , 후위표기법을 이용한 계산
      1. 실제 코테에서는 [이전에 풀었던 백준-괄호추가하기2](https://dong-co.tistory.com/16) 문제가 떠올라 중위표기법->후위표기법->계산 의 방법으로 풀었지만 이때문에 시간을 너무 많이 썼다....



아래 코드는 피연산자 제거 방법으로 풀었다. 이번에도 자바로 풀이를 하였다. 이제 자바로 계속해서 문제를 풀 예정이다! 

## 코드

~~~java
import java.util.ArrayList;

class Solution {
    static int priority[] = new int[3];
    static char op[] = {'+', '-', '*'};
    static boolean visited[] = new boolean[3];
    static long answer;
    static ArrayList<String> formula = new ArrayList<>();

    static void permutation(int depth) {
        if (depth == 3) {
            answer = Math.max(answer, Math.abs(calculate()));
            return;
        }
        for (int i = 0; i < 3; i++) {
            if (!visited[i]) {
                visited[i] = true;
                priority[depth] = i;
                permutation(depth + 1);
                visited[i] = false;
            }
        }
    }

    private static long calculate() {
        ArrayList<String> token = new ArrayList<>();
        for(int i=0;i<formula.size();i++)
            token.add(formula.get(i));
        //token.forEach((temp)-> System.out.print(temp+ ","));
        for (int i = 0; i < 3; i++) {
            char curOper = op[priority[i]];
            for (int j = 1; j < token.size() - 1; j++) {
                String operator = token.get(j);
                if (operator.equals(curOper + "")) {
                    long operand1 = Long.parseLong(token.get(j - 1));
                    long operand2 = Long.parseLong(token.get(j + 1));
                    long result = 0;
                    if (curOper == '+') {
                        result = operand1 + operand2;
                    } else if (curOper == '-') {
                        result = operand1 - operand2;
                    } else {
                        result = operand1 * operand2;
                    }
                    token.set(j, result + "");
                    token.remove(j + 1);
                    token.remove(j - 1);
                    j--;
                }
            }
        }
        //System.out.println(token.get(0));

        return Long.parseLong(token.get(0));
    }

    public long solution(String expression) {
        answer = 0;
        StringBuilder sb = new StringBuilder();

        for (char ch : expression.toCharArray()) {

            if (ch >= '0' && ch <= '9') {
                sb.append(ch);
            } else {
                formula.add(sb.toString());
                formula.add(ch+"");
                sb.setLength(0);
            }
        }
        formula.add(sb.toString());

        permutation(0);
        return answer;
    }
}
~~~



## 느낀점

기존에 푼 방식과 다른 방식으로 문제를 풀었다. 

 그리고 오랜만에 풀어서인지.. (이말을 어서 그만하고싶다..ㅎ) hashmap 사용방법이 살짝 가물가물했다. 기본적으로 자주 사용하는 구현방법이나 패턴, 라이브러리등은 복습이 필요한것 같다. 



그리고 이문제를 풀면서 느낀점이 일단 직관대로 생각해보자는 것이다. 자료구조 때 배운 중위 후위표기법이 떠오르긴 하지만 이문제를 해결하기에 너무 오버해서 푸는 방법인것 같다. 코테는 빨리 풀어야 되는 시험이니까 잠깐 멈추고 더쉬운방법을 떠올려보자! 



[문제링크](https://programmers.co.kr/learn/courses/30/lessons/67257)

