---
layout: post
title: "[백준 17140] 이차열 배열과 연산"
subtitle: "삼성 sw 역량테스트 이차열 배열과 연산"
categories: algorithm
tags: baekjoon java algorithm 역량테스트 삼성기출
comments: true
---

# 문제설명

## 문제

크기가 3×3인 배열 A가 있다. 1초가 지날때마다 배열에 연산이 적용된다.

- R 연산: 배열 A의 모든 행에 대해서 정렬을 수행한다. 행의 개수 ≥ 열의 개수인 경우에 적용된다.
- C 연산: 배열 A의 모든 열에 대해서 정렬을 수행한다. 행의 개수 < 열의 개수인 경우에 적용된다.

한 행 또는 열에 있는 수를 정렬하려면, 각각의 수가 몇 번 나왔는지 알아야 한다. 그 다음, 수의 등장 횟수가 커지는 순으로, 그러한 것이 여러가지면 수가 커지는 순으로 정렬한다. 그 다음에는 배열 A에 정렬된 결과를 다시 넣어야 한다. 정렬된 결과를 배열에 넣을 때는, 수와 등장 횟수를 모두 넣으며, 순서는 수가 먼저이다.

예를 들어, [3, 1, 1]에는 3이 1번, 1가 2번 등장한다. 따라서, 정렬된 결과는 [3, 1, 1, 2]가 된다. 다시 이 배열에는 3이 1번, 1이 2번, 2가 1번 등장한다. 다시 정렬하면 [2, 1, 3, 1, 1, 2]가 된다.

정렬된 결과를 배열에 다시 넣으면 행 또는 열의 크기가 달라질 수 있다. R 연산이 적용된 경우에는 가장 큰 행을 기준으로 모든 행의 크기가 변하고, C 연산이 적용된 경우에는 가장 큰 열을 기준으로 모든 열의 크기가 변한다. 행 또는 열의 크기가 커진 곳에는 0이 채워진다. 수를 정렬할 때 0은 무시해야 한다. 예를 들어, [3, 2, 0, 0]을 정렬한 결과는 [3, 2]를 정렬한 결과와 같다.

행 또는 열의 크기가 100을 넘어가는 경우에는 처음 100개를 제외한 나머지는 버린다.

배열 A에 들어있는 수와 r, c, k가 주어졌을 때, A[r][c]에 들어있는 값이 k가 되기 위한 최소 시간을 구해보자.

## 입력

첫째 줄에 r, c, k가 주어진다. (1 ≤ r, c, k ≤ 100)

둘째 줄부터 3개의 줄에 배열 A에 들어있는 수가 주어진다. 배열 A에 들어있는 수는 100보다 작거나 같은 자연수이다.

## 출력

A[r][c]에 들어있는 값이 k가 되기 위한 연산의 최소 시간을 출력한다. 100초가 지나도 A[r][c] = k가 되지 않으면 -1을 출력한다.

## 예제 입력 1 복사

```
1 2 2
1 2 1
2 1 3
3 3 3
```

## 예제 출력 1 복사

```
0
```

## 예제 입력 2 복사

```
1 2 1
1 2 1
2 1 3
3 3 3
```

## 예제 출력 2 복사

```
1
```

## 예제 입력 3 복사

```
1 2 3
1 2 1
2 1 3
3 3 3
```

## 예제 출력 3 복사

```
2
```

## 예제 입력 4 복사

```
1 2 4
1 2 1
2 1 3
3 3 3
```

## 예제 출력 4 복사

```
52
```

## 예제 입력 5 복사

```
1 2 5
1 2 1
2 1 3
3 3 3
```

## 예제 출력 5 복사

```
-1
```

## 예제 입력 6 복사

```
3 3 3
1 1 1
1 1 1
1 1 1
```

## 예제 출력 6 복사

```
2
```

## 내가 생각하는 문제 풀이 포인트

1. 시뮬레이션문제이다. 

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;

public class Baekjoon17140 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int[][] arr;
    static int r, c, k;
    static int rowSize = 3;
    static int colSize = 3;

    public static void main(String[] args) throws IOException {
        arr = new int[101][101];
        StringTokenizer st = new StringTokenizer(br.readLine());
        r = Integer.parseInt(st.nextToken());
        c = Integer.parseInt(st.nextToken());
        k = Integer.parseInt(st.nextToken());

        for (int i = 0; i < 3; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < 3; j++)
                arr[i][j] = Integer.parseInt(st.nextToken());
        }
        if (arr[r-1][c-1] == k) {
            System.out.println(0);
            return;
        }
        for (int t = 1; t <= 100; t++) {
            if (rowSize >= colSize) {
                operRow(rowSize,colSize);
            } else {
                operCol(rowSize,colSize);
            }
//            System.out.println("t : "+t);
//            for (int i = 0; i < rowSize; i++) {
//                for (int j = 0; j < colSize; j++) {
//                    System.out.print(arr[i][j]+" ");
//                }
//                System.out.println();
//            }
            if(arr[r-1][c-1]==k){
                System.out.println(t);
                return;
            }

        }
        System.out.println(-1);
    }

    private static void operCol(int R,int C) {
        int[][] newArr = new int[100][100];
        for (int j = 0; j < C; j++) {
            ArrayList<Num> colNums = new ArrayList<>();
            for (int i = 0;i < R; i++) {
                boolean up = false;
                if(arr[i][j]==0)
                    continue;
                for (Num n : colNums) {
                    if (n.num == arr[i][j]) {
                        n.cnt++;
                        up = true;
                    }
                }
                if (!up)
                    colNums.add(new Num(arr[i][j], 1));
            }
            Collections.sort(colNums);
            int idx = 0;
            for (Num n : colNums) {
                newArr[idx++][j] = n.num;
                newArr[idx++][j] = n.cnt;
            }
            rowSize = Math.max(rowSize, idx);
        }
        arr= newArr;
    }

    private static void operRow(int R, int C) {
        int[][] newArr = new int[100][100];
        for (int i = 0; i < R; i++) {
            ArrayList<Num> rowNums = new ArrayList<>();
            for (int j = 0; j < C; j++) {
                boolean up = false;
                if(arr[i][j]==0)
                    continue;
                for (Num n : rowNums) {
                    if (n.num == arr[i][j]) {
                        n.cnt++;
                        up = true;
                    }
                }
                if (!up)
                    rowNums.add(new Num(arr[i][j], 1));
            }
            Collections.sort(rowNums);
            int idx = 0;
            for (Num n : rowNums) {
                newArr[i][idx++] = n.num;
                newArr[i][idx++] = n.cnt;
            }
            colSize = Math.max(colSize, idx);
        }
        arr= newArr;
    }

    static class Num implements Comparable<Num> {
        int num;
        int cnt;

        public Num(int num, int cnt) {
            this.num = num;
            this.cnt = cnt;
        }

        @Override
        public int compareTo(Num o) {
            if (this.cnt == o.cnt)
                return this.num - o.num;
            return this.cnt - o.cnt;
        }
    }
}

~~~



# 느낀점

0을 예와처리해주는게 그나마 함정인거 같다.



[문제 링크](https://www.acmicpc.net/problem/17140)

