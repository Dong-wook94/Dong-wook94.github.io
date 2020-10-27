---
layout: post
title: "[백준 17142] 연구소3"
subtitle: "삼성 sw 역량테스트 연구소3"
categories: algorithm
tags: baekjoon java algorithm 역량테스트 삼성기출
comments: true
---

# 문제설명

## 문제

인체에 치명적인 바이러스를 연구하던 연구소에 승원이가 침입했고, 바이러스를 유출하려고 한다. 바이러스는 활성 상태와 비활성 상태가 있다. 가장 처음에 모든 바이러스는 비활성 상태이고, 활성 상태인 바이러스는 상하좌우로 인접한 모든 빈 칸으로 동시에 복제되며, 1초가 걸린다. 승원이는 연구소의 바이러스 M개를 활성 상태로 변경하려고 한다.

연구소는 크기가 N×N인 정사각형으로 나타낼 수 있으며, 정사각형은 1×1 크기의 정사각형으로 나누어져 있다. 연구소는 빈 칸, 벽, 바이러스로 이루어져 있으며, 벽은 칸 하나를 가득 차지한다. 활성 바이러스가 비활성 바이러스가 있는 칸으로 가면 비활성 바이러스가 활성으로 변한다.

예를 들어, 아래와 같이 연구소가 생긴 경우를 살펴보자. 0은 빈 칸, 1은 벽, 2는 바이러스의 위치이다.

```
2 0 0 0 1 1 0
0 0 1 0 1 2 0
0 1 1 0 1 0 0
0 1 0 0 0 0 0
0 0 0 2 0 1 1
0 1 0 0 0 0 0
2 1 0 0 0 0 2
```

M = 3이고, 바이러스를 아래와 같이 활성 상태로 변경한 경우 6초면 모든 칸에 바이러스를 퍼뜨릴 수 있다. 벽은 -, 비활성 바이러스는 *, 활성 바이러스는 0, 빈 칸은 바이러스가 퍼지는 시간으로 표시했다.

```
* 6 5 4 - - 2
5 6 - 3 - 0 1
4 - - 2 - 1 2
3 - 2 1 2 2 3
2 2 1 0 1 - -
1 - 2 1 2 3 4
0 - 3 2 3 4 *
```

시간이 최소가 되는 방법은 아래와 같고, 4초만에 모든 칸에 바이러스를 퍼뜨릴 수 있다.

```
0 1 2 3 - - 2
1 2 - 3 - 0 1
2 - - 2 - 1 2
3 - 2 1 2 2 3
3 2 1 0 1 - -
4 - 2 1 2 3 4
* - 3 2 3 4 *
```

연구소의 상태가 주어졌을 때, 모든 빈 칸에 바이러스를 퍼뜨리는 최소 시간을 구해보자.

## 입력

첫째 줄에 연구소의 크기 N(4 ≤ N ≤ 50), 놓을 수 있는 바이러스의 개수 M(1 ≤ M ≤ 10)이 주어진다.

둘째 줄부터 N개의 줄에 연구소의 상태가 주어진다. 0은 빈 칸, 1은 벽, 2는 바이러스를 놓을 수 있는 위치이다. 2의 개수는 M보다 크거나 같고, 10보다 작거나 같은 자연수이다.

## 출력

연구소의 모든 빈 칸에 바이러스가 있게 되는 최소 시간을 출력한다. 바이러스를 어떻게 놓아도 모든 빈 칸에 바이러스를 퍼뜨릴 수 없는 경우에는 -1을 출력한다.

## 예제 입력 1 복사

```
7 3
2 0 0 0 1 1 0
0 0 1 0 1 2 0
0 1 1 0 1 0 0
0 1 0 0 0 0 0
0 0 0 2 0 1 1
0 1 0 0 0 0 0
2 1 0 0 0 0 2
```

## 예제 출력 1 복사

```
4
```

## 예제 입력 2 복사

```
7 3
2 0 2 0 1 1 0
0 0 1 0 1 2 0
0 1 1 2 1 0 0
2 1 0 0 0 0 2
0 0 0 2 0 1 1
0 1 0 0 0 0 0
2 1 0 0 2 0 2
```

## 예제 출력 2 복사

```
4
```

## 예제 입력 3 복사

```
7 4
2 0 2 0 1 1 0
0 0 1 0 1 2 0
0 1 1 2 1 0 0
2 1 0 0 0 0 2
0 0 0 2 0 1 1
0 1 0 0 0 0 0
2 1 0 0 2 0 2
```

