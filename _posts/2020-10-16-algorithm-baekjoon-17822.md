---
layout: post
title: "[백준 17822] 원판돌리기"
subtitle: "삼성 sw 역량테스트 원판돌리기"
categories: algorithm
tags: baekjoon java algorithm 역량테스트 삼성기출
comments: true

---

# 문제설명

## 문제

반지름이 1, 2, ..., N인 원판이 크기가 작아지는 순으로 바닥에 놓여있고, 원판의 중심은 모두 같다. 원판의 반지름이 i이면, 그 원판을 i번째 원판이라고 한다. 각각의 원판에는 M개의 정수가 적혀있고, i번째 원판에 적힌 j번째 수의 위치는 (i, j)로 표현한다. 수의 위치는 다음을 만족한다.

- (i, 1)은 (i, 2), (i, M)과 인접하다.
- (i, M)은 (i, M-1), (i, 1)과 인접하다.
- (i, j)는 (i, j-1), (i, j+1)과 인접하다. (2 ≤ j ≤ M-1)
- (1, j)는 (2, j)와 인접하다.
- (N, j)는 (N-1, j)와 인접하다.
- (i, j)는 (i-1, j), (i+1, j)와 인접하다. (2 ≤ i ≤ N-1)

아래 그림은 N = 3, M = 4인 경우이다.

