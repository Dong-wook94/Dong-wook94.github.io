---
layout: post
title: "[2020 KAKAO BLIND RECRUITMENT] 가사 검색"
subtitle: "2020 카카오 기출 가사 검색"
categories: algorithm
tags: programmers java algorithm 
comments: true
---

# 문제설명

**[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]**

친구들로부터 천재 프로그래머로 불리는 **프로도**는 음악을 하는 친구로부터 자신이 좋아하는 노래 가사에 사용된 단어들 중에 특정 키워드가 몇 개 포함되어 있는지 궁금하니 프로그램으로 개발해 달라는 제안을 받았습니다.
그 제안 사항 중, 키워드는 와일드카드 문자중 하나인 '?'가 포함된 패턴 형태의 문자열을 뜻합니다. 와일드카드 문자인 '?'는 글자 하나를 의미하며, 어떤 문자에도 매치된다고 가정합니다. 예를 들어 `"fro??"`는 `"frodo"`, `"front"`, `"frost"` 등에 매치되지만 `"frame"`, `"frozen"`에는 매치되지 않습니다.

가사에 사용된 모든 단어들이 담긴 배열 `words`와 찾고자 하는 키워드가 담긴 배열 `queries`가 주어질 때, 각 키워드 별로 매치된 단어가 몇 개인지 **순서대로** 배열에 담아 반환하도록 `solution` 함수를 완성해 주세요.

### 가사 단어 제한사항

- `words`의 길이(가사 단어의 개수)는 2 이상 100,000 이하입니다.
- 각 가사 단어의 길이는 1 이상 10,000 이하로 빈 문자열인 경우는 없습니다.
- 전체 가사 단어 길이의 합은 2 이상 1,000,000 이하입니다.
- 가사에 동일 단어가 여러 번 나올 경우 중복을 제거하고 `words`에는 하나로만 제공됩니다.
- 각 가사 단어는 오직 알파벳 소문자로만 구성되어 있으며, 특수문자나 숫자는 포함하지 않는 것으로 가정합니다.

### 검색 키워드 제한사항

- `queries`의 길이(검색 키워드 개수)는 2 이상 100,000 이하입니다.

- 각 검색 키워드의 길이는 1 이상 10,000 이하로 빈 문자열인 경우는 없습니다.

- 전체 검색 키워드 길이의 합은 2 이상 1,000,000 이하입니다.

- 검색 키워드는 중복될 수도 있습니다.

- 각 검색 키워드는 오직 알파벳 소문자와 와일드카드 문자인 `'?'` 로만 구성되어 있으며, 특수문자나 숫자는 포함하지 않는 것으로 가정합니다.

- 검색 키워드는 와일드카드 문자인

   

  ```
  '?'
  ```

  가 하나 이상 포함돼 있으며,

   

  ```
  '?'
  ```

  는 각 검색 키워드의 접두사 아니면 접미사 중 하나로만 주어집니다.

  - 예를 들어 `"??odo"`, `"fro??"`, `"?????"`는 가능한 키워드입니다.
  - 반면에 `"frodo"`(`'?'`가 없음), `"fr?do"`(`'?'`가 중간에 있음), `"?ro??"`(`'?'`가 양쪽에 있음)는 불가능한 키워드입니다.

### 입출력 예

| words                                                     | queries                                         | result            |
| --------------------------------------------------------- | ----------------------------------------------- | ----------------- |
| `["frodo", "front", "frost", "frozen", "frame", "kakao"]` | `["fro??", "????o", "fr???", "fro???", "pro?"]` | `[3, 2, 4, 1, 0]` |

### 입출력 예에 대한 설명

- `"fro??"`는 `"frodo"`, `"front"`, `"frost"`에 매치되므로 3입니다.
- `"????o"`는 `"frodo"`, `"kakao"`에 매치되므로 2입니다.
- `"fr???"`는 `"frodo"`, `"front"`, `"frost"`, `"frame"`에 매치되므로 4입니다.
- `"fro???"`는 `"frozen"`에 매치되므로 1입니다.
- `"pro?"`는 매치되는 가사 단어가 없으므로 0 입니다.

