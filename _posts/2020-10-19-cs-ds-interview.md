---
layout: post
title: "자료구조 면접질문"
subtitle: "자료구조 면접 예상 질문 정리"
categories: cs
tags: data-structure ds 자료구조 interview 면접
comments: true

---

## **Array와 LinkedList의 차이가 무엇인가요? (N사 전화면접)**

배열과 연결리스트는 탐색, 저장방식 삽입,삭제 등에서 차이가 납니다. 

1. 탐색 
   1. 배열은 요소들을 인덱스를 통해 직접 접근할 수 있습니다.(**random access를 지원함.**) 특정요소에 접근하는 시간복잡도는 **O(1)** 입니다.
   2. 하지만 연결리스트는 어떤 요소를 접근할 때 순차적으로 검색하며 찾아야 합니다.( **Sequential Access를 지원합니다.** ) 특정요소에 접근하는 시간 복잡도는 **O(N)** 입니다.

2. 저장 방식
   1. 배열에서 요소들은 인접한 메모리 위치에 연이어 저장됩니다. 
   2. 하지만 연결리스트는 연속적으로 저장되지 않고 새로운 노드에 할당된 메모리위치 주소가 연결리스트 이전 노드에 저장됩니다.
3. 삽입 & 삭제
   1. 배열에서의 삽입 삭제는 **O(N)** 타임이 소요됩니다. 왜냐하면 삽입이나 이후 요소들을 밀고 당기는 과정이 포함되기 때문입니다.
   2. 하지만 연결리스트의 삽입 삭제는 **O(1)** 이 소요됩니다. 삽입위치의 전후 포인터만 조정해주면 되기 때문입니다.

## **Stack과 Queue의 차이점은 무엇인가요? (N사 전화면접)**

**스택**은 쌓아 올리는 자료구조입니다. **LIFO 방식** 이라고 부르기도 하며 후입선출 방식입니다. 같은 구조와 크기의 자료를 정해진 방향으로 쌓으며 한방향으로만 접근할 수 있습니다. 

top을 통해서 push,pop을 하며 삽입과 삭제를 진행합니다.

대표적으로 dfs나 재귀등에서 사용이됩니다.

**큐**는 원소의 줄을 세우는 자료구조입니다. **FIFO 방식** 이라고 부르기도 하며 선입선출방식입니다. 스택과 마찬가지로 같은구조와 크기의 자료를 큐는 한쪽끝에서 삽입작업을 ,다른 쪽 끝에서 삭제 작업을 진행합니다. **주로 데이터가 입력된 시간 순서대로 처리되어야 하는 경우에 사용** 합니다. 

front 와 back 의 포인터를 이용하여 add, delete 작업을 수행합니다.

BFS나 캐시를 구현할 때 사용합니다.



## **BST와 Binary Tree에 대해서 설명하세요. (N사 전화면접)**

이진 탐색 트리(Binary Search Tree)는 이진탐색과 연결리스트를 결합한 자료구조입니다. 활용 목적은 **효율적인 탐색을 위함** 입니다. 

 주요 특징은 **이진 탐색 트리의 왼쪽 트리의 모든 값이 반드시 부모 노드보다 작아야 하고 반대로 오른쪽 트리의 모든 값이 부모 노드보다 커야 합니다.**

이진탐색 트리의 탐색, 삽입, 삭제등의 시간 복잡도는 O(logn) (또는 O(h)) 입니다. 균형잡힌 트리인 경우에 한해 O(logn)의 시간을 가지는데 트리의 균형이 맞지 않는 skewed tree의 구조를 가지는 경우 최악의 경우 O(n)의 시간 복잡도를 가질 수 있습니다. 그래서 균형을 맞추는 구조가 AVL Tree or RebBlackTree입니다.



## **PriorityQueue의 동작 원리가 어떻게 되나요? (N사 전화면접)**

우선순위 큐는 힙이라는 자료구조를 가지고 구현합니다. **top이 최대면 Max Heap, top이 최소면 Min Heap** 입니다. 힙으로 구현된 이진 트리는 **모든 정점이 자신의 자식요소 보다 우선순위가 높다** 는 성질을 가지고 있습니다.  이 성질을 통해 **삽입과 삭제 연산시 O(log n )** 타임에 가능합니다.

