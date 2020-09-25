---
layout: post
title: "[프로그래머스 43236] 징검다리"
subtitle: "프로그래머스 43236 징검다리"
categories: algorithm
tags: programmers java algorithm 
comments: true
---

# 문제설명

출발지점부터 distance만큼 떨어진 곳에 도착지점이 있습니다. 그리고 그사이에는 바위들이 놓여있습니다. 바위 중 몇 개를 제거하려고 합니다.
예를 들어, 도착지점이 25만큼 떨어져 있고, 바위가 [2, 14, 11, 21, 17] 지점에 놓여있을 때 바위 2개를 제거하면 출발지점, 도착지점, 바위 간의 거리가 아래와 같습니다.

| 제거한 바위의 위치 | 각 바위 사이의 거리 | 거리의 최솟값 |
| ------------------ | ------------------- | ------------- |
| [21, 17]           | [2, 9, 3, 11]       | 2             |
| [2, 21]            | [11, 3, 3, 8]       | 3             |
| [2, 11]            | [14, 3, 4, 4]       | 3             |
| [11, 21]           | [2, 12, 3, 8]       | 2             |
| [2, 14]            | [11, 6, 4, 4]       | 4             |

위에서 구한 거리의 최솟값 중에 가장 큰 값은 4입니다.

출발지점부터 도착지점까지의 거리 distance, 바위들이 있는 위치를 담은 배열 rocks, 제거할 바위의 수 n이 매개변수로 주어질 때, 바위를 n개 제거한 뒤 각 지점 사이의 거리의 최솟값 중에 가장 큰 값을 return 하도록 solution 함수를 작성해주세요.

##### 제한사항

- 도착지점까지의 거리 distance는 1 이상 1,000,000,000 이하입니다.
- 바위는 1개 이상 50,000개 이하가 있습니다.
- n 은 1 이상 `바위의 개수` 이하입니다.

##### 입출력 예

| distance | rocks               | n    | return |
| -------- | ------------------- | ---- | ------ |
| 25       | [2, 14, 11, 21, 17] | 2    | 4      |

##### 입출력 예 설명

문제에 나온 예와 같습니다.

## 내가 생각하는 문제 풀이 포인트

1. 이분탐색
   1. 최소거리를 기준으로 바위를없앤뒤 없앤 개수를 기준으로 이분탐색을 진행한다.

# 코드

~~~java
import java.util.Arrays;

public class Solution {

    static int[] Rocks;
    public int solution(int distance, int[] rocks, int n) {
        int answer = 0;

        Arrays.sort(rocks);

        int left = 0;
        int right = distance;

        Rocks = new int[rocks.length+2];
        Rocks[0] = 0;
        for(int i=1;i<Rocks.length-1;i++){
            Rocks[i] = rocks[i-1];
        }
        Rocks[Rocks.length-1] = distance;

        while(left<=right){
            int mid = (left+right)/2;
            int removeRocksCnt = getRemoveRocksCnt(mid);

            if(removeRocksCnt>n){
                right = mid -1;
                
            }else if(removeRocksCnt<=n){
                left = mid +1;
                answer = mid;
            }

        }

        return answer;
    }

    private int getRemoveRocksCnt(int minDist) {
        int prevRock = Rocks[0];
        int cnt=0;
        for(int i=1;i<Rocks.length;i++){
            int gap = Rocks[i]-prevRock;
            if(gap<minDist){
                cnt++;
            }
            else if(gap>=minDist){
                prevRock = Rocks[i];
            }
        }
        return cnt;
    }
}
~~~



# 느낀점

기준을 찾기가 매우 까다로웠다.



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/43236)