# 내가 생각하는 문제 풀이 포인트

1. Trie를 활용하는 문제이다.
1. ?가 양쪽에 있거나 중간에 있지 않고 접두사나 접미사로서만 존재하기 때문에  trie를 그대로, 뒤집어서 이렇게 두개의 trie를 만든다. 
   2. 그리고 글자 개수마다 하나씩 둔다. 
   3. ?가 나왔을때 child들의 갯수를 세주면 된다. 



# 코드

~~~java
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

class Solution {
    static Map<Integer,Trie> front;
    static Map<Integer,Trie> back;

    public int[] solution(String[] words, String[] queries) {
        int[] answer = new int[queries.length];

        front = new HashMap<>();
        back = new HashMap<>();

        for(String word : words){
            int wordSize = word.length();

            if(!front.containsKey(wordSize)){
                front.put(wordSize,new Trie());
                back.put(wordSize,new Trie());
            }
            front.get(wordSize).insertNode(word);
            String reverseWord = new StringBuffer(word).reverse().toString();
            back.get(wordSize).insertNode(reverseWord);
        }

        int idx =0;
        for(String query:queries){
            int querySize = query.length();
            if(query.charAt(querySize-1)=='?'){
                if(front.containsKey(querySize)){
                    answer[idx] = front.get(querySize).find(query);
                } 
            }
            else{
                String reverseQuery = new StringBuffer(query).reverse().toString();
                if(back.containsKey(querySize)){
                    answer[idx] = back.get(querySize).find(reverseQuery);
                }
            }
            idx++;
        }
        return answer;
    }

    class Trie {
        TrieNode root;

        Trie() {
            this.root = new TrieNode();
        }

        private void insertNode(String word) {
            TrieNode node = this.root;
            for (int i = 0; i < word.length(); i++) {
                char currentChar = word.charAt(i);
                if (node.getChildren().get(currentChar) == null) {
                    node.getChildren().put(currentChar, new TrieNode());
                } else {
                    node.getChildren().get(currentChar).countUp();
                }
                node = node.getChildren().get(currentChar);

                if (i == word.length() - 1)
                    node.setFinish(true);
            }
        }

        private int find(String word) {
            TrieNode node = this.root;
            for (int i = 0; i < word.length(); i++) {
                char currentChar = word.charAt(i);
                if (word.charAt(i) == '?') {
                    int temp = 0;
                    Iterator<Map.Entry<Character, TrieNode>> entries = node.getChildren().entrySet().iterator();
                    while (entries.hasNext()) {
                        Map.Entry<Character, TrieNode> entry = entries.next();
                        temp += entry.getValue().getCount();
                    }
                    return temp;
                }
                TrieNode nextNode =node.getChildren().get(currentChar);
                if (nextNode == null)
                    return 0;
                if(nextNode.isFinish())
                    return nextNode.getCount();
                if (word.charAt(i + 1) == '?')
                    return nextNode.getCount();
                node = nextNode;
            }
            return 0;
        }
    }

    class TrieNode {
        private Map<Character, TrieNode> children;
        private int count;
        private boolean finish;

        public TrieNode() {
            this.children = new HashMap<>();
            this.count = 1;
            finish = false;
        }

        public Map<Character, TrieNode> getChildren() {
            return children;
        }

        public int getCount() {
            return count;
        }

        public boolean isFinish() {
            return finish;
        }

        public void setFinish(boolean finish) {
            this.finish = finish;
        }

        public void countUp() {
            this.count++;
        }
    }
}
~~~



# 느낀점

좀 까다롭다고 생각하는 trie문제이다. 자바에서는 처음 풀어보았다. trie문제임을 인지하는 것과 익숙하게 사용하기까지 많은 연습이 필요할것 같다. 



[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/60060)