그리고 힙은 complete binary Tree 로 구현되는데 배열로 구현시 complete binary 특성상 왼쪽 자식은 2*n 오른쪽 자식은 2 * n +1 의 인덱스를 가지게 됩니다. 



## **해시테이블(HashTable)에 대해서 설명해주세요.**

해시테이블은 효율적인 탐색을 위한 자료구조로 **key값을 value에 대응** 시킵니다. 해시테이블을 구현하기 위해서는 연결리스트와 해시 함수가 필요합니다. 해싱은 임의의 길이의 값을 해쉬 함수를 통해 고정된 크기의 값으로 변환하는 작업을 말하는데 **키 값을 해시코드로 변환한 후에 해당 해시 코드로 배열의 인덱스를 참조하여 값을 찾는 방식** 입니다. 

 해시에서는 충돌이 발생 할 수도 있는데 최악의 경우에는 O(N), 일반적으로 잘 구현 된 경우에는 O(1)의 시간 복잡도를 가지게 됩니다. 

 충돌의 해결방식은 Chaining, Open addressing 이 있습니다. 

* Chaining : 같은 주소로 해슁되는 원소를 모두 하나의 연결리스트에 매달아 관리하는 방법 입니다. 

  * 장점은 연결리스트만 사용하면 되기때문에 복잡한 계산식을 사용할 필요가 개방주소법에 비해 상대적으로 적습니다.
  * 해시테이블이 채워질수록 성능저하가 발생할 가능성이 높습니다.

* Open addressing : 충돌 발생시 다른 버킷에 저장하는 방식입니다. 

  * 다른버킷을 선택하는 방법
    * Linear Probing (선형 탐색) : 해시 충돌 시 다음 버킷, 혹은 몇개를 건너뛰어 데이터를 삽입하는 방식.
    * Quadratic Probing (제곱 탐색) : 해시 충돌 시 다음 버킷, 혹은 몇개를 건너뛴 버킷에 데이터를 삽입하는 방식.
    * Double Hashing : 해시 충돌시 다른 해시함수를 한번 더 적용한 결과를 이용하는 방식.
  * 장점은 삽입 삭제시 오버헤드가 적고 저장할 데이터가 적을때는 유리합니다. 

  

## **최소 스패닝 트리(Minimum Spanning Tree)에 대해서 설명해주세요.**

그래프 G의 스패닝 트리중에 **edge weight값이 최소인 스패닝 트리** 를 말합니다. 스패닝 트리란 그래프 G의 모든 vertex가 cycle 없이 연결된 형태를 말합니다. 

규칙이 있다면 n개의 vertex를 가지는 그래프에서는 반드새 n-1 개의 edge를 가지게 되며 사이클이 생기지 않습니다. 

mst를 찾는 주요 알고리즘은 Kruskal과 prim 이 대표적입니다. 

* Kruskal : 그래프의 간선들을 오름차순으로 정렬하여 가장 낮은 가중치의 간선부터 차례대로 추가하는 방식입니다. 이대 사이클이 생기지 않도록 추가합니다. 
* prim 알고리즘 : 시작 정점부터 단계적으로 트리를 확장하는 방식입니다. 



## 트리와 그래프의 차이에 대해 설명해 주세요 

트리는 방향성이 있는 그래프 입니다. 그리고 사이클이 존재하지 않습니다 .그리고 한개의 루트노드가 존재하며 , 노드간에 부모 자식의 개념이 존재합니다.

하지만 그래프는 방향이 있을수도 없을 수도 있으며 사이클이 존재할 수도 있습니다. 

그리고 루트노드나 부모, 자식 개념이 없습니다. 

상대적으로 그래프가 트리보다 넓은 개념입니다.



## selection sort란 무엇인가요? 

선택정렬은 이름처럼 현재 위치에 들어갈 값을 찾아 정렬하는 방식입니다. 

