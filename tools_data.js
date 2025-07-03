// AI Tools Data - 전체 도구 목록
const AI_TOOLS_DATA = [
    {
        name: 'ChatGPT',
        description: 'OpenAI의 대화형 AI, 언변 좋고, 이미지 생성 잘 함',
        url: 'https://chat.openai.com',
        tags: ['대화형AI', '텍스트', '이미지', '개발', '업무도구', '개세픽']
    },
    {
        name: 'Claude',
        description: '대화형 AI, 똑똑하고 복잡한 문제 잘 품, 개발 잘 함',
        url: 'https://claude.ai/',
        tags: ['대화형AI', '텍스트', '개발', '업무도구', '개세픽']
    },
    {
        name: 'Grok',
        description: '일론 머스크의 xAI가 개발한 대화형 AI, 위트 있고 반항적인 답변으로 유명',
        url: 'https://grok.com',
        tags: ['대화형AI', '텍스트']
    },
    {
        name: 'Gemini',
        description: '구글의 대화형 AI, \'젬미니\' 아니고 \'제미나이\'임',
        url: 'https://gemini.google.com',
        tags: ['대화형AI', '텍스트', '이미지', '개발', '업무도구']
    },
    {
        name: 'DeepSeek',
        description: '중국 AI 스타트업에서 개발한 오픈소스 LLM, GPT-4급 성능을 무료로 제공',
        url: 'https://chat.deepseek.com',
        tags: ['대화형AI', '텍스트', '번역', '이미지', '개발']
    },
    {
        name: 'Qwen',
        description: '알리바바에서 개발한 멀티기능 AI 채팅봇, 텍스트부터 영상 생성까지 올인원 모델임',
        url: 'https://chat.qwen.ai/',
        tags: ['대화형AI', '텍스트', '이미지', '영상생성']
    },
    {
        name: 'Le Chat',
        description: '프랑스 AI 스타트업이 개발한 대화형 AI 모델',
        url: 'https://chat.mistral.ai/',
        tags: ['대화형AI', '텍스트']
    },
    {
        name: 'Copilot',
        description: '마이크로소프트의 AI 어시스턴트, VSC와 찰떡임',
        url: 'https://copilot.microsoft.com',
        tags: ['대화형AI', '텍스트', '검색', '개발']
    },
    {
        name: 'Poe',
        description: 'Quora가 만든 AI 허브, 여러 대화형 AI를 한 번에 비교하며 쓸 수 있음',
        url: 'https://poe.com',
        tags: ['대화형AI', '텍스트']
    },
    {
        name: 'Perplexity',
        description: 'AI 검색 엔진, 실시간 웹 검색과 출처 제공이 강점임',
        url: 'https://www.perplexity.ai',
        tags: ['검색', '학습/연구']
    },
    {
        name: 'Felo',
        description: 'AI 검색 엔진, 논문 번역과 다국어 리서치에 유용함',
        url: 'https://felo.ai',
        tags: ['검색', '학습/연구']
    },
    {
        name: 'Genspark',
        description: 'AI 검색 엔진, 리서치 자료를 기반으로 PPT 만들고 싶다면 이거 쓰면 됨',
        url: 'https://www.genspark.ai',
        tags: ['번역', '이미지', '영상생성', '검색']
    },
    {
        name: 'Midjourney',
        description: '예술 작품 같은, 감각적인 이미지 생성은 미드저니가 최고임, 영상 생성 기능도 제공',
        url: 'https://midjourney.com',
        tags: ['이미지', '영상생성']
    },
    {
        name: 'Ideogram',
        description: '텍스트 렌더링과 디자인에 강한 AI 이미지 생성기',
        url: 'https://ideogram.ai',
        tags: ['이미지']
    },
    {
        name: 'Flux AI',
        description: '오픈소스 AI 이미지 생성 모델, 인물 표현과 프롬프트 준수도 뛰어남',
        url: 'https://flux-ai.io/',
        tags: ['이미지']
    },
    {
        name: 'ImageFX',
        description: 'Google에서 개발한 텍스트 기반 AI 이미지 생성 툴',
        url: 'https://labs.google/fx/ko/tools/image-fx',
        tags: ['이미지']
    },
    {
        name: 'Leonardo AI',
        description: '무료로 고퀄리티 이미지 생성 가능',
        url: 'https://leonardo.ai',
        tags: ['이미지', '영상생성']
    },
    {
        name: 'Adobe Firefly',
        description: '어도비의 AI 이미지 생성 도구',
        url: 'https://firefly.adobe.com',
        tags: ['이미지', '영상생성']
    },
    {
        name: 'Playground',
        description: '로고, 티셔츠, SNS 피드, 스티커, 배경화면, 포스터, 모노그램, 전자책 표지, 초대장, 패턴, 목업, 밈 등',
        url: 'https://playground.com',
        tags: ['이미지', '디자인']
    },
    {
        name: 'Microsoft Designer',
        description: '마이크로소프트의 AI 기반 디자인 툴',
        url: 'https://designer.microsoft.com',
        tags: ['이미지']
    },
    {
        name: 'Krea',
        description: '실시간 AI 이미지 생성 및 편집, 로고 제작 시 활용',
        url: 'https://krea.ai',
        tags: ['이미지', '영상생성']
    },
    {
        name: 'Freepik',
        description: '이미지, 영상, 음성 제작 및 편집, 다양한 스톡 라이브러리',
        url: 'https://freepik.com',
        tags: ['이미지', '영상생성', '디자인']
    },
    {
        name: 'Scenario',
        description: '게임 아트 생성에 특화된 AI 이미지 생성 도구',
        url: 'https://scenario.com',
        tags: ['이미지']
    },
    {
        name: 'Magnific',
        description: '화질구지 이미지를 고화질로 만들어 줌',
        url: 'https://magnific.ai',
        tags: ['이미지']
    },
    {
        name: 'Ratel',
        description: '기업의 전화 업무를 자동화하는 AI 음성 에이전트 플랫폼',
        url: 'https://www.retellai.com/',
        tags: ['음성']
    },
    {
        name: 'Google AI Studio',
        description: 'Gemini 모델을 웹 기반 환경에서 테스트해볼 수 있는 AI 애플리케이션 개발 플랫폼',
        url: 'https://aistudio.google.com',
        tags: ['이미지', '개발']
    },
    {
        name: 'Photoshop',
        description: '어도비 포토샵 내에 AI 이미지 편집 기능 제공',
        url: 'https://adobe.com/products/photoshop',
        tags: ['디자인', '이미지']
    },
    {
        name: 'Cursor',
        description: 'AI 코드 에디터, 자연어 명령어로 코드를 작성할 수 있음(GPT, Claude 내장)',
        url: 'https://www.cursor.com',
        tags: ['개발', '개세픽']
    },
    {
        name: 'Windsurf',
        description: 'AI 코드 에디터, 자연어 명령어로 코드를 작성할 수 있음(GPT, Claude 내장)',
        url: 'https://codeium.com/windsurf',
        tags: ['개발']
    },
    {
        name: 'Bolt',
        description: '자연어로 아이디어를 입력하면 앱 MVP 만들어 줌',
        url: 'https://bolt.new',
        tags: ['개발']
    },
    {
        name: 'Lovable',
        description: '비전공자도 자연어로 풀스택 앱을 만들 수 있는 플랫폼, Supabase/Stripe 통합',
        url: 'https://lovable.dev',
        tags: ['개발']
    },
    {
        name: 'V0',
        description: '자연어로 React 웹 UI를 생성하고 Vercel에 바로 배포할 수 있는 Generative UI 플랫폼',
        url: 'https://v0.dev',
        tags: ['웹사이트빌더', '개발']
    },
    {
        name: 'Replit',
        description: '실시간 협업이 가능한 브라우저 기반 IDE, AI 에이전트 포함',
        url: 'https://replit.com',
        tags: ['개발']
    },
    {
        name: 'Trae',
        description: 'AI 기반 적응형 IDE, 실시간 코드 완성과 대화형 프로그래밍 지원',
        url: 'https://trae.ai',
        tags: ['개발']
    },
    {
        name: 'Rork',
        description: '자연어로 설명하면 React Native 기반 모바일 앱을 만들어 줌',
        url: 'https://rork.ai',
        tags: ['개발']
    },
    {
        name: 'Codev',
        description: '텍스트 설명으로 Next.js 풀스택 웹앱을 생성하는 AI 플랫폼',
        url: 'https://www.co.dev/',
        tags: ['개발']
    },
    {
        name: 'Reweb',
        description: 'Next.js/Tailwind 개발자를 위한 AI 기반 비주얼 웹사이트 빌더',
        url: 'https://www.reweb.so/',
        tags: ['개발']
    },
    {
        name: 'Apipt',
        description: '연어로 API 호출을 생성하는 AI 도구, GraphQL/REST/SQL 지원',
        url: 'https://www.apipt.dev/',
        tags: ['개발']
    },
    {
        name: 'Kling',
        description: '텍스트나 이미지로 영상을 만들어주는 AI, 인물과 카메라 움직임이 매끄러움',
        url: 'https://klingai.com',
        tags: ['영상생성', '개세픽']
    },
    {
        name: 'Sora',
        description: 'OpenAI의 텍스트 기반 영상 생성 AI',
        url: 'https://sora.com',
        tags: ['영상생성']
    },
    {
        name: 'Runway',
        description: '프로급 AI 영상 생성 툴, 모션 제어와 립싱크 기능 제공',
        url: 'https://runwayml.com',
        tags: ['영상생성']
    },
    {
        name: 'Luma',
        description: 'Dream Machine으로 유명한 이미지-영상 변환 AI, 직관적이고 빠른 생성',
        url: 'https://lumalabs.ai',
        tags: ['영상생성']
    },
    {
        name: 'Pika',
        description: '스타일라이즈된 영상 생성에 특화된 AI 도구',
        url: 'https://pika.art',
        tags: ['영상생성']
    },
    {
        name: 'Vidu',
        description: '중국 Shengshu Technology의 AI 영상 생성 모델',
        url: 'https://www.vidu.studio',
        tags: ['영상생성']
    },
    {
        name: 'Hailuo',
        description: 'MiniMax의 T2V-01 Director 모델, 카메라 컨트롤과 6초 영상 생성',
        url: 'https://hailuoai.video',
        tags: ['영상생성']
    },
    {
        name: 'Veo3',
        description: 'Google의 영상 생성 모델, 오디오 생성까지 지원, 최근 ASMR 영상 제작이 유행',
        url: 'https://gemini.google/overview/video-generation/',
        tags: ['영상생성']
    },
    {
        name: 'ElevenLabs',
        description: '70개 언어 지원하는 AI 음성 생성 및 복제 도구, 인간과 구별하기 어려운 자연스러운 음성 합성',
        url: 'https://elevenlabs.io',
        tags: ['음성']
    },
    {
        name: 'Suno',
        description: '텍스트 명령어 작성으로 음악 만들어 줌, Lo-fi 음악 잘 만듬',
        url: 'https://suno.ai',
        tags: ['음악', '개세픽']
    },
    {
        name: 'Udio',
        description: '고품질 보컬과 다양한 장르를 지원하는 AI 음악 생성 플랫폼',
        url: 'https://udio.com',
        tags: ['음악']
    },
    {
        name: 'MusicFX',
        description: 'Google의 AI 음악 생성 도구, 텍스트 프롬프트로 실시간 음악 생성 가능',
        url: 'https://aitestkitchen.withgoogle.com/tools/music-fx',
        tags: ['음악']
    },
    {
        name: 'DeepL',
        description: 'AI 기반 번역 서비스, 자연스러운 번역으로 유명, 30+개 언어 지원',
        url: 'https://www.deepl.com',
        tags: ['번역']
    },
    {
        name: 'Gamma',
        description: '텍스트 입력으로 프레젠테이션, 웹페이지, 문서를 자동으로 만들어 줌',
        url: 'https://gamma.app',
        tags: ['업무도구', '개세픽']
    },
    {
        name: 'Canva',
        description: 'AI 기능이 대폭 강화된 올인원 디자인 플랫폼, 디자인 직접 하고 싶은데 어도비는 부담스럽다면 캔바임',
        url: 'https://canva.com',
        tags: ['디자인', '개세픽']
    },
    {
        name: 'Napkin',
        description: '텍스트를 다이어그램·차트·인포그래픽으로 자동 변환',
        url: 'https://napkin.ai',
        tags: ['업무도구']
    },
    {
        name: 'Mapify',
        description: 'PDF·동영상·웹페이지 등의 콘텐츠를 마인드맵으로 변환',
        url: 'https://mapify.so',
        tags: ['업무도구']
    },
    {
        name: 'ClovaNote',
        description: '네이버의 AI 음성 > 텍스트 변환 노트 앱',
        url: 'https://clovanote.naver.com',
        tags: ['음성인식', '업무도구', '텍스트']
    },
    {
        name: 'Tiro',
        description: 'AI 기반 실시간 회의 노트 및 요약 도구, 3초 만에 맞춤형 템플릿으로 정리된 문서 생성',
        url: 'https://tiro.ooo/',
        tags: ['업무도구', '음성인식']
    },
    {
        name: 'Notta',
        description: 'AI 음성 인식 및 회의 기록 도구, 실시간 음성을 텍스트로 변환',
        url: 'https://www.notta.ai/en',
        tags: ['업무도구', '음성인식']
    },
    {
        name: 'Notion',
        description: 'AI 기능이 추가된 올인원 워크스페이스, 웹 기반, 실시간 협업, 업무 효율 극대화',
        url: 'https://notion.so',
        tags: ['업무도구', '개세픽']
    },
    {
        name: 'Obsidian',
        description: '연결형 노트 앱, AI 기반 노트 검색과 편집 기능 제공',
        url: 'https://obsidian.md',
        tags: ['업무도구']
    },
    {
        name: 'Figma',
        description: '웹 기반 UIUX 디자인 툴, 디자인-개발 협업 편리하고 여러가지 AI 기능 지원',
        url: 'https://figma.com',
        tags: ['디자인', 'UIUX', '개세픽']
    },
    {
        name: 'Framer',
        description: 'AI 기반의 노코드 웹사이트 빌더, 디자이너 친화적인 인터페이스와 프로토타이핑 기능 제공',
        url: 'https://framer.com',
        tags: ['디자인', '웹사이트빌더', 'UIUX', '개세픽']
    },
    {
        name: 'Uizard',
        description: '스케치를 UI로 변환하는 AI, 텍스트 프롬프트나 손그림을 편집 가능한 디지털 UI 디자인으로 변환',
        url: 'https://uizard.io',
        tags: ['디자인', 'UIUX']
    },
    {
        name: 'Dora',
        description: '노코드로 3D 애니메이션 웹사이트 제작할 수 있음',
        url: 'https://dora.run',
        tags: ['웹사이트빌더', 'UIUX']
    },
    {
        name: 'Stitch (by Google)',
        description: '텍스트 프롬프트로 UI 디자인 생성(전 Galileo)',
        url: 'https://stitch.withgoogle.com/',
        tags: ['디자인', 'UIUX']
    },
    {
        name: 'Ugic',
        description: '텍스트 프롬프트를 페이지 구조로 변환하는 Figma 플러그인',
        url: 'https://ugic.ai',
        tags: ['디자인', 'UIUX']
    },
    {
        name: 'Creatie',
        description: 'AI 기반 UIUX 디자인 플랫폼, 와이어프레임부터 프로토타입까지 한 플랫폼에서 가능',
        url: 'https://creatie.ai',
        tags: ['디자인', 'UIUX']
    },
    {
        name: 'Wegic',
        description: '대화형 AI 인터페이스로 웹사이트 생성',
        url: 'https://wegic.ai',
        tags: ['웹사이트빌더']
    },
    {
        name: 'Capcut',
        description: '무료 영상 편집 앱으로, 자동 자막 생성, 텍스트-음성 변환, AI 아바타, 음성 복제 등 다양한 AI 도구 제공',
        url: 'https://capcut.com',
        tags: ['영상편집']
    },
    {
        name: 'Vrew',
        description: 'AI 자막 생성 및 영상 편집 도구로, 자동 자막 생성, 60개 이상 언어 번역, 수백가지 자연스러운 AI 음성',
        url: 'https://vrew.ai/ko/',
        tags: ['음성', '영상편집']
    },
    {
        name: 'VEED',
        description: '텍스트-비디오 변환, 아바타, 자동 자막, 음성 번역 등 AI 기능을 제공하는 무료 영상 편집기',
        url: 'https://veed.io',
        tags: ['영상편집']
    },
    {
        name: 'Invideo',
        description: '스크립트 생성, 클립, 자막, 음악, 전환 효과까지 자동으로 추가하는 AI 영상 생성기',
        url: 'https://invideo.io',
        tags: ['영상편집']
    },
    {
        name: 'Heygen',
        description: 'AI 아바타 영상 생성 도구',
        url: 'https://heygen.com',
        tags: ['아바타']
    },
    {
        name: 'Synthesis',
        description: '실사와 같은 AI 아바타와 현실적인 음성해설을 통한 AI 영상 제작',
        url: 'https://synthesys.io/',
        tags: ['아바타']
    },
    {
        name: 'Make',
        description: '시각적 워크플로우 자동화 플랫폼, 노코드/로우코드 환경에서 복잡한 워크플로우 구축 가능, AI 에이전트 기능 포함',
        url: 'https://make.com',
        tags: ['업무도구']
    },
    {
        name: 'Zapier',
        description: '클라우드 기반 앱 연동 자동화 도구, 8,000개 이상 앱 지원',
        url: 'https://zapier.com',
        tags: ['업무도구']
    },
    {
        name: 'n8n',
        description: '오픈소스 워크플로우 자동화 플랫폼, 온프레미스 지원 가능',
        url: 'https://n8n.io',
        tags: ['업무도구']
    },
    {
        name: 'Dify',
        description: '드래그 앤 드롭 방식 AI 앱 개발을 위한 오픈소스 LLMOps 플랫폼',
        url: 'https://dify.ai',
        tags: ['플랫폼']
    },
    {
        name: 'wrtn (뤼튼)',
        description: '한국의 종합 AI 플랫폼, 지드래곤이 광고하는 그거 맞음',
        url: 'https://wrtn.ai',
        tags: ['플랫폼']
    },
    {
        name: 'Consensus',
        description: 'AI 기반 학술 연구 검색 엔진, 2억 개 이상의 과학 논문을 AI로 검색하여 증거 기반 답변과 핵심 인사이트를 즉시 요약 제공',
        url: 'https://consensus.app',
        tags: ['학습/연구']
    },
    {
        name: 'Replicate',
        description: '클라우드 기반 AI 모델 실행 플랫폼, 오픈소스 머신러닝 모델을 API로 실행 가능',
        url: 'https://replicate.com',
        tags: ['플랫폼']
    },
    {
        name: 'Fal AI',
        description: '개발자를 위한 생성형 미디어 플랫폼, 빠른 AI 추론',
        url: 'https://fal.ai',
        tags: ['플랫폼', '개발']
    },
    {
        name: 'Tost AI',
        description: '최신 AI 연구 논문의 추론을 제공하는 오픈소스 서비스',
        url: 'https://tost.ai',
        tags: ['학습/연구']
    },
    {
        name: 'Google NotebookLM',
        description: 'PDF, 웹사이트, YouTube 영상, 오디오, Google 문서 업로드 가능, 학습 도구로는 이게 최고',
        url: 'https://notebooklm.google/',
        tags: ['텍스트', '업무도구', '학습/연구', '개세픽']
    },
    {
        name: 'Groq',
        description: 'LPU(Language Processing Unit) 기반의 초고속 AI 추론 전용 하드웨어 및 클라우드 플랫폼',
        url: 'https://groq.com',
        tags: ['플랫폼']
    },
    {
        name: 'Cerebras',
        description: '대규모 AI 모델 훈련 및 추론을 위한 하드웨어 플랫폼',
        url: 'https://cerebras.ai',
        tags: ['플랫폼']
    },
    {
        name: 'Together AI',
        description: '200개 이상의 오픈소스 AI 모델을 쉽게 실행, 파인튜닝할 수 있는 GPU 클라우드 플랫폼',
        url: 'https://together.ai',
        tags: ['플랫폼']
    },
    {
        name: 'Pinokio',
        description: '원클릭으로 컴퓨터에 모든 서버 애플리케이션을 로컬 설치, 실행 및 관리할 수 있는 브라우저 플랫폼',
        url: 'https://pinokio.co/',
        tags: ['업무도구']
    },
    {
        name: 'ComfyUI',
        description: '노드 기반 캔버스, AI 이미지, 비디오, 3D, 오디오를 생성할 수 있는 무료 오픈소스 플랫폼',
        url: 'https://www.comfy.org/',
        tags: ['이미지', '영상생성', '창작']
    },
    {
        name: 'Ollama',
        description: '로컬에서 대형 언어 모델을 실행하는 도구',
        url: 'https://ollama.com',
        tags: ['로컬AI']
    },
    {
        name: 'LmStudio',
        description: '로컬 AI 모델 실행을 위한 데스크톱 앱',
        url: 'https://lmstudio.ai',
        tags: ['로컬AI']
    },
    {
        name: 'OpenWebUI',
        description: 'Ollama, OpenAI API 등 다양한 LLM을 지원하며 RAG, 이미지 생성, 웹 검색 등이 통합된 오프라인 셀프 호스팅 AI 플랫폼',
        url: 'https://openwebui.com',
        tags: ['로컬AI']
    },
    {
        name: 'Anifusion',
        description: 'AI 기반으로 웹툰 그릴 수 있음',
        url: 'https://anifusion.ai',
        tags: ['창작']
    },
    {
        name: 'Novel AI',
        description: 'AI 기반 소설 및 스토리 작성 도구',
        url: 'https://novelai.net',
        tags: ['창작']
    },
    {
        name: 'Story Tribe',
        description: '스토리보드 제작 도구',
        url: 'https://storytribeapp.com/',
        tags: ['창작']
    },
    {
        name: 'Storm',
        description: '주제를 입력하면 인터넷 리서치와 다중 관점 질문을 통해 위키피디아 스타일의 기사를 인용과 함께 자동 생성',
        url: 'https://storm.genie.stanford.edu',
        tags: ['텍스트']
    },
    {
        name: 'Character AI',
        description: 'AI 기반으로 애니메이션, 만화, 실제 인물 등 다양한 캐릭터와 대화를 나눌 수 있음',
        url: 'https://character.ai',
        tags: ['아바타']
    },
    {
        name: 'Hunyuan(场景展示)',
        description: '텐센트의 AI 모델 플랫폼',
        url: 'https://hunyuan.tencent.com',
        tags: ['대화형AI', '이미지', '영상생성']
    },
    {
        name: 'Phind',
        description: '개발자를 위한 AI 검색 엔진',
        url: 'https://phind.com',
        tags: ['개발', '검색']
    },
    {
        name: 'JENOVA',
        description: 'GPT, Claude, Gemini 등 AI 모델을 지능적으로 선택하여 실시간 웹 검색',
        url: 'https://jenova.ai',
        tags: ['검색']
    },
    {
        name: 'Claude Code',
        description: '터미널(CLI) 기반 AI 코딩 에이전트, 자연어 명령으로 파일 편집, 디버깅 Git 작업 등(윈도우의 경우 WSL에서 실행 가능)',
        url: 'https://docs.anthropic.com/ko/docs/claude-code/overview',
        tags: ['개발', 'CLI', '개세픽']
    },
    {
        name: 'Gemini CLI',
        description: '터미널(CLI) 기반 오픈소스 AI 에이전트',
        url: 'https://github.com/google-gemini/gemini-cli',
        tags: ['개발', 'CLI']
    },
    {
        name: 'ANON KODE',
        description: '터미널(CLI) 기반 AI 코딩 도구(OpenAI 스타일 API를 지원하는 모든 LLM 모델 사용 가능)',
        url: 'https://github.com/dnakov/anon-kode?utm_source=pytorchkr&ref=pytorchkr',
        tags: ['개발', 'CLI']
    },
    {
        name: 'Codex',
        description: '터미널(CLI)에서 사용 가능한 OpenAI의 AI 코딩 에이전트',
        url: 'https://openai.com/codex/',
        tags: ['개발', 'CLI']
    },
    {
        name: 'Open Code',
        description: '터미널(CLI)에서 사용 가능한 AI 어시스턴트',
        url: 'https://github.com/opencode-ai/opencode',
        tags: ['개발', 'CLI']
    },
    {
        name: 'Amp Code',
        description: '터미널(CLI), VSC 확장 AI 코딩 에이전트',
        url: 'https://ampcode.com/',
        tags: ['개발', 'CLI']
    },
    {
        name: 'RecCloud',
        description: '음성 텍스트 변환, TTS, 자막 생성, 동영상 번역 등 AI 기반의 올인원 비디오 및 오디오 편집 도구',
        url: 'https://reccloud.com/',
        tags: ['음성인식']
    },
    {
        name: 'Relume',
        description: '사이트맵, 와이어프레임, 스타일 가이드 자동 생성, Figma/Webflow로 내보낼 수 있음',
        url: 'https://www.relume.io/',
        tags: ['디자인', 'UIUX']
    },
    {
        name: 'Descript',
        description: '자연어 프롬프트 입력으로 비디오와 팟캐스트를 편집하는 방식, AI 아바타, 자동 자막, 필러워드 제거 등 다양한 AI 기능 제공',
        url: 'https://www.descript.com/?redirect=false',
        tags: ['음성', '아바타']
    },
    {
        name: 'Fliki',
        description: '텍스트, 블로그, PPT 등을 입력하면 AI 음성과 영상으로 자동 변환',
        url: 'https://fliki.ai/',
        tags: ['음성']
    },
    {
        name: 'PopAi',
        description: '프롬프트 입력, 텍스트/문서 업로드로 프레젠테이션 자동 생성',
        url: 'https://www.popai.pro/ko',
        tags: ['업무도구']
    },
    {
        name: 'PicWish',
        description: '이미지 배경 제거, 화질 개선 등 다양한 AI 기반 편집 기능 제공',
        url: 'https://picwish.com/',
        tags: ['이미지']
    },
    {
        name: 'Luma AI',
        description: '고퀄리티 영상 생성, 3D 콘텐츠 제작 도구',
        url: 'https://lumalabs.ai',
        tags: ['영상생성', '3D', '이미지']
    },
    {
        name: 'VidIQ',
        description: '키워드 분석, 영상 아이디어 제안, 썸네일 제작, 트렌드 추적 등 YouTube 채널 성장을 위한 올인원 최적화 도구',
        url: 'https://www.vidiq.com',
        tags: ['업무도구', '창작']
    }
];