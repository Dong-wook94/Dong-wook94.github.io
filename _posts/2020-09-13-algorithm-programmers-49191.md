---
layout: post
title: "[프로그래머스] 순위"
subtitle: "프로그래머스 49191 순위"
categories: algorithm
tags: programmers java algorithm 
comments: true
---

# 문제설명

n명의 권투선수가 권투 대회에 참여했고 각각 1번부터 n번까지 번호를 받았습니다. 권투 경기는 1대1 방식으로 진행이 되고, 만약 A 선수가 B 선수보다 실력이 좋다면 A 선수는 B 선수를 항상 이깁니다. 심판은 주어진 경기 결과를 가지고 선수들의 순위를 매기려 합니다. 하지만 몇몇 경기 결과를 분실하여 정확하게 순위를 매길 수 없습니다.

선수의 수 n, 경기 결과를 담은 2차원 배열 results가 매개변수로 주어질 때 정확하게 순위를 매길 수 있는 선수의 수를 return 하도록 solution 함수를 작성해주세요.

##### 제한사항

- 선수의 수는 1명 이상 100명 이하입니다.
- 경기 결과는 1개 이상 4,500개 이하입니다.
- results 배열 각 행 [A, B]는 A 선수가 B 선수를 이겼다는 의미입니다.
- 모든 경기 결과에는 모순이 없습니다.

##### 입출력 예

| n    | results                                  | return |
| ---- | ---------------------------------------- | ------ |
| 5    | [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]] | 2      |

##### 입출력 예 설명

2번 선수는 [1, 3, 4] 선수에게 패배했고 5번 선수에게 승리했기 때문에 4위입니다.
5번 선수는 4위인 2번 선수에게 패배했기 때문에 5위입니다.

# 내가 생각하는 문제 풀이 포인트

1. 플로이드 와샬 
   1. 모든 경로에 대해 최단경로를 구하는 문제 
   2. 여기서는 순서를 아는 경우 1부여 하나씩 경유할경우 1을 추가한다고 생각하고 
   3. 플로이드와샬 진행후 하나의 노드에서 순서를 모르는 경우(max일때) 가 하나도없을 경우 카운트를 한다. 

# 코드

~~~java
public class Solution {
    public static int solution(int n, int[][] results) {
        int answer = 0;
        final int MAX = 5000;
        int[][] score = new int[101][101];

        for(int i=1;i<=n;i++){
            for(int j=1;j<=n;j++){
                score[i][j] = MAX;
            }
        }

        for(int[] result : results){
            score[result[0]][result[1]] = 1;
        }

        for(int k=1;k<=n;k++){
            for(int i=1;i<=n;i++){
                for(int j=1;j<=n;j++){
                    score[i][j] = Math.min(score[i][j], score[i][k]+ score[k][j]);
                }
            }
        }

        for(int i=1;i<=n;i++){
            boolean check=true;
            for(int j=1;j<=n;j++){
                if(i==j) continue;
                if(score[i][j] ==MAX && score[j][i] ==MAX){
                    check = false;
                    break;
                }
            }
            if(check)
                answer++;
        }
        return answer;
    }

    public static void main(String[] args) {
        int n=5;
        int[][] results = {{4, 3}, {4, 2}, {3, 2}, {1, 2}, {2, 5}};

        System.out.println(solution(n,results));
    }
}

~~~



# 느낀점

카카오문제를 풀고나니 느꼈다. 이제는 다양한 알고리즘을 알아야한다. 

> # 최소 경로 알고리즘들 비교
>
> 1. 벨만 포드
> 2. 다익스트라
> 3. Floyd-Washall
> 4. BFS (간선간의 weight가 없을 때 사용)
>
> ### 유형에 따른 구분
>
> 1. Single-source : 하나의 출발 노드 s로 부터 다른 모든 노드까지의 최단 경로를 찾아라 (**Dijkstra, 벨만 포드 알고리즘**)
> 2. Single-destination : 모든 출발 노드로부터 하나의 목적지 노드 까지의 최단 경로를 찾아라 //**무방향 그래프이면 single-source 문제와 같다**
> 3. Singe-pair : 하나의 출발 노드 -> 하나의 목적적지 노드 // **worst case가 single-source보다 항상 나쁘다.** but 가장 효율성, 실용성 있는 문제
> 4. All-paris : 모든 노드 쌍에 대해서 최단 경로를 찾아라 (**플로이드 알고리즘**)



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/49191?language=java)

