---
layout: post
title: "[2020 KAKAO BLIND RECRUITMENT] 자물쇠와 열쇠"
subtitle: "2020 카카오 기출 자물쇠와 열쇠"
categories: algorithm
tags: programmers java algorithm 
comments: true
---

# 문제설명

고고학자인 **튜브**는 고대 유적지에서 보물과 유적이 가득할 것으로 추정되는 비밀의 문을 발견하였습니다. 그런데 문을 열려고 살펴보니 특이한 형태의 **자물쇠**로 잠겨 있었고 문 앞에는 특이한 형태의 **열쇠**와 함께 자물쇠를 푸는 방법에 대해 다음과 같이 설명해 주는 종이가 발견되었습니다.

잠겨있는 자물쇠는 격자 한 칸의 크기가 **`1 x 1`**인 **`N x N`** 크기의 정사각 격자 형태이고 특이한 모양의 열쇠는 **`M x M`** 크기인 정사각 격자 형태로 되어 있습니다.

자물쇠에는 홈이 파여 있고 열쇠 또한 홈과 돌기 부분이 있습니다. 열쇠는 회전과 이동이 가능하며 열쇠의 돌기 부분을 자물쇠의 홈 부분에 딱 맞게 채우면 자물쇠가 열리게 되는 구조입니다. 자물쇠 영역을 벗어난 부분에 있는 열쇠의 홈과 돌기는 자물쇠를 여는 데 영향을 주지 않지만, 자물쇠 영역 내에서는 열쇠의 돌기 부분과 자물쇠의 홈 부분이 정확히 일치해야 하며 열쇠의 돌기와 자물쇠의 돌기가 만나서는 안됩니다. 또한 자물쇠의 모든 홈을 채워 비어있는 곳이 없어야 자물쇠를 열 수 있습니다.

열쇠를 나타내는 2차원 배열 key와 자물쇠를 나타내는 2차원 배열 lock이 매개변수로 주어질 때, 열쇠로 자물쇠를 열수 있으면 true를, 열 수 없으면 false를 return 하도록 solution 함수를 완성해주세요.

### 제한사항

- key는 M x M(3 ≤ M ≤ 20, M은 자연수)크기 2차원 배열입니다.
- lock은 N x N(3 ≤ N ≤ 20, N은 자연수)크기 2차원 배열입니다.
- M은 항상 N 이하입니다.
- key와 lock의 원소는 0 또는 1로 이루어져 있습니다.
  - 0은 홈 부분, 1은 돌기 부분을 나타냅니다.

------

### 입출력 예

| key                               | lock                              | result |
| --------------------------------- | --------------------------------- | ------ |
| [[0, 0, 0], [1, 0, 0], [0, 1, 1]] | [[1, 1, 1], [1, 1, 0], [1, 0, 1]] | true   |

### 입출력 예에 대한 설명

![자물쇠.jpg](https://grepp-programmers.s3.amazonaws.com/files/production/469703690b/79f2f473-5d13-47b9-96e0-a10e17b7d49a.jpg)

key를 시계 방향으로 90도 회전하고, 오른쪽으로 한 칸, 아래로 한 칸 이동하면 lock의 홈 부분을 정확히 모두 채울 수 있습니다.

# 내가 생각하는 문제 풀이 포인트

1. key 회전 

   ~~~java
   private static int[][] turnKey(int[][] key){
           int[][] result = new int[keySize][keySize];
   
           for(int i=0;i<keySize;i++){
               for(int j=0;j<keySize;j++){
                   result[j][keySize-1-i] = key[i][j];
               }
           }
           return result;
       }
   ~~~

   

2. 탐색범위

   왼쪽 상단 지점 기준으로 했을때

   ~~~java
   for(int i=1-keySize;i<lockSize;i++){
               for(int j=1-keySize;j<lockSize;j++){
                   for(int d =0; d<4;d++){
                       if(checkKey(i,j,key,lock,cnt))
                           return true;
                       key = turnKey(key);
                   }
   
               }
           }
   ~~~

   

# 코드

~~~java
class Solution {
    static int cnt;
    static int keySize;
    static int lockSize;

    public static boolean checkKey(int kr, int kc, int[][] key, int[][] lock, int checkCount){
        int cnt =0;
        for(int i=0;i<keySize;i++){
            for(int j=0;j<keySize;j++){
                if(i+kr <0 || i+kr >= lockSize || j+kc <0 || j+kc>=lockSize){
                    continue;
                }
                if(key[i][j] ==1 && lock[i+kr][j+kc] ==0){
                    cnt++;
                }
                else if(key[i][j] ==1 && lock[i+kr][j+kc]==1){
                    return false;
                }
            }
        }
        if(cnt ==checkCount)
            return true;
        return false;
    }

    public static boolean solution(int[][] key, int[][] lock) {
        boolean answer = true;
        cnt=0;
        keySize = key.length;
        lockSize = lock.length;

        for(int i=0;i<lockSize;i++){
            for(int j=0;j<lockSize;j++){
                if(lock[i][j] ==0){
                    cnt++;
                }
            }
        }

        if(cnt==0)
            return true;

        for(int i=1-keySize;i<lockSize;i++){
            for(int j=1-keySize;j<lockSize;j++){
                for(int d =0; d<4;d++){
                    if(checkKey(i,j,key,lock,cnt))
                        return true;
                    key = turnKey(key);
                }

            }
        }
        return false;
    }

    private static int[][] turnKey(int[][] key){
        int[][] result = new int[keySize][keySize];

        for(int i=0;i<keySize;i++){
            for(int j=0;j<keySize;j++){
                result[j][keySize-1-i] = key[i][j];
            }
        }
        return result;
    }
}
~~~



# 느낀점

시뮬레이션 문제이다. 귀찮은 문제를 푸는 연습도 꾸준히!



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/60059)

