---
layout: post
title: "[백준 17837] 새로운게임2"
subtitle: "삼성 sw 역량테스트 새로운게임2"
categories: algorithm
tags: baekjoon java algorithm 역량테스트 삼성기출
comments: true

---

# 문제설명

## 문제

재현이는 주변을 살펴보던 중 체스판과 말을 이용해서 새로운 게임을 만들기로 했다. 새로운 게임은 크기가 N×N인 체스판에서 진행되고, 사용하는 말의 개수는 K개이다. 말은 원판모양이고, 하나의 말 위에 다른 말을 올릴 수 있다. 체스판의 각 칸은 흰색, 빨간색, 파란색 중 하나로 색칠되어있다.

게임은 체스판 위에 말 K개를 놓고 시작한다. 말은 1번부터 K번까지 번호가 매겨져 있고, 이동 방향도 미리 정해져 있다. 이동 방향은 위, 아래, 왼쪽, 오른쪽 4가지 중 하나이다.

턴 한 번은 1번 말부터 K번 말까지 순서대로 이동시키는 것이다. 한 말이 이동할 때 위에 올려져 있는 말도 함께 이동한다. 말의 이동 방향에 있는 칸에 따라서 말의 이동이 다르며 아래와 같다. 턴이 진행되던 중에 말이 4개 이상 쌓이는 순간 게임이 종료된다.

- A번 말이 이동하려는 칸이
  - 흰색인 경우에는 그 칸으로 이동한다. 이동하려는 칸에 말이 이미 있는 경우에는 가장 위에 A번 말을 올려놓는다.
    - A번 말의 위에 다른 말이 있는 경우에는 A번 말과 위에 있는 모든 말이 이동한다.
    - 예를 들어, A, B, C로 쌓여있고, 이동하려는 칸에 D, E가 있는 경우에는 A번 말이 이동한 후에는 D, E, A, B, C가 된다.
  - 빨간색인 경우에는 이동한 후에 A번 말과 그 위에 있는 모든 말의 쌓여있는 순서를 반대로 바꾼다.
    - A, B, C가 이동하고, 이동하려는 칸에 말이 없는 경우에는 C, B, A가 된다.
    - A, D, F, G가 이동하고, 이동하려는 칸에 말이 E, C, B로 있는 경우에는 E, C, B, G, F, D, A가 된다.
  - 파란색인 경우에는 A번 말의 이동 방향을 반대로 하고 한 칸 이동한다. 방향을 반대로 바꾼 후에 이동하려는 칸이 파란색인 경우에는 이동하지 않고 가만히 있는다.
  - 체스판을 벗어나는 경우에는 파란색과 같은 경우이다.

다음은 크기가 4×4인 체스판 위에 말이 4개 있는 경우이다.

