---
layout: post
title: "[2019 카카오 겨울 인턴십] 불량 사용자"
subtitle: "2019 카카오 겨울 인턴십 3번문제"
categories: algorithm
tags: programmers java algorithm
comments: true
---

# 문제설명

개발팀 내에서 이벤트 개발을 담당하고 있는 무지는 최근 진행된 카카오이모티콘 이벤트에 비정상적인 방법으로 당첨을 시도한 응모자들을 발견하였습니다. 이런 응모자들을 따로 모아 `불량 사용자`라는 이름으로 목록을 만들어서 당첨 처리 시 제외하도록 이벤트 당첨자 담당자인 프로도 에게 전달하려고 합니다. 이 때 개인정보 보호을 위해 사용자 아이디 중 일부 문자를 '*' 문자로 가려서 전달했습니다. 가리고자 하는 문자 하나에 '*' 문자 하나를 사용하였고 아이디 당 최소 하나 이상의 '*' 문자를 사용하였습니다.
무지와 프로도는 불량 사용자 목록에 매핑된 응모자 아이디를 `제재 아이디` 라고 부르기로 하였습니다.

예를 들어, 이벤트에 응모한 전체 사용자 아이디 목록이 다음과 같다면

| 응모자 아이디 |
| ------------- |
| frodo         |
| fradi         |
| crodo         |
| abc123        |
| frodoc        |

다음과 같이 불량 사용자 아이디 목록이 전달된 경우,

| 불량 사용자 |
| ----------- |
| fr*d*       |
| abc1**      |

불량 사용자에 매핑되어 당첨에서 제외되어야 야 할 제재 아이디 목록은 다음과 같이 두 가지 경우가 있을 수 있습니다.

| 제재 아이디 |
| ----------- |
| frodo       |
| abc123      |

| 제재 아이디 |
| ----------- |
| fradi       |
| abc123      |

이벤트 응모자 아이디 목록이 담긴 배열 user_id와 불량 사용자 아이디 목록이 담긴 배열 banned_id가 매개변수로 주어질 때, 당첨에서 제외되어야 할 제재 아이디 목록은 몇가지 경우의 수가 가능한 지 return 하도록 solution 함수를 완성해주세요.

#### **[제한사항]**

- user_id 배열의 크기는 1 이상 8 이하입니다.
- user_id 배열 각 원소들의 값은 길이가 1 이상 8 이하인 문자열입니다.
  - 응모한 사용자 아이디들은 서로 중복되지 않습니다.
  - 응모한 사용자 아이디는 알파벳 소문자와 숫자로만으로 구성되어 있습니다.
- banned_id 배열의 크기는 1 이상 user_id 배열의 크기 이하입니다.
- banned_id 배열 각 원소들의 값은 길이가 1 이상 8 이하인 문자열입니다.
  - 불량 사용자 아이디는 알파벳 소문자와 숫자, 가리기 위한 문자 '*' 로만 이루어져 있습니다.
  - 불량 사용자 아이디는 '*' 문자를 하나 이상 포함하고 있습니다.
  - 불량 사용자 아이디 하나는 응모자 아이디 중 하나에 해당하고 같은 응모자 아이디가 중복해서 제재 아이디 목록에 들어가는 경우는 없습니다.
- 제재 아이디 목록들을 구했을 때 아이디들이 나열된 순서와 관계없이 아이디 목록의 내용이 동일하다면 같은 것으로 처리하여 하나로 세면 됩니다.

------

##### **[입출력 예]**

| user_id                                           | banned_id                                | result |
| ------------------------------------------------- | ---------------------------------------- | ------ |
| `["frodo", "fradi", "crodo", "abc123", "frodoc"]` | `["fr*d*", "abc1**"]`                    | 2      |
| `["frodo", "fradi", "crodo", "abc123", "frodoc"]` | `["*rodo", "*rodo", "******"]`           | 2      |
| `["frodo", "fradi", "crodo", "abc123", "frodoc"]` | `["fr*d*", "*rodo", "******", "******"]` | 3      |

##### **입출력 예에 대한 설명**

##### **입출력 예 #1**

문제 설명과 같습니다.

##### **입출력 예 #2**

다음과 같이 두 가지 경우가 있습니다.

| 제재 아이디 |
| ----------- |
| frodo       |
| crodo       |
| abc123      |

| 제재 아이디 |
| ----------- |
| frodo       |
| crodo       |
| frodoc      |

##### **입출력 예 #3**

다음과 같이 세 가지 경우가 있습니다.

| 제재 아이디 |
| ----------- |
| frodo       |
| crodo       |
| abc123      |
| frodoc      |

| 제재 아이디 |
| ----------- |
| fradi       |
| crodo       |
| abc123      |
| frodoc      |

| 제재 아이디 |
| ----------- |
| fradi       |
| frodo       |
| abc123      |
| frodoc      |

# 내가 생각하는 문제 풀이 포인트

1. BitMask를 통한 제제 아이디 조합
2. 각 bit를 통해 이루어지는 set 을 통해 결과 중복 체크 

# 코드

~~~java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class Solution {
    static ArrayList<String>[] candidateList;
    static Set<Integer> resultSet;
    static HashMap<String,Integer> bitMap;

    public static boolean isIncluded(String userId, String bannedId){
        if(userId.length()!=bannedId.length())
            return false;
        for(int i=0;i<userId.length();i++){
            if(userId.charAt(i)!=bannedId.charAt(i) && bannedId.charAt(i)!='*')
                return false;
        }
        return true;
    }

    public static int solution(String[] user_id, String[] banned_id) {
        candidateList = new ArrayList[banned_id.length];
        bitMap = new HashMap<>();
        for(int i=0;i<user_id.length;i++){
            bitMap.put(user_id[i],1<<i);
        }

        for(int i=0;i<banned_id.length;i++){
            candidateList[i] = new ArrayList<>();
            for(int j=0;j<user_id.length;j++){
                if(isIncluded(user_id[j],banned_id[i]))
                    candidateList[i].add(user_id[j]);
            }
        }

        resultSet = new HashSet<>();

        dfs(0,0);
        return resultSet.size();
    }

    private static void dfs(int depth, int bit) {
        if(depth == candidateList.length){
            if(bit>0){
                if(!resultSet.contains(bit)){
                    resultSet.add(bit);
                }
            }
            return;
        }

        for(int i=0;i<candidateList[depth].size();i++){
            int checkBit = bitMap.get(candidateList[depth].get(i));
            if((bit & checkBit)!=checkBit){
                dfs(depth+1,bit+checkBit);
            }
        }
    }
}

~~~



# 느낀점

처음엔 2중 set을 이용하여 문제를 풀었으나 테스트케이스 3번에서 오류가 났다. 

[c++ 로 풀이](https://dong-co.tistory.com/21)시에는 이중 set을 무리없이 사용하였다.

정확한건 아니지만 set의 동일성을 비교하는 부분에서 내가 생각한대로 되지 않은 것 같다. 만약 이중 set 을 이용한다면 equals를 재정의 해야 될것 같고 일단 이문제에서는 bitmask를 통해 내부 set의 역할을 대신 하였다. 

자바의 객체 비교에 대해선 조심할 필요성이 있는 것 같다.



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/64064)