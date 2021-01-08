---
layout: post
title: "터미널에서 Visual Studio Code 열기"
subtitle: "PATH에 code 등록하는 과정"
categories: dev
tags: mysql Mac
comments: true
---

![image](https://user-images.githubusercontent.com/36303777/104024287-407ac080-5206-11eb-9658-891145f8a526.png)

위와같은 오류가 발생하는 이유는 명령어를 찾을때 사용하는 PATH에 code가 등록되지 않아서 입니다. 



### Visual Studio Code에서 Path 등록하기

1. Command Palette 실행(단축키 : cmd+shift+p) 하여 

   `Shell Command: Install 'code' command in PATH ` 입력하기

   ![image-20210108231410585](/Users/dongwook/Desktop/Git/blog/_posts/2021-01-08-dev-set-vscode-terminal.assets/image-20210108231410585.png)

2. 실행확인



### + 추가적인 방법

* 터미널에서 ~/.bashrc 또는 ~/.zshrc 파일실행하여 code 명령의 별명(alias) 수정하기

* 터미널에서 ~/.bashrc 또는 ~/.zshrc 팔일실행하여 PATH에 직접 등록



### Reference 

* https://velog.io/@nmy0502/Mac-OS-%ED%84%B0%EB%AF%B8%EB%84%90terminal-%EC%84%A4%EC%A0%95