![img](https://upload.acmicpc.net/0aec7e3d-e8f5-428a-bebc-6a0fd514b387/-/preview/)

첫 번째 턴은 다음과 같이 진행된다.

| ![img](https://upload.acmicpc.net/46796304-b486-4420-9d2c-ea49e2d5665b/-/preview/) | ![img](https://upload.acmicpc.net/04643ced-fdfd-46f5-a07e-374704dbb1c5/-/preview/) | ![img](https://upload.acmicpc.net/46f4bfab-841b-41c8-842e-56027816f846/-/preview/) | ![img](https://upload.acmicpc.net/fcccf76c-9431-4ff5-8a05-7dbd2feff142/-/preview/) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |                                                              |

두 번째 턴은 다음과 같이 진행된다.

| ![img](https://upload.acmicpc.net/36568153-8c2a-4fe9-b45f-72036c97f5aa/-/preview/) | ![img](https://upload.acmicpc.net/babead43-4acc-425d-917a-54dcc6f45414/-/preview/) | ![img](https://upload.acmicpc.net/1edd5ed8-0f4c-4c6d-b304-3b7642f42c6f/-/preview/) | ![img](https://upload.acmicpc.net/028a5dd2-5524-4475-8439-9e7794e28ee4/-/preview/) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |                                                              |

체스판의 크기와 말의 위치, 이동 방향이 모두 주어졌을 때, 게임이 종료되는 턴의 번호를 구해보자.

## 입력

첫째 줄에 체스판의 크기 N, 말의 개수 K가 주어진다. 둘째 줄부터 N개의 줄에 체스판의 정보가 주어진다. 체스판의 정보는 정수로 이루어져 있고, 각 정수는 칸의 색을 의미한다. 0은 흰색, 1은 빨간색, 2는 파란색이다.

다음 K개의 줄에 말의 정보가 1번 말부터 순서대로 주어진다. 말의 정보는 세 개의 정수로 이루어져 있고, 순서대로 행, 열의 번호, 이동 방향이다. 행과 열의 번호는 1부터 시작하고, 이동 방향은 4보다 작거나 같은 자연수이고 1부터 순서대로 →, ←, ↑, ↓의 의미를 갖는다.

같은 칸에 말이 두 개 이상 있는 경우는 입력으로 주어지지 않는다.

## 출력

게임이 종료되는 턴의 번호를 출력한다. 그 값이 1,000보다 크거나 절대로 게임이 종료되지 않는 경우에는 -1을 출력한다.

## 제한

- 4 ≤ N ≤ 12
- 4 ≤ K ≤ 10

## 예제 입력 1 복사

```
4 4
0 0 2 0
0 0 1 0
0 0 1 2
0 2 0 0
2 1 1
3 2 3
2 2 1
4 1 2
```

## 예제 출력 1 복사

```
-1
```

## 예제 입력 2 복사

```
4 4
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
1 1 1
1 2 1
1 3 1
1 4 1
```

## 예제 출력 2 복사

```
1
```

## 예제 입력 3 복사

```
4 4
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
1 1 1
1 2 1
1 3 1
2 4 3
```

## 예제 출력 3 복사

```
1
```

## 예제 입력 4 복사

```
4 4
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
1 1 1
1 2 1
1 3 1
3 3 3
```

## 예제 출력 4 복사

```
2
```

## 예제 입력 5 복사

```
6 10
0 1 2 0 1 1
1 2 0 1 1 0
2 1 0 1 1 0
1 0 1 1 0 2
2 0 1 2 0 1
0 2 1 0 2 1
1 1 1
2 2 2
3 3 4
4 4 1
5 5 3
6 6 2
1 6 3
6 1 2
2 4 3
4 2 1
```

## 예제 출력 5 복사

```
7
```

## 내가 생각하는 문제 풀이 포인트

1. 시뮬레이션 문제이다. 턴마다 모든말들의 정보에 맞게 이동시킨다.

# 코드

~~~java
import java.io.*;
import java.util.*;


public class Main {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
	static int N, K;
	static final int WHITE = 0;
	static final int RED = 1;
	static final int BLUE = 2;
	static int[] dirRow = {0,0,-1,1};
	static int[] dirCol = {1,-1,0,0};
	static MapInfo[][] map;
	static Chess[] chesses;
	static int turn=0;
	public static void main(String[] args) throws IOException {
		StringTokenizer st = new StringTokenizer(br.readLine());
	
		N = Integer.parseInt(st.nextToken());
		K = Integer.parseInt(st.nextToken());
		map = new MapInfo[N+1][N+1];
		chesses = new Chess[K];
		for(int i=1;i<=N;i++) {
			st = new StringTokenizer(br.readLine());
			for(int j=1;j<=N;j++) {
				int c = Integer.parseInt(st.nextToken());
				map[i][j] = new MapInfo(c,new ArrayList<>());
			}
		}
		
		for(int i=0;i<K;i++) {
			st = new StringTokenizer(br.readLine());
			int r = Integer.parseInt(st.nextToken());
			int c = Integer.parseInt(st.nextToken());
			int d = Integer.parseInt(st.nextToken())-1;
			chesses[i] = new Chess(r,c,d);
			map[r][c].state.add(i);
		}
		
		while(true) {
			turn++;
			if(turn >=1000) {
				turn=-1;
				break;
			}
			if(!playTurn()) {
				break;
			};
			
		}
		System.out.println(turn);
	}
	
	private static boolean end() {
		for(Chess chess : chesses) {
			if(map[chess.row][chess.col].state.size()>=4) {
				return true;
			}
		}
		return false;
	}

	private static boolean playTurn() {
		boolean clear= true;
		for(int i=0;i<chesses.length;i++) {
			int row = chesses[i].row;
			int col = chesses[i].col;
			int dir = chesses[i].dir;
			
			int nextRow = row + dirRow[dir];
			int nextCol = col + dirCol[dir];
			
			if(!isRange(nextRow,nextCol)||map[nextRow][nextCol].color==BLUE) {
				chesses[i].dir = changeDir(dir);
				dir = chesses[i].dir;
				nextRow = row + dirRow[dir];
				nextCol = col + dirCol[dir];
				if(!isRange(nextRow,nextCol)||map[nextRow][nextCol].color==BLUE) {
					continue;
				}
			}
			
			if(map[nextRow][nextCol].color==WHITE) {
				//이동할 말들 리스트에 모으기
				List<Integer> moveList = getMoveList(row,col,i);
				//이동시키기//위치정보 갱신//쌓기
				moveToNextPos(nextRow,nextCol,moveList);
			}else if(map[nextRow][nextCol].color==RED) {
				//이동할 말들 정하기
				List<Integer> moveList = getMoveList(row,col,i);
				//이동할 말들 뒤집기
				Collections.reverse(moveList);
				//이동시키기
				//위치정보 갱신
				//말 쌓기 
				moveToNextPos(nextRow,nextCol,moveList);
			}
			if(end()) {
				return false;
			}
			//printMap();
		}
		return true;
	}

	private static void printMap() {
		// TODO Auto-generated method stub
		int idx=0;
		for(Chess c : chesses) {
			System.out.println(idx+" : "+c.toString());
			idx++;
		}
		for(int i=1;i<=N;i++) {
			
			for(int j=1;j<=N;j++) {
				System.out.print("(");
				for(int k :map[i][j].state) {
					System.out.print(k+" ");
				}
				System.out.print(")");
			}
			System.out.println();
		}
	}

	private static void moveToNextPos(int nextRow, int nextCol, List<Integer> moveList) {
		for(int horse:moveList) {
			map[nextRow][nextCol].state.add(horse);
			chesses[horse].row = nextRow;
			chesses[horse].col = nextCol;
		}
	}

	private static List<Integer> getMoveList(int row, int col, int i) {
		List<Integer> list = new ArrayList<>();
		List<Integer> remain = new ArrayList<>();
		boolean move = false;
		for(int horse: map[row][col].state) {
			if(move) {
				list.add(horse);
			}else {
				if(horse == i) {
					move = true;
					list.add(horse);
				}else {
					remain.add(horse);
				}
			}
		}
		
		map[row][col].state = remain;
		 
		return list;
	}

	private static int changeDir(int dir) {
		return (dir%2==0)?dir+1:dir-1;
	}

	private static boolean isRange(int nextRow, int nextCol) {
		return nextRow>=1 && nextCol>=1 && nextRow <=N && nextCol <=N;
	}

	static class MapInfo{
		int color;
		List<Integer> state;
		public MapInfo(int color, List<Integer> state) {
			this.color = color;
			this.state = state;
		}
		
	}
	
	static class Chess{
		int row,col,dir;

		public Chess(int row, int col, int dir) {
			this.row = row;
			this.col = col;
			this.dir = dir;
		}

		@Override
		public String toString() {
			return "Chess [row=" + row + ", col=" + col + ", dir=" + dir + "]";
		}
		
	}
}

~~~



# 느낀점

단순한 시뮬레이션 문제.



[문제 링크](https://www.acmicpc.net/problem/17837)

