---
layout: post
title: "[백준 17779] 게리멘더링2"
subtitle: "삼성 sw 역량테스트 게리멘더링2"
categories: algorithm
tags: baekjoon java algorithm 역량테스트 삼성기출
comments: true

---

## 문제

재현시의 시장 구재현은 지난 몇 년간 게리맨더링을 통해서 자신의 당에게 유리하게 선거구를 획정했다. 견제할 권력이 없어진 구재현은 권력을 매우 부당하게 행사했고, 심지어는 시의 이름도 재현시로 변경했다. 이번 선거에서는 최대한 공평하게 선거구를 획정하려고 한다.

재현시는 크기가 N×N인 격자로 나타낼 수 있다. 격자의 각 칸은 구역을 의미하고, r행 c열에 있는 구역은 (r, c)로 나타낼 수 있다. 구역을 다섯 개의 선거구로 나눠야 하고, 각 구역은 다섯 선거구 중 하나에 포함되어야 한다. 선거구는 구역을 적어도 하나 포함해야 하고, 한 선거구에 포함되어 있는 구역은 모두 연결되어 있어야 한다. 구역 A에서 인접한 구역을 통해서 구역 B로 갈 수 있을 때, 두 구역은 연결되어 있다고 한다. 중간에 통하는 인접한 구역은 0개 이상이어야 하고, 모두 같은 선거구에 포함된 구역이어야 한다.

선거구를 나누는 방법은 다음과 같다.

1. 기준점 (x, y)와 경계의 길이 d1, d2를 정한다. (d1, d2 ≥ 1, 1 ≤ x < x+d1+d2 ≤ N, 1 ≤ y-d1 < y < y+d2 ≤ N)
2. 다음 칸은 경계선이다.
   1. (x, y), (x+1, y-1), ..., (x+d1, y-d1)
   2. (x, y), (x+1, y+1), ..., (x+d2, y+d2)
   3. (x+d1, y-d1), (x+d1+1, y-d1+1), ... (x+d1+d2, y-d1+d2)
   4. (x+d2, y+d2), (x+d2+1, y+d2-1), ..., (x+d2+d1, y+d2-d1)
3. 경계선과 경계선의 안에 포함되어있는 곳은 5번 선거구이다.
4. 5번 선거구에 포함되지 않은 구역 (r, c)의 선거구 번호는 다음 기준을 따른다.
   - 1번 선거구: 1 ≤ r < x+d1, 1 ≤ c ≤ y
   - 2번 선거구: 1 ≤ r ≤ x+d2, y < c ≤ N
   - 3번 선거구: x+d1 ≤ r ≤ N, 1 ≤ c < y-d1+d2
   - 4번 선거구: x+d2 < r ≤ N, y-d1+d2 ≤ c ≤ N

아래는 크기가 7×7인 재현시를 다섯 개의 선거구로 나눈 방법의 예시이다.

