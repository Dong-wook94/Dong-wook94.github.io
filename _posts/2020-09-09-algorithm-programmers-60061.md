---
layout: post
title: "[2020 KAKAO BLIND RECRUITMENT] 기둥과 보 설치"
subtitle: "2020 카카오 기출 기둥과 보 설치"
categories: algorithm
tags: programmers java algorithm 
comments: true
---

# 문제설명

- 빙하가 깨지면서 스노우타운에 떠내려 온 **죠르디**는 인생 2막을 위해 주택 건축사업에 뛰어들기로 결심하였습니다. 죠르디는 **기둥과 보**를 이용하여 벽면 구조물을 자동으로 세우는 로봇을 개발할 계획인데, 그에 앞서 로봇의 동작을 시뮬레이션 할 수 있는 프로그램을 만들고 있습니다.
  프로그램은 **2차원 가상 벽면**에 기둥과 보를 이용한 구조물을 설치할 수 있는데, 기둥과 보는 **길이가 1인 선분**으로 표현되며 다음과 같은 규칙을 가지고 있습니다.

  - 기둥은 바닥 위에 있거나 보의 한쪽 끝 부분 위에 있거나, 또는 다른 기둥 위에 있어야 합니다.
  - 보는 한쪽 끝 부분이 기둥 위에 있거나, 또는 양쪽 끝 부분이 다른 보와 동시에 연결되어 있어야 합니다.

  단, 바닥은 벽면의 맨 아래 지면을 말합니다.

  2차원 벽면은 **`n x n`** 크기 정사각 격자 형태이며, 각 격자는 **`1 x 1`** 크기입니다. 맨 처음 벽면은 비어있는 상태입니다. 기둥과 보는 격자선의 교차점에 걸치지 않고, 격자 칸의 각 변에 정확히 일치하도록 설치할 수 있습니다. 다음은 기둥과 보를 설치해 구조물을 만든 예시입니다.

  ![기둥과보-1.jpg](https://grepp-programmers.s3.amazonaws.com/files/production/c453630fa0/834b86e5-6fd0-4d3c-8023-7f853ea4301f.jpg)

  예를 들어, 위 그림은 다음 순서에 따라 구조물을 만들었습니다.

  1. (1, 0)에서 위쪽으로 기둥을 하나 설치 후, (1, 1)에서 오른쪽으로 보를 하나 만듭니다.
  2. (2, 1)에서 위쪽으로 기둥을 하나 설치 후, (2, 2)에서 오른쪽으로 보를 하나 만듭니다.
  3. (5, 0)에서 위쪽으로 기둥을 하나 설치 후, (5, 1)에서 위쪽으로 기둥을 하나 더 설치합니다.
  4. (4, 2)에서 오른쪽으로 보를 설치 후, (3, 2)에서 오른쪽으로 보를 설치합니다.

  만약 (4, 2)에서 오른쪽으로 보를 먼저 설치하지 않고, (3, 2)에서 오른쪽으로 보를 설치하려 한다면 2번 규칙에 맞지 않으므로 설치가 되지 않습니다. 기둥과 보를 삭제하는 기능도 있는데 기둥과 보를 삭제한 후에 남은 기둥과 보들 또한 위 규칙을 만족해야 합니다. 만약, 작업을 수행한 결과가 조건을 만족하지 않는다면 해당 작업은 무시됩니다.

  벽면의 크기 n, 기둥과 보를 설치하거나 삭제하는 작업이 순서대로 담긴 2차원 배열 build_frame이 매개변수로 주어질 때, 모든 명령어를 수행한 후 구조물의 상태를 return 하도록 solution 함수를 완성해주세요.

  ### 제한사항

  - n은 5 이상 100 이하인 자연수입니다.
  - build_frame의 세로(행) 길이는 1 이상 1,000 이하입니다.
  - build_frame의 가로(열) 길이는 4입니다.
  - build_frame의 원소는 [x, y, a, b]형태입니다.
    - x, y는 기둥, 보를 설치 또는 삭제할 교차점의 좌표이며, [가로 좌표, 세로 좌표] 형태입니다.
    - a는 설치 또는 삭제할 구조물의 종류를 나타내며, 0은 기둥, 1은 보를 나타냅니다.
    - b는 구조물을 설치할 지, 혹은 삭제할 지를 나타내며 0은 삭제, 1은 설치를 나타냅니다.
    - 벽면을 벗어나게 기둥, 보를 설치하는 경우는 없습니다.
    - 바닥에 보를 설치 하는 경우는 없습니다.
  - 구조물은 교차점 좌표를 기준으로 보는 오른쪽, 기둥은 위쪽 방향으로 설치 또는 삭제합니다.
  - 구조물이 겹치도록 설치하는 경우와, 없는 구조물을 삭제하는 경우는 입력으로 주어지지 않습니다.
  - 최종 구조물의 상태는 아래 규칙에 맞춰 return 해주세요.
    - return 하는 배열은 가로(열) 길이가 3인 2차원 배열로, 각 구조물의 좌표를 담고있어야 합니다.
    - return 하는 배열의 원소는 [x, y, a] 형식입니다.
    - x, y는 기둥, 보의 교차점 좌표이며, [가로 좌표, 세로 좌표] 형태입니다.
    - 기둥, 보는 교차점 좌표를 기준으로 오른쪽, 또는 위쪽 방향으로 설치되어 있음을 나타냅니다.
    - a는 구조물의 종류를 나타내며, 0은 기둥, 1은 보를 나타냅니다.
    - return 하는 배열은 x좌표 기준으로 오름차순 정렬하며, x좌표가 같을 경우 y좌표 기준으로 오름차순 정렬해주세요.
    - x, y좌표가 모두 같은 경우 기둥이 보보다 앞에 오면 됩니다.

  ### 입출력 예

  | n    | build_frame                                                  | result                                                       |
  | ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
  | 5    | [[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]] | [[1,0,0],[1,1,1],[2,1,0],[2,2,1],[3,2,1],[4,2,1],[5,0,0],[5,1,0]] |
  | 5    | [[0,0,0,1],[2,0,0,1],[4,0,0,1],[0,1,1,1],[1,1,1,1],[2,1,1,1],[3,1,1,1],[2,0,0,0],[1,1,1,0],[2,2,0,1]] | [[0,0,0],[0,1,1],[1,1,1],[2,1,1],[3,1,1],[4,0,0]]            |

  ### 입출력 예에 대한 설명

  **입출력 예 #1**

  문제의 예시와 같습니다.

  **입출력 예 #2**

  여덟 번째 작업을 수행 후 아래와 같은 구조물 만들어집니다.

  ![기둥과보-2.jpg](https://grepp-programmers.s3.amazonaws.com/files/production/e62b852aba/ff82828f-5d2c-43af-b734-2752a776a234.jpg)

  아홉 번째 작업의 경우, (1, 1)에서 오른쪽에 있는 보를 삭제하면 (2, 1)에서 오른쪽에 있는 보는 조건을 만족하지 않으므로 무시됩니다.

  열 번째 작업의 경우, (2, 2)에서 위쪽 방향으로 기둥을 세울 경우 조건을 만족하지 않으므로 무시됩니다.

# 내가 생각하는 문제 풀이 포인트

1. 시뮬레이션 문제이다.
1. 삭제가 까다롭다.
   1. 삭제를 하기전에 먼저 없애보고 지금 상태가 유지 가능한지 체크를 하는 방식이다. 



# 코드

~~~java
public class Solution {
    static final int COLUMN = 0;
    static final int BEAM = 1;
    static final int DESTROY = 0;
    static final int BUILD = 1;

    static boolean[][][] structure;

    static int count = 0;

    public static int[][] solution(int n, int[][] build_frame) {
        int[][] answer;

        structure = new boolean[n + 1][n + 1][2];

        for (int[] frameInfo : build_frame) {
            int x = frameInfo[0];
            int y = frameInfo[1];
            int type = frameInfo[2];
            int action = frameInfo[3];
            if (type == COLUMN) {
                if (action == DESTROY) {//기둥 삭제
                    destroyColumn(x, y, n);
                } else {//기둥 설치
                    buildColumn(x, y, n);
                }
            } else {
                if (action == DESTROY) {//기둥 삭제
                    destroyBeam(x, y, n);
                } else {//기둥 설치
                    buildBeam(x, y, n);
                }
            }
        }

        answer = new int[count][3];

        int idx = 0;

        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= n; j++) {
                for (int k = 0; k < 2; k++) {
                    if (structure[i][j][k]) {
                        answer[idx] = new int[]{i, j, k};
                        idx++;
                    }

                }
            }
        }

        return answer;
    }

    private static boolean existColumn(int x, int y, int n) {
        if (x<0 || y<0 || x>n || y>n)
            return false;
        return structure[x][y][COLUMN];
    }
    private static boolean existBeam(int x, int y, int n) {
        if(x<0 || y<0 || x>n || y>n)
            return false;
        return structure[x][y][BEAM];
    }

    private static boolean canMaintainBeam(int x, int y, int n) {
        if (existColumn(x, y - 1, n) || existColumn(x + 1, y - 1, n))//양쪽한곳에 기둥이 있는 경우
            return true;
        if (existBeam(x - 1, y, n) && existBeam(x + 1, y, n))// 보가 왼쪽 오른쪽 모두에 둘다있을때
            return true;
        return false;
    }
    private static boolean canMaintainPillar(int x, int y, int n) {
        if (y == 0) //바닥
            return true;
        //왼쪽 또는 오른쪽에 보가있거나 바로아래에 기둥이 있는 경우
        if (existBeam(x - 1, y, n) || existBeam(x, y, n) || existColumn(x, y - 1, n))
            return true;
        return false;
    }

    private static boolean canDestroyBeam(int x, int y, int n) {
        if (existBeam(x, y, n)) {
            structure[x][y][BEAM]=false;
            if (existColumn(x, y, n)) {//보의 왼쪽끝에 기둥이 있는경우
                if (!canMaintainPillar(x, y, n)) {
                    structure[x][y][BEAM] = true;
                    return false;
                }
            }
            if (existColumn(x + 1, y, n)) {//보의 오른쪽끝에 기둥이 있는경우
                if (!canMaintainPillar(x + 1, y, n)) {
                    structure[x][y][BEAM] = true;
                    return false;
                }
            }
            if (existBeam(x - 1, y, n)) {// 보의 왼쪽에 보가 있는 경우
                if (!canMaintainBeam(x - 1, y, n)) {
                    structure[x][y][BEAM] = true;
                    return false;
                }
            }
            if (existBeam(x + 1, y, n)) {// 보의 오른쪽에 보가 있는경우
                if (!canMaintainBeam(x + 1, y, n)) {
                    structure[x][y][BEAM] = true;
                    return false;
                }
            }
        }
        return true;
    }



    private static boolean canDestroyColumn(int x, int y, int n) {
        if (existColumn(x, y, n)) {
            structure[x][y][COLUMN] = false;
            if (existColumn(x, y + 1, n)) {//위에 기둥이 있을때
                if (!canMaintainPillar(x,y+1,n)) {
                    structure[x][y][COLUMN] = true;
                    return false;
                }

            }
            if (existBeam(x - 1, y + 1, n)) {//왼쪽 위에 보가 있을때
                if (!canMaintainBeam(x - 1, y + 1, n)) {
                    structure[x][y][COLUMN] = true;
                    return false;
                }
            }
            if (existBeam(x, y + 1, n)) {//오른쪽위에 보가 있을때
                if (!canMaintainBeam(x, y + 1, n)) {
                    structure[x][y][COLUMN] = true;
                    return false;
                }
            }
        }
        return true;
    }

    private static boolean canBuildBeam(int x, int y, int n) {
        if (existColumn(x, y - 1, n) || existColumn(x + 1, y - 1, n)) //한쪽 끝부분이 기둥위
            return true;
        else if (existBeam(x - 1, y, n) && existBeam(x + 1, y, n)) // 양쪽 끝부분이 다른보와 동시연결
            return true;
        return false;
    }

    private static boolean canBuildColumn(int x, int y, int n) {
        if (y == 0)//바닥일때
            return true;
        else if (existBeam(x - 1, y, n) || existBeam(x, y, n))//보의 한쪽 끝위에 있을때
            return true;
        else if (existColumn(x, y - 1, n))//또다른 기둥위 일때
            return true;
        return false;
    }

    private static void destroyBeam(int x, int y, int n){
        if (canDestroyBeam(x, y, n)){
            structure[x][y][BEAM] = false;
            count--;
        }
            
    }

    private static void destroyColumn(int x, int y, int n) {
        if (canDestroyColumn(x, y, n)) {
            structure[x][y][COLUMN] = false;
            count--;
        }
    }

    private static void buildBeam(int x, int y, int n) {
        if (canBuildBeam(x, y, n)) {
            structure[x][y][BEAM] = true;
            count++;
        }
    }

    private static void buildColumn(int x, int y,int n) {
        if (canBuildColumn(x, y, n)) {
            structure[x][y][COLUMN] = true;
            count++;
        }
    }
}
~~~



# 느낀점

이렇게 푸는게 맞는지 다른 풀이를 좀 봐야 될 것 같다. 정말 길게 푼 문제 같다. 



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/60061)

