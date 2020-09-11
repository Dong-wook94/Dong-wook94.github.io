---
layout: post
title: "[2019 KAKAO BLIND RECRUITMENT] 무지의 먹방 라이브"
subtitle: "2019 카카오 기출 무지의 먹방 라이브"
categories: algorithm
tags: programmers java algorithm 
comments: true
---

# 문제설명

## 무지의 먹방 라이브

```
* 효율성 테스트에 부분 점수가 있는 문제입니다.
```

평소 식욕이 왕성한 무지는 자신의 재능을 뽐내고 싶어 졌고 고민 끝에 카카오 TV 라이브로 방송을 하기로 마음먹었다.

![muji_live.png](https://grepp-programmers.s3.amazonaws.com/files/production/10f4f72c93/1d932bfc-8082-4b7e-b30d-ab46bf71a9f2.png)

그냥 먹방을 하면 다른 방송과 차별성이 없기 때문에 무지는 아래와 같이 독특한 방식을 생각해냈다.

회전판에 먹어야 할 N 개의 음식이 있다.
각 음식에는 1부터 N 까지 번호가 붙어있으며, 각 음식을 섭취하는데 일정 시간이 소요된다.
무지는 다음과 같은 방법으로 음식을 섭취한다.

- 무지는 1번 음식부터 먹기 시작하며, 회전판은 번호가 증가하는 순서대로 음식을 무지 앞으로 가져다 놓는다.
- 마지막 번호의 음식을 섭취한 후에는 회전판에 의해 다시 1번 음식이 무지 앞으로 온다.
- 무지는 음식 하나를 1초 동안 섭취한 후 남은 음식은 그대로 두고, 다음 음식을 섭취한다.
  - 다음 음식이란, 아직 남은 음식 중 다음으로 섭취해야 할 가장 가까운 번호의 음식을 말한다.
- 회전판이 다음 음식을 무지 앞으로 가져오는데 걸리는 시간은 없다고 가정한다.

무지가 먹방을 시작한 지 K 초 후에 네트워크 장애로 인해 방송이 잠시 중단되었다.
무지는 네트워크 정상화 후 다시 방송을 이어갈 때, 몇 번 음식부터 섭취해야 하는지를 알고자 한다.
각 음식을 모두 먹는데 필요한 시간이 담겨있는 배열 food_times, 네트워크 장애가 발생한 시간 K 초가 매개변수로 주어질 때 몇 번 음식부터 다시 섭취하면 되는지 return 하도록 solution 함수를 완성하라.

##### 제한사항

- food_times 는 각 음식을 모두 먹는데 필요한 시간이 음식의 번호 순서대로 들어있는 배열이다.
- k 는 방송이 중단된 시간을 나타낸다.
- 만약 더 섭취해야 할 음식이 없다면 `-1`을 반환하면 된다.

##### 정확성 테스트 제한 사항

- food_times 의 길이는 `1` 이상 `2,000` 이하이다.
- food_times 의 원소는 `1` 이상 `1,000` 이하의 자연수이다.
- k는 `1` 이상 `2,000,000` 이하의 자연수이다.

##### 효율성 테스트 제한 사항

- food_times 의 길이는 `1` 이상 `200,000` 이하이다.
- food_times 의 원소는 `1` 이상 `100,000,000` 이하의 자연수이다.
- k는 `1` 이상 `2 x 10^13` 이하의 자연수이다.

##### 입출력 예

| food_times | k    | result |
| ---------- | ---- | ------ |
| [3, 1, 2]  | 5    | 1      |

##### 입출력 예 설명

입출력 예 #1

- 0~1초 동안에 1번 음식을 섭취한다. 남은 시간은 [2,1,2] 이다.
- 1~2초 동안 2번 음식을 섭취한다. 남은 시간은 [2,0,2] 이다.
- 2~3초 동안 3번 음식을 섭취한다. 남은 시간은 [2,0,1] 이다.
- 3~4초 동안 1번 음식을 섭취한다. 남은 시간은 [1,0,1] 이다.
- 4~5초 동안 (2번 음식은 다 먹었으므로) 3번 음식을 섭취한다. 남은 시간은 [1,0,0] 이다.
- 5초에서 네트워크 장애가 발생했다. 1번 음식을 섭취해야 할 때 중단되었으므로, 장애 복구 후에 1번 음식부터 다시 먹기 시작하면 된다.

# 내가 생각하는 문제 풀이 포인트

알고리즘 로직상에는 문제가 없지만 sort할때 사용하는 compare함수 구현방법과 enhanced for문미사용으로 시간초과가 났다. 

그래서 이 풀이가 원래 의도한 풀인지는 알수 없지만 대다수의 풀이가 나와 유사했다. 

1. 커스텀 sort를 두개 만든다.

2. 부분정렬 

   subList를 생성후 (List의 메서드를 통해 생성) 서브리스트를 정렬시킨다. 

   부분정렬 말고 기존 리스트에서 삭제 구현시 삭제 오버헤드가 커서 그런지 시간초과가 났다. 



이문제는 사용하는 자료구조나 메서드의 사용목적에 대해 명확히 알고 시간을 줄여야 하는 문제가 아닌가 싶다.

# 코드

~~~java
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Solution {
    public static int solution(int[] food_times, long k) {
        List<Food> foodList = new ArrayList<>();

        int len= food_times.length;
        for(int i=0;i<len;i++){
            foodList.add(new Food(i+1,food_times[i]));
        }
        Comparator<Food> compTime = new Comparator<Food>() {

            @Override
            public int compare(Food a, Food b) {
                // TODO Auto-generated method stub
                return a.food_time-b.food_time;
            }
        };
        Comparator<Food> compIndex = new Comparator<Food>() {

            @Override
            public int compare(Food a, Food b) {
                // TODO Auto-generated method stub
                return a.index-b.index;
            }
        };
        //food_time 정렬 오름 차순
        foodList.sort(compTime);

        int accumulate =0;
        int i=0;
        for(Food food : foodList){
            long diff =(food.food_time - accumulate);

            if(diff!=0){
                long spend = diff*len;
                if(spend <= k){
                    k-=spend;
                    accumulate = food.food_time;
                }
                else{
                    k %=len;
                    foodList.subList(i,food_times.length).sort(compIndex);
                    return foodList.get(i+(int)k).index;
                }
            }
            i++;
            len--;
        }

        return -1;
    }

    static class Food {

        int index;
        int food_time;

        public Food(int index, int food_time) {
            this.index = index;
            this.food_time = food_time;
        }
    }

}

~~~



# 느낀점

정렬 시 클래스의 메서드로 사용하기 보다는 따로 Comparator 객체를 만들어 사용하는게 훨씬 빨랐다. 그리고 for문은 enhanced for문을 지향하자. 

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42891?language=java)

