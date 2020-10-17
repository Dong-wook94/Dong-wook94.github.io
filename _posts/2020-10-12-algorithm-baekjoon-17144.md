---
layout: post
title: "[백준 17144] 미세먼지 안녕!"
subtitle: "삼성 sw 역량테스트 미세먼지 안녕!"
categories: algorithm
tags: baekjoon java algorithm 역량테스트 삼성기출
comments: true
---

# 문제설명

## 문제

미세먼지를 제거하기 위해 구사과는 공기청정기를 설치하려고 한다. 공기청정기의 성능을 테스트하기 위해 구사과는 집을 크기가 R×C인 격자판으로 나타냈고, 1×1 크기의 칸으로 나눴다. 구사과는 뛰어난 코딩 실력을 이용해 각 칸 (r, c)에 있는 미세먼지의 양을 실시간으로 모니터링하는 시스템을 개발했다. (r, c)는 r행 c열을 의미한다.

![img](https://upload.acmicpc.net/75d322ad-5a89-4301-b3a7-403fce0ff966/-/preview/)

공기청정기는 항상 1번 열에 설치되어 있고, 크기는 두 행을 차지한다. 공기청정기가 설치되어 있지 않은 칸에는 미세먼지가 있고, (r, c)에 있는 미세먼지의 양은 Ar,c이다.

1초 동안 아래 적힌 일이 순서대로 일어난다.

1. 미세먼지가 확산된다. 확산은 미세먼지가 있는 모든 칸에서 동시에 일어난다.
   - (r, c)에 있는 미세먼지는 인접한 네 방향으로 확산된다.
   - 인접한 방향에 공기청정기가 있거나, 칸이 없으면 그 방향으로는 확산이 일어나지 않는다.
   - 확산되는 양은 Ar,c/5이고 소수점은 버린다.
   - (r, c)에 남은 미세먼지의 양은 Ar,c - (Ar,c/5)×(확산된 방향의 개수) 이다.
2. 공기청정기가 작동한다.
   - 공기청정기에서는 바람이 나온다.
   - 위쪽 공기청정기의 바람은 반시계방향으로 순환하고, 아래쪽 공기청정기의 바람은 시계방향으로 순환한다.
   - 바람이 불면 미세먼지가 바람의 방향대로 모두 한 칸씩 이동한다.
   - 공기청정기에서 부는 바람은 미세먼지가 없는 바람이고, 공기청정기로 들어간 미세먼지는 모두 정화된다.

다음은 확산의 예시이다.

![img](https://upload.acmicpc.net/7b0d9d57-1296-44cd-8951-4135d27f9446/-/preview/)

왼쪽과 오른쪽에 칸이 없기 때문에, 두 방향으로만 확산이 일어났다.

![img](https://upload.acmicpc.net/cebebfa9-0056-45f1-b705-75b035888085/-/preview/)

인접한 네 방향으로 모두 확산이 일어난다.

![img](https://upload.acmicpc.net/1ed0d2e9-9767-4b94-bbde-0e1d6a2d52ff/-/preview/)

공기청정기가 있는 칸으로는 확산이 일어나지 않는다.

공기청정기의 바람은 다음과 같은 방향으로 순환한다.

![img](https://upload.acmicpc.net/94466937-96c7-4f25-9804-530ebd554a59/-/preview/)

방의 정보가 주어졌을 때, T초가 지난 후 구사과의 방에 남아있는 미세먼지의 양을 구해보자.

## 입력

첫째 줄에 R, C, T (6 ≤ R, C ≤ 50, 1 ≤ T ≤ 1,000) 가 주어진다.

둘째 줄부터 R개의 줄에 Ar,c (-1 ≤ Ar,c ≤ 1,000)가 주어진다. 공기청정기가 설치된 곳은 Ar,c가 -1이고, 나머지 값은 미세먼지의 양이다. -1은 2번 위아래로 붙어져 있고, 가장 윗 행, 아랫 행과 두 칸이상 떨어져 있다.

## 출력

첫째 줄에 T초가 지난 후 구사과 방에 남아있는 미세먼지의 양을 출력한다.

## 예제 입력 1 복사

```
7 8 1
0 0 0 0 0 0 0 9
0 0 0 0 3 0 0 8
-1 0 5 0 0 0 22 0
-1 8 0 0 0 0 0 0
0 0 0 0 0 10 43 0
0 0 5 0 15 0 0 0
0 0 40 0 0 0 20 0
```

## 예제 출력 1 복사

```
188
```

미세먼지의 확산이 일어나면 다음과 같은 상태가 된다. 

![img](https://upload.acmicpc.net/029800f5-2b4e-4c50-aa8b-8a05531bf4b5/-/preview/)

공기청정기가 작동한 이후 상태는 아래와 같다.

![img](https://upload.acmicpc.net/34960da3-6e33-4a0c-99b3-6ac7e4d67c15/-/preview/)

## 예제 입력 2 복사

```
7 8 2
0 0 0 0 0 0 0 9
0 0 0 0 3 0 0 8
-1 0 5 0 0 0 22 0
-1 8 0 0 0 0 0 0
0 0 0 0 0 10 43 0
0 0 5 0 15 0 0 0
0 0 40 0 0 0 20 0
```

## 예제 출력 2 복사

```
188
```

## 예제 입력 3 복사

```
7 8 3
0 0 0 0 0 0 0 9
0 0 0 0 3 0 0 8
-1 0 5 0 0 0 22 0
-1 8 0 0 0 0 0 0
0 0 0 0 0 10 43 0
0 0 5 0 15 0 0 0
0 0 40 0 0 0 20 0
```

## 예제 출력 3 복사

```
186
```

## 예제 입력 4 복사

```
7 8 4
0 0 0 0 0 0 0 9
0 0 0 0 3 0 0 8
-1 0 5 0 0 0 22 0
-1 8 0 0 0 0 0 0
0 0 0 0 0 10 43 0
0 0 5 0 15 0 0 0
0 0 40 0 0 0 20 0
```

## 예제 출력 4 복사

```
178
```

## 예제 입력 5 복사

```
7 8 5
0 0 0 0 0 0 0 9
0 0 0 0 3 0 0 8
-1 0 5 0 0 0 22 0
-1 8 0 0 0 0 0 0
0 0 0 0 0 10 43 0
0 0 5 0 15 0 0 0
0 0 40 0 0 0 20 0
```

## 예제 출력 5 복사

```
172
```

## 예제 입력 6 복사

```
7 8 20
0 0 0 0 0 0 0 9
0 0 0 0 3 0 0 8
-1 0 5 0 0 0 22 0
-1 8 0 0 0 0 0 0
0 0 0 0 0 10 43 0
0 0 5 0 15 0 0 0
0 0 40 0 0 0 20 0
```

## 예제 출력 6 복사

```
71
```

## 예제 입력 7 복사

```
7 8 30
0 0 0 0 0 0 0 9
0 0 0 0 3 0 0 8
-1 0 5 0 0 0 22 0
-1 8 0 0 0 0 0 0
0 0 0 0 0 10 43 0
0 0 5 0 15 0 0 0
0 0 40 0 0 0 20 0
```

## 예제 출력 7 복사

```
52
```

## 예제 입력 8 복사

```
7 8 50
0 0 0 0 0 0 0 9
0 0 0 0 3 0 0 8
-1 0 5 0 0 0 22 0
-1 8 0 0 0 0 0 0
0 0 0 0 0 10 43 0
0 0 5 0 15 0 0 0
0 0 40 0 0 0 20 0
```

## 예제 출력 8 복사

```
46
```

## 내가 생각하는 문제 풀이 포인트

1. 시뮬레이션 문제 공기청정기 위와 아래를 따로 돌렸다. 순서대로 구현하는 문제

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Baekjoon17144 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int R, C, T;
    static int[][] map;
    static Pos[] airCleaner = null;
    static int[] dirRow = {-1,0,1,0};// 반시계
    static int[] dirCol = {0,-1,0,1};

    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        R = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());
        T = Integer.parseInt(st.nextToken());
        map = new int[R][C];
        for (int i = 0; i < R; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < C; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
                if (map[i][j] == -1) {
                    if (airCleaner == null) {
                        airCleaner = new Pos[2];
                        airCleaner[0] = new Pos(i, j);
                        airCleaner[1] = new Pos(i + 1, j);
                    }
                }
            }
        }
        for(int i=0;i<T;i++){
            spreadFineDust();
            runAirCleanerTop(airCleaner[0].row-1,airCleaner[0].col,0);
            runAirCleanerBottom(airCleaner[1].row+1,airCleaner[0].col,2);
        }
        System.out.println(countMap());
    }

    private static int countMap() {
        int cnt=0;
        for(int i=0;i<R;i++) {
            for (int j = 0; j < C; j++) {
                if(map[i][j]>0)
                    cnt+=map[i][j];
            }
        }
        return cnt;
    }

    private static void printMap() {
        System.out.println("!!!!!!");
        for(int i=0;i<R;i++) {
            for (int j = 0; j < C; j++) {
                System.out.print(map[i][j]+" ");
            }
            System.out.println();
        }
    }

    private static void runAirCleanerBottom(int destRow, int destCol, int dir) { //시계
        int srcRow = destRow +dirRow[dir];
        int srcCol = destCol +dirCol[dir];
        if(srcRow == airCleaner[1].row && srcCol == airCleaner[1].col){
            map[destRow][destCol] =0;
            return;
        }
        while(srcRow<airCleaner[1].row||srcCol<0||srcRow>=R||srcCol>=C){
            dir =(dir+1)%4;
            srcRow = destRow +dirRow[dir];
            srcCol = destCol +dirCol[dir];
        }
        map[destRow][destCol] = map[srcRow][srcCol];
        runAirCleanerBottom(srcRow,srcCol,dir);
    }

    private static void runAirCleanerTop(int destRow, int destCol, int dir) { // 반시계
        int srcRow = destRow +dirRow[dir];
        int srcCol = destCol +dirCol[dir];
        if(srcRow == airCleaner[0].row && srcCol == airCleaner[0].col){
            map[destRow][destCol] =0;
            return;
        }
        while(srcRow<0||srcCol<0||srcRow>airCleaner[0].row||srcCol>=C){
            dir =(dir+3)%4;
            srcRow = destRow +dirRow[dir];
            srcCol = destCol +dirCol[dir];
        }
        map[destRow][destCol] = map[srcRow][srcCol];
        runAirCleanerTop(srcRow,srcCol,dir);
    }

    private static void spreadFineDust() {
        int[][] spreadMap = new int[R][C];
        for(int i=0;i<R;i++){
            for(int j=0;j<C;j++){
                int cnt=0;
                for(int d=0;d<4;d++){
                    int nextRow = i+dirRow[d];
                    int nextCol = j+dirCol[d];
                    if(nextRow<0 || nextCol<0 || nextRow>=R || nextCol>=C) continue;
                    if(map[nextRow][nextCol]==-1) continue;

                    spreadMap[nextRow][nextCol] += (map[i][j]/5);
                    cnt++;
                }
                spreadMap[i][j] += (map[i][j] - (map[i][j]/5)*cnt);
            }
        }
        map = spreadMap;
    }

    static class Pos {
        int row;
        int col;

        public Pos(int row, int col) {
            this.row = row;
            this.col = col;
        }
    }

}

~~~



# 느낀점

시뮬레이션 문제는 기능별로 함수를 만들어놓고 구현하는게 좋은것 같다.



[문제 링크](https://www.acmicpc.net/problem/17144)

