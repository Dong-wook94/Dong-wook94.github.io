---
layout: post
title: "[2019 카카오 겨울 인턴십] 징검다리 건너기"
subtitle: "2019 카카오 겨울 인턴십 5번문제"
categories: algorithm
tags: programmers java algorithm
comments: true
---

# 문제설명

****[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]**

카카오 초등학교의 니니즈 친구들이 라이언 선생님과 함께 가을 소풍을 가는 중에 **징검다리**가 있는 개울을 만나서 건너편으로 건너려고 합니다. 라이언 선생님은 니니즈 친구들이 무사히 징검다리를 건널 수 있도록 다음과 같이 규칙을 만들었습니다.

- 징검다리는 일렬로 놓여 있고 각 징검다리의 디딤돌에는 모두 숫자가 적혀 있으며 디딤돌의 숫자는 한 번 밟을 때마다 1씩 줄어듭니다.
- 디딤돌의 숫자가 0이 되면 더 이상 밟을 수 없으며 이때는 그 다음 디딤돌로 한번에 여러 칸을 건너 뛸 수 있습니다.
- 단, 다음으로 밟을 수 있는 디딤돌이 여러 개인 경우 무조건 가장 가까운 디딤돌로만 건너뛸 수 있습니다.

니니즈 친구들은 개울의 왼쪽에 있으며, 개울의 오른쪽 건너편에 도착해야 징검다리를 건넌 것으로 인정합니다.
니니즈 친구들은 한 번에 한 명씩 징검다리를 건너야 하며, 한 친구가 징검다리를 모두 건넌 후에 그 다음 친구가 건너기 시작합니다.

디딤돌에 적힌 숫자가 순서대로 담긴 배열 stones와 한 번에 건너뛸 수 있는 디딤돌의 최대 칸수 k가 매개변수로 주어질 때, 최대 몇 명까지 징검다리를 건널 수 있는지 return 하도록 solution 함수를 완성해주세요.

#### **[제한사항]**

- 징검다리를 건너야 하는 니니즈 친구들의 수는 무제한 이라고 간주합니다.
- stones 배열의 크기는 1 이상 200,000 이하입니다.
- stones 배열 각 원소들의 값은 1 이상 200,000,000 이하인 자연수입니다.
- k는 1 이상 stones의 길이 이하인 자연수입니다.

------

##### **[입출력 예]**

| stones                         | k    | result |
| ------------------------------ | ---- | ------ |
| [2, 4, 5, 3, 2, 1, 4, 2, 5, 1] | 3    | 3      |

##### **입출력 예에 대한 설명**

------

**입출력 예 #1**

첫 번째 친구는 다음과 같이 징검다리를 건널 수 있습니다.
![step_stones_104.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/4560e242-cf83-4e77-a14c-174f3831499d/step_stones_104.png)

첫 번째 친구가 징검다리를 건넌 후 디딤돌에 적힌 숫자는 아래 그림과 같습니다.
두 번째 친구도 아래 그림과 같이 징검다리를 건널 수 있습니다.
![step_stones_101.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/d64f29ac-3e35-4fd3-91fa-4d70e3b6c80a/step_stones_101.png)

두 번째 친구가 징검다리를 건넌 후 디딤돌에 적힌 숫자는 아래 그림과 같습니다.
세 번째 친구도 아래 그림과 같이 징검다리를 건널 수 있습니다.
![step_stones_102.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/369bc8a1-7017-4135-a499-505247ab9cfc/step_stones_102.png)

세 번째 친구가 징검다리를 건넌 후 디딤돌에 적힌 숫자는 아래 그림과 같습니다.
네 번째 친구가 징검다리를 건너려면, 세 번째 디딤돌에서 일곱 번째 디딤돌로 네 칸을 건너뛰어야 합니다. 하지만 k = 3 이므로 건너뛸 수 없습니다.
![step_stones_103.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/e44e0a83-e637-48ad-858c-4c135c3b078f/step_stones_103.png)

따라서 최대 3명이 디딤돌을 모두 건널 수 있습니다.

# 내가 생각하는 문제 풀이 포인트

1. 이진탐색 이용
   1. 0~200000000 사이의 답을 이진탐색을 통해 찾는다.
   2. 건너기가 성공하는지 확인하는 함수를 작성하여 이를 기준으로 이진탐색진행

# 코드

~~~java
import java.util.HashMap;

public class Solution {
    static HashMap<Long, Long> map;

    public static long[] solution(long k, long[] room_number) {
        long[] answer = new long[room_number.length];
        map = new HashMap<>();

        for (int i = 0; i < room_number.length; i++) {
            long pos = collapsingFind(room_number[i]);
            answer[i] = pos;
            map.put(pos, pos + 1);
        }

        return answer;
    }

    private static long collapsingFind(long roomNumber) {
        long pos;
        for (pos = roomNumber; map.containsKey(pos); pos = map.get(pos)) ;

        for (long i = roomNumber; i != pos; ) {
            long t = map.get(i);
            map.put(i, pos);
            i = t;
        }
        return pos;
    }
}

~~~



# 느낀점

카카오의 효율성 문제는 어느정도 정해진 풀이가 정해져있는것 같다. 여러 알고리즘을 잘 공부해야할 것 같다. 역시 이진탐색은 어떤 값을 기준으로 잡고 이진탐색을 진행할지를 파악하는게 무척 어려운 부분 인것 같다. 



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/64062?language=java)