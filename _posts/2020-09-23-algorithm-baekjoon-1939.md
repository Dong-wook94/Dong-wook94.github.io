---
layout: post
title: "[백준 1939] 중량제한"
subtitle: "백준 1939 중량제한"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

2. ## 문제

   N(2≤N≤10,000)개의 섬으로 이루어진 나라가 있다. 이들 중 몇 개의 섬 사이에는 다리가 설치되어 있어서 차들이 다닐 수 있다.

   영식 중공업에서는 두 개의 섬에 공장을 세워 두고 물품을 생산하는 일을 하고 있다. 물품을 생산하다 보면 공장에서 다른 공장으로 생산 중이던 물품을 수송해야 할 일이 생기곤 한다. 그런데 각각의 다리마다 중량제한이 있기 때문에 무턱대고 물품을 옮길 순 없다. 만약 중량제한을 초과하는 양의 물품이 다리를 지나게 되면 다리가 무너지게 된다.

   한 번의 이동에서 옮길 수 있는 물품들의 중량의 최댓값을 구하는 프로그램을 작성하시오.

   ## 입력

   첫째 줄에 N, M(1≤M≤100,000)이 주어진다. 다음 M개의 줄에는 다리에 대한 정보를 나타내는 세 정수 A, B(1≤A, B≤N), C(1≤C≤1,000,000,000)가 주어진다. 이는 A번 섬과 B번 섬 사이에 중량제한이 C인 다리가 존재한다는 의미이다. 서로 같은 두 도시 사이에 여러 개의 다리가 있을 수도 있으며, 모든 다리는 양방향이다. 마지막 줄에는 공장이 위치해 있는 섬의 번호를 나타내는 서로 다른 두 정수가 주어진다. 공장이 있는 두 섬을 연결하는 경로는 항상 존재하는 데이터만 입력으로 주어진다.
   
   ## 출력

   첫째 줄에 답을 출력한다.
   
   ## 예제 입력 1 복사
   
   ```
   3 3
   1 2 2
   3 1 3
   2 3 2
   1 3
   ```
   
   ## 예제 출력 1 복사
   
   ```
   3
   ```

# 내가 생각하는 문제 풀이 포인트

1. 이분탐색
   1. 이분탐색을 통해 해당 중량으로 도착할 수 있는지 체크한다.
2. bfs
   1. 체크하는 방식은 bfs를 이용한다.

# 코드

~~~java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Baekjoon1939 {
    static int N,M;
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static ArrayList<Bridge>[] graph;
    static boolean[] visited;
    public static void main(String[] args) throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        int left = 0;
        int right = 0;

        graph = new ArrayList[N+1];
        for(int i=1;i<=N;i++){
            graph[i] = new ArrayList<>();
        }
        for(int i=0;i<M;i++){
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b=  Integer.parseInt(st.nextToken());
            int c = Integer.parseInt(st.nextToken());
            graph[a].add(new Bridge(b,c));
            graph[b].add(new Bridge(a,c));
            right = Math.max(right,c);
        }
        st = new StringTokenizer(br.readLine());
        int start = Integer.parseInt(st.nextToken());
        int end = Integer.parseInt(st.nextToken());

        int mid;
        while(left<=right){
            mid = (left+right)/2;
            visited = new boolean[N+1];
            if(bfs(mid,start,end)){
                left = mid+1;
            }
            else{
                right = mid-1;
            }
        }
        System.out.println(right);
    }

    static boolean bfs(int cost,int start, int end){
        Queue<Integer> q = new LinkedList<>();
        q.offer(start);
        visited[start] = true;

        while(!q.isEmpty()){
            int cur = q.poll();

            if(cur ==end)
                return true;

            for(Bridge node : graph[cur]){
                if(!visited[node.dest] && cost <= node.limitWeight){
                    visited[node.dest] = true;
                    q.offer(node.dest);
                }
            }
        }
        return false;
    }

    static class Bridge{
        int dest;
        int limitWeight;

        public Bridge(int dest, int limitWeight) {
            this.dest = dest;
            this.limitWeight = limitWeight;
        }
    }
}

~~~



# 느낀점

첨에 dfs를 하다가 시간 초과가 났다. dfs 의 다음노드를 매번 탐색해서 그런 것 같은데 그래프를 cost기준 내림차순으로 소팅해서 하면 왠지 문제가 해결 될 것 같기도 했다.. 하지만 bfs 를 이용하여 문제를 풀었다. 이문제에서는 depth가 길어질때 불리한 dfs보다는 오히려 bfs 가 적합해 보인다. 

dfs 도 통과하는 경우가 있는거보면 가능하긴 한것 같다.



[문제 링크](https://www.acmicpc.net/problem/1939)