* 기본 로직
  1. 정렬되지 않은 인덱스의 맨 앞에서부터 이를 포함한 그 이후의 배열 값 중 가장 작은 값을 찾아갑니다. 
  2. 가장 작은 값을 찾으면 그 값을 현재 인덱스의 값과 바꿔 줍니다. 
  3. 다음 인덱스에서 위과정을 반복해 줍니다. 

> 요약 : 탐색할 리스트중 가장 작은 값이 가장 앞에오도록. 
>
> 시간 복잡도 : O(n^2)
>
> 공간복잡도 : O(n)

## Insertion Sort란 무엇인가요?

삽입정렬은 현재 위치에서, 그 이하의 배열들을 비교하여 자신이 들어갈 위치를 찾아 그 위치에 삽입하는 배열 알고리즘 입니다. 

* 주요 특징 

  * 최악의 경우 시간복잡도 O(n^2)

  * 이미 정렬된 경우 (best case) : O(n)

  * > 참고로 빅오 어노테이션은 worst case를 기준으로 시간복잡도를 매기므로 삽입정렬의 경우에는 시간복잡도가 O(n^2) 이다. 



## Merge Sort란 무엇인가요?

합병정렬은 **분할정복 방식으로 설계된 알고리즘** 입니다. **큰 배열을 작은배열로 쪼개어 정렬하는 방식입니다.** 분할은 배열의 크기가 1보다 작거나 같을 때 까지 반복합니다. 

* 방법 : 입력을 하나의 배열로 받고 연산 중에 두개의 배열로 계속 쪼게 나간 뒤에 합치면서 정렬하여 마지막에는 하나의 정렬된 배열을 출력하는 방법입니다. 

* > 분할 과정의 기본 로직은 다음과 같다.
  >
  > ① 현재 배열을 반으로 쪼깬다. 배열의 시작 위치와, 종료 위치를 입력받아 둘을 더한 후 2를 나눠 그 위치를 기준으로 나눈다.
  >
  > ② 이를 쪼갠 배열의 크기가 0이거나 1일때 까지 반복한다.
  >
  > 
  >
  > 합병 과정의 기본 로직은 다음과 같다.
  >
  > ① 두 배열 A,B의 크기를 비교한다. 각각의 배열의 현재 인덱스를 i,j로 가정하자.
  >
  > ② i에는 A배열의 시작 인덱스를 저장하고, j에는 B배열의 시작 주소를 저장한다.
  >
  > ③ A[i]와 B[j]를 비교한다. 오름차순의 경우 이중에 작은 값을 새 배열 C에 저장한다. 
  >
  >   A[i]가 더 컸다면 A[i]의 값을 배열 C에 저장해주고, i의 값을 하나 증가시켜준다.
  >
  > ④ 이를 i나 j 둘중 하나가 각자 배열의 끝에 도달할 때 까지 반복한다.
  >
  > ⑤ 끝까지 저장을 못한 배열의 값을, 순서대로 전부 다 C에 저장한다.
  >
  > ⑥ C 배열을 원래의 배열에 저장해준다.
  >
  > 
  >
  > 출처: https://hsp1116.tistory.com/33 [화투의 개발 블로그]



## quick sort란 무엇인가요?

퀵 소트 또한 **분할 정복을 이용하여 정렬을 수행하는 알고리즘** 입니다. 

**pivot point 라는 기준이되는 값을 하나 설정하여 이값을 기준으로 작은 값은 왼쪽 큰값은 오른쪽으로 옮기는 방식으로 정렬을 진행합니다.** 

이를 반복하여 분할된 배열의 크기가 1이되면 모두 정렬이 된 것 입니다. 

여기서 pivot point는 주로 배열의 값중 맨 앞이나 맨뒤, 중간 혹은 랜덤값으로 정하게 되는데 배열의 맨 앞값이나 맨 뒤의 값으로 정하는 경우 **정렬된 상태에서 최악의 케이스로 시간 복잡도 O(n^2)** 을 가지게 됩니다.

그래서 주로 **배열의 중간값이나 랜덤 값으로 pivot point** 를 잡습니다. 

평균적인 시간 복잡도는 **O(nlogn)** 입니다. 



## Reference

* https://devowen.com/285
* https://hsp1116.tistory.com/33