---
layout: post
title: "[2019 KAKAO BLIND RECRUITMENT] 실패율"
subtitle: "2019 카카오 기출 실패율"
categories: algorithm
tags: programmers java algorithm 
comments: true
---

# 문제설명

## 실패율

![failture_rate1.png](https://grepp-programmers.s3.amazonaws.com/files/production/bde471d8ac/48ddf1cc-c4ea-499d-b431-9727ee799191.png)

슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.

- 실패율은 다음과 같이 정의한다.
  - 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

##### 제한사항

- 스테이지의 개수 N은 `1` 이상 `500` 이하의 자연수이다.

- stages의 길이는 `1` 이상 `200,000` 이하이다.

- stages에는

   

  ```
  1
  ```

   

  이상

   

  ```
  N + 1
  ```

   

  이하의 자연수가 담겨있다.

  - 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
  - 단, `N + 1` 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.

- 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.

- 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 `0` 으로 정의한다.

##### 입출력 예

| N    | stages                   | result      |
| ---- | ------------------------ | ----------- |
| 5    | [2, 1, 2, 6, 2, 4, 3, 3] | [3,4,2,1,5] |
| 4    | [4,4,4,4,4]              | [4,1,2,3]   |

##### 입출력 예 설명

입출력 예 #1
1번 스테이지에는 총 8명의 사용자가 도전했으며, 이 중 1명의 사용자가 아직 클리어하지 못했다. 따라서 1번 스테이지의 실패율은 다음과 같다.

- 1 번 스테이지 실패율 : 1/8

2번 스테이지에는 총 7명의 사용자가 도전했으며, 이 중 3명의 사용자가 아직 클리어하지 못했다. 따라서 2번 스테이지의 실패율은 다음과 같다.

- 2 번 스테이지 실패율 : 3/7

마찬가지로 나머지 스테이지의 실패율은 다음과 같다.

- 3 번 스테이지 실패율 : 2/4
- 4번 스테이지 실패율 : 1/2
- 5번 스테이지 실패율 : 0/1

각 스테이지의 번호를 실패율의 내림차순으로 정렬하면 다음과 같다.

- [3,4,2,1,5]

입출력 예 #2

모든 사용자가 마지막 스테이지에 있으므로 4번 스테이지의 실패율은 1이며 나머지 스테이지의 실패율은 0이다.

- [4,1,2,3]

# 내가 생각하는 문제 풀이 포인트

1. sort문제이다. 
   
   1. 자바에서 custom sort를 구현하는 방법
      
   1. ~~~java
      Arrays.sort(this.list, new Comparator<Stage>() {
                      @Override
                      public int compare(Stage o1, Stage o2) {
                          if(o1.getFailureLate()>o2.getFailureLate())//오름차순
                              return -1;
                          else if(o1.getFailureLate()<o2.getFailureLate())
                              return 1;
                          else
                              return o1.getNum() - o2.getNum(); //오름차순
                      }
                  });
      ~~~
      
   1. 위는 실패율 오름차순, 실패율이 같을때 stage 번호를 오름차순으로 정렬하는 코드이다. 



# 코드

~~~java
import java.util.Arrays;
import java.util.Comparator;

public class Solution {
    public static int[] solution(int N, int[] stages) {

        StageList stageList = new StageList(N);

        for(int s:stages){
            stageList.updateStageInfo(s);
        }
        return stageList.getResult();
    }

    static class StageList{
        private Stage[] list;

        public StageList(int stageSize) {
            this.list = new Stage[stageSize];
            for(int i=0;i<stageSize;i++){
                this.list[i] = new Stage(i+1);
            }
        }
        
        public Stage getStage(int stageNum){
            return this.list[stageNum-1];
        }

        public int[] getResult(){
            sortList();
            int[] result = new int[this.list.length];

            for(int i=0;i<this.list.length;i++){
                result[i] = getStage(i+1).getNum();
            }
            return result;
        }

        public void updateStageInfo(int stageNum){//1감소 고려
            for(int i=1;i<stageNum;i++){
                getStage(i).addArriveNum();
                getStage(i).addClearNum();
            }
            if(stageNum<=list.length)
                getStage(stageNum).addArriveNum();
        }

        public void sortList(){
            Arrays.sort(this.list, new Comparator<Stage>() {
                @Override
                public int compare(Stage o1, Stage o2) {
                    if(o1.getFailureLate()>o2.getFailureLate())
                        return -1;
                    else if(o1.getFailureLate()<o2.getFailureLate())
                        return 1;
                    else
                        return o1.getNum() - o2.getNum();
                }
            });
        }

    }

    static class Stage{
        private int clear;
        private int arrive;
        private int num;

        public Stage(int num) {
            this.clear = 0;
            this.arrive = 0;
            this.num = num;
        }

        public int getNum() {
            return num;
        }

        public int getClear() {
            return clear;
        }
        public double getFailureLate(){
            return (double)(getArrive()-getClear())/(double)getArrive();
        }

        public int getArrive() {
            return arrive;
        }

        public void addClearNum() {
            this.clear++;
        }

        public void addArriveNum() {
            this.arrive++;
        }
    }
}

~~~



# 느낀점

java 의 custom sort를 익힐수 있었다.



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42889?language=java)