| ![img](https://upload.acmicpc.net/c144c31e-db45-4094-9c1d-0656a690aef0/-/preview/) | ![img](https://upload.acmicpc.net/813c38e0-3197-4589-bc96-17d96eb9ed14/-/preview/) | ![img](https://upload.acmicpc.net/892417dd-b824-4d4e-8bce-2faf341a9f66/-/preview/) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| x = 2, y = 4, d1 = 2, d2 = 2                                 | x = 2, y = 5, d1 = 3, d2 = 2                                 | x = 4, y = 3, d1 = 1, d2 = 1                                 |

구역 (r, c)의 인구는 A[r][c]이고, 선거구의 인구는 선거구에 포함된 구역의 인구를 모두 합한 값이다. 선거구를 나누는 방법 중에서, 인구가 가장 많은 선거구와 가장 적은 선거구의 인구 차이의 최솟값을 구해보자.

## 입력

첫째 줄에 재현시의 크기 N이 주어진다.

둘째 줄부터 N개의 줄에 N개의 정수가 주어진다. r행 c열의 정수는 A[r][c]를 의미한다.

## 출력

첫째 줄에 인구가 가장 많은 선거구와 가장 적은 선거구의 인구 차이의 최솟값을 출력한다.

## 제한

- 5 ≤ N ≤ 20
- 1 ≤ A[r][c] ≤ 100

## 예제 입력 1 복사

```
6
1 2 3 4 1 6
7 8 9 1 4 2
2 3 4 1 1 3
6 6 6 6 9 4
9 1 9 1 9 5
1 1 1 1 9 9
```

## 예제 출력 1 복사

```
18
```

![img](https://upload.acmicpc.net/4ed91e95-51eb-461b-979a-fce236c79094/-/preview/)

## 예제 입력 2 복사

```
6
5 5 5 5 5 5
5 5 5 5 5 5
5 5 5 5 5 5
5 5 5 5 5 5
5 5 5 5 5 5
5 5 5 5 5 5
```

## 예제 출력 2 복사

```
20
```

## 예제 입력 3 복사

```
8
1 2 3 4 5 6 7 8
2 3 4 5 6 7 8 9
3 4 5 6 7 8 9 1
4 5 6 7 8 9 1 2
5 6 7 8 9 1 2 3
6 7 8 9 1 2 3 4
7 8 9 1 2 3 4 5
8 9 1 2 3 4 5 6
```

## 예제 출력 3 복사

```
23
```

![img](https://upload.acmicpc.net/760daa25-5f4b-4077-825c-ba208a99ab6f/-/preview/)

## 내가 생각하는 문제 풀이 포인트

1. 모든 경우의 칸나누기를 진행한다. (브루트포스)

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Baekjoon17779 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int N;
    static int[][] map;
    static int result = Integer.MAX_VALUE;
    public static void main(String[] args) throws IOException {
        N = Integer.parseInt(br.readLine());
        map = new int[N+1][N+1];
        for(int i=1;i<=N;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            for(int j=1;j<=N;j++){
                map[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        for(int d1 =1; d1<=N;d1++){
            for(int d2 = 1; d2<=N;d2++){
                for(int x =1 ;x<N;x++){
                    for(int y=1;y<N;y++){
                        if((x+d1+d2<=N) && (y-d1>=1) && (y+d2<=N))
                            divide(x,y,d1,d2);
                    }
                }
            }
        }
        System.out.println(result);
    }

    private static void divide(int x, int y, int d1, int d2) {
        int[] sectionSum = new int[6];
        int[][] section = new int[N+1][N+1];
        for (int r = 1; r <= N; r++) {
            for (int c = 1; c <= N; c++) {
                if (r < x + d1 && c <= y) {//1  1 ≤ r < x+d1, 1 ≤ c ≤ y
                    section[r][c] = 1;
                }
                else if (r<=x+d2 && y<c) {//2 1 ≤ r ≤ x+d2, y < c ≤ N
                    section[r][c] = 2;
                }
                else if (x + d1<=r && c < y - d1 + d2) {//3  x+d1 ≤ r ≤ N, 1 ≤ c < y-d1+d2
                    section[r][c] = 3;
                }
                else if (x + d2 < r && y - d1 + d2 <= c) {//4  x+d2 < r ≤ N, y-d1+d2 ≤ c ≤ N
                    section[r][c] = 4;
                }
            }
        }
        for (int i = 0; i <= d1; i++) {
            section[x + i][y - i] = 5;
            section[x + d2 + i][y + d2 - i] = 5;
        }
        for (int i = 0; i <= d2; i++) {
            section[x + i][y + i] = 5;
            section[x + d1 + i][y - d1 + i] = 5;
        }
        for (int i = 0; i < d2; i++) {
            int t = 1;
            while (section[x + i + t][y + i] != 5) {
                section[x + i + t][y + i] = 5;
                t++;
            }
        }
        for (int i = 0; i < d1; i++) {
            int t = 1;
            while (section[x + i + t][y - i] != 5) {
                section[x + i + t][y - i] = 5;
                t++;
            }
        }
        for (int r = 1; r <= N; r++) {
            for (int c = 1; c <= N; c++) {
                sectionSum[section[r][c]] += map[r][c];
            }
        }
        Arrays.sort(sectionSum);
        result = Math.min(result,sectionSum[5] - sectionSum[1]);
    }
}

~~~



# 느낀점

브루트포스 문제이다. 규칙을 찾는 부분이 나름 까다로운것 같다. 



[문제 링크](https://www.acmicpc.net/problem/17779)

