---
layout: post
title: "[백준 19236] 청소년 상어"
subtitle: "삼성 sw 역량테스트 청소년 상어"
categories: algorithm
tags: baekjoon java algorithm 역량테스트 삼성기출
comments: true
---

# 문제설명

## 문제

[![img](chrome-extension://anenheoccfogllpbpcmbbpcbjpogeehe/svg/11.svg)아기 상어](https://www.acmicpc.net/problem/16236)가 성장해 청소년 상어가 되었다.

4×4크기의 공간이 있고, 크기가 1×1인 정사각형 칸으로 나누어져 있다. 공간의 각 칸은 (x, y)와 같이 표현하며, x는 행의 번호, y는 열의 번호이다. 한 칸에는 물고기가 한 마리 존재한다. 각 물고기는 번호와 방향을 가지고 있다. 번호는 1보다 크거나 같고, 16보다 작거나 같은 자연수이며, 두 물고기가 같은 번호를 갖는 경우는 없다. 방향은 8가지 방향(상하좌우, 대각선) 중 하나이다.

오늘은 청소년 상어가 이 공간에 들어가 물고기를 먹으려고 한다. 청소년 상어는 (0, 0)에 있는 물고기를 먹고, (0, 0)에 들어가게 된다. 상어의 방향은 (0, 0)에 있던 물고기의 방향과 같다. 이후 물고기가 이동한다.

물고기는 번호가 작은 물고기부터 순서대로 이동한다. 물고기는 한 칸을 이동할 수 있고, 이동할 수 있는 칸은 빈 칸과 다른 물고기가 있는 칸, 이동할 수 없는 칸은 상어가 있거나, 공간의 경계를 넘는 칸이다. 각 물고기는 방향이 이동할 수 있는 칸을 향할 때까지 방향을 45도 반시계 회전시킨다. 만약, 이동할 수 있는 칸이 없으면 이동을 하지 않는다. 그 외의 경우에는 그 칸으로 이동을 한다. 물고기가 다른 물고기가 있는 칸으로 이동할 때는 서로의 위치를 바꾸는 방식으로 이동한다.

물고기의 이동이 모두 끝나면 상어가 이동한다. 상어는 방향에 있는 칸으로 이동할 수 있는데, 한 번에 여러 개의 칸을 이동할 수 있다. 상어가 물고기가 있는 칸으로 이동했다면, 그 칸에 있는 물고기를 먹고, 그 물고기의 방향을 가지게 된다. 이동하는 중에 지나가는 칸에 있는 물고기는 먹지 않는다. 물고기가 없는 칸으로는 이동할 수 없다. 상어가 이동할 수 있는 칸이 없으면 공간에서 벗어나 집으로 간다. 상어가 이동한 후에는 다시 물고기가 이동하며, 이후 이 과정이 계속해서 반복된다.

![img](https://upload.acmicpc.net/1c7c473e-5e2c-4c45-9c88-b3b7cd06a360/-/preview/)

<그림 1>

<그림 1>은 청소년 상어가 공간에 들어가기 전 초기 상태이다. 상어가 공간에 들어가면 (0, 0)에 있는 7번 물고기를 먹고, 상어의 방향은 ↘이 된다. <그림 2>는 상어가 들어간 직후의 상태를 나타낸다.

![img](https://upload.acmicpc.net/8f26df12-6f68-43a3-9f6e-7416144e91dc/-/preview/)

<그림 2>

이제 물고기가 이동해야 한다. 1번 물고기의 방향은 ↗이다. ↗ 방향에는 칸이 있고, 15번 물고기가 들어있다. 물고기가 있는 칸으로 이동할 때는 그 칸에 있는 물고기와 위치를 서로 바꿔야 한다. 따라서, 1번 물고기가 이동을 마치면 <그림 3>과 같아진다.

![img](https://upload.acmicpc.net/75315b3c-ee04-4ae8-9422-5b1137f86117/-/preview/)

<그림 3>

2번 물고기의 방향은 ←인데, 그 방향에는 상어가 있으니 이동할 수 없다. 방향을 45도 반시계 회전을 하면 ↙가 되고, 이 칸에는 3번 물고기가 있다. 물고기가 있는 칸이니 서로 위치를 바꾸고, <그림 4>와 같아지게 된다.

![img](https://upload.acmicpc.net/7be317c7-b8b5-4b83-becb-ffd8550311fb/-/preview/)

<그림 4>

3번 물고기의 방향은 ↑이고, 존재하지 않는 칸이다. 45도 반시계 회전을 한 방향 ↖도 존재하지 않으니, 다시 회전을 한다. ← 방향에는 상어가 있으니 또 회전을 해야 한다. ↙ 방향에는 2번 물고기가 있으니 서로의 위치를 교환하면 된다. 이런 식으로 모든 물고기가 이동하면 <그림 5>와 같아진다.

![img](https://upload.acmicpc.net/a58fbda0-bb64-4773-b5f9-2da0bd3f0fd2/-/preview/)

<그림 5>

물고기가 모두 이동했으니 이제 상어가 이동할 순서이다. 상어의 방향은 ↘이고, 이동할 수 있는 칸은 12번 물고기가 있는 칸, 15번 물고기가 있는 칸, 8번 물고기가 있는 칸 중에 하나이다. 만약, 8번 물고기가 있는 칸으로 이동하면, <그림 6>과 같아지게 된다.

![img](https://upload.acmicpc.net/2431d117-fab6-4de9-8d76-2fb41d471ee7/-/crop/651x656/1,12/-/preview/)

<그림 6>

상어가 먹을 수 있는 물고기 번호의 합의 최댓값을 구해보자.

## 입력

첫째 줄부터 4개의 줄에 각 칸의 들어있는 물고기의 정보가 1번 행부터 순서대로 주어진다. 물고기의 정보는 두 정수 ai, bi로 이루어져 있고, ai는 물고기의 번호, bi는 방향을 의미한다. 방향 bi는 8보다 작거나 같은 자연수를 의미하고, 1부터 순서대로 ↑, ↖, ←, ↙, ↓, ↘, →, ↗ 를 의미한다.

## 출력

상어가 먹을 수 있는 물고기 번호의 합의 최댓값을 출력한다.

## 예제 입력 1 복사

```
7 6 2 3 15 6 9 8
3 1 1 8 14 7 10 1
6 1 13 6 4 3 11 4
16 1 8 7 5 2 12 2
```

## 예제 출력 1 복사

```
33
```

## 예제 입력 2 복사

```
16 7 1 4 4 3 12 8
14 7 7 6 3 4 10 2
5 2 15 2 8 3 6 4
11 8 2 4 13 5 9 4
```

## 예제 출력 2 복사

```
43
```

## 예제 입력 3 복사

```
12 6 14 5 4 5 6 7
15 1 11 7 3 7 7 5
10 3 8 3 16 6 1 1
5 8 2 7 13 6 9 2
```

## 예제 출력 3 복사

```
76
```

## 예제 입력 4 복사

```
2 6 10 8 6 7 9 4
1 7 16 6 4 2 5 8
3 7 8 6 7 6 14 8
12 7 15 4 11 3 13 3
```

## 예제 출력 4 복사

```
39
```

## 내가 생각하는 문제 풀이 포인트

1. 시뮬레이션 문제이다. dfs 시 맵전체를 복사하는 방식이다. 삼성 문제에서 자주 나오는 방식.

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Baekjoon19236 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static final int MAP_SIZE = 4;
    static int[] dirRow ={-1,-1,0,1,1,1,0,-1};
    static int[] dirCol = {0,-1,-1,-1,0,1,1,1};
    static int[][] map = new int[MAP_SIZE][MAP_SIZE];
    static Fish[] fishes = new Fish[17];

    static int result=0;
    public static void main(String[] args) throws IOException {
        for(int i=0;i<MAP_SIZE;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            for(int j=0;j<MAP_SIZE;j++){
                int num = Integer.parseInt(st.nextToken());
                int dir = Integer.parseInt(st.nextToken())-1;
                map[i][j] = num;
                fishes[num] = new Fish(num,dir,i,j,true);
            }
        }
        //Fish shark = new Fish(-1,fishes[map[0][0]].dir,0,0);
        Fish start = fishes[map[0][0]];
        map[0][0] = -1;
        start.alive = false;

        dfs(0,0,start.dir,start.num);
        System.out.println(result);
    }

    private static void dfs(int row, int col, int dir, int sum) {
        result = Math.max(sum,result);

        int[][] copyMap = new int[MAP_SIZE][MAP_SIZE];
        Fish[] copyFishes = new Fish[17];
        for(int i=1;i<=16;i++){
            copyFishes[i] = new Fish();
        }
        copy(copyMap,copyFishes,map,fishes);
        moveFishes();
        for(int i=1;i<=3;i++){
            int nextRow = row + dirRow[dir]*i;
            int nextCol = col + dirCol[dir]*i;
            if(!isRange(nextRow, nextCol) || map[nextRow][nextCol] == 0){ //물고기 없으면 이동 못함
                continue;
            }
            int fishNum = map[nextRow][nextCol];
            int fishDir = fishes[fishNum].dir;

            map[row][col] = 0;
            map[nextRow][nextCol] = -1;
            fishes[fishNum].alive = false;
            dfs(nextRow,nextCol,fishDir,sum+fishNum);
            fishes[fishNum].alive = true;
            map[nextRow][nextCol] = fishNum;
            map[row][col] = -1;
        }
        copy(map,fishes,copyMap,copyFishes);

    }

    private static boolean isRange(int nextRow, int nextCol) {
        return !(nextRow < 0 || nextCol < 0 || nextRow >= MAP_SIZE || nextCol >= MAP_SIZE);
    }

    private static void moveFishes() {
        for(int i=1;i<=16;i++){
            if(fishes[i].alive == false)//죽은거 넘기기
                continue;
            int row = fishes[i].row;
            int col = fishes[i].col;
            int dir = fishes[i].dir;

            int nextRow = row + dirRow[dir];
            int nextCol = col + dirCol[dir];
            if(isRange(nextRow,nextCol) && map[nextRow][nextCol] !=-1){
                changeFishPos(i,nextRow,nextCol,row,col,dir);
            }
            else{
                int nextDir = (dir+1)%8;
                while(nextDir!=dir){
                    int targetRow = row+dirRow[nextDir];
                    int targetCol = col+ dirCol[nextDir];
                    if(!isRange(targetRow,targetCol)||map[targetRow][targetCol]==-1){
                        nextDir = (nextDir+1)%8;
                    }
                    else{
                        changeFishPos(i,targetRow,targetCol,row,col,nextDir);
                        break;
                    }
                }
            }
        }

    }

    private static void copy(int[][] destMap, Fish[] destFishes, int[][] srcMap, Fish[] srcFishes) {
        for(int i=1;i<=16;i++){
            destFishes[i].row = srcFishes[i].row;
            destFishes[i].col = srcFishes[i].col;
            destFishes[i].dir = srcFishes[i].dir;
            destFishes[i].num = srcFishes[i].num;
            destFishes[i].alive = srcFishes[i].alive;
        }
        for(int i=0;i<4;i++){
            for(int j=0;j<4;j++){
                destMap[i][j] = srcMap[i][j];
            }

        }
    }

    private static void changeFishPos(int i,int nextRow,int nextCol, int row, int col,int dir){
        if(map[nextRow][nextCol]==0){
            fishes[i].row = nextRow;
            fishes[i].col = nextCol;
            fishes[i].dir = dir;
            map[nextRow][nextCol] = i;
            map[row][col] = 0;
        }
        else{
            int replaceFish = map[nextRow][nextCol];
            fishes[i].row = nextRow;
            fishes[i].col = nextCol;
            fishes[i].dir = dir;

            fishes[replaceFish].row = row;
            fishes[replaceFish].col = col;
            map[row][col] = replaceFish;
            map[nextRow][nextCol] = i;
        }
    }

    static class Fish{
        int num;
        int dir;
        int row;
        int col;
        boolean alive;

        public Fish(int num, int dir, int row, int col, boolean alive) {
            this.num = num;
            this.dir = dir;
            this.row = row;
            this.col = col;
            this.alive = alive;
        }

        public Fish(int num, int dir) {
            this.num = num;
            this.dir = dir;
        }

        public Fish() {
            this.alive= true;
        }
    }
}

~~~



# 느낀점

최근 삼성이 상어를 좋아하는 것 같다.



[문제 링크](https://www.acmicpc.net/problem/19236)