![img](https://upload.acmicpc.net/5968435b-a1af-4e2a-a612-baff989f44b2/-/preview/)

원판의 회전은 독립적으로 이루어진다. 2번 원판을 회전했을 때, 나머지 원판은 회전하지 않는다. 원판을 회전시킬 때는 수의 위치를 기준으로 하며, 회전시킨 후의 수의 위치는 회전시키기 전과 일치해야 한다.

다음 그림은 원판을 회전시킨 예시이다.

| ![img](https://upload.acmicpc.net/977a4e67-5aa7-40d4-92ee-5f59ac75aadb/-/preview/) | ![img](https://upload.acmicpc.net/f2c1e70b-0a84-46c3-b38d-f7395219b00a/-/preview/) | ![img](https://upload.acmicpc.net/39d57771-6162-49f5-97b7-0d9fd8911222/-/preview/) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1번 원판을 시계 방향으로 1칸 회전                            | 2, 3번 원판을 반시계 방향으로 3칸 회전                       | 1, 3번 원판을 시계 방향으로 2칸 회전                         |

원판을 아래와 같은 방법으로 총 T번 회전시키려고 한다. 원판의 회전 방법은 미리 정해져 있고, i번째 회전할때 사용하는 변수는 xi, di, ki이다.

1. 번호가 xi의 배수인 원판을 di방향으로 ki칸 회전시킨다. di가 0인 경우는 시계 방향, 1인 경우는 반시계 방향이다.
2. 원판에 수가 남아 있으면, 인접하면서 수가 같은 것을 모두 찾는다.
   1. 그러한 수가 있는 경우에는 원판에서 인접하면서 같은 수를 모두 지운다.
   2. 없는 경우에는 원판에 적힌 수의 평균을 구하고, 평균보다 큰 수에서 1을 빼고, 작은 수에는 1을 더한다.

원판을 T번 회전시킨 후 원판에 적힌 수의 합을 구해보자.

## 입력

첫째 줄에 N, M, T이 주어진다.

둘째 줄부터 N개의 줄에 원판에 적힌 수가 주어진다. i번째 줄의 j번째 수는 (i, j)에 적힌 수를 의미한다.

다음 T개의 줄에 xi, di, ki가 주어진다.

## 출력

원판을 T번 회전시킨 후 원판에 적힌 수의 합을 출력한다.

## 제한

- 2 ≤ N, M ≤ 50
- 1 ≤ T ≤ 50
- 1 ≤ 원판에 적힌 수 ≤ 1,000
- 2 ≤ xi ≤ N
- 0 ≤ di ≤ 1
- 1 ≤ ki < M

## 예제 입력 1 복사

```
4 4 1
1 1 2 3
5 2 4 2
3 1 3 5
2 1 3 2
2 0 1
```

## 예제 출력 1 복사

```
30
```

원판의 초기 상태는 다음과 같다.

![img](https://upload.acmicpc.net/3306b622-c885-4b6e-abab-baa52eaf2d22/-/preview/)

| ![img](https://upload.acmicpc.net/6374fb88-a46d-40b7-b692-dbc9d2abe75f/-/preview/) | ![img](https://upload.acmicpc.net/196cd4ac-1c4e-4cd3-b714-0672e115aa69/-/preview/) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| x1 = 2, d1 = 0, k1 = 12번, 4번 원판을 시계 방향으로 1칸 돌린 후 | 인접하면서 수가 같은 것을 모두 지운 후                       |

## 예제 입력 2 복사

```
4 4 2
1 1 2 3
5 2 4 2
3 1 3 5
2 1 3 2
2 0 1
3 1 3
```

## 예제 출력 2 복사

```
22
```

예제 1에서 이어진다.

| ![img](https://upload.acmicpc.net/8dbd0c76-cfac-4852-bbb1-77763051e26b/-/preview/) | ![img](https://upload.acmicpc.net/955577a2-d3ec-413d-8341-59dbf1bf23c3/-/preview/) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| x2 = 3, d2 = 1, k2 = 33번 원판을 반시계 방향으로 3칸 돌린 후 | 인접하면서 수가 같은 것을 모두 지운 후                       |

## 예제 입력 3 복사

```
4 4 3
1 1 2 3
5 2 4 2
3 1 3 5
2 1 3 2
2 0 1
3 1 3
2 0 2
```

## 예제 출력 3 복사

```
22
```

예제 2에서 이어진다.

| ![img](https://upload.acmicpc.net/74c7928f-1eaa-45bd-a2a6-f762705ef0a9/-/preview/) | ![img](https://upload.acmicpc.net/5a8c5371-1fca-45b0-909b-4f62b8fe058e/-/preview/) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| x3 = 2, d3 = 0, k3 = 22, 4번 원판을 시계 방향으로 2칸 돌린 후 | 인접하면서 수가 같은 것이 없다.따라서, 평균 22/6 보다 작은 수는 +1, 큰 수는 -1 했다. |

## 예제 입력 4 복사

```
4 4 4
1 1 2 3
5 2 4 2
3 1 3 5
2 1 3 2
2 0 1
3 1 3
2 0 2
3 1 1
```

## 예제 출력 4 복사

```
0
```

예제 3에서 이어진다.

| ![img](https://upload.acmicpc.net/9eaff649-6149-4e82-958d-dd32c75cf93c/-/preview/) | ![img](https://upload.acmicpc.net/84bae2b9-22c6-4da5-b9b2-c2a85e7af707/-/preview/) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| x4 = 3, d4 = 1, k4 = 13번 원판을 반시계 방향으로 1칸 돌린 후 | 인접하면서 수가 같은 것을 모두 지운 후                       |

## 예제 입력 5 복사

```
4 6 3
1 2 3 4 5 6
2 3 4 5 6 7
3 4 5 6 7 8
4 5 6 7 8 9
2 1 4
3 0 1
2 1 2
```

## 예제 출력 5 복사

```
26
```

## 내가 생각하는 문제 풀이 포인트

1. 시뮬레이션 문제이다. 원판이라 처음과 끝은 연결되어있음을 생각해야된다.

# 코드

~~~java
import java.util.*;

import java.io.*;


public class Main {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static int N, M,T;
	static int[][] disk;
	static boolean[][] visited;
	static boolean isChanged = false;
	static int[] dirRow = {1,0,-1,0};
	static int[] dirCol = {0,-1,0,1};
	public static void main(String[] args) throws IOException {
		StringTokenizer st = new StringTokenizer(br.readLine());
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		T = Integer.parseInt(st.nextToken());
		
		disk = new int[N+1][M+1];
		
		for(int i=1;i<=N;i++) {
			st = new StringTokenizer(br.readLine());
			for(int j=1;j<=M;j++) {
				disk[i][j] = Integer.parseInt(st.nextToken());
			}
		}
		for(int t=0;t<T;t++) {
			st = new StringTokenizer(br.readLine());
			int x = Integer.parseInt(st.nextToken());//배수
			int d = Integer.parseInt(st.nextToken());//방향
			int k = Integer.parseInt(st.nextToken());//회전수
			
			turnDisk(x,d,k);
			eraseNums();
		}
		
		int sum=0;
		for(int i=1;i<=N;i++) {
			for(int j=1;j<=M;j++) {
				sum += disk[i][j];
			}
		}
		System.out.println(sum);
	}
	private static void eraseNums() {
		isChanged = false;
		visited = new boolean[N+1][M+1];
		
		for(int i=1;i<=N;i++) {
			for(int j=1;j<=M;j++) {
				if(disk[i][j]!=0) {
					dfs(i,j,disk[i][j]);
				}
			}
		}
		if(!isChanged) {
			int sum = 0;
			int cnt=0;
			for(int i=1;i<=N;i++) {
				for(int j=1;j<=M;j++) {
					if(disk[i][j]>0) {
						sum +=disk[i][j];
						cnt++;
					}
				}
			}
			double average = (double)sum / cnt;
			for(int i=1;i<=N;i++) {
				for(int j=1;j<=M;j++) {
					if(disk[i][j]>0) {
						if(disk[i][j]>average) {
							disk[i][j]--;
						}
						else if(disk[i][j] < average) {
							disk[i][j]++;
						}
					}
				}
			}
		}
	}
	private static void dfs(int r, int c, int cmp) {
		for(int i=0;i<4;i++) {
			int nextRow = r + dirRow[i];
			int nextCol = c + dirCol[i];
			
			if(nextRow<1||nextRow>N)
				continue;
			
			if(nextCol ==0) {
				nextCol = M;
			}
			else if(nextCol ==M+1) {
				nextCol = 1;
			}
			
			if(disk[nextRow][nextCol]==cmp) {
				isChanged = true;
				disk[nextRow][nextCol] = 0;
				disk[r][c] = 0;
				dfs(nextRow,nextCol,cmp);
			}
		}
	}
	private static void turnDisk(int gap, int dir, int numTurn) {
		for(int i=gap;i<=N;i=i+gap) {
			if(dir==1) {//반시계방향
				for(int t=0;t<numTurn;t++) {
					for(int j=1;j<=M;j++) {
						disk[i][j-1] = disk[i][j];
					}
					disk[i][M] = disk[i][0];
					disk[i][0] = 0;
				}
			}
			else { // 시계방향
				for(int t=0;t<numTurn;t++) {
					disk[i][0] = disk[i][M];
					for(int j=M-1;j>=0;j--) {
						disk[i][j+1] = disk[i][j];
					}
					disk[i][0] = 0;
				}
			}
		}
	}

}

~~~



# 느낀점

주의할점을 확실히 주의하다보면 어려움없이 해결할 수 있는 문제이다.



[문제 링크](https://www.acmicpc.net/problem/17822)

