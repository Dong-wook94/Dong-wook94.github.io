---
layout: post
title: "[백준 16235] 나무 재테크"
subtitle: "삼성 sw 역량테스트 나무 재테크"
categories: algorithm
tags: baekjoon java algorithm 역량테스트 삼성기출
comments: true
---

# 문제설명

## 문제

부동산 투자로 억대의 돈을 번 상도는 최근 N×N 크기의 땅을 구매했다. 상도는 손쉬운 땅 관리를 위해 땅을 1×1 크기의 칸으로 나누어 놓았다. 각각의 칸은 (r, c)로 나타내며, r은 가장 위에서부터 떨어진 칸의 개수, c는 가장 왼쪽으로부터 떨어진 칸의 개수이다. r과 c는 1부터 시작한다.

상도는 전자통신공학과 출신답게 땅의 양분을 조사하는 로봇 S2D2를 만들었다. S2D2는 1×1 크기의 칸에 들어있는 양분을 조사해 상도에게 전송하고, 모든 칸에 대해서 조사를 한다. 가장 처음에 양분은 모든 칸에 5만큼 들어있다.

매일 매일 넓은 땅을 보면서 뿌듯한 하루를 보내고 있던 어느 날 이런 생각이 들었다.

> **나무 재테크를 하자!**

나무 재테크란 작은 묘목을 구매해 어느정도 키운 후 팔아서 수익을 얻는 재테크이다. 상도는 나무 재테크로 더 큰 돈을 벌기 위해 M개의 나무를 구매해 땅에 심었다. 같은 1×1 크기의 칸에 여러 개의 나무가 심어져 있을 수도 있다.

이 나무는 사계절을 보내며, 아래와 같은 과정을 반복한다.

봄에는 나무가 자신의 나이만큼 양분을 먹고, 나이가 1 증가한다. 각각의 나무는 나무가 있는 1×1 크기의 칸에 있는 양분만 먹을 수 있다. 하나의 칸에 여러 개의 나무가 있다면, 나이가 어린 나무부터 양분을 먹는다. 만약, 땅에 양분이 부족해 자신의 나이만큼 양분을 먹을 수 없는 나무는 양분을 먹지 못하고 즉시 죽는다.

여름에는 봄에 죽은 나무가 양분으로 변하게 된다. 각각의 죽은 나무마다 나이를 2로 나눈 값이 나무가 있던 칸에 양분으로 추가된다. 소수점 아래는 버린다.

가을에는 나무가 번식한다. 번식하는 나무는 나이가 5의 배수이어야 하며, 인접한 8개의 칸에 나이가 1인 나무가 생긴다. 어떤 칸 (r, c)와 인접한 칸은 (r-1, c-1), (r-1, c), (r-1, c+1), (r, c-1), (r, c+1), (r+1, c-1), (r+1, c), (r+1, c+1) 이다. 상도의 땅을 벗어나는 칸에는 나무가 생기지 않는다.

겨울에는 S2D2가 땅을 돌아다니면서 땅에 양분을 추가한다. 각 칸에 추가되는 양분의 양은 A[r][c]이고, 입력으로 주어진다.

K년이 지난 후 상도의 땅에 살아있는 나무의 개수를 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 N, M, K가 주어진다.

둘째 줄부터 N개의 줄에 A배열의 값이 주어진다. r번째 줄의 c번째 값은 A[r][c]이다.

다음 M개의 줄에는 상도가 심은 나무의 정보를 나타내는 세 정수 x, y, z가 주어진다. 처음 두 개의 정수는 나무의 위치 (x, y)를 의미하고, 마지막 정수는 그 나무의 나이를 의미한다.

## 출력

첫째 줄에 K년이 지난 후 살아남은 나무의 수를 출력한다.

## 제한

- 1 ≤ N ≤ 10
- 1 ≤ M ≤ N2
- 1 ≤ K ≤ 1,000
- 1 ≤ A[r][c] ≤ 100
- 1 ≤ 입력으로 주어지는 나무의 나이 ≤ 10
- 입력으로 주어지는 나무의 위치는 모두 서로 다름

## 예제 입력 1 복사

```
1 1 1
1
1 1 1
```

## 예제 출력 1 복사

