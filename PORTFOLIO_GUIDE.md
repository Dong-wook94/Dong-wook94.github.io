# 포트폴리오 수정 가이드

이 가이드는 포트폴리오 홈페이지를 수정하는 방법을 안내합니다.

## 주요 파일 위치

### 1. 홈페이지 메인 정보 수정
- `_config.yml`: 사이트 제목, 태그라인, 설명 등 기본 정보
- `index.html`: 홈페이지 레이아웃 (portfolio 레이아웃 사용)

### 2. 포트폴리오 섹션 수정

#### 프로젝트 추가/수정
프로젝트는 `_projects/` 폴더에 마크다운 파일로 추가합니다.

예시: `_projects/my-project.md`
```markdown
---
layout: project
title: 프로젝트 제목
subtitle: 프로젝트 부제목
image: /assets/img/project-image.jpg
tags: [Java, Spring, MySQL]
github: https://github.com/username/project
demo: https://project-demo.com
---

## 프로젝트 개요
프로젝트에 대한 설명을 작성하세요.

## 주요 기능
- 기능 1
- 기능 2

## 기술 스택
- Java
- Spring Framework
- MySQL
```

#### 프로젝트 이미지 추가
1. 이미지를 `assets/img/` 폴더에 저장
2. 프로젝트 마크다운 파일의 `image` 필드에 경로 지정

### 3. 경력/경험 수정
`_data/experience.yml` 파일을 수정하세요.

```yaml
experiences:
  - title: "인턴"
    company: "회사명"
    period: "2024.08 ~ 2024.10"
    description: "설명을 작성하세요."
```

### 4. 기술 스택 수정
`_data/skills.yml` 파일을 수정하세요.

```yaml
languages:
  - name: "Java"
    level: "Advanced"
    
frameworks:
  - name: "Spring Framework"
  
tools:
  - name: "IntelliJ IDEA"
```

### 5. 수상 내역 수정
`_data/awards.yml` 파일을 수정하세요.

```yaml
awards:
  - title: "우수상"
    date: "2024.01"
    description: "설명"
```

### 6. 자격증 수정
`_data/certifications.yml` 파일을 수정하세요.

```yaml
certifications:
  - name: "정보처리기사"
    date: "2024.06.18"
    issuer: "한국산업인력공단"
```

### 7. 연락처 수정
- `_config.yml`의 `author.email` 수정
- `_data/authors.yml`의 `social` 섹션 수정

### 8. 블로그 링크
블로그는 `/blog/` 경로로 자동 연결됩니다. Contact 섹션에 블로그 링크가 표시됩니다.

## 스타일 수정
포트폴리오 레이아웃의 스타일을 수정하려면 `_layouts/portfolio.html` 파일의 `<style>` 섹션을 수정하세요.

## 프로젝트 상세 페이지 스타일 수정
프로젝트 상세 페이지 스타일을 수정하려면 `_layouts/project.html` 파일의 `<style>` 섹션을 수정하세요.
