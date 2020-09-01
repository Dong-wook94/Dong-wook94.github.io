---
layout: post
title: "[2020 카카오 인턴십] 경주로 건설"
subtitle: "2020 카카오 인턴십 4번문제"
categories: algorithm
tags: programmers java algorithm backtracking dis
comments: true
---

## 문제 설명 

![kakao_road1.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/384b9e2a-4eb5-460d-bce2-d12359b03b14/kakao_road1.png)

건설회사의 설계사인 `죠르디`는 고객사로부터 자동차 경주로 건설에 필요한 견적을 의뢰받았습니다.
제공된 경주로 설계 도면에 따르면 경주로 부지는 `N x N` 크기의 정사각형 격자 형태이며 각 격자는 `1 x 1` 크기입니다.
설계 도면에는 각 격자의 칸은 `0` 또는 `1` 로 채워져 있으며, `0`은 칸이 비어 있음을 `1`은 해당 칸이 벽으로 채워져 있음을 나타냅니다.
경주로의 출발점은 (0, 0) 칸(좌측 상단)이며, 도착점은 (N-1, N-1) 칸(우측 하단)입니다. 죠르디는 출발점인 (0, 0) 칸에서 출발한 자동차가 도착점인 (N-1, N-1) 칸까지 무사히 도달할 수 있게 중간에 끊기지 않도록 경주로를 건설해야 합니다.
경주로는 상, 하, 좌, 우로 인접한 두 빈 칸을 연결하여 건설할 수 있으며, 벽이 있는 칸에는 경주로를 건설할 수 없습니다.
이때, 인접한 두 빈 칸을 상하 또는 좌우로 연결한 경주로를 `직선 도로` 라고 합니다.
또한 두 `직선 도로`가 서로 직각으로 만나는 지점을 `코너` 라고 부릅니다.
건설 비용을 계산해 보니 `직선 도로` 하나를 만들 때는 100원이 소요되며, `코너`를 하나 만들 때는 500원이 추가로 듭니다.
죠르디는 견적서 작성을 위해 경주로를 건설하는 데 필요한 최소 비용을 계산해야 합니다.

예를 들어, 아래 그림은 `직선 도로` 6개와 `코너` 4개로 구성된 임의의 경주로 예시이며, 건설 비용은 6 x 100 + 4 x 500 = 2600원 입니다.

![kakao_road2.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/0e0911e8-f88e-44fe-8bdc-6856a56df8e0/kakao_road2.png)

또 다른 예로, 아래 그림은 `직선 도로` 4개와 `코너` 1개로 구성된 경주로이며, 건설 비용은 4 x 100 + 1 x 500 = 900원 입니다.

![kakao_road3.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/3f5d9c5e-d7d9-4248-b111-140a0847e741/kakao_road3.png)

------

도면의 상태(0은 비어 있음, 1은 벽)을 나타내는 2차원 배열 board가 매개변수로 주어질 때, 경주로를 건설하는데 필요한 최소 비용을 return 하도록 solution 함수를 완성해주세요.

##### **[제한사항]**

- board는 2차원 정사각 배열로 배열의 크기는 3 이상 25 이하입니다.
- board 배열의 각 원소의 값은 0 또는 1 입니다.
  - 도면의 가장 왼쪽 상단 좌표는 (0, 0)이며, 가장 우측 하단 좌표는 (N-1, N-1) 입니다.
  - 원소의 값 0은 칸이 비어 있어 도로 연결이 가능함을 1은 칸이 벽으로 채워져 있어 도로 연결이 불가능함을 나타냅니다.
- board는 항상 출발점에서 도착점까지 경주로를 건설할 수 있는 형태로 주어집니다.
- 출발점과 도착점 칸의 원소의 값은 항상 0으로 주어집니다.

------

##### **입출력 예**

| board                                                        | result |
| ------------------------------------------------------------ | ------ |
| [[0,0,0],[0,0,0],[0,0,0]]                                    | 900    |
| [[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,1],[0,0,1,0,0,0,1,0],[0,1,0,0,0,1,0,0],[1,0,0,0,0,0,0,0]] | 3800   |
| [[0,0,1,0],[0,0,0,0],[0,1,0,1],[1,0,0,0]]                    | 2100   |
| [[0,0,0,0,0,0],[0,1,1,1,1,0],[0,0,1,0,0,0],[1,0,0,1,0,1],[0,1,0,0,0,1],[0,0,0,0,0,0]] | 3200   |

