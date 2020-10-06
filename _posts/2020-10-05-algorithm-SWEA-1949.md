---
layout: post
title: "[SWEA 1949] 등산로 조성"
subtitle: "모의 sw 역량테스트 등산로 조성"
categories: algorithm
tags: SWEA java algorithm
comments: true
---

# 문제설명

등산로를 조성하려고 한다.

등산로를 만들기 위한 부지는 N * N 크기를 가지고 있으며, 이곳에 최대한 긴 등산로를 만들 계획이다.

등산로 부지는 아래 [Fig. 1]과 같이 숫자가 표시된 지도로 주어지며, 각 숫자는 지형의 높이를 나타낸다.
 

![img](https://swexpertacademy.com/main/common/fileDownload.do?downloadType=CKEditorImages&fileId=AV5PvGLaAbQDFAUq) 


등산로를 만드는 규칙은 다음과 같다.

  ① 등산로는 가장 높은 봉우리에서 시작해야 한다.

  ② 등산로는 산으로 올라갈 수 있도록 반드시 높은 지형에서 낮은 지형으로 가로 또는 세로 방향으로 연결이 되어야 한다.
    즉, 높이가 같은 곳 혹은 낮은 지형이나, 대각선 방향의 연결은 불가능하다.

  ③ 긴 등산로를 만들기 위해 **딱 한 곳**을 정해서 최대 K 깊이만큼 지형을 깎는 공사를 할 수 있다.

N * N 크기의 지도가 주어지고, 최대 공사 가능 깊이 K가 주어진다.

이때 만들 수 있는 가장 긴 등산로를 찾아 그 길이를 출력하는 프로그램을 작성하라.


**[예시]**

위 [Fig. 1]과 같이 N = 5인 지도가 주어진 경우를 살펴보자.

가장 높은 봉우리는 높이가 9로 표시된 세 군데이다.

이 세 곳에서 출발하는 가장 긴 등산로 중 하나는 아래 [Fig. 2]와 같고, 이 때 길이는 5가 된다.

![img](https://swexpertacademy.com/main/common/fileDownload.do?downloadType=CKEditorImages&fileId=AV5PvLWqAbUDFAUq) 


만약 최대 공사 가능 깊이 K = 1로 주어질 경우,

아래 [Fig. 3]과 같이 빨간색 부분의 높이를 9에서 8로 깎으면 길이가 6인 등산로를 만들 수 있다.

![img](https://swexpertacademy.com/main/common/fileDownload.do?downloadType=CKEditorImages&fileId=AV5PvQAaAbYDFAUq)


이 예에서 만들 수 있는 가장 긴 등산로는 위와 같으며, 출력할 정답은 6이 된다.


**[제약 사항]**

\1. 시간 제한 : 최대 51개 테스트 케이스를 모두 통과하는 데 C/C++/Java 모두 3초

\2. 지도의 한 변의 길이 N은 3 이상 8 이하의 정수이다. (3 ≤ N ≤ 8)

\3. 최대 공사 가능 깊이 K는 1 이상 5 이하의 정수이다. (1 ≤ K ≤ 5)

\4. 지도에 나타나는 지형의 높이는 1 이상 20 이하의 정수이다.

\5. 지도에서 가장 높은 봉우리는 최대 5개이다.

\6. 지형은 정수 단위로만 깎을 수 있다.

\7. 필요한 경우 지형을 깎아 높이를 1보다 작게 만드는 것도 가능하다.

**[입력]**

입력의 맨 첫 줄에는 총 테스트 케이스의 개수 T가 주어지고, 그 다음 줄부터 T개의 테스트 케이스가 주어진다.

각 테스트 케이스의 첫 번째 줄에는 지도의 한 변의 길이 N, 최대 공사 가능 깊이 K가 차례로 주어진다.

그 다음 N개의 줄에는 N * N 크기의 지도 정보가 주어진다.

**[출력]**

테스트 케이스 개수만큼 T개의 줄에 각각의 테스트 케이스에 대한 답을 출력한다.

각 줄은 "#t"로 시작하고 공백을 하나 둔 다음 정답을 출력한다. (t는 1부터 시작하는 테스트 케이스의 번호이다)

출력해야 할 정답은 만들 수 있는 가장 긴 등산로의 길이이다.

## 내가 생각하는 문제 풀이 포인트

1. dfs 문제이다. 



# 코드

~~~java
import java.io.*;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class SWEA1949
{
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static int[][] map;
    static int topHeight;
    static ArrayList<Mountain> topList;
    static int maxLength = 0;
    static int dirRow[] = {1,0,-1,0};
    static int dirCol[] = {0,-1,0,1};
    static boolean[][] visited;
    public static void main(String args[]) throws Exception
    {
      // System.setIn(new FileInputStream("input.txt"));

        int T = Integer.parseInt(br.readLine());

        for(int test_case = 1; test_case <= T; test_case++)
        {
            System.out.print("#"+test_case+" ");
            testCase();
        }
    }

    private static void testCase() throws IOException {
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());
        topHeight = 0;
        topList = new ArrayList<>();
        maxLength = 0;
        map = new int[N][N];
        visited = new boolean[N][N];
        for(int i=0;i<N;i++){
            st = new StringTokenizer(br.readLine());
            for(int j=0;j<N;j++){
                map[i][j] = Integer.parseInt(st.nextToken());
                if(map[i][j]>topHeight){
                    topHeight = map[i][j];
                    topList.clear();
                    topList.add(new Mountain(i,j,topHeight));
                }
                else if(map[i][j]==topHeight){
                    topList.add(new Mountain(i,j,topHeight));
                }
            }
        }
        for(int i=0;i<topList.size();i++){
            Mountain cur = topList.get(i);
            visited[cur.row][cur.col] = true;
            dfs(cur,K,1,true);
            visited[cur.row][cur.col] = false;
        }
        System.out.println(maxLength);
    }

    private static void dfs(Mountain cur, int k, int length,boolean chance) {
        if(maxLength<length)
            maxLength =length;

        for(int i=0;i<4;i++){
            int nextRow = cur.row + dirRow[i];
            int nextCol = cur.col + dirCol[i];
            if(nextRow<0 || nextCol<0 || nextRow>=map.length || nextCol>=map.length)
                continue;
            if(!visited[nextRow][nextCol]){
                if(map[nextRow][nextCol]<cur.height){
                    visited[nextRow][nextCol] = true;
                    dfs(new Mountain(nextRow,nextCol,map[nextRow][nextCol]),k,length+1,chance);
                    visited[nextRow][nextCol] = false;
                }
                else{
                    if(!chance)
                        continue;
                    int cut = map[nextRow][nextCol]-cur.height+1 ;
                    if(cut<=k){
                        visited[nextRow][nextCol] = true;
                        int temp = map[nextRow][nextCol];
                        map[nextRow][nextCol] = (cur.height -1);
                        dfs(new Mountain(nextRow,nextCol,map[nextRow][nextCol]),k - cut,length+1,false);
                        map[nextRow][nextCol] = temp;
                        visited[nextRow][nextCol] = false;
                    }
                }
            }
        }
    }

    static class Mountain{
        int row;
        int col;
        int height;

        public Mountain(int row, int col, int height) {
            this.row = row;
            this.col = col;
            this.height = height;
        }
    }
}
~~~



# 느낀점

딱 한곳만 깎을수 있는데 이부분을 간과해서 조금 걸렸다..ㅎ 

[문제 링크](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5PoOKKAPIDFAUq&categoryId=AV5PoOKKAPIDFAUq&categoryType=CODE)