## 예제 출력 3 복사

```
4
```

## 예제 입력 4 복사

```
7 5
2 0 2 0 1 1 0
0 0 1 0 1 2 0
0 1 1 2 1 0 0
2 1 0 0 0 0 2
0 0 0 2 0 1 1
0 1 0 0 0 0 0
2 1 0 0 2 0 2
```

## 예제 출력 4 복사

```
3
```

## 예제 입력 5 복사

```
7 3
2 0 2 0 1 1 0
0 0 1 0 1 0 0
0 1 1 1 1 0 0
2 1 0 0 0 0 2
1 0 0 0 0 1 1
0 1 0 0 0 0 0
2 1 0 0 2 0 2
```

## 예제 출력 5 복사

```
7
```

## 예제 입력 6 복사

```
7 2
2 0 2 0 1 1 0
0 0 1 0 1 0 0
0 1 1 1 1 0 0
2 1 0 0 0 0 2
1 0 0 0 0 1 1
0 1 0 0 0 0 0
2 1 0 0 2 0 2
```

## 예제 출력 6 복사

```
-1
```

## 예제 입력 7 복사

```
5 1
2 2 2 1 1
2 1 1 1 1
2 1 1 1 1
2 1 1 1 1
2 2 2 1 1
```

## 예제 출력 7 복사

```
0
```

## 내가 생각하는 문제 풀이 포인트

1. 바이러스중 m개 고르기 -> DFS
2. 바이러스 확산 -> BFS

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Baekjoon17142 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int N, M;
    static int[][] map;
    static int blankCnt = 0;
    static ArrayList<Virus> virus;
    static boolean[] choice;
    static int dirRow[] = {-1, 0, 1, 0};
    static int dirCol[] = {0, -1, 0, 1};
    static int minTime = 5000;

    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        virus = new ArrayList<>();
        map = new int[N][N];
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < N; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
                if (map[i][j] == 0) {
                    blankCnt++;
                } else if (map[i][j] == 2) {
                    virus.add(new Virus(i, j));
                }
            }
        }
        if(blankCnt==0){
            System.out.println(0);
            return;
        }
        choice = new boolean[virus.size()];
        dfs(0, 0);
        if(minTime==5000)
            minTime = -1;
        System.out.println(minTime);
    }

    private static void dfs(int depth, int cnt) {
        if (cnt == M) {
            bfs();
            return;
        } else if (virus.size() == depth) {
            return;
        }
        choice[depth] = true;
        dfs(depth + 1, cnt + 1);
        choice[depth] = false;
        dfs(depth + 1, cnt);

    }

    private static void bfs() {
        int cnt=0;
        Queue<Virus> q = new LinkedList<>();
        int[][] copyMap = new int[N][N];
        for(int i=0;i<N;i++){
            for(int j=0;j<N;j++){
                copyMap[i][j] = map[i][j];
            }
        }
        for (int i = 0; i < choice.length; i++) {
            if (choice[i]){
                q.offer(virus.get(i));
                copyMap[virus.get(i).row][virus.get(i).col] = 3;
            }

        }

        while (!q.isEmpty()) {
            Virus cur = q.poll();
            for (int i = 0; i < 4; i++) {
                int nextRow = cur.row + dirRow[i];
                int nextCol = cur.col + dirCol[i];

                if(!isRange(nextRow,nextCol) || copyMap[nextRow][nextCol]==1 || copyMap[nextRow][nextCol]==3) continue;

                if(copyMap[nextRow][nextCol]!=2)
                    cnt++;
                copyMap[nextRow][nextCol] = 3;

                if(blankCnt == cnt)
                    minTime = Math.min(minTime,cur.time+1);
                q.offer(new Virus(nextRow,nextCol,cur.time+1));
            }
        }
    }

    private static boolean isRange(int nextRow, int nextCol) {
        return nextRow>=0 &&nextCol>=0 && nextRow<N && nextCol<N;
    }

    static class Virus {
        int row, col, time;

        public Virus(int row, int col) {
            this.row = row;
            this.col = col;
            this.time = 0;
        }

        public Virus(int row, int col, int time) {
            this.row = row;
            this.col = col;
            this.time = time;
        }
    }
}

~~~



# 느낀점

DFS와 BFS를 모두 사용하는 문제.



[문제 링크](https://www.acmicpc.net/problem/17142)

