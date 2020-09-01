---
layout: post
title: "[2020 카카오 인턴십] 키패드 누르기"
subtitle: "2020 카카오 인턴십 1번문제"
categories: algorithm
tags: programmers java algorithm kakao
comments: true
---



## 문제설명 

###### 문제 설명

스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

![kakao_phone1.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/4b69a271-5f4a-4bf4-9ebf-6ebed5a02d8d/kakao_phone1.png)

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 `*` 키패드에 오른손 엄지손가락은 `#` 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
2. 왼쪽 열의 3개의 숫자 `1`, `4`, `7`을 입력할 때는 왼손 엄지손가락을 사용합니다.
3. 오른쪽 열의 3개의 숫자 `3`, `6`, `9`를 입력할 때는 오른손 엄지손가락을 사용합니다.
4. 가운데 열의 4개의 숫자 `2`, `5`, `8`, `0`을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
   4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

##### **[제한사항]**

- numbers 배열의 크기는 1 이상 1,000 이하입니다.

- numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.

- hand는

   

  ```
  "left"
  ```

   

  또는

   

  ```
  "right"
  ```

   

  입니다.

  - `"left"`는 왼손잡이, `"right"`는 오른손잡이를 의미합니다.

- 왼손 엄지손가락을 사용한 경우는 `L`, 오른손 엄지손가락을 사용한 경우는 `R`을 순서대로 이어붙여 문자열 형태로 return 해주세요.

------

##### **입출력 예**

| numbers                           | hand      | result          |
| --------------------------------- | --------- | --------------- |
| [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5] | `"right"` | `"LRLLLRLLRRL"` |
| [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2] | `"left"`  | `"LRLLRRLLLRR"` |
| [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]    | `"right"` | `"LLRLLRLLRL"`  |

##### **입출력 예에 대한 설명**

**입출력 예 #1**

순서대로 눌러야 할 번호가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]이고, 오른손잡이입니다.

| 왼손 위치 | 오른손 위치 | 눌러야 할 숫자 | 사용한 손 | 설명                                                         |
| --------- | ----------- | -------------- | --------- | ------------------------------------------------------------ |
| *         | #           | 1              | L         | 1은 왼손으로 누릅니다.                                       |
| 1         | #           | 3              | R         | 3은 오른손으로 누릅니다.                                     |
| 1         | 3           | 4              | L         | 4는 왼손으로 누릅니다.                                       |
| 4         | 3           | 5              | L         | 왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.  |
| 5         | 3           | 8              | L         | 왼손 거리는 1, 오른손 거리는 3이므로 왼손으로 8을 누릅니다.  |
| 8         | 3           | 2              | R         | 왼손 거리는 2, 오른손 거리는 1이므로 오른손으로 2를 누릅니다. |
| 8         | 2           | 1              | L         | 1은 왼손으로 누릅니다.                                       |
| 1         | 2           | 4              | L         | 4는 왼손으로 누릅니다.                                       |
| 4         | 2           | 5              | R         | 왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다. |
| 4         | 5           | 9              | R         | 9는 오른손으로 누릅니다.                                     |
| 4         | 9           | 5              | L         | 왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.  |
| 5         | 9           | -              | -         |                                                              |

따라서 `"LRLLLRLLRRL"`를 return 합니다.

**입출력 예 #2**

왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 `"LRLLRRLLLRR"`이 됩니다.

**입출력 예 #3**

오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 `"LLRLLRLLRL"`이 됩니다.

## 내가 생각하는 문제포인트

그냥 시뮬레이션!!



## 코드

~~~java
public class Solution {

    static Pos left;
    static Pos right;

    public String solution(int[] numbers, String hand) {
        String answer = "";
        left = new Pos(3, 0);
        right = new Pos(3, 2);

        for (int t : numbers) {
            if (t == 1 || t == 4 || t == 7) {
                left.move(t);
                answer += "L";
            } else if (t == 3 || t == 6 || t == 9) {
                right.move(t);
                answer += "R";
            } else {
                if (getCloseHand(t) > 0) { // left
                    left.move(t);
                    answer += "L";
                } else if (getCloseHand(t) < 0) { // right
                    right.move(t);
                    answer += "R";
                } else {// left == right
                    if (hand.equals("left")) {
                        left.move(t);
                        answer += "L";
                    } else {
                        right.move(t);
                        answer += "R";
                    }
                }
            }
        }
        return answer;
    }

    public static int getCloseHand(int num) {
        Pos dest = new Pos(num);
        int leftDist = Math.abs(left.getRow() - dest.getRow()) + Math.abs(left.getCol() - dest.getCol());
        int rightDist = Math.abs(right.getRow() - dest.getRow()) + Math.abs(right.getCol() - dest.getCol());
        return rightDist - leftDist;
    }

    public static class Pos {
        int row;
        int col;

        public Pos(int row, int col) {
            this.row = row;
            this.col = col;
        }

        public Pos(int dest) {
            move(dest);
        }

        public void move(int num) {
            if (num >= 1 && num <= 9) {
                int n = num - 1;
                this.row = n / 3;
                this.col = n % 3;
            } else {//0인경
                this.row = 3;
                this.col = 1;
            }
        }

        public int getRow() {
            return row;
        }

        public int getCol() {
            return col;
        }
    }
}

~~~

## 느낀점

시뮬레이션 문제입니다. 단순 구현만으로도 구현이 가능한 문제입니다. 

문제 자체는 어려움이 없었지만 빠르게 풀어야 하는 문제입니다. 카카오 인턴기간동안 알고리즘 문제를 다루지 않아서 인지 실제 코테때 보다 훨씬 조금 더 걸린듯 한 느낌이였네요..ㅎ



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/67256?language=java) 



