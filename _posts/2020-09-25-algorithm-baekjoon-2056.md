---
layout: post
title: "[백준 2056] 작업"
subtitle: "백준 2056 작업"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

수행해야 할 작업 N개 (3 ≤ N ≤ 10000)가 있다. 각각의 작업마다 걸리는 시간(1 ≤ 시간 ≤ 100)이 정수로 주어진다.

몇몇 작업들 사이에는 선행 관계라는 게 있어서, 어떤 작업을 수행하기 위해 반드시 먼저 완료되어야 할 작업들이 있다. 이 작업들은 번호가 아주 예쁘게 매겨져 있어서, K번 작업에 대해 선행 관계에 있는(즉, K번 작업을 시작하기 전에 반드시 먼저 완료되어야 하는) 작업들의 번호는 모두 1 이상 (K-1) 이하이다. 작업들 중에는, 그것에 대해 선행 관계에 있는 작업이 하나도 없는 작업이 반드시 하나 이상 존재한다. (1번 작업이 항상 그러하다)

모든 작업을 완료하기 위해 필요한 최소 시간을 구하여라. 물론, 서로 선행 관계가 없는 작업들은 동시에 수행 가능하다.

## 입력

첫째 줄에 N이 주어진다.

두 번째 줄부터 N+1번째 줄까지 N개의 줄이 주어진다. 2번째 줄은 1번 작업, 3번째 줄은 2번 작업, ..., N+1번째 줄은 N번 작업을 각각 나타낸다. 각 줄의 처음에는, 해당 작업에 걸리는 시간이 먼저 주어지고, 그 다음에 그 작업에 대해 선행 관계에 있는 작업들의 개수(0 ≤ 개수 ≤ 100)가 주어진다. 그리고 선행 관계에 있는 작업들의 번호가 주어진다.

## 출력

첫째 줄에 모든 작업을 완료하기 위한 최소 시간을 출력한다.

## 예제 입력 1 복사

```
7
5 0
1 1 1
3 1 2
6 1 1
1 2 2 4
8 2 2 4
4 3 3 5 6
```

## 예제 출력 1 복사

```
23
```

## 내가 생각하는 문제 풀이 포인트

1. 위상정렬
   1. (선행하는 시간의 preparetime + time ) 과 후행하는 시간의 preparetime 의 max값으로 매번 prepareTime을 업데이트 해준다. 
   2. 결과적으로 전체적인 시간은 모든 일이 끝나는 시간이라 task중 prepareTime과 자체 일처리시간을 더한 값의 최댓값이 모든 일이 종료되는 시간이다.  

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Baekjoon2056 {
    static int N;
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static ArrayList<Integer>[] graph;
    static Task[] tasks;

    public static void main(String[] args) throws IOException {
        N = Integer.parseInt(br.readLine());
        int result =0;

        graph = new ArrayList[N+1];
        tasks = new Task[N+1];
        for(int i=1;i<=N;i++){
            graph[i] = new ArrayList<>();
        }
        for(int i=1;i<=N;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int t = Integer.parseInt(st.nextToken());
            int n = Integer.parseInt(st.nextToken());
            tasks[i] = new Task(t,i,0);
            for(int j=0;j<n;j++){
                int pre = Integer.parseInt(st.nextToken());
                graph[pre].add(i);
                tasks[i].inDegreeCnt++;
            }
        }

        Queue<Integer> q = new LinkedList<>();
        for(int i=1;i<=N;i++){
            if(tasks[i].inDegreeCnt==0){
                q.offer(i);
            }
        }

        while(!q.isEmpty()){
            int idx = q.poll();
            result = Math.max(result, tasks[idx].time+tasks[idx].prepare);
            for(int next : graph[idx]){
                tasks[next].inDegreeCnt--;
                if(tasks[next].inDegreeCnt==0)
                    q.offer(next);
                tasks[next].prepare = Math.max(tasks[next].prepare,tasks[idx].prepare+tasks[idx].time);
            }
            graph[idx].clear();
        }
        System.out.println(result);
    }
    static class Task{
        int time;
        int idx;
        int inDegreeCnt;
        int prepare;

        public Task(int time, int idx, int inDegreeCnt) {
            this.time = time;
            this.idx = idx;
            this.inDegreeCnt = inDegreeCnt;
        }
    }
}

~~~



# 느낀점

위상정렬 문제중에 좀 까다로운 편인 것 같다. 일이 시작되기전까지 시간과 task 자체 시간을 분리한게 좋은 방법 이었던 것 같다. 



[문제 링크](https://www.acmicpc.net/problem/2056)