```
1
```

## 예제 입력 2 복사

```
1 1 4
1
1 1 1
```

## 예제 출력 2 복사

```
0
```

## 예제 입력 3 복사

```
5 2 1
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 1 3
3 2 3
```

## 예제 출력 3 복사

```
2
```

## 예제 입력 4 복사

```
5 2 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 1 3
3 2 3
```

## 예제 출력 4 복사

```
15
```

## 예제 입력 5 복사

```
5 2 3
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 1 3
3 2 3
```

## 예제 출력 5 복사

```
13
```

## 예제 입력 6 복사

```
5 2 4
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 1 3
3 2 3
```

## 예제 출력 6 복사

```
13
```

## 예제 입력 7 복사

```
5 2 5
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 1 3
3 2 3
```

## 예제 출력 7 복사

```
13
```

## 예제 입력 8 복사

```
5 2 6
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 3 2 3 2
2 1 3
3 2 3
```

## 예제 출력 8 복사

```
85
```

## 내가 생각하는 문제 풀이 포인트

1. c++과 다르게 맵전체를 보며 트리를 계산하니 시간초과가 났었다. priority queue 를 이용해서 트리만 쭉 계산하도록 하였다.

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Baekjoon16235 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int N, M, K;
    static int[][] nutrient;
    static int[][] nutrientsUnit;
    static ArrayList<Tree> deadTrees;
    static ArrayList<Tree> breedTrees;
    static int[] dirCol = {-1, 0, 1, -1, 1, -1, 0, 1};
    static int[] dirRow = { -1,-1,-1,0,0,1,1,1 };
    static PriorityQueue<Tree> trees = new PriorityQueue<>();
    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());

        deadTrees = new ArrayList<>();
        breedTrees = new ArrayList<>();
        nutrient = new int[N + 1][N + 1];
        nutrientsUnit = new int[N + 1][N + 1];
        for (int i = 1; i <= N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 1; j <= N; j++) {
                nutrient[i][j] = 5;
                nutrientsUnit[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            int z = Integer.parseInt(st.nextToken());
            trees.offer(new Tree(x,y,z));
        }

        for (int i = 0; i < K; i++) {
            spring();
            summer();
            fall();
            winter();
        }
        System.out.println(trees.size());
    }

    private static void winter() {
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= N; j++) {
                nutrient[i][j] += nutrientsUnit[i][j];
            }
        }
    }

    private static void fall() {
        for(Tree tree:breedTrees){
            int r = tree.row;
            int c = tree.col;
            for (int i = 0; i < 8; i++) {
                int nextRow = r + dirRow[i];
                int nextCol = c + dirCol[i];
                if (nextRow >= 1 && nextCol >= 1 && nextCol <= N && nextRow <= N) {
                    trees.add(new Tree(nextRow,nextCol,1));
                }
            }

        }
        breedTrees.clear();
    }

    private static void summer() {
        for(Tree tree : deadTrees){
            nutrient[tree.row][tree.col] += tree.age;
        }
        deadTrees.clear();
    }

    private static void spring() {
        //나무가 자신의 나이만큼 양분 먹고 나이 1증가
        PriorityQueue<Tree> newPq = new PriorityQueue<>();
        while(!trees.isEmpty()){
            Tree curTree = trees.poll();
            int r = curTree.row;
            int c = curTree.col;
            if(curTree.age<=nutrient[r][c]){
                nutrient[r][c] -=curTree.age;
                newPq.add(new Tree(r,c,curTree.age+1));
                if((curTree.age+1)%5==0 ){
                    breedTrees.add(new Tree(r,c, curTree.age+1));
                }
            }
            else{
                deadTrees.add(new Tree(r,c,curTree.age/2));
            }
        }
        trees = newPq;
    }

    static class Tree implements Comparable<Tree> {
        int row;
        int col;
        int age;

        public Tree(int row, int col, int age) {
            this.row = row;
            this.col = col;
            this.age = age;
        }

        @Override
        public int compareTo(Tree o) {
            return this.age - o.age;
        }
    }
}

~~~



# 느낀점

삼성문제 중에 시간을 신경써야되는 몇안되는 문제



[문제 링크](https://www.acmicpc.net/problem/16235)

