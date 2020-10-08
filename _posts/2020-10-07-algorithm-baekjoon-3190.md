---
layout: post
title: "[백준 3190] 뱀"
subtitle: "삼성 sw 역량테스트 뱀"
categories: algorithm
tags: baekjoon java algorithm 역량테스트 삼성기출
comments: true
---

# 문제설명

## 문제

 'Dummy' 라는 도스게임이 있다. 이 게임에는 뱀이 나와서 기어다니는데, 사과를 먹으면 뱀 길이가 늘어난다. 뱀이 이리저리 기어다니다가 벽 또는 자기자신의 몸과 부딪히면 게임이 끝난다.

게임은 NxN 정사각 보드위에서 진행되고, 몇몇 칸에는 사과가 놓여져 있다. 보드의 상하좌우 끝에 벽이 있다. 게임이 시작할때 뱀은 맨위 맨좌측에 위치하고 뱀의 길이는 1 이다. 뱀은 처음에 오른쪽을 향한다.

뱀은 매 초마다 이동을 하는데 다음과 같은 규칙을 따른다.

- 먼저 뱀은 몸길이를 늘려 머리를 다음칸에 위치시킨다.
- 만약 이동한 칸에 사과가 있다면, 그 칸에 있던 사과가 없어지고 꼬리는 움직이지 않는다.
- 만약 이동한 칸에 사과가 없다면, 몸길이를 줄여서 꼬리가 위치한 칸을 비워준다. 즉, 몸길이는 변하지 않는다.

사과의 위치와 뱀의 이동경로가 주어질 때 이 게임이 몇 초에 끝나는지 계산하라.

## 입력

첫째 줄에 보드의 크기 N이 주어진다. (2 ≤ N ≤ 100) 다음 줄에 사과의 개수 K가 주어진다. (0 ≤ K ≤ 100)

다음 K개의 줄에는 사과의 위치가 주어지는데, 첫 번째 정수는 행, 두 번째 정수는 열 위치를 의미한다. 사과의 위치는 모두 다르며, 맨 위 맨 좌측 (1행 1열) 에는 사과가 없다.

다음 줄에는 뱀의 방향 변환 횟수 L 이 주어진다. (1 ≤ L ≤ 100)

다음 L개의 줄에는 뱀의 방향 변환 정보가 주어지는데,  정수 X와 문자 C로 이루어져 있으며. 게임 시작 시간으로부터 X초가 끝난 뒤에 왼쪽(C가 'L') 또는 오른쪽(C가 'D')로 90도 방향을 회전시킨다는 뜻이다. X는 10,000 이하의 양의 정수이며, 방향 전환 정보는 X가 증가하는 순으로 주어진다.

## 출력

첫째 줄에 게임이 몇 초에 끝나는지 출력한다.

## 예제 입력 1 복사

```
6
3
3 4
2 5
5 3
3
3 D
15 L
17 D
```

## 예제 출력 1 복사

```
9
```

## 예제 입력 2 복사

```
10
4
1 2
1 3
1 4
1 5
4
8 D
10 D
11 D
13 L
```

## 예제 출력 2 복사

```
21
```

## 예제 입력 3 복사

```
10
5
1 5
1 3
1 2
1 6
1 7
4
8 D
10 D
11 D
13 L
```

## 예제 출력 3 복사

```
13
```

## 내가 생각하는 문제 풀이 포인트

1. 시뮬레이션 문제이다.
   1. deque를 이용하여 헤드와 꼬리를 관리하도록 하였다. 



# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Deque;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class Baekjoon3190 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int N;
    static int K;
    static int[][] map;
    static Deque<Snake> snake;
    static int dir = 0;
    static int totalSec = 0;
    static int[] dirRow = {0,1,0,-1}; //시계방향
    static int[] dirCol = {1,0,-1,0};
    public static void main(String[] args) throws IOException {
        N = Integer.parseInt(br.readLine());
        K = Integer.parseInt(br.readLine());
        map = new int[N+1][N+1];
        for(int i=0;i<K;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int row = Integer.parseInt(st.nextToken());
            int col = Integer.parseInt(st.nextToken());
            map[row][col] = 1;
        }
        int L = Integer.parseInt(br.readLine());
        snake = new LinkedList<>();
        snake.offerFirst(new Snake(1,1));
        map[1][1] = -1;
        for(int i=0;i<L;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int time = Integer.parseInt(st.nextToken());
            String turn = st.nextToken();
            int step = time-totalSec;
            for(int t=0;t<step;t++){
                totalSec++;
                if(!moveSnake()) {
                    System.out.println(totalSec);
                    return;
                }
            }
            if(turn.equals("L")){
                dir = turnLeft(dir);
            }else{
                dir = turnRight(dir);
            }
        }
        int INF = 100000;
        while(INF-->0){
            totalSec++;
            if(!moveSnake()) {
                System.out.println(totalSec);
                return;
            }
        }
    }

    private static boolean moveSnake() {
        int row = snake.peekFirst().row;
        int col = snake.peekFirst().col;
        int nextRow = row + dirRow[dir];
        int nextCol = col + dirCol[dir];
        snake.offerFirst(new Snake(nextRow,nextCol));
        if(nextRow<1||nextCol<1||nextRow>N||nextCol>N){
            return false; // 전체 종료
        }
        else if(map[nextRow][nextCol] == 1){
            map[nextRow][nextCol] = -1;
        }
        else if(map[nextRow][nextCol]==0){
            Snake tail = snake.pollLast();
            map[nextRow][nextCol] = -1;
            map[tail.row][tail.col] = 0;
        }
        else if(map[nextRow][nextCol]==-1){
            return false;
        }
//        System.out.println(totalSec);
//        for(int i=1;i<=N;i++){
//            for(int j=1;j<=N;j++){
//                System.out.print(map[i][j]+" ");
//            }
//            System.out.println();
//        }
        return true;
    }

    static int turnLeft(int dir){
        return (dir+3)%4;
    }
    static int turnRight(int dir){
        return (dir+1)%4;
    }

    static class Snake{
        int row;
        int col;
        public Snake(int row, int col) {
            this.row = row;
            this.col = col;
        }
    }
}

~~~



# 느낀점

단순한 시뮬레이션 문제지만 잔실수때문에 고생했다.

[문제 링크](https://www.acmicpc.net/problem/3190)

