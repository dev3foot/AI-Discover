#!/bin/bash

# AI Discover GitHub 자동 배포 스크립트
# 사용법: ./deploy.sh "커밋 메시지"

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 AI Discover GitHub 자동 배포 시작${NC}"

# 커밋 메시지 확인
if [ -z "$1" ]; then
    echo -e "${RED}❌ 커밋 메시지를 입력해주세요.${NC}"
    echo -e "${YELLOW}사용법: ./deploy.sh \"커밋 메시지\"${NC}"
    exit 1
fi

COMMIT_MSG="$1"

echo -e "${YELLOW}📝 변경사항 확인 중...${NC}"

# Git 상태 확인
git status

echo -e "${YELLOW}📦 파일 추가 중...${NC}"

# 모든 변경사항 추가
git add .

# 변경사항이 있는지 확인
if git diff --staged --quiet; then
    echo -e "${YELLOW}⚠️  변경된 파일이 없습니다.${NC}"
    exit 0
fi

echo -e "${YELLOW}💾 커밋 생성 중...${NC}"

# 커밋 생성
git commit -m "$COMMIT_MSG

🎉 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

echo -e "${YELLOW}🌐 GitHub에 푸시 중...${NC}"

# GitHub에 푸시
if git push origin main; then
    echo -e "${GREEN}✅ 배포 완료!${NC}"
    echo -e "${GREEN}🔗 저장소: https://github.com/dev3foot/AI-Discover${NC}"
    echo -e "${GREEN}🌐 GitHub Pages: https://dev3foot.github.io/AI-Discover${NC}"
else
    echo -e "${RED}❌ 푸시 실패${NC}"
    exit 1
fi

echo -e "${BLUE}🎉 AI Discover 배포가 성공적으로 완료되었습니다!${NC}"