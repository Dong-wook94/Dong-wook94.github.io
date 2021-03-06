---
layout: post
title: "[운영체제] 면접 질문"
subtitle: "운영체제 면접 질문 정리"
categories: cs
tags: cs os operating-system
comments: true
---

## Q1. 프로세스와 스레드의 차이

프로세스는 실행 중인 프로그램의 인스턴스이고, 스레드는 프로세스 내의 실행 단위이다.
프로세스가 다른 프로세스에 접근하려면 IPC(파이프, 파일, 소켓 등을 이용)를 사용해야 한다.
스레드는 다른 스레드와 Stack 영역을 제외한 메모리 영역을 공유해 통신 과정을 거칠 필요가 없어 효율적이다.



## Q2. LRU 캐싱

페이지에서 제거할 때 가장 오랫동안 사용하지 않은 것을 제거하겠다는 알고리즘



## Q3. Race Condition

두개이상의 스레드가 하나의 공유된 자원을 놓고 경쟁하는 상황. 동괴화 메커니즘은 당연히 없이 접근하려고 하는 상황.



### Q3-1. 방지방법은 ? 

세마포어, 뮤텍스



## Q4. 데드락이란?

둘 이상의 프로세스들이 자원을 점유한 상태에서 서로 다른 프로세스가 점유하고 있는 자원을 요구하며 무한정 기다리는 상황이다.

### Q4-1. 데드락의 4가지 조건?

- 데드락의 4가지 조건
  1. 비선점 (Nonpreemptive) : 다른 프로세스의 자원을 뺏을 수 없음.
  2. 순환 대기 (Circular wait) : 두 개 이상의 프로세스가 자원 접근을 기다릴 때, 관계가 순환적 구조.
  3. 점유 대기 (Hold & Wait) : 공유 자원에 대한 접근 권한을 가진 채로 다른 자원에 대한 접근 권한을 요구.
  4. 상호 배제(Mutual Exclusion) : 한 번에 한 프로세스만 공유 자원에 접근 가능하며, 접근 권한이 제한적일 경우.

### Q4-2. 해결방법

- 교착상태 예방(prevention), 회피(avoidance), 발견(detection), 회복(recovery).

- 예방

  - 교착 상태 발생 조건 중 하나를 제거함으로써 해결하는 방법

  - | **상호 배제 (Mutual exclusion) 부정** | - 여러 개의 프로세스가 공유 자원을 사용할 수 있도록 한다. (하지만 동기화 문제가 다시 나타날 듯) |
    | ------------------------------------- | ------------------------------------------------------------ |
    | **점유 대기 (Hold and wait) 부정**    | - 프로세스가 실행되기 전 필요한 모든 자원을 할당한다. (이미 모든 자원을 가진 채 시작하여 다른 자원을 wait할 필요가 없다) |
    | **비선점 (No preemption) 부정**       | - 자원을 점유하고 있는 프로세스가 다른 자원을 요구할 때 점유하고 있는 자원을 반납하고, 요구한 자원을 사용하기 위해 기다리게 한다. |
    | **순환 대기 (Circular wait) 부정**    | - 자원에 고유한 번호를 할당하고, 번호 순서대로 자원을 요구하도록 한다. |

- 회피

  - 회피 기법은 교착상태가 발생할 가능성을 배제하지 않고 교착상태가 발생하면 적절히 피해나가는 방법으로, 주로 **은행원 알고리즘(Banker’s Algorithm)** 이 사용

- 발견

  - 교착상태 발견 기법은 시스템에 교착상태가 발생했는지 점검하여 교착상태에 있는 프로세스와 자원을 발견하는 것을 의미합니다.

- 회복

  - 교착상태 회복 기법은 교착상태를 일으킨 프로세스를 종료하거나 교착상태의 프로세스에 할당된 자원을 선점하여 프로세스나 자원을 회복하는 것을 의미합니다.

## Q5. 인터럽트와 트랩

> 트랩은 내부 혹은 소프트웨어 인터럽트라 봐도 될것 같다.

**트랩**(**trap**)은 프로그램 내에서 발생하는 것이고 내부 **인터럽트**라고 하며 CPU로부터 발생하는 운영오류등 포함됩니다. 

인터럽트는 하드웨어적으로 프로그램 외부에서 발생하는 것이며 트랩은 발생하는 시점이 프로그램의 일정함 지점이라는 점에서 **동기적** 입니다. 

