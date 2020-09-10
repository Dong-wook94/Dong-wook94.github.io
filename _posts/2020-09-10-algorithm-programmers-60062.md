---
layout: post
title: "[2020 KAKAO BLIND RECRUITMENT] 외벽 점검"
subtitle: "2020 카카오 기출 외벽 점검"
categories: algorithm
tags: programmers java algorithm 
comments: true
---

# 문제설명

레스토랑을 운영하고 있는 **스카피**는 레스토랑 내부가 너무 낡아 친구들과 함께 직접 리모델링 하기로 했습니다. 레스토랑이 있는 곳은 스노우타운으로 매우 추운 지역이어서 내부 공사를 하는 도중에 주기적으로 외벽의 상태를 점검해야 할 필요가 있습니다.

레스토랑의 구조는 **완전히 동그란 모양**이고 **외벽의 총 둘레는 n미터**이며, 외벽의 몇몇 지점은 추위가 심할 경우 손상될 수도 있는 **취약한 지점들**이 있습니다. 따라서 내부 공사 도중에도 외벽의 취약 지점들이 손상되지 않았는 지, 주기적으로 친구들을 보내서 점검을 하기로 했습니다. 다만, 빠른 공사 진행을 위해 점검 시간을 1시간으로 제한했습니다. 친구들이 1시간 동안 이동할 수 있는 거리는 제각각이기 때문에, 최소한의 친구들을 투입해 취약 지점을 점검하고 나머지 친구들은 내부 공사를 돕도록 하려고 합니다. 편의 상 레스토랑의 정북 방향 지점을 0으로 나타내며, 취약 지점의 위치는 정북 방향 지점으로부터 시계 방향으로 떨어진 거리로 나타냅니다. 또, 친구들은 출발 지점부터 시계, 혹은 반시계 방향으로 외벽을 따라서만 이동합니다.

외벽의 길이 n, 취약 지점의 위치가 담긴 배열 weak, 각 친구가 1시간 동안 이동할 수 있는 거리가 담긴 배열 dist가 매개변수로 주어질 때, 취약 지점을 점검하기 위해 보내야 하는 친구 수의 최소값을 return 하도록 solution 함수를 완성해주세요.

### 제한사항

- n은 1 이상 200 이하인 자연수입니다.
- weak의 길이는 1 이상 15 이하입니다.
  - 서로 다른 두 취약점의 위치가 같은 경우는 주어지지 않습니다.
  - 취약 지점의 위치는 오름차순으로 정렬되어 주어집니다.
  - weak의 원소는 0 이상 n - 1 이하인 정수입니다.
- dist의 길이는 1 이상 8 이하입니다.
  - dist의 원소는 1 이상 100 이하인 자연수입니다.
- 친구들을 모두 투입해도 취약 지점을 전부 점검할 수 없는 경우에는 -1을 return 해주세요.

------

### 입출력 예

| n    | weak             | dist         | result |
| ---- | ---------------- | ------------ | ------ |
| 12   | [1, 5, 6, 10]    | [1, 2, 3, 4] | 2      |
| 12   | [1, 3, 4, 9, 10] | [3, 5, 7]    | 1      |

### 입출력 예에 대한 설명

**입출력 예 #1**

원형 레스토랑에서 외벽의 취약 지점의 위치는 다음과 같습니다.

