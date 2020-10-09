---
layout: post
title: "[백준 14499] 주사위 굴리기"
subtitle: "삼성 sw 역량테스트 주사위 굴리기"
categories: algorithm
tags: baekjoon java algorithm 역량테스트 삼성기출
comments: true
---

# 문제설명

## 문제

크기가 N×M인 지도가 존재한다. 지도의 오른쪽은 동쪽, 위쪽은 북쪽이다. 이 지도의 위에 주사위가 하나 놓여져 있으며, 주사위의 전개도는 아래와 같다. 지도의 좌표는 (r, c)로 나타내며, r는 북쪽으로부터 떨어진 칸의 개수, c는 서쪽으로부터 떨어진 칸의 개수이다. 

```
  2
4 1 3
  5
  6
```

주사위는 지도 위에 윗 면이 1이고, 동쪽을 바라보는 방향이 3인 상태로 놓여져 있으며, 놓여져 있는 곳의 좌표는 (x, y) 이다. 가장 처음에 주사위에는 모든 면에 0이 적혀져 있다.

지도의 각 칸에는 정수가 하나씩 쓰여져 있다. 주사위를 굴렸을 때, 이동한 칸에 쓰여 있는 수가 0이면, 주사위의 바닥면에 쓰여 있는 수가 칸에 복사된다. 0이 아닌 경우에는 칸에 쓰여 있는 수가 주사위의 바닥면으로 복사되며, 칸에 쓰여 있는 수는 0이 된다.

주사위를 놓은 곳의 좌표와 이동시키는 명령이 주어졌을 때, 주사위가 이동했을 때 마다 상단에 쓰여 있는 값을 구하는 프로그램을 작성하시오.

주사위는 지도의 바깥으로 이동시킬 수 없다. 만약 바깥으로 이동시키려고 하는 경우에는 해당 명령을 무시해야 하며, 출력도 하면 안 된다.

## 입력

첫째 줄에 지도의 세로 크기 N, 가로 크기 M (1 ≤ N, M ≤ 20), 주사위를 놓은 곳의 좌표 x y(0 ≤ x ≤ N-1, 0 ≤ y ≤ M-1), 그리고 명령의 개수 K (1 ≤ K ≤ 1,000)가 주어진다.

둘째 줄부터 N개의 줄에 지도에 쓰여 있는 수가 북쪽부터 남쪽으로, 각 줄은 서쪽부터 동쪽 순서대로 주어진다. 주사위를 놓은 칸에 쓰여 있는 수는 항상 0이다. 지도의 각 칸에 쓰여 있는 수는 10을 넘지 않는 자연수 또는 0이다.

마지막 줄에는 이동하는 명령이 순서대로 주어진다. 동쪽은 1, 서쪽은 2, 북쪽은 3, 남쪽은 4로 주어진다.

## 출력

이동할 때마다 주사위의 윗 면에 쓰여 있는 수를 출력한다. 만약 바깥으로 이동시키려고 하는 경우에는 해당 명령을 무시해야 하며, 출력도 하면 안 된다.

## 예제 입력 1 복사

```
4 2 0 0 8
0 2
3 4
5 6
7 8
4 4 4 1 3 3 3 2
```

## 예제 출력 1 복사

```
0
0
3
0
0
8
6
3
```

## 예제 입력 2 복사

```
3 3 1 1 9
1 2 3
4 0 5
6 7 8
1 3 2 2 4 4 1 1 3
```

## 예제 출력 2 복사

```
0
0
0
3
0
1
0
6
0
```

## 예제 입력 3 복사

```
2 2 0 0 16
0 2
3 4
4 4 4 4 1 1 1 1 3 3 3 3 2 2 2 2
```

## 예제 출력 3 복사

```
0
0
0
0
```

## 예제 입력 4 복사

```
3 3 0 0 16
0 1 2
3 4 5
6 7 8
4 4 1 1 3 3 2 2 4 4 1 1 3 3 2 2
```

## 예제 출력 4 복사

```
0
0
0
6
0
8
0
2
0
8
0
2
0
8
0
2
```

## 내가 생각하는 문제 풀이 포인트

1. 시뮬레이션 문제. 요구사항에 맞춰 모두 구현한다.



# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Baekjoon14499 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int N, M;
    static int[][] map;
    static Dice dice;
    static int[] dirRow = {0,0,-1,1};//동서남북
    static int[] dirCol = {1,-1,0,0};
    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        int x = Integer.parseInt(st.nextToken());
        int y = Integer.parseInt(st.nextToken());

        map = new int[N][M];
        int K = Integer.parseInt(st.nextToken());
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < M; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        dice = new Dice(x, y);
        dice.copyDown();
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < K; i++) {
            int inst = Integer.parseInt(st.nextToken())-1;
            dice.move(inst);
        }
    }


    static class Dice {
        int up, down, front, back, right, left;
        int row, col;

        public Dice(int row, int col) {
            this.row = row;
            this.col = col;
        }

        public void move(int dir){
            int nextRow = row + dirRow[dir];
            int nextCol = col + dirCol[dir];
            if(nextRow<0||nextCol<0||nextRow>=N || nextCol>=M){
                return;
            }
            this.row =nextRow;
            this.col = nextCol;
            switch (dir){
                case 0:
                    moveEast();
                    break;
                case 1:
                    moveWest();
                    break;
                case 2:
                    moveNorth();
                    break;
                case 3:
                    moveSouth();
                    break;
            }
            copyDown();
            System.out.println(dice.up);
        }

        public void moveNorth() {
            int temp = this.down;
            this.down = this.back;
            this.back = this.up;
            this.up = this.front;
            this.front = temp;
        }

        public void moveSouth() {
            int temp = this.down;
            this.down = this.front;
            this.front = this.up;
            this.up = this.back;
            this.back = temp;
        }

        public void moveWest() {
            int temp = this.down;
            this.down = this.left;
            this.left = this.up;
            this.up = this.right;
            this.right = temp;
        }

        public void moveEast() {
            int temp = this.down;
            this.down = this.right;
            this.right = this.up;
            this.up = this.left;
            this.left = temp;
        }
        public void copyDown(){
            if(map[row][col] ==0){
                map[row][col] = this.down;
            }else{
                this.down = map[row][col];
                map[row][col] = 0;
            }
        }
    }
}

~~~



# 느낀점

문제에서 요구한 그대로 작서하면 되는 문제. 비슷한 함수가 너무 많긴하다..



[문제 링크](https://www.acmicpc.net/problem/14499)