반면 인터럽트(interrupt)는 프로그램 외부 상황에 따라서 발생 시점이 일정하지 않기 때문에 **비동기적**입니다. 

## Q6. 페이징이란

하나의 프로세스가 사용하는 메모리 공간이 연속적이어야 한다는 제약을 없애는 메모리 관리 방법입니다. 외부 단편화와 압축 작업을 해소 하기 위해 생긴 방법론으로, 물리 메모리는 Frame 이라는 고정 크기로 분리되어 있고, 논리 메모리(프로세스가 점유하는)는 페이지라 불리는 고정 크기의 블록으로 분리됩니다.

페이징 기법을 사용함으로써 논리 메모리는 물리 메모리에 저장될 때, 연속되어 저장될 필요가 없고 물리 메모리의 남는 프레임에 적절히 배치됨으로 **외부 단편화를 해결할 수 있는 큰 장점** 이 있습니다.

단점은 **내부 단편화 문제는 페이징으로 해결해주지 못합니다.**

> 예를들어 페이지는 디폴트 크기가 4KB입니다. 그런데 전체크기가 11KB인 프로세스이 있을때 4KB 블럭씩 나누게 되면 총 3블럭이 나오지만 1블럭은 기본크기인 4KB를 다채우지못 하여 내부 단편화가 발생이 되는것입니다.

## Q7. 뮤텍스와 세마포어의 차이

- 세마포어는 공유 자원에 **세마포어의 변수만큼의 프로세스(또는 쓰레드)가 접근**할 수 있습니다. 반면에 뮤텍스는 **오직 1개만의 프로세스(또는 쓰레드)만 접근**할 수 있습니다.
- 현재 수행중인 프로세스가 아닌 **다른 프로세스가 세마포어를 해제할 수 있습니다.** 하지만 뮤텍스는 **락(lock)을 획득한 프로세스가 반드시 그 락을 해제**해야 합니다.

> 세마포어의 변수 -> 공유자원의 개수를 나타내는 변수.

> 0과 1의 값의 값만 갖는 세마포어 -> **binary semaphore**
>
> 도메인 제한이 없는 세마포어 (0,1뿐만아니라 2,3,4 등의 값들 또한 가질수 있는) -> **counting semaphore**



## Q8. 장기스케쥴러, 단기스케쥴러, 중기스케쥴러 차이

* 장기 스케쥴러 : 어떤 프로세스를 준비큐에 삽입할지 결정하는 역할
* 단기 스케쥴러 : 어떤 프로세스를 CPU에 할당해 줄 것인가 (어떤 프로세스를 다음 번에 실행 상태로 만들것인지 결정.)
* 중기 스케쥴러 :  메모리에 적재된 프로세스 수 관리



## Q9. Blocking/Non-Blocking IO와 동기/비동기 IO 차이

동기/비동기는 인터럽트 발생으로 인한 제어권 반환 시점에 중점을 두고, Blocking/Non-bloking은 제어권 자체에 중점을 둔다는 점에서 차이가 있다. 비동기와 Non-Bloking 모두 즉시 제어권을 반납하지만, 동기는 입출력 완료 시점과 결과 반환 시점이 불일치하고 Non-Blocking은 일치한다 (빈 값이라도 결과를 먼저 반환).

* **동기 vs 비동기** : 호출되는 함수의 작업 완료 여부를 신경쓰는지 신경안쓰는지
* **블로킹 vs 논블로킹** : 호출되는 함수가 바로 리턴되느냐 안되느냐



## Q10. 외부단편와 vs 내부단편화

* **외부 단편화** : 중간중간에 생긴 사용하지 않는 메모리가 존재해서 총 메모리 공간은 충분하지만 실제로 할당할 수 없는 상황
* **내부 단편화** : 메모리를 할당할 때 프로세스가 필요한 양보다 더 큰 메모리가 할당되어서 프로세스에서 사용하는 메모리 공간이 낭비 되는 현상

## Q11. 콘보이 현상이란? 콘보이 현상이 발생될 수 있는 CPU 스케쥴러 알고리즘은?

콘보이 현상이란 작업 시간이 긴 프로세스가 먼저 큐에 도착해서 다른 프로세스의 실행 시간이 전부 늦춰져 효율성을 떨어뜨리는 현상이다. FCFS(First Come First Start) 스케줄링 알고리즘은 비선점으로, 순차적으로 먼저 큐에 들어온 작업부터 실행하므로 콘보이 현상이 발생할 수 있다.

#### 