##### **입출력 예에 대한 설명**

**입출력 예 #1**

본문의 예시와 같습니다.

**입출력 예 #2**

![kakao_road4.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/ccc72e9c-2e22-4a09-a94b-ff057b081a70/kakao_road4.png)

위와 같이 경주로를 건설하면 `직선 도로` 18개, `코너` 4개로 총 3800원이 듭니다.

**입출력 예 #3**

![kakao_road5.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/422e86e0-a7d7-4a09-9b42-2b6218a9b5f0/kakao_road5.png)

위와 같이 경주로를 건설하면 `직선 도로` 6개, `코너` 3개로 총 2100원이 듭니다.

**입출력 예 #4**

![kakao_road6.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/4fe42f47-2592-4cb8-91fb-31d6a6da8639/kakao_road6.png)

붉은색 경로와 같이 경주로를 건설하면 `직선 도로` 12개, `코너` 4개로 총 3200원이 듭니다.
만약, 파란색 경로와 같이 경주로를 건설한다면 `직선 도로` 10개, `코너` 5개로 총 3500원이 들며, 더 많은 비용이 듭니다.

## 내가 생각하는 문제 풀이 포인트

1. 백트래킹
   1. 메모제이션을 이용하여 굳이 안가도 되는 길을 파악하여 가지치기한다.
   2. 그러므로 탐색방법은 당연히 dfs!

## 코드

~~~java
class Solution {
    static int[] dirRow = {0, 1, 0, -1};
    static int[] dirCol = {1, 0, -1, 0};
    static boolean[][] visited;
    static int[][] minCost;
    static final int VER = 0;
    static final int HOR = 1;
    static int answer;


    public static void dfs(int[][] board, int row, int col, int cost, int dir) {
        //종료조건
        if (row == board.length - 1 && col == board.length - 1) {
            answer  = Math.min(answer, cost);
            return;
        }
        if(cost>answer)
            return;
        if(minCost[row][col]<cost)
            return;

        //System.out.println(row+","+col+ " : "+cost);
        for (int i = 0; i < 4; i++) {
            int nextRow = row + dirRow[i];
            int nextCol = col + dirCol[i];
            if (nextRow >= 0 && nextCol >= 0 && nextRow < board.length && nextCol < board.length && board[nextRow][nextCol] == 0 && !visited[nextRow][nextCol]) {
                visited[nextRow][nextCol] = true;
                if (dir == -1 || dir == (i % 2)) { //기존방향 없거나 같은 경우.
                    if (minCost[nextRow][nextCol] >= cost + 100) {
                        minCost[nextRow][nextCol] = cost + 100;
                        dfs(board, nextRow, nextCol, cost + 100, i % 2);
                    }
                } else {
                    if (minCost[nextRow][nextCol] >=cost + 600) {
                        minCost[nextRow][nextCol] = cost + 600;
                        dfs(board, nextRow, nextCol, cost + 600, i % 2);
                    }
                }
                visited[nextRow][nextCol] = false;
            }
        }
    }

    public int solution(int[][] board) {
        answer = Integer.MAX_VALUE;
        int boardSize = board.length;
        visited = new boolean[boardSize][boardSize];
        minCost = new int[boardSize][boardSize];
        for(int i=0;i<boardSize;i++){
            for(int j=0;j<boardSize;j++){
                minCost[i][j] = Integer.MAX_VALUE;
            }
        }

        dfs(board, 0,0,0,-1);

        return answer;
    }
}
~~~



## 느낀점

당시 문제는 풀었지만 바로 백트래킹을 떠올리진 못했다. 다른 분들은 bfs나 다른 방법으로도 푸신 분들이 많은 것같다. 

나는 방문한 칸을 다시방문하기위해 dfs를 쓴 것인데 bfs를 이용해서도 방문체크대신 메모제이션을 이용하여 아마 풀면 bfs도 괜찮은 해결 방법이 될것 같다.



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/67259)

