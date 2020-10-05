---
layout: post
title: "[백준 3020] 개똥벌레"
subtitle: "백준 3020 개똥벌레"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

개똥벌레 한 마리가 장애물(석순과 종유석)로 가득찬 동굴에 들어갔다. 동굴의 길이는 N미터이고, 높이는 H미터이다. (N은 짝수) 첫 번째 장애물은 항상 석순이고, 그 다음에는 종유석과 석순이 번갈아가면서 등장한다.

아래 그림은 길이가 14미터이고 높이가 5미터인 동굴이다. (예제 그림)

![img](https://www.acmicpc.net/upload/images/firef1.png)

이 개똥벌레는 장애물을 피하지 않는다. 자신이 지나갈 구간을 정한 다음 일직선으로 지나가면서 만나는 모든 장애물을 파괴한다.

위의 그림에서 4번째 구간으로 개똥벌레가 날아간다면 파괴해야하는 장애물의 수는 총 여덟개이다. (4번째 구간은 길이가 3인 석순과 길이가 4인 석순의 중간지점을 말한다)

![img](https://www.acmicpc.net/upload/images/firef2.png)

하지만, 첫 번째 구간이나 다섯 번째 구간으로 날아간다면 개똥벌레는 장애물 일곱개만 파괴하면 된다.

동굴의 크기와 높이, 모든 장애물의 크기가 주어진다. 이때, 개똥벌레가 파괴해야하는 장애물의 최솟값과 그러한 구간이 총 몇 개 있는지 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 N과 H가 주어진다. N은 항상 짝수이다. (2 ≤ N ≤ 200,000, 2 ≤ H ≤ 500,000)

다음 N개 줄에는 장애물의 크기가 순서대로 주어진다. 장애물의 크기는 H보다 작은 양수이다.

## 출력

첫째 줄에 개똥벌레가 파괴해야 하는 장애물의 최솟값과 그러한 구간의 수를 공백으로 구분하여 출력한다.

## 예제 입력 1 복사

```
14 5
1
3
4
2
2
4
3
4
3
3
3
2
3
3
```

## 예제 출력 1 복사

```
7 2
```

## 내가 생각하는 문제 풀이 포인트

1. 이분탐색
   1. upperbound , lowerbound 를 구해줘야된다. 하지만 하나의 binary Search 로 해결하였다. 



# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Baekjoon3020 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int N, H;
    static int[] stones1;
    static int[] stones2;
    static int minCnt = 200000;
    static int sameCnt = 0;
    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        H = Integer.parseInt(st.nextToken());
        stones1 = new int[N/2];
        stones2 = new int[N/2];
        for(int i=0;i<N;i++){
            if(i%2==0){
                stones1[i/2] = Integer.parseInt(br.readLine());
            }
            else{
                stones2[i/2] = Integer.parseInt(br.readLine());
            }
        }
        Arrays.sort(stones1);
        Arrays.sort(stones2);
        for(int i=1;i<=H;i++){
            int cnt = binarySearch(i-1,stones1);
            cnt += binarySearch(H-i,stones2);
            if (minCnt > cnt) {
                minCnt = cnt;
                sameCnt = 1;
            } else if (minCnt == cnt) {
                sameCnt++;
            }
        }
        System.out.println(minCnt+" "+sameCnt);
    }


    private static int binarySearch(int target,int[] arr){
        int left = 0;
        int right = arr.length-1;
        int result = -1;

        while(left<=right){
            int mid = (left+right)/2;
            if(arr[mid] <= target){
                left = mid+1;
                result = mid;
            }else{
                right = mid-1;
            }
        }
        return arr.length - (result+1); //target보다 큰 데이터 개수 반
    }
}

~~~



# 느낀점

이분탐색 문제 .

[문제 링크](https://www.acmicpc.net/problem/3020)