![외벽점검-1.jpg](https://grepp-programmers.s3.amazonaws.com/files/production/61de504978/1c8394ec-05e0-4b7b-a0ff-3ff9ae0cec28.jpg)

친구들을 투입하는 예시 중 하나는 다음과 같습니다.

- 4m를 이동할 수 있는 친구는 10m 지점에서 출발해 시계방향으로 돌아 1m 위치에 있는 취약 지점에서 외벽 점검을 마칩니다.
- 2m를 이동할 수 있는 친구는 4.5m 지점에서 출발해 6.5m 지점에서 외벽 점검을 마칩니다.

그 외에 여러 방법들이 있지만, 두 명보다 적은 친구를 투입하는 방법은 없습니다. 따라서 친구를 최소 두 명 투입해야 합니다.

**입출력 예 #2**

원형 레스토랑에서 외벽의 취약 지점의 위치는 다음과 같습니다.

![외벽점검-2.jpg](https://grepp-programmers.s3.amazonaws.com/files/production/3669c9b3d6/00e8eeb4-f3ec-4c18-96fb-a3b17aaf1812.jpg)

7m를 이동할 수 있는 친구가 4m 지점에서 출발해 반시계 방향으로 점검을 돌면 모든 취약 지점을 점검할 수 있습니다. 따라서 친구를 최소 한 명 투입하면 됩니다.

# 내가 생각하는 문제 풀이 포인트

이번문제는 너무 하드 코딩을 한것 같다.  하지만 brute-force문제이긴 한것같다.

1. 순열을 이용한 dist 모든 경우의 수
2. 외벽점검시 원형임을 고려해 모든 weak지점에 한해 시작지점인 경우의수 모두 구하기

나는 이번 문제에서 이 두가지의 경우에 한해 모두 리스트를 만든뒤 계산하였다. 

# 코드

~~~java
import java.util.*;
import java.util.stream.Collectors;

public class Solution {

    static int[][] rotateWeak;
    static List<List<Integer>> permutationList;
    static int wallSize;
    public static int solution(int n, int[] weak, int[] dist) {
        wallSize = n;
        List<Integer> distList = Arrays.stream(dist).boxed().collect(Collectors.toList());
        Collections.reverse(distList);
        boolean[] visited = new boolean[dist.length];
        List<Integer> list = new ArrayList<>();
        permutationList = new ArrayList<>();
        rotateWeak = new int[weak.length][weak.length];

        setRotateWeak(weak.length,weak);
        setPermutationList(list,distList,0,dist.length,visited);

        for(int i=1;i<=dist.length;i++){
            if(canInspect(i)){
                return i;
            }
        }

        return -1;
    }

    private static boolean canInspect(int cnt) {
        for(int[] weak:rotateWeak){
           for(List<Integer> curDist : permutationList){
               int startIdx = 0;
               for(int i=0;i<cnt;i++){
                   int ableDist = weak[startIdx]+curDist.get(i);
                   int j=startIdx;
                   for(;j<weak.length;){
                       if(weak[j]<=ableDist){
                           j++;
                       }
                       else{
                           startIdx = j;
                           break;
                       }
                   }
                   if(j==weak.length){
                       return true;
                   }
               }
           }
        }
        return false;
    }

    private static void setRotateWeak(int length, int[] weak) {
        for(int i=0; i< length;i++){
            rotateWeak[i] = rotate(weak,i,length);
        }
    }

    private static int[] rotate(int[] weak, int idx, int length) {
        int[] result = new int[length];
        for(int i=0;i<length;i++){
            if(i+idx<length)
                result[i] = weak[i+idx];
            else
                result[i] = weak[i+idx-length]+wallSize;
        }
        return result;
    }

    private static void setPermutationList(List<Integer> result,List<Integer> distList, int depth, int max, boolean[] visited) {
        if(depth==max){
            permutationList.add(new ArrayList<>(result));
           // System.out.println(result.toString());
            return;
        }
        for(int i=0;i<distList.size();i++){
            if(!visited[i]){
                result.add(distList.get(i));
                visited[i] = true;
                setPermutationList(result,distList,depth+1,max,visited);
                visited[i] = false;
                result.remove(distList.get(i));
            }
        }
    }

}
~~~



# 느낀점

코딩테스트 전 다양한 기능을 사용하며 문제를 풀려고 하다 보니 이번 문제는 매우 복잡하게 푼것같다. 

c++에 존재하는 next_permutation의 기능을 비슷하게 사용하려다보니 dfs를 통해 permutationList를 만들어 이 리스트를 가지고 계산을 하였는데 그냥 dfs의 종료조건 안에서 호출한뒤 사용하는게 더욱 적합한 방법이긴 한것 같다. 

 하지만 이러한 방법은 자주 재사용 가능하니 효율적인 면에서는 안좋긴 하지만 이런방법..으로도 한번 해봤다!! 생각하자.

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/60062)

