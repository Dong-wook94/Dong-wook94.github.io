---
layout: post
title: "[백준 1516] 게임 개발"
subtitle: "백준 1516 게임 개발"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

숌 회사에서 이번에 새로운 전략 시뮬레이션 게임 세준 크래프트를 개발하기로 하였다. 핵심적인 부분은 개발이 끝난 상태고, 종족별 균형과 전체 게임 시간 등을 조절하는 부분만 남아 있었다.

게임 플레이에 들어가는 시간은 상황에 따라 다를 수 있기 때문에, 모든 건물을 짓는데 걸리는 최소의 시간을 이용하여 근사하기로 하였다. 물론, 어떤 건물을 짓기 위해서 다른 건물을 먼저 지어야 할 수도 있기 때문에 문제가 단순하지만은 않을 수도 있다. 예를 들면 스타크래프트에서 벙커를 짓기 위해서는 배럭을 먼저 지어야 하기 때문에, 배럭을 먼저 지은 뒤 벙커를 지어야 한다. 여러 개의 건물을 동시에 지을 수 있다.

편의상 자원은 무한히 많이 가지고 있고, 건물을 짓는 명령을 내리기까지는 시간이 걸리지 않는다고 가정하자.

## 입력

첫째 줄에 건물의 종류 수 N(1 ≤ N ≤ 500)이 주어진다. 다음 N개의 줄에는 각 건물을 짓는데 걸리는 시간과 그 건물을 짓기 위해 먼저 지어져야 하는 건물들의 번호가 주어진다. 건물의 번호는 1부터 N까지로 하고, 각 줄은 -1로 끝난다고 하자. 각 건물을 짓는데 걸리는 시간은 100,000보다 작거나 같은 자연수이다.

## 출력

N개의 각 건물이 완성되기까지 걸리는 최소 시간을 출력한다.

## 예제 입력 1 복사

```
5
10 -1
10 1 -1
4 1 -1
4 3 1 -1
3 3 -1
```

## 예제 출력 1 복사

```
10
20
14
18
17
```

# 내가 생각하는 문제 풀이 포인트

1. 위상정렬 문제이다.

2. 이전 건물까지의 build시간을 더하는 부분이 조금 까다로웠다. 

   1. build 시작시점에대한 시간을 따로두고 계산한다. 

   

   

# 코드

~~~java
import java.io.*;
import java.util.*;

public class Baekjoon1516 {
    static int N;
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static Building[] buildings;
    public static void main(String[] args) throws IOException {
        N = Integer.parseInt(br.readLine());
        buildings = new Building[N+1];
        for(int i=1;i<=N;i++){
            buildings[i] = new Building(0);
        }
        for(int i=1;i<=N;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int buildTime = Integer.parseInt(st.nextToken());
            buildings[i].setBuildTime(buildTime);
            while(true){
                int input = Integer.parseInt(st.nextToken());
                if(input==-1)
                    break;
                buildings[input].after.add(i);
                buildings[i].inDegreeCnt++;
            }
        }
        Queue<Building> q = new LinkedList<>();
        for(int i=1;i<=N;i++){
            if(buildings[i].inDegreeCnt ==0){
                q.offer(buildings[i]);
            }
        }
        while(!q.isEmpty()){
            Building curBuilding = q.poll();
            for(int nextBuildingNum : curBuilding.after){
                buildings[nextBuildingNum].inDegreeCnt--;
                buildings[nextBuildingNum].buildCompletedTime = Math.max(curBuilding.buildTime + curBuilding.buildCompletedTime, buildings[nextBuildingNum].buildCompletedTime);
                if(buildings[nextBuildingNum].inDegreeCnt==0)
                    q.offer(buildings[nextBuildingNum]);
            }
            curBuilding.after.clear();
        }
        for(int i=1;i<=N;i++){
            bw.write((buildings[i].buildCompletedTime+buildings[i].buildTime)+"\n");
        }
        bw.flush();
    }
    static class Building{
        int inDegreeCnt;
        int buildTime;
        int buildCompletedTime;
        ArrayList<Integer> after;

        public Building(int inDegreeCnt) {
            this.inDegreeCnt = inDegreeCnt;
            this.after = new ArrayList<>();
            this.buildCompletedTime = 0;
        }

        public void setBuildTime(int buildTime) {
            this.buildTime = buildTime;
        }
    }
}

~~~



# 느낀점

단순한 위상정렬이아니라 시간까지 다루는 문제라 조금 까다로웠다. 

그리고 객체 생성 시점은 항상 조심하자

[문제 링크](https://www.acmicpc.net/problem/1516)

