# AI Discover - AI를 쉽게 발견하는 곳

![AI Discover Banner](https://img.shields.io/badge/AI%20Discover-AI%20Tool%20Curator-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-yellow?style=flat-square)

## 📖 프로젝트 소개

**AI Discover**는 AI를 쉽게 발견할 수 있는 플랫폼입니다. 

복잡하고 다양한 AI 도구들 중에서 사용자의 목적과 필요에 맞는 최적의 도구를 쉽고 빠르게 찾을 수 있도록 도와줍니다.

## ✨ 주요 특징

### 🎯 **스마트 필터링**
- **기능별**: 텍스트생성, 이미지생성, 영상제작, 음성/음악생성 등
- **목적별**: 업무용, 콘텐츠제작, 학습/공부용, 개발자용, 브랜드/디자인
- **가격별**: 무료, 부분무료, 유료

### 🔍 **실시간 검색**
- 실시간 검색어 매칭
- URL 파라미터를 통한 검색어 전달
- 검색 결과 하이라이팅

### 📊 **96개+ AI 툴 데이터베이스**
- 2024-2025년 최신 AI 툴 중심
- 신뢰할 수 있는 공식 URL 제공
- 정확한 가격 정보 (무료/부분무료/유료)
- 실제 사용 후기 기반 큐레이션

### 🎨 **사용자 친화적 UI/UX**
- 반응형 웹 디자인
- 다크/라이트 모드 지원
- 부드러운 애니메이션
- 직관적인 네비게이션

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: CSS Grid, Flexbox, CSS Variables
- **Icons**: Emoji-based icons (추후 실제 아이콘 교체 예정)
- **Typography**: Pretendard 폰트

## 📁 프로젝트 구조

```
ai-tool-curator/
├── 📄 index.html              # 메인 페이지 (추천 AI 툴 9개)
├── 📄 tools.html              # 전체 툴 검색 페이지
├── 📄 guide.html              # AI 입문 가이드
├── 📄 reviews.html            # 사용 후기 (개발 예정)
├── 📂 css/
│   └── 📄 style.css          # 메인 스타일시트
├── 📂 js/
│   ├── 📄 main.js            # 히어로 슬라이더 및 기본 기능
│   └── 📄 ai-tools-renderer.js # 동적 툴 렌더링 시스템
├── 📂 data/
│   └── 📄 ai-tools-database.js # 96개 AI 툴 데이터베이스
├── 📂 img/
│   └── 🖼️ gpt-cat.png        # 가이드 페이지 이미지
└── 📂 system/                 # 레거시 파일들 (참조용)
```

## 🚀 주요 기능

### 1. **홈페이지 (index.html)**
- 🎭 **히어로 슬라이더**: 3개 슬라이드, 8초 자동 전환
- 🌟 **추천 AI 툴**: 엄선된 9개 툴 표시
- 🔧 **스마트 필터링**: 실시간 필터 적용
- 🔍 **통합 검색**: 히어로에서 검색 → tools.html 연결

### 2. **툴 검색 페이지 (tools.html)**
- 📊 **전체 데이터베이스**: 96개 AI 툴 표시
- 🎛️ **고급 필터링**: 다중 조건 필터
- 📈 **결과 카운팅**: 필터 적용 결과 수 표시
- 🏷️ **태그 시스템**: 선택된 필터 태그 관리

### 3. **AI 입문 가이드 (guide.html)**
- 📚 **학습 콘텐츠**: AI 기초부터 활용까지
- 💡 **실무 팁**: 직종별 AI 활용 가이드
- 🎯 **단계별 학습**: 초보자도 쉽게 따라할 수 있는 구성

## 🎨 디자인 시스템

### 🎨 **컬러 팔레트**
- **Primary**: `#0969da` (파란색 계열)
- **Secondary**: `#1e40af` (진한 파란색)
- **Surface**: `#ffffff` (화이트)
- **Text**: `#24292f` (다크 그레이)

### 📝 **타이포그래피**
- **메인 폰트**: Pretendard Variable
- **폰트 크기**: 12px ~ 48px (반응형)
- **라인 높이**: 1.6 (가독성 최적화)

### 🎭 **애니메이션**
- **속도**: 150ms ~ 350ms
- **이징**: ease, ease-in-out
- **호버 효과**: translateY, box-shadow

## 📱 반응형 지원

- **Mobile**: 320px ~ 767px
- **Tablet**: 768px ~ 1023px  
- **Desktop**: 1024px 이상

## 🌟 주요 AI 툴 카테고리

| 카테고리 | 도구 수 | 주요 도구 |
|---------|--------|-----------|
| 텍스트 생성 | 18개 | ChatGPT, Claude, Gemini |
| 이미지 생성 | 16개 | Midjourney, DALL-E 3, Stable Diffusion |
| 영상 제작 | 12개 | Runway ML, Synthesia |
| 음성/음악 | 10개 | ElevenLabs, Suno |
| 개발 도구 | 12개 | GitHub Copilot, Cursor |
| 디자인 | 8개 | Figma AI, Framer AI |
| 업무자동화 | 8개 | Zapier AI, Otter.ai |
| 데이터분석 | 6개 | Julius AI, Akkio |
| 번역/언어 | 6개 | DeepL, Google Translate |

## 🎯 향후 개발 계획

### 단기 목표 (1-2개월)
- [ ] 실제 AI 툴 아이콘 이미지 추가
- [ ] 사용자 후기 시스템 구축
- [ ] 즐겨찾기 기능 추가
- [ ] 공유 기능 구현

### 중기 목표 (3-6개월)
- [ ] 사용자 계정 시스템
- [ ] AI 툴 리뷰 및 평점 시스템
- [ ] 개인화 추천 알고리즘
- [ ] 모바일 앱 개발

### 장기 목표 (6개월+)
- [ ] AI 툴 성능 벤치마크
- [ ] 커뮤니티 기능
- [ ] API 서비스 제공
- [ ] 다국어 지원

## 🤝 기여하기

프로젝트에 기여하고 싶으신가요? 언제든 환영합니다!

1. **Fork** 이 저장소
2. **Create** 새로운 기능 브랜치 (`git checkout -b feature/새기능`)
3. **Commit** 변경사항 (`git commit -m 'Add: 새로운 기능 추가'`)
4. **Push** 브랜치 (`git push origin feature/새기능`)
5. **Pull Request** 생성

## 📞 문의

- **이메일**: dev3foot@gmail.com
- **GitHub**: [@dev3foot](https://github.com/dev3foot)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

<div align="center">

**AI를 쉽게 발견하는 곳, AI Discover** 🚀

Made with ❤️ by [dev3foot](https://github.com/dev3foot)

</div>