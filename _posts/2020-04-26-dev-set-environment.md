---
layout: post
title: "시스템 환경변수 등록 - .bash_profile"
categories: dev
tags: 시스템환경변수 ._bash_profile
comments: true

---

> 기존에 운영하던 [아무코딩](https://dong-co.tistory.com/42?category=860250)에서 작성한 post입니다.



```
# cd
(홈경로로 이동한다.)

# vi ~/.bash_profile
```

를 통해 .bash_profile을 vi 에디터를 통해 연다.

 

나같은 경우에는 mvn 환경변수를 등록하던 중이라

 



![img](https://blog.kakaocdn.net/dn/RIM6X/btqDGfsZtR9/Q9EMvJMwFDXb1ZVWaHshg1/img.png)



이와같이 경로를 추가해주었고

 

vi 로 작성완료후

 

```
# source .bash_profile
```

을 통해 .bash_profile이 적용 되도록 한다.