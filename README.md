# Portfolio Website

현대적이고 세련된 포트폴리오 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 주요 기능

- 🎨 Glassmorphism 효과를 적용한 현대적인 디자인
- 🌊 부드러운 애니메이션 효과
- 📱 완전 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 🎯 스크롤 기반 섹션 네비게이션
- 💙 Deep Blue & Electric Blue 테마

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
portfolio/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 전역 스타일
├── components/
│   ├── Navigation.tsx  # 네비게이션 바
│   ├── Hero.tsx        # 히어로 섹션
│   ├── Skills.tsx      # 기술 스택 섹션
│   ├── Projects.tsx    # 프로젝트 섹션
│   └── Contact.tsx     # 연락처 섹션
└── portfolio.md        # 포트폴리오 원본 데이터
```

## 커스터마이징

포트폴리오 내용을 수정하려면 각 컴포넌트 파일을 편집하세요:

- `components/Hero.tsx`: 자기소개 및 히어로 섹션
- `components/Skills.tsx`: 기술 스택 목록
- `components/Projects.tsx`: 프로젝트 목록 및 상세 정보
- `components/Contact.tsx`: 연락처 및 경력 정보

색상 테마는 `tailwind.config.ts`에서 수정할 수 있습니다.
