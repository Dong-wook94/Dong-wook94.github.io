# Xcode Git 오류 해결 가이드

## 문제 상황
`xcode-select: Failed to locate 'git'` 오류가 발생하고 있습니다.

## 해결 방법

### 방법 1: xcode-select를 Command Line Tools로 변경 (권장)

터미널에서 다음 명령어를 실행하세요:

```bash
sudo xcode-select --switch /Library/Developer/CommandLineTools
```

비밀번호를 입력하면 됩니다.

### 방법 2: Command Line Tools 재설치

```bash
# 기존 설정 제거
sudo xcode-select --reset

# Command Line Tools 재설치
xcode-select --install
```

설치가 완료되면:

```bash
sudo xcode-select --switch /Library/Developer/CommandLineTools
```

### 방법 3: Git을 직접 경로로 사용 (임시 해결책)

xcode-select 문제를 우회하여 Git을 직접 사용:

```bash
# .zshrc 또는 .bash_profile에 추가
export PATH="/usr/bin:$PATH"

# 또는 직접 git 경로 사용
/usr/bin/git --version
```

### 방법 4: Homebrew를 통한 Git 설치 (선택사항)

```bash
# Homebrew가 설치되어 있다면
brew install git

# PATH 확인
which git
```

## 확인 방법

해결 후 다음 명령어로 확인:

```bash
# Git 버전 확인
git --version

# xcode-select 경로 확인
xcode-select -p

# Git 경로 확인
which git
```

## Git 사용하기

문제가 해결되면 다음 명령어로 GitHub에 푸시할 수 있습니다:

```bash
cd /Users/dongwook/Desktop/Git/blog

# 원격 저장소 설정
git remote add origin https://github.com/Dong-wook94/Dong-wook94.github.io.git 2>/dev/null || git remote set-url origin https://github.com/Dong-wook94/Dong-wook94.github.io.git

# 변경사항 추가 및 커밋
git add .
git commit -m "포트폴리오 홈페이지 추가 및 이력서 정보 반영"

# 푸시
git push origin master
```

## 빠른 해결 (한 줄 명령어)

터미널에서 다음을 실행하세요:

```bash
sudo xcode-select --switch /Library/Developer/CommandLineTools && git --version
```
