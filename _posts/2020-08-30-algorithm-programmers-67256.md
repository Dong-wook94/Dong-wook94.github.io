---
layout: post
title: "[2020 카카오 인턴십] 키패드 누르기"
subtitle: "2020 카카오 인턴십 1번문제"
categories: algorithm
tags: programmers java algorithm
comments: true
---

카카오 인턴을 준비하며 쳤던 코테문제라 감회가 새로운 문제였네요.. ㅎ

시뮬레이션 문제입니다. 단순 구현만으로도 구현이 가능한 문제입니다. 

![kakao_phone1.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/4b69a271-5f4a-4bf4-9ebf-6ebed5a02d8d/kakao_phone1.png)

사진에서 와 같이 1,4,7 의 경우에는 왼손 3,6,9의 경우에는 오른손이 확실하고

2,5,8,0의 경우에는 거리 우선, 동일 거리시 손잡이를 기준으로 정합니다. 



제출 코드 

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



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/67256?language=java) 

[소스코드 링크]([https://github.com/Dong-wook94/KNU-AlgorithmStudy/blob/master/programmers/%5B2020%20%EC%B9%B4%EC%B9%B4%EC%98%A4%20%EC%9D%B8%ED%84%B4%EC%89%BD%5D%20%ED%82%A4%ED%8C%A8%EB%93%9C%20%EB%88%84%EB%A5%B4%EA%B8%B0/%EB%8F%99%EC%9A%B1/Programmers67256.java](https://github.com/Dong-wook94/KNU-AlgorithmStudy/blob/master/programmers/[2020 카카오 인턴쉽] 키패드 누르기/동욱/Programmers67256.java))

