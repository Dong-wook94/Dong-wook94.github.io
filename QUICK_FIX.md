# 빠른 해결 방법

## 문제
Xcode 관련 오류로 인해 `git` 명령어가 작동하지 않습니다.

## 해결책

### 방법 1: xcode-select 변경 (가장 확실한 방법)

터미널에서 다음 명령어를 실행하세요:

```bash
sudo xcode-select --switch /Library/Developer/CommandLineTools
```

비밀번호를 입력하면 됩니다.

### 방법 2: Git을 직접 경로로 사용 (임시 해결)

터미널에서 다음 명령어들을 사용하세요:

```bash
cd /Users/dongwook/Desktop/Git/blog

# Git을 직접 경로로 사용
/usr/bin/git status
/usr/bin/git add .
/usr/bin/git commit -m "포트폴리오 홈페이지 추가 및 이력서 정보 반영"
/usr/bin/git remote add origin https://github.com/Dong-wook94/Dong-wook94.github.io.git 2>/dev/null || /usr/bin/git remote set-url origin https://github.com/Dong-wook94/Dong-wook94.github.io.git
/usr/bin/git push origin master
```

### 방법 3: Git 별칭(alias) 설정

터미널에서 다음을 실행하여 Git 별칭을 설정:

```bash
echo 'alias git="/usr/bin/git"' >> ~/.zshrc
source ~/.zshrc
```

또는 `.bash_profile`을 사용하는 경우:

```bash
echo 'alias git="/usr/bin/git"' >> ~/.bash_profile
source ~/.bash_profile
```

### 방법 4: 제공된 스크립트 사용

프로젝트 폴더에 있는 `git-wrapper.sh` 스크립트를 사용:

```bash
cd /Users/dongwook/Desktop/Git/blog
./git-wrapper.sh status
./git-wrapper.sh add .
./git-wrapper.sh commit -m "포트폴리오 홈페이지 추가"
./git-wrapper.sh push origin master
```

## 추천 순서

1. **먼저 방법 1 시도** (가장 근본적인 해결)
2. 방법 1이 안 되면 **방법 2 사용** (임시로 작업 진행)
3. 자주 사용한다면 **방법 3 적용** (영구적 해결)

## 확인

해결 후 확인:

```bash
git --version
# 또는
/usr/bin/git --version
```

둘 다 작동해야 합니다.
