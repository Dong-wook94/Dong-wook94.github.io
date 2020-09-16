---
layout: post
title: "[백준 9466] 텀 프로젝트"
subtitle: "백준 9466 텀 프로젝트"
categories: algorithm
tags: baekjoon java algorithm 
comments: true
---

# 문제설명

## 문제

이번 가을학기에 '문제 해결' 강의를 신청한 학생들은 텀 프로젝트를 수행해야 한다. 프로젝트 팀원 수에는 제한이 없다. 심지어 모든 학생들이 동일한 팀의 팀원인 경우와 같이 한 팀만 있을 수도 있다. 프로젝트 팀을 구성하기 위해, 모든 학생들은 프로젝트를 함께하고 싶은 학생을 선택해야 한다. (단, 단 한 명만 선택할 수 있다.) 혼자 하고 싶어하는 학생은 자기 자신을 선택하는 것도 가능하다.

학생들이(s1, s2, ..., sr)이라 할 때, r=1이고 s1이 s1을 선택하는 경우나, s1이 s2를 선택하고, s2가 s3를 선택하고,..., sr-1이 sr을 선택하고, sr이 s1을 선택하는 경우에만 한 팀이 될 수 있다.

예를 들어, 한 반에 7명의 학생이 있다고 하자. 학생들을 1번부터 7번으로 표현할 때, 선택의 결과는 다음과 같다.

| 1    | 2    | 3    | 4    | 5    | 6    | 7    |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 3    | 1    | 3    | 7    | 3    | 4    | 6    |

위의 결과를 통해 (3)과 (4, 7, 6)이 팀을 이룰 수 있다. 1, 2, 5는 어느 팀에도 속하지 않는다.

주어진 선택의 결과를 보고 어느 프로젝트 팀에도 속하지 않는 학생들의 수를 계산하는 프로그램을 작성하라.

## 입력

첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스의 첫 줄에는 학생의 수가 정수 n (2 ≤ n ≤ 100,000)으로 주어진다. 각 테스트 케이스의 둘째 줄에는 선택된 학생들의 번호가 주어진다. (모든 학생들은 1부터 n까지 번호가 부여된다.)

## 출력

각 테스트 케이스마다 한 줄에 출력하고, 각 줄에는 프로젝트 팀에 속하지 못한 학생들의 수를 나타내면 된다.

## 예제 입력 1 복사

```
2
7
3 1 3 7 3 4 6
8
1 2 3 4 5 6 7 8
```

## 예제 출력 1 복사

```
3
0
```

# 내가 생각하는 문제 풀이 포인트

1. 사이클 체크
   1. DFS로 진행한다.
   2. 경우 1 : 스스로 혼자 팀인경우
   3. 경우 2 : 시작점으로 쭉 사이클이 이어지는경우
   4. ![image](https://user-images.githubusercontent.com/36303777/93297841-14899880-f82d-11ea-953d-461f2a937c17.png)
   5. 경우 3: 시작점이 아닌 중간경로로 사이클이 생기는 경우
   6. ![image](https://user-images.githubusercontent.com/36303777/93298052-81049780-f82d-11ea-9d08-8f95d433f5c6.png)
   7. 위의 모든 경우를 효율적으로 체크하기위 해 map을 사용한다.
      1. 방문한 경우에는 visited 로체크
      2. 현재 dfs진행중에 추가되는 경로들은 map에 저장한다.
      3. map을 통해 들어온 순서를 value로 저장한다.
      4. 중간에 방문했던곳 감지시 map에 저장되어있는지 확인
         1. 저장이 안된경우는  사이클이 깨지는 경우다.
         2. 저장이 된경우는 내부 사이클이 생긴다. 이때 map 에서 가져온 value가 카운트 개수인데 본인 제외 앞에 개수만큼을 전체 map 개수에서 빼준다. 그러면 사이클으로 생성된 개수!
2. 사이클이 생성될때 마다 결과에서 빼준다.

# 코드

~~~java
import java.io.*;
import java.util.HashMap;
import java.util.HashSet;
import java.util.StringTokenizer;

public class Baekjoon9466 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static int result;
    static boolean[] visited;

    public static void main(String[] args) throws IOException {
        int numTestcase = Integer.parseInt(br.readLine());
        for (int i = 0; i < numTestcase; i++) {
            testcase();
        }
        bw.flush();
        bw.close();
    }

    private static void testcase() throws IOException {
        int numStudents = Integer.parseInt(br.readLine());
        result = numStudents;
        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] students = new int[numStudents + 1];
        visited = new boolean[numStudents + 1];
        for (int i = 1; i <= numStudents; i++) {
            students[i] = Integer.parseInt(st.nextToken());
            if (students[i] == i) { //자기자신 참조
                visited[i] = true;
                result -=1;
            }
        }
        for (int i = 1; i <= numStudents; i++) {
            HashMap<Integer,Integer> set = new HashMap();
            if(!visited[i]){
                dfs(i,students,i,1,set);
            }
        }
        bw.write(result+"\n");
    }

    private static void dfs(int idx, int[] students,int startIdx,int cnt,HashMap set) {
        if(students[idx] == startIdx){//다음이 출발지점일때 사이
            result -=cnt;
            return;
        }

        if(!visited[students[idx]]){
            visited[students[idx]]  = true;
            set.put(students[idx],cnt);
            dfs(students[idx], students,startIdx,cnt+1,set);
        }
        else{
            if(set.containsKey(students[idx])){
                int setSize = set.size();
                int other = (Integer)set.get(students[idx])-1;
                result -= (setSize-other);
            }
            return;
        }
    }


}

~~~



# 느낀점

사이클을 찾는다. dfs를 이용했다.

[문제 링크](https://www.acmicpc.net/problem/9466)

