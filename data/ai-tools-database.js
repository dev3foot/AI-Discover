// 확장된 AI 툴 데이터베이스 (90개+ 2024-2025 최신 AI 툴)
const aiToolsDatabase = [
  // 텍스트 생성 AI (18개)
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI의 대화형 AI로 질문답변, 번역, 요약, 코딩 등 다양한 텍스트 작업을 수행합니다.",
    tags: ["질문답변", "번역", "요약", "코딩"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "study", "content", "developer"],
    price: "freemium",
    url: "https://chat.openai.com",
    icon: "🤖",
    featured: true
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic의 AI 어시스턴트로 안전하고 도움이 되는 대화, 분석, 창작 작업에 특화되어 있습니다.",
    tags: ["대화", "분석", "창작", "안전"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "study", "developer", "content"],
    price: "freemium",
    url: "https://claude.ai",
    icon: "🧠",
    featured: true
  },
  {
    id: "gemini",
    name: "Google Gemini",
    description: "Google의 멀티모달 AI로 텍스트, 이미지, 코드 등을 이해하고 생성할 수 있습니다.",
    tags: ["멀티모달", "검색연동", "코딩"],
    category: "텍스트생성", 
    function: ["text"],
    purpose: ["business", "study", "developer"],
    price: "freemium",
    url: "https://gemini.google.com",
    icon: "✨",
    featured: true
  },
  {
    id: "jasper",
    name: "Jasper",
    description: "마케팅 콘텐츠 제작에 특화된 AI 라이팅 도구로 블로그, 광고 카피, 소셜미디어 포스트를 생성합니다.",
    tags: ["마케팅", "카피라이팅", "콘텐츠", "SEO"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "content"],
    price: "paid",
    url: "https://jasper.ai",
    icon: "✍️",
    featured: false
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    description: "AI 기반 카피라이팅 도구로 이메일, 광고 문구, 소셜미디어 콘텐츠를 빠르게 생성합니다.",
    tags: ["카피라이팅", "이메일", "광고문구", "템플릿"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "content"],
    price: "freemium",
    url: "https://copy.ai",
    icon: "📝",
    featured: false
  },
  {
    id: "writesonic",
    name: "Writesonic",
    description: "SEO 최적화된 콘텐츠 작성을 위한 AI 도구로 블로그, 광고, 웹사이트 콘텐츠를 생성합니다.",
    tags: ["SEO", "블로그", "광고", "웹사이트"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "content"],
    price: "freemium",
    url: "https://writesonic.com",
    icon: "🚀",
    featured: false
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description: "AI 기반 문법 검사 및 글쓰기 개선 도구로 영문 작성의 품질을 높여줍니다.",
    tags: ["문법검사", "교정", "영문작성", "톤조절"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "study"],
    price: "freemium",
    url: "https://grammarly.com",
    icon: "✅",
    featured: false
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "Notion 내장 AI로 문서 작성, 요약, 아이디어 정리, 번역 등을 도와줍니다.",
    tags: ["문서작성", "요약", "정리", "번역"],
    category: "텍스트생성",
    function: ["text", "automation"],
    purpose: ["business", "study"],
    price: "freemium",
    url: "https://notion.so",
    icon: "📝",
    featured: true
  },
  {
    id: "quillbot",
    name: "QuillBot",
    description: "AI 기반 패러프레이징 도구로 텍스트를 다시 쓰고 문체를 개선해줍니다.",
    tags: ["패러프레이징", "문체개선", "요약", "인용"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["study", "business"],
    price: "freemium",
    url: "https://quillbot.com",
    icon: "🪶",
    featured: false
  },
  {
    id: "rytr",
    name: "Rytr",
    description: "다양한 용도의 콘텐츠를 빠르게 생성하는 AI 라이팅 어시스턴트입니다.",
    tags: ["빠른생성", "다목적", "템플릿", "다국어"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "content"],
    price: "freemium",
    url: "https://rytr.me",
    icon: "⚡",
    featured: false
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description: "AI 검색 엔진으로 실시간 정보를 바탕으로 정확한 답변과 출처를 제공합니다.",
    tags: ["AI검색", "실시간정보", "출처제공", "연구"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["study", "business"],
    price: "freemium",
    url: "https://perplexity.ai",
    icon: "🔍",
    featured: true
  },
  {
    id: "character-ai",
    name: "Character.AI",
    description: "다양한 캐릭터와 대화할 수 있는 AI 플랫폼으로 창작과 엔터테인먼트에 활용됩니다.",
    tags: ["캐릭터대화", "창작", "엔터테인먼트", "롤플레이"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["content", "study"],
    price: "freemium",
    url: "https://character.ai",
    icon: "🎭",
    featured: false
  },
  {
    id: "claude-pro",
    name: "Claude Pro",
    description: "Anthropic Claude의 고급 버전으로 더 긴 대화와 우선 접근을 제공합니다.",
    tags: ["고급기능", "긴대화", "우선접근", "분석"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "developer"],
    price: "paid",
    url: "https://claude.ai/upgrade",
    icon: "💎",
    featured: false
  },
  {
    id: "poe",
    name: "Poe",
    description: "여러 AI 모델을 한 곳에서 사용할 수 있는 플랫폼입니다.",
    tags: ["다중모델", "비교", "편의성", "통합"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "study"],
    price: "freemium",
    url: "https://poe.com",
    icon: "🎪",
    featured: false
  },
  {
    id: "wordtune",
    name: "Wordtune",
    description: "AI 기반 문장 개선 도구로 더 명확하고 효과적인 글쓰기를 도와줍니다.",
    tags: ["문장개선", "명확성", "톤조절", "재작성"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "study"],
    price: "freemium",
    url: "https://wordtune.com",
    icon: "🎯",
    featured: false
  },
  {
    id: "anyword",
    name: "Anyword",
    description: "데이터 기반 AI 카피라이팅 도구로 성과 예측 기능을 제공합니다.",
    tags: ["데이터기반", "성과예측", "카피라이팅", "최적화"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business"],
    price: "paid",
    url: "https://anyword.com",
    icon: "📊",
    featured: false
  },
  {
    id: "sudowrite",
    name: "Sudowrite",
    description: "창작 작가를 위한 AI 도구로 소설, 시나리오 등 창작 활동을 지원합니다.",
    tags: ["창작", "소설", "시나리오", "아이디어"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["content"],
    price: "paid",
    url: "https://sudowrite.com",
    icon: "📚",
    featured: false
  },
  {
    id: "lex",
    name: "Lex",
    description: "AI와 함께 글을 쓸 수 있는 협업 글쓰기 도구입니다.",
    tags: ["협업글쓰기", "실시간", "아이디어", "편집"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["content", "business"],
    price: "freemium",
    url: "https://lex.page",
    icon: "🤝",
    featured: false
  },

  // 이미지 생성 AI (16개)
  {
    id: "midjourney",
    name: "Midjourney",
    description: "디스코드 기반의 AI 이미지 생성 도구로 예술적이고 창의적인 이미지를 만들어냅니다.",
    tags: ["예술적", "창의적", "고품질", "디스코드"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand"],
    price: "paid",
    url: "https://midjourney.com",
    icon: "🎨",
    featured: true
  },
  {
    id: "dall-e-3",
    name: "DALL-E 3",
    description: "OpenAI의 최신 이미지 생성 AI로 텍스트 설명을 정확하게 반영한 이미지를 생성합니다.",
    tags: ["정확성", "텍스트반영", "고품질", "ChatGPT연동"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand"],
    price: "freemium",
    url: "https://openai.com/dall-e-3",
    icon: "🖼️",
    featured: true
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "오픈소스 이미지 생성 AI로 로컬에서 실행하거나 다양한 플랫폼에서 사용할 수 있습니다.",
    tags: ["오픈소스", "로컬실행", "커스터마이징", "무료"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand", "developer"],
    price: "free",
    url: "https://stability.ai",
    icon: "🔓",
    featured: true
  },
  {
    id: "leonardo-ai",
    name: "Leonardo AI",
    description: "게임과 콘텐츠 제작에 특화된 AI 이미지 생성 도구로 일관된 캐릭터 생성이 가능합니다.",
    tags: ["게임아셋", "캐릭터", "일관성", "콘텐츠제작"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand"],
    price: "freemium",
    url: "https://leonardo.ai",
    icon: "🎮",
    featured: false
  },
  {
    id: "firefly",
    name: "Adobe Firefly",
    description: "Adobe의 AI 이미지 생성 도구로 Creative Cloud와 통합되어 있습니다.",
    tags: ["Adobe통합", "상업적사용", "전문적", "Creative"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["brand", "business"],
    price: "freemium",
    url: "https://firefly.adobe.com",
    icon: "🔥",
    featured: true
  },
  {
    id: "playground-ai",
    name: "Playground AI",
    description: "직관적인 인터페이스로 AI 이미지를 쉽게 생성하고 편집할 수 있는 도구입니다.",
    tags: ["직관적", "편집기능", "쉬운사용", "브라우저기반"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand"],
    price: "freemium",
    url: "https://playgroundai.com",
    icon: "🏗️",
    featured: false
  },
  {
    id: "dream-studio",
    name: "DreamStudio",
    description: "Stability AI의 공식 Stable Diffusion 웹 인터페이스입니다.",
    tags: ["Stable Diffusion", "웹인터페이스", "고급설정", "전문가용"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand"],
    price: "paid",
    url: "https://dreamstudio.ai",
    icon: "💭",
    featured: false
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    description: "Canva의 AI 기능으로 디자인 작업을 자동화하고 이미지를 생성할 수 있습니다.",
    tags: ["디자인통합", "템플릿", "자동화", "브랜딩"],
    category: "이미지생성",
    function: ["image", "design"],
    purpose: ["business", "content", "brand"],
    price: "freemium",
    url: "https://canva.com",
    icon: "🎨",
    featured: true
  },
  {
    id: "artbreeder",
    name: "Artbreeder",
    description: "AI를 사용해 이미지를 혼합하고 진화시켜 새로운 아트워크를 만드는 플랫폼입니다.",
    tags: ["이미지혼합", "진화", "창의적", "협업"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content"],
    price: "freemium",
    url: "https://artbreeder.com",
    icon: "🧬",
    featured: false
  },
  {
    id: "nightcafe",
    name: "NightCafe",
    description: "다양한 AI 알고리즘을 사용해 예술적인 이미지를 생성하는 커뮤니티 플랫폼입니다.",
    tags: ["다양한알고리즘", "커뮤니티", "예술적", "공유"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content"],
    price: "freemium",
    url: "https://nightcafe.studio",
    icon: "🌙",
    featured: false
  },
  {
    id: "getimg-ai",
    name: "GetImg.AI",
    description: "빠른 속도로 고품질 이미지를 생성하고 편집할 수 있는 AI 도구입니다.",
    tags: ["빠른속도", "고품질", "편집", "API제공"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand", "developer"],
    price: "freemium",
    url: "https://getimg.ai",
    icon: "⚡",
    featured: false
  },
  {
    id: "ideogram",
    name: "Ideogram",
    description: "텍스트가 포함된 이미지 생성에 특화된 AI 도구입니다.",
    tags: ["텍스트포함", "로고", "포스터", "타이포그래피"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["brand", "content"],
    price: "freemium",
    url: "https://ideogram.ai",
    icon: "💡",
    featured: false
  },
  {
    id: "clipdrop",
    name: "ClipDrop",
    description: "실시간 객체 제거, 배경 변경 등 다양한 AI 이미지 편집 기능을 제공합니다.",
    tags: ["객체제거", "배경변경", "실시간", "편집"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand"],
    price: "freemium",
    url: "https://clipdrop.co",
    icon: "✂️",
    featured: false
  },
  {
    id: "starryai",
    name: "StarryAI",
    description: "모바일 친화적인 AI 아트 생성 앱으로 다양한 스타일의 이미지를 만들 수 있습니다.",
    tags: ["모바일", "다양한스타일", "앱", "소셜"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content"],
    price: "freemium",
    url: "https://starryai.com",
    icon: "⭐",
    featured: false
  },
  {
    id: "photosonic",
    name: "Photosonic",
    description: "Writesonic의 AI 이미지 생성 도구로 현실적인 사진과 일러스트를 생성합니다.",
    tags: ["현실적", "사진", "일러스트", "다목적"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand"],
    price: "freemium",
    url: "https://photosonic.writesonic.com",
    icon: "📸",
    featured: false
  },
  {
    id: "bluewillow",
    name: "BlueWillow",
    description: "무료로 사용할 수 있는 디스코드 기반 AI 이미지 생성 도구입니다.",
    tags: ["무료", "디스코드", "접근성", "커뮤니티"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content"],
    price: "free",
    url: "https://bluewillow.ai",
    icon: "🌸",
    featured: false
  },

  // 영상 제작 AI (12개)
  {
    id: "runway-ml",
    name: "Runway ML",
    description: "AI 기반 영상 편집 및 생성 플랫폼으로 Gen-2 모델을 통해 텍스트에서 영상을 생성합니다.",
    tags: ["영상생성", "영상편집", "Gen-2", "전문적"],
    category: "영상생성",
    function: ["video"],
    purpose: ["content"],
    price: "paid",
    url: "https://runwayml.com",
    icon: "🎬",
    featured: true
  },
  {
    id: "synthesia",
    name: "Synthesia",
    description: "AI 아바타를 활용한 영상 제작 플랫폼으로 다국어 프레젠테이션과 교육 영상을 쉽게 만들 수 있습니다.",
    tags: ["AI아바타", "다국어", "교육영상", "프레젠테이션"],
    category: "영상생성",
    function: ["video"],
    purpose: ["business", "content"],
    price: "paid",
    url: "https://synthesia.io",
    icon: "👤",
    featured: true
  },
  {
    id: "pictory",
    name: "Pictory",
    description: "텍스트나 스크립트를 바탕으로 자동으로 영상을 생성하는 AI 도구입니다.",
    tags: ["텍스트변환", "자동영상", "스크립트", "마케팅"],
    category: "영상생성",
    function: ["video"],
    purpose: ["content", "business"],
    price: "freemium",
    url: "https://pictory.ai",
    icon: "📹",
    featured: false
  },
  {
    id: "lumen5",
    name: "Lumen5",
    description: "블로그 포스트나 텍스트를 소셜미디어용 영상으로 변환하는 AI 도구입니다.",
    tags: ["소셜미디어", "블로그변환", "템플릿", "브랜딩"],
    category: "영상생성",
    function: ["video"],
    purpose: ["content", "business"],
    price: "freemium",
    url: "https://lumen5.com",
    icon: "💫",
    featured: false
  },
  {
    id: "invideo",
    name: "InVideo",
    description: "AI 기반 영상 제작 도구로 템플릿과 자동화 기능을 제공합니다.",
    tags: ["템플릿", "자동화", "소셜미디어", "마케팅"],
    category: "영상생성",
    function: ["video"],
    purpose: ["content", "business"],
    price: "freemium",
    url: "https://invideo.io",
    icon: "🎥",
    featured: false
  },
  {
    id: "descript",
    name: "Descript",
    description: "텍스트 편집으로 오디오와 영상을 편집할 수 있는 혁신적인 도구입니다.",
    tags: ["텍스트편집", "오디오편집", "전사", "팟캐스트"],
    category: "영상생성",
    function: ["video"],
    purpose: ["content", "business"],
    price: "freemium",
    url: "https://descript.com",
    icon: "📝",
    featured: true
  },
  {
    id: "fliki",
    name: "Fliki",
    description: "텍스트를 음성과 영상으로 변환하는 AI 도구로 다양한 언어를 지원합니다.",
    tags: ["텍스트변환", "음성", "다국어", "교육"],
    category: "영상생성",
    function: ["video", "voice"],
    purpose: ["content", "business"],
    price: "freemium",
    url: "https://fliki.ai",
    icon: "🗣️",
    featured: false
  },
  {
    id: "steve-ai",
    name: "Steve.AI",
    description: "애니메이션과 라이브액션 영상을 모두 만들 수 있는 AI 영상 제작 도구입니다.",
    tags: ["애니메이션", "라이브액션", "스토리보드", "캐릭터"],
    category: "영상생성",
    function: ["video"],
    purpose: ["content", "business"],
    price: "freemium",
    url: "https://steve.ai",
    icon: "🎭",
    featured: false
  },
  {
    id: "heygen",
    name: "HeyGen",
    description: "AI 아바타와 음성을 사용해 개인화된 영상을 대량으로 생성할 수 있습니다.",
    tags: ["개인화", "대량생성", "아바타", "음성클로닝"],
    category: "영상생성",
    function: ["video"],
    purpose: ["business", "content"],
    price: "paid",
    url: "https://heygen.com",
    icon: "🤖",
    featured: false
  },
  {
    id: "kapwing",
    name: "Kapwing",
    description: "AI 기능이 통합된 온라인 영상 편집 플랫폼으로 협업 기능을 제공합니다.",
    tags: ["온라인편집", "협업", "자막", "밈제작"],
    category: "영상생성",
    function: ["video"],
    purpose: ["content"],
    price: "freemium",
    url: "https://kapwing.com",
    icon: "✂️",
    featured: false
  },
  {
    id: "wondershare-filmora",
    name: "Filmora",
    description: "AI 기능이 강화된 영상 편집 소프트웨어로 자동 편집과 효과를 제공합니다.",
    tags: ["영상편집", "자동효과", "소프트웨어", "템플릿"],
    category: "영상생성",
    function: ["video"],
    purpose: ["content"],
    price: "paid",
    url: "https://filmora.wondershare.com",
    icon: "🎞️",
    featured: false
  },
  {
    id: "vidiq",
    name: "VidIQ",
    description: "YouTube 최적화를 위한 AI 도구로 썸네일, 제목, 태그를 추천합니다.",
    tags: ["YouTube최적화", "썸네일", "SEO", "분석"],
    category: "영상생성",
    function: ["video"],
    purpose: ["content", "business"],
    price: "freemium",
    url: "https://vidiq.com",
    icon: "📈",
    featured: false
  },

  // 음성/음악 생성 AI (10개)
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "최첨단 AI 음성 합성 기술로 자연스럽고 감정이 담긴 음성을 생성하고 복제할 수 있습니다.",
    tags: ["음성합성", "음성복제", "감정표현", "다국어"],
    category: "음성생성",
    function: ["voice"],
    purpose: ["content", "business"],
    price: "freemium",
    url: "https://elevenlabs.io",
    icon: "🎤",
    featured: true
  },
  {
    id: "murf",
    name: "Murf",
    description: "전문적인 보이스오버 제작을 위한 AI 음성 생성 도구로 다양한 언어와 억양을 지원합니다.",
    tags: ["보이스오버", "전문음성", "다국어", "스튜디오품질"],
    category: "음성생성",
    function: ["voice"],
    purpose: ["content", "business"],
    price: "paid",
    url: "https://murf.ai",
    icon: "🎙️",
    featured: false
  },
  {
    id: "suno",
    name: "Suno",
    description: "텍스트 프롬프트로 완전한 음악을 생성하는 AI 도구로 가사와 멜로디를 모두 만들어냅니다.",
    tags: ["음악생성", "가사작성", "멜로디", "완전한곡"],
    category: "음악생성",
    function: ["voice"],
    purpose: ["content"],
    price: "freemium",
    url: "https://suno.com",
    icon: "🎵",
    featured: true
  },
  {
    id: "udio",
    name: "Udio",
    description: "AI로 음악을 생성하는 플랫폼으로 다양한 장르와 스타일의 음악을 만들 수 있습니다.",
    tags: ["음악생성", "다양한장르", "고품질", "창작"],
    category: "음악생성",
    function: ["voice"],
    purpose: ["content"],
    price: "freemium",
    url: "https://udio.com",
    icon: "🎶",
    featured: true
  },
  {
    id: "speechify",
    name: "Speechify",
    description: "텍스트를 자연스러운 음성으로 변환하는 TTS 도구로 학습과 접근성을 지원합니다.",
    tags: ["TTS", "학습지원", "접근성", "자연스러운음성"],
    category: "음성생성",
    function: ["voice"],
    purpose: ["study", "business"],
    price: "freemium",
    url: "https://speechify.com",
    icon: "📖",
    featured: false
  },
  {
    id: "resemble-ai",
    name: "Resemble AI",
    description: "실시간 음성 합성과 변조가 가능한 AI 음성 도구입니다.",
    tags: ["실시간합성", "음성변조", "API", "개발자친화적"],
    category: "음성생성",
    function: ["voice"],
    purpose: ["developer", "business"],
    price: "paid",
    url: "https://resemble.ai",
    icon: "🔊",
    featured: false
  },
  {
    id: "wellsaid",
    name: "WellSaid Labs",
    description: "기업용 AI 음성 생성 플랫폼으로 전문적인 나레이션을 제공합니다.",
    tags: ["기업용", "전문나레이션", "브랜드음성", "고품질"],
    category: "음성생성",
    function: ["voice"],
    purpose: ["business"],
    price: "paid",
    url: "https://wellsaidlabs.com",
    icon: "🏢",
    featured: false
  },
  {
    id: "amper-music",
    name: "AIVA",
    description: "인공지능 작곡가로 클래식부터 현대음악까지 다양한 스타일의 음악을 작곡합니다.",
    tags: ["AI작곡", "클래식", "영화음악", "저작권"],
    category: "음악생성",
    function: ["voice"],
    purpose: ["content"],
    price: "freemium",
    url: "https://aiva.ai",
    icon: "🎼",
    featured: false
  },
  {
    id: "soundraw",
    name: "Soundraw",
    description: "저작권 걱정 없는 AI 음악 생성 플랫폼으로 커스터마이징이 가능합니다.",
    tags: ["저작권프리", "커스터마이징", "루프", "BGM"],
    category: "음악생성",
    function: ["voice"],
    purpose: ["content", "business"],
    price: "paid",
    url: "https://soundraw.io",
    icon: "🎚️",
    featured: false
  },
  {
    id: "boomy",
    name: "Boomy",
    description: "몇 초 만에 음악을 생성하고 스트리밍 플랫폼에 발매할 수 있는 AI 도구입니다.",
    tags: ["빠른생성", "스트리밍발매", "수익화", "소셜"],
    category: "음악생성",
    function: ["voice"],
    purpose: ["content"],
    price: "freemium",
    url: "https://boomy.com",
    icon: "💥",
    featured: false
  },

  // 개발 도구 AI (12개)
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI 기반 코드 자동완성 도구로 개발자의 코딩 생산성을 크게 향상시켜줍니다.",
    tags: ["코드자동완성", "생산성", "VS Code", "다양한언어"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer"],
    price: "paid",
    url: "https://github.com/features/copilot",
    icon: "💻",
    featured: true
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI가 내장된 코드 에디터로 자연어로 코드를 작성하고 편집할 수 있습니다.",
    tags: ["AI에디터", "자연어코딩", "실시간협업", "VSCode호환"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer"],
    price: "freemium",
    url: "https://cursor.sh",
    icon: "⌨️",
    featured: true
  },
  {
    id: "replit-ghostwriter",
    name: "Replit Ghostwriter",
    description: "온라인 개발 환경에서 AI 코딩 어시스턴트를 제공하는 플랫폼입니다.",
    tags: ["온라인IDE", "코딩어시스턴트", "협업", "교육"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer", "study"],
    price: "freemium",
    url: "https://replit.com",
    icon: "🔧",
    featured: true
  },
  {
    id: "codeium",
    name: "Codeium",
    description: "무료 AI 코드 자동완성 도구로 다양한 IDE에서 사용할 수 있습니다.",
    tags: ["무료", "다양한IDE", "빠른속도", "개인정보보호"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer"],
    price: "free",
    url: "https://codeium.com",
    icon: "🚀",
    featured: false
  },
  {
    id: "tabnine",
    name: "Tabnine",
    description: "AI 기반 코드 자동완성과 예측을 제공하는 개발 도구입니다.",
    tags: ["코드예측", "팀협업", "보안", "온프레미스"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer"],
    price: "freemium",
    url: "https://tabnine.com",
    icon: "🎯",
    featured: false
  },
  {
    id: "amazon-codewhisperer",
    name: "Amazon CodeWhisperer",
    description: "AWS의 AI 코딩 도구로 보안 취약점 스캔과 코드 생성을 제공합니다.",
    tags: ["AWS통합", "보안스캔", "엔터프라이즈", "무료"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer"],
    price: "free",
    url: "https://aws.amazon.com/codewhisperer",
    icon: "☁️",
    featured: false
  },
  {
    id: "cody-sourcegraph",
    name: "Cody",
    description: "코드베이스를 이해하는 AI 어시스턴트로 Sourcegraph에서 개발했습니다.",
    tags: ["코드베이스이해", "컨텍스트", "검색", "리팩토링"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer"],
    price: "freemium",
    url: "https://sourcegraph.com/cody",
    icon: "🧭",
    featured: false
  },
  {
    id: "code-llama",
    name: "Code Llama",
    description: "Meta의 오픈소스 코드 생성 AI 모델로 로컬에서 실행할 수 있습니다.",
    tags: ["오픈소스", "로컬실행", "Meta", "다양한크기"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer"],
    price: "free",
    url: "https://code.meta.com/llama",
    icon: "🦙",
    featured: false
  },
  {
    id: "blackbox-ai",
    name: "Blackbox AI",
    description: "코드 검색과 자동완성을 제공하는 AI 개발 도구입니다.",
    tags: ["코드검색", "자동완성", "브라우저확장", "실시간"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer"],
    price: "freemium",
    url: "https://blackbox.ai",
    icon: "⬛",
    featured: false
  },
  {
    id: "aider",
    name: "Aider",
    description: "터미널에서 AI와 페어 프로그래밍을 할 수 있는 오픈소스 도구입니다.",
    tags: ["페어프로그래밍", "터미널", "오픈소스", "Git통합"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer"],
    price: "free",
    url: "https://aider.chat",
    icon: "👥",
    featured: false
  },
  {
    id: "continue",
    name: "Continue",
    description: "VS Code에서 사용할 수 있는 오픈소스 AI 코딩 어시스턴트입니다.",
    tags: ["VS Code", "오픈소스", "커스터마이징", "다양한모델"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer"],
    price: "free",
    url: "https://continue.dev",
    icon: "🔄",
    featured: false
  },
  {
    id: "phind",
    name: "Phind",
    description: "개발자를 위한 AI 검색 엔진으로 코딩 질문에 정확한 답변을 제공합니다.",
    tags: ["개발자검색", "코딩질문", "실시간정보", "예제코드"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer"],
    price: "freemium",
    url: "https://phind.com",
    icon: "🔍",
    featured: false
  },

  // 디자인/제작 AI (8개)
  {
    id: "figma-ai",
    name: "Figma AI",
    description: "Figma에서 제공하는 AI 기능으로 디자인 자동완성, 색상 추천, 레이아웃 생성을 지원합니다.",
    tags: ["디자인자동완성", "색상추천", "레이아웃", "Figma통합"],
    category: "디자인",
    function: ["design"],
    purpose: ["brand", "business"],
    price: "free",
    url: "https://figma.com",
    icon: "🎨",
    featured: true
  },
  {
    id: "framer-ai",
    name: "Framer AI",
    description: "AI를 활용한 웹사이트 빌더로 텍스트 입력만으로 완전한 웹사이트를 생성합니다.",
    tags: ["웹사이트빌더", "텍스트입력", "반응형", "노코드"],
    category: "디자인",
    function: ["design"],
    purpose: ["business", "brand"],
    price: "freemium",
    url: "https://framer.com",
    icon: "🌐",
    featured: true
  },
  {
    id: "looka",
    name: "Looka",
    description: "AI를 활용한 로고 디자인 도구로 브랜드 아이덴티티를 쉽게 만들 수 있습니다.",
    tags: ["로고디자인", "브랜딩", "아이덴티티", "명함"],
    category: "디자인",
    function: ["design"],
    purpose: ["brand", "business"],
    price: "paid",
    url: "https://looka.com",
    icon: "🏷️",
    featured: false
  },
  {
    id: "brandmark",
    name: "Brandmark",
    description: "AI 기반 로고 및 브랜드 디자인 도구로 즉시 사용 가능한 브랜드 자산을 생성합니다.",
    tags: ["브랜드디자인", "로고", "즉시생성", "벡터"],
    category: "디자인",
    function: ["design"],
    purpose: ["brand", "business"],
    price: "paid",
    url: "https://brandmark.io",
    icon: "🎯",
    featured: false
  },
  {
    id: "uizard",
    name: "Uizard",
    description: "스케치나 와이어프레임을 디지털 디자인으로 변환하는 AI 도구입니다.",
    tags: ["스케치변환", "와이어프레임", "UI디자인", "프로토타입"],
    category: "디자인",
    function: ["design"],
    purpose: ["business", "developer"],
    price: "freemium",
    url: "https://uizard.io",
    icon: "📱",
    featured: false
  },
  {
    id: "khroma",
    name: "Khroma",
    description: "AI를 사용해 개인화된 색상 팔레트를 생성하는 디자인 도구입니다.",
    tags: ["색상팔레트", "개인화", "디자이너용", "조화"],
    category: "디자인",
    function: ["design"],
    purpose: ["brand", "content"],
    price: "free",
    url: "https://khroma.co",
    icon: "🌈",
    featured: false
  },
  {
    id: "remove-bg",
    name: "Remove.bg",
    description: "AI를 사용해 이미지에서 배경을 자동으로 제거하는 도구입니다.",
    tags: ["배경제거", "자동화", "빠른처리", "API"],
    category: "디자인",
    function: ["design"],
    purpose: ["content", "brand"],
    price: "freemium",
    url: "https://remove.bg",
    icon: "🖼️",
    featured: false
  },
  {
    id: "autodraw",
    name: "AutoDraw",
    description: "Google의 AI 드로잉 도구로 낙서를 인식해서 전문적인 일러스트로 변환합니다.",
    tags: ["드로잉", "낙서인식", "일러스트", "무료"],
    category: "디자인",
    function: ["design"],
    purpose: ["content"],
    price: "free",
    url: "https://autodraw.com",
    icon: "✏️",
    featured: false
  },

  // 업무자동화 AI (8개)
  {
    id: "zapier-ai",
    name: "Zapier AI",
    description: "다양한 앱과 서비스를 연결하여 업무를 자동화하는 AI 도구입니다.",
    tags: ["업무자동화", "앱연동", "워크플로우", "통합"],
    category: "업무자동화",
    function: ["automation"],
    purpose: ["business"],
    price: "freemium",
    url: "https://zapier.com",
    icon: "⚡",
    featured: true
  },
  {
    id: "otter-ai",
    name: "Otter.ai",
    description: "AI 기반 회의 녹음 및 전사 서비스로 자동으로 회의록을 생성합니다.",
    tags: ["회의전사", "음성인식", "회의록", "실시간"],
    category: "업무자동화",
    function: ["automation"],
    purpose: ["business"],
    price: "freemium",
    url: "https://otter.ai",
    icon: "📝",
    featured: true
  },
  {
    id: "reclaim-ai",
    name: "Reclaim.AI",
    description: "AI 기반 스케줄 최적화 도구로 업무 시간을 효율적으로 관리합니다.",
    tags: ["스케줄최적화", "시간관리", "자동예약", "생산성"],
    category: "업무자동화",
    function: ["automation"],
    purpose: ["business"],
    price: "freemium",
    url: "https://reclaim.ai",
    icon: "📅",
    featured: false
  },
  {
    id: "fireflies-ai",
    name: "Fireflies.ai",
    description: "회의를 자동으로 녹음, 전사, 분석하는 AI 미팅 어시스턴트입니다.",
    tags: ["미팅어시스턴트", "자동분석", "CRM연동", "검색"],
    category: "업무자동화",
    function: ["automation"],
    purpose: ["business"],
    price: "freemium",
    url: "https://fireflies.ai",
    icon: "🔥",
    featured: false
  },
  {
    id: "monday-ai",
    name: "monday.com AI",
    description: "프로젝트 관리 플랫폼에 통합된 AI로 업무 자동화와 인사이트를 제공합니다.",
    tags: ["프로젝트관리", "업무자동화", "인사이트", "팀협업"],
    category: "업무자동화",
    function: ["automation"],
    purpose: ["business"],
    price: "paid",
    url: "https://monday.com",
    icon: "📊",
    featured: false
  },
  {
    id: "clickup-ai",
    name: "ClickUp AI",
    description: "올인원 생산성 플랫폼의 AI 기능으로 문서 작성과 업무 관리를 자동화합니다.",
    tags: ["생산성", "문서자동화", "업무관리", "올인원"],
    category: "업무자동화",
    function: ["automation"],
    purpose: ["business"],
    price: "freemium",
    url: "https://clickup.com",
    icon: "✅",
    featured: false
  },
  {
    id: "make-integromat",
    name: "Make (Integromat)",
    description: "시각적 인터페이스로 복잡한 자동화 워크플로우를 구축할 수 있는 플랫폼입니다.",
    tags: ["시각적워크플로우", "복잡한자동화", "API연동", "노코드"],
    category: "업무자동화",
    function: ["automation"],
    purpose: ["business"],
    price: "freemium",
    url: "https://make.com",
    icon: "🔗",
    featured: false
  },
  {
    id: "bardeen",
    name: "Bardeen",
    description: "브라우저에서 작동하는 AI 자동화 도구로 반복 작업을 자동화합니다.",
    tags: ["브라우저자동화", "반복작업", "스크래핑", "CRM"],
    category: "업무자동화",
    function: ["automation"],
    purpose: ["business"],
    price: "freemium",
    url: "https://bardeen.ai",
    icon: "🤖",
    featured: false
  },

  // 데이터분석 AI (6개)
  {
    id: "julius-ai",
    name: "Julius AI",
    description: "자연어로 데이터를 분석하고 차트를 생성할 수 있는 AI 데이터 분석 도구입니다.",
    tags: ["자연어분석", "차트생성", "데이터시각화", "쉬운사용"],
    category: "데이터분석",
    function: ["data"],
    purpose: ["business", "study"],
    price: "freemium",
    url: "https://julius.ai",
    icon: "📈",
    featured: true
  },
  {
    id: "akkio",
    name: "Akkio",
    description: "노코드 기계학습 플랫폼으로 예측 분석을 쉽게 구현할 수 있습니다.",
    tags: ["노코드ML", "예측분석", "쉬운구현", "비즈니스용"],
    category: "데이터분석",
    function: ["data"],
    purpose: ["business"],
    price: "paid",
    url: "https://akkio.com",
    icon: "🔮",
    featured: false
  },
  {
    id: "obviously-ai",
    name: "Obviously AI",
    description: "코딩 없이 기계학습 모델을 구축하고 배포할 수 있는 플랫폼입니다.",
    tags: ["노코드ML", "모델배포", "예측", "자동화"],
    category: "데이터분석",
    function: ["data"],
    purpose: ["business"],
    price: "paid",
    url: "https://obviously.ai",
    icon: "🎯",
    featured: false
  },
  {
    id: "tableau-ai",
    name: "Tableau AI",
    description: "AI가 데이터를 자동으로 분석하고 인사이트를 제공하는 데이터 시각화 도구입니다.",
    tags: ["데이터시각화", "자동인사이트", "대시보드", "엔터프라이즈"],
    category: "데이터분석",
    function: ["data"],
    purpose: ["business"],
    price: "paid",
    url: "https://tableau.com",
    icon: "📊",
    featured: false
  },
  {
    id: "polymer",
    name: "Polymer",
    description: "스프레드시트를 AI 기반 대시보드로 변환하는 도구입니다.",
    tags: ["스프레드시트변환", "대시보드", "시각화", "간단함"],
    category: "데이터분석",
    function: ["data"],
    purpose: ["business"],
    price: "freemium",
    url: "https://polymer.co",
    icon: "📋",
    featured: false
  },
  {
    id: "dataiku",
    name: "Dataiku",
    description: "전사적 AI 및 기계학습 플랫폼으로 데이터 사이언스 워크플로우를 지원합니다.",
    tags: ["전사적AI", "데이터사이언스", "MLOps", "협업"],
    category: "데이터분석",
    function: ["data"],
    purpose: ["business"],
    price: "paid",
    url: "https://dataiku.com",
    icon: "🏭",
    featured: false
  },

  // 번역/언어 AI (6개)
  {
    id: "deepl",
    name: "DeepL",
    description: "AI 기반 고품질 번역 서비스로 자연스럽고 정확한 다국어 번역을 제공합니다.",
    tags: ["고품질번역", "자연스러움", "정확성", "유럽언어"],
    category: "번역",
    function: ["translation"],
    purpose: ["business", "study"],
    price: "freemium",
    url: "https://deepl.com",
    icon: "🌐",
    featured: true
  },
  {
    id: "google-translate",
    name: "Google Translate",
    description: "구글의 AI 번역 서비스로 100개 이상의 언어를 지원하며 카메라 번역도 가능합니다.",
    tags: ["100+언어", "카메라번역", "무료", "실시간"],
    category: "번역",
    function: ["translation"],
    purpose: ["study", "business"],
    price: "free",
    url: "https://translate.google.com",
    icon: "🗣️",
    featured: true
  },
  {
    id: "reverso",
    name: "Reverso",
    description: "문맥을 고려한 번역과 언어 학습 기능을 제공하는 AI 번역 도구입니다.",
    tags: ["문맥번역", "언어학습", "예문", "발음"],
    category: "번역",
    function: ["translation"],
    purpose: ["study"],
    price: "freemium",
    url: "https://reverso.net",
    icon: "🔄",
    featured: false
  },
  {
    id: "papago",
    name: "Papago",
    description: "네이버의 AI 번역 서비스로 한국어와 아시아 언어에 특화되어 있습니다.",
    tags: ["한국어특화", "아시아언어", "이미지번역", "웹페이지번역"],
    category: "번역",
    function: ["translation"],
    purpose: ["study", "business"],
    price: "free",
    url: "https://papago.naver.com",
    icon: "🦜",
    featured: false
  },
  {
    id: "linguee",
    name: "Linguee",
    description: "실제 번역 예시를 제공하는 사전과 번역 도구입니다.",
    tags: ["번역예시", "사전", "전문용어", "신뢰성"],
    category: "번역",
    function: ["translation"],
    purpose: ["study", "business"],
    price: "free",
    url: "https://linguee.com",
    icon: "📖",
    featured: false
  },
  {
    id: "itranslate",
    name: "iTranslate",
    description: "음성 번역과 오프라인 번역을 지원하는 모바일 중심의 번역 앱입니다.",
    tags: ["음성번역", "오프라인", "모바일", "여행"],
    category: "번역",
    function: ["translation"],
    purpose: ["study"],
    price: "freemium",
    url: "https://itranslate.com",
    icon: "📱",
    featured: false
  },

  // 교육/학습 AI (6개)
  {
    id: "khan-academy-ai",
    name: "Khan Academy AI",
    description: "개인화된 학습을 제공하는 AI 튜터 Khanmigo로 수학, 과학 등을 학습할 수 있습니다.",
    tags: ["개인화학습", "AI튜터", "수학과학", "무료교육"],
    category: "교육",
    function: ["education"],
    purpose: ["study"],
    price: "free",
    url: "https://khanacademy.org",
    icon: "🎓",
    featured: true
  },
  {
    id: "quizlet",
    name: "Quizlet",
    description: "AI가 학습 내용을 분석하여 맞춤형 퀴즈와 플래시카드를 생성하는 학습 도구입니다.",
    tags: ["퀴즈생성", "플래시카드", "맞춤학습", "암기"],
    category: "교육",
    function: ["education"],
    purpose: ["study"],
    price: "freemium",
    url: "https://quizlet.com",
    icon: "📚",
    featured: false
  },
  {
    id: "duolingo",
    name: "Duolingo",
    description: "AI를 활용한 언어 학습 앱으로 개인화된 학습 경험을 제공합니다.",
    tags: ["언어학습", "개인화", "게임화", "무료"],
    category: "교육",
    function: ["education"],
    purpose: ["study"],
    price: "freemium",
    url: "https://duolingo.com",
    icon: "🦉",
    featured: true
  },
  {
    id: "socratic",
    name: "Socratic by Google",
    description: "학생들의 숙제 질문을 AI로 분석하여 단계별 해설을 제공하는 학습 도구입니다.",
    tags: ["숙제도움", "단계별해설", "과목별", "학생용"],
    category: "교육",
    function: ["education"],
    purpose: ["study"],
    price: "free",
    url: "https://socratic.org",
    icon: "🤔",
    featured: false
  },
  {
    id: "coursera-ai",
    name: "Coursera AI",
    description: "AI를 활용하여 개인화된 학습 경로와 추천을 제공하는 온라인 교육 플랫폼입니다.",
    tags: ["온라인강의", "개인화경로", "대학과정", "인증"],
    category: "교육",
    function: ["education"],
    purpose: ["study"],
    price: "freemium",
    url: "https://coursera.org",
    icon: "🏫",
    featured: false
  },
  {
    id: "elsa-speak",
    name: "ELSA Speak",
    description: "AI 기반 영어 발음 교정 앱으로 실시간 피드백을 제공합니다.",
    tags: ["발음교정", "영어학습", "실시간피드백", "AI튜터"],
    category: "교육",
    function: ["education"],
    purpose: ["study"],
    price: "freemium",
    url: "https://elsaspeak.com",
    icon: "🗣️",
    featured: false
  },

  // 프레젠테이션 AI (4개)
  {
    id: "gamma",
    name: "Gamma",
    description: "AI가 자동으로 디자인하는 프레젠테이션 도구로 텍스트만 입력하면 전문적인 슬라이드를 생성합니다.",
    tags: ["자동디자인", "AI생성", "전문적", "웹기반"],
    category: "프레젠테이션",
    function: ["design"],
    purpose: ["business", "content"],
    price: "freemium",
    url: "https://gamma.app",
    icon: "📊",
    featured: true
  },
  {
    id: "beautiful-ai",
    name: "Beautiful.AI",
    description: "AI 기반 프레젠테이션 디자인 도구로 전문적인 슬라이드를 빠르게 만들 수 있습니다.",
    tags: ["전문디자인", "빠른제작", "템플릿", "팀협업"],
    category: "프레젠테이션",
    function: ["design"],
    purpose: ["business"],
    price: "paid",
    url: "https://beautiful.ai",
    icon: "✨",
    featured: false
  },
  {
    id: "tome",
    name: "Tome",
    description: "AI로 스토리텔링 프레젠테이션을 생성하는 도구로 멀티미디어 콘텐츠를 자동으로 삽입합니다.",
    tags: ["스토리텔링", "멀티미디어", "자동삽입", "인터랙티브"],
    category: "프레젠테이션",
    function: ["design"],
    purpose: ["business", "content"],
    price: "freemium",
    url: "https://tome.app",
    icon: "📖",
    featured: false
  },
  {
    id: "slides-ai",
    name: "SlidesAI",
    description: "Google Slides에서 작동하는 AI 애드온으로 텍스트를 프레젠테이션으로 변환합니다.",
    tags: ["Google Slides", "애드온", "텍스트변환", "간편함"],
    category: "프레젠테이션",
    function: ["design"],
    purpose: ["business", "study"],
    price: "freemium",
    url: "https://slidesai.io",
    icon: "🎯",
    featured: false
  }
];

// 필터 옵션 정의
const filterOptions = {
  function: {
    text: { label: "텍스트생성", tooltip: "글쓰기, 요약, 이메일, 문서 작성 등에 특화된 도구예요." },
    image: { label: "이미지생성", tooltip: "일러스트, 썸네일, 로고 등을 만드는 이미지 생성 도구예요." },
    video: { label: "영상제작", tooltip: "영상 자동 생성, 편집, 자막 삽입 등에 활용돼요." },
    voice: { label: "음성/음악생성", tooltip: "더빙, 보이스 클로닝부터 음악 작곡까지 음성과 관련된 다양한 생성 도구예요." },
    development: { label: "개발도구", tooltip: "코드 생성, 테스트 자동화 등 개발 업무에 도움을 줘요." },
    design: { label: "디자인/제작", tooltip: "로고, 3D 모델링, 프로토타입, 시각 자산 제작 도구예요." },
    automation: { label: "업무자동화", tooltip: "회의록, 이메일, 보고서 등 반복적인 작업을 자동으로 처리해줘요." },
    data: { label: "데이터분석", tooltip: "데이터를 정리·시각화하고 통계 기반으로 분석해줘요." },
    translation: { label: "번역/언어", tooltip: "자연스럽고 정확한 다국어 번역을 도와주는 도구예요." },
    education: { label: "교육/학습", tooltip: "질문에 답하거나 개념을 설명해주는 학습 보조 도구예요." }
  },
  purpose: {
    business: { label: "업무용", tooltip: "회사나 실무에서 사용할 수 있는 문서, 회의, 보고용 도구예요." },
    content: { label: "콘텐츠제작", tooltip: "영상, 블로그, 이미지 등 창작 콘텐츠를 만들 때 활용돼요." },
    study: { label: "학습/공부용", tooltip: "공부를 돕거나 요약, 문제 풀이 등에 활용할 수 있어요." },
    developer: { label: "개발자용", tooltip: "코드 작성, 테스트, 데이터 처리 등 개발에 필요한 도구예요." },
    brand: { label: "브랜드/디자인", tooltip: "로고, 썸네일, 컬러 등 시각 디자인에 특화된 도구예요." }
  },
  price: {
    free: { label: "무료", tooltip: "회원가입 없이 완전히 무료로 사용할 수 있어요." },
    freemium: { label: "부분무료", tooltip: "기본 기능은 무료, 고급 기능은 유료예요." },
    paid: { label: "유료", tooltip: "일정 금액을 결제해야 사용할 수 있어요." }
  }
};

// 데이터베이스 관리 클래스
class AIToolsManager {
  constructor(data = aiToolsDatabase) {
    this.tools = [...data];
  }

  // 카테고리별 툴 가져오기
  getToolsByCategory(category) {
    return this.tools.filter(tool => tool.category === category);
  }

  // 기능별 툴 가져오기
  getToolsByFunction(functionType) {
    return this.tools.filter(tool => tool.function.includes(functionType));
  }

  // 목적별 툴 가져오기
  getToolsByPurpose(purpose) {
    return this.tools.filter(tool => tool.purpose.includes(purpose));
  }

  // 가격별 툴 가져오기
  getToolsByPrice(priceType) {
    return this.tools.filter(tool => tool.price === priceType);
  }

  // 추천 툴 가져오기
  getFeaturedTools() {
    return this.tools.filter(tool => tool.featured);
  }

  // 검색 기능
  searchTools(query) {
    const searchTerm = query.toLowerCase();
    return this.tools.filter(tool => 
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      tool.category.toLowerCase().includes(searchTerm)
    );
  }

  // 복합 필터링
  filterTools(filters) {
    return this.tools.filter(tool => {
      const functionMatch = !filters.function || filters.function.some(f => tool.function.includes(f));
      const purposeMatch = !filters.purpose || filters.purpose.some(p => tool.purpose.includes(p));
      const priceMatch = !filters.price || tool.price === filters.price;
      
      return functionMatch && purposeMatch && priceMatch;
    });
  }

  // 통계 정보
  getStats() {
    const stats = {
      total: this.tools.length,
      byCategory: {},
      byFunction: {},
      byPurpose: {},
      byPrice: {},
      featured: this.tools.filter(tool => tool.featured).length
    };

    this.tools.forEach(tool => {
      // 카테고리별 통계
      stats.byCategory[tool.category] = (stats.byCategory[tool.category] || 0) + 1;
      
      // 기능별 통계
      tool.function.forEach(func => {
        stats.byFunction[func] = (stats.byFunction[func] || 0) + 1;
      });
      
      // 목적별 통계
      tool.purpose.forEach(purpose => {
        stats.byPurpose[purpose] = (stats.byPurpose[purpose] || 0) + 1;
      });
      
      // 가격별 통계
      stats.byPrice[tool.price] = (stats.byPrice[tool.price] || 0) + 1;
    });

    return stats;
  }
}

// 전역 변수
const toolsManager = new AIToolsManager();

// 현재 데이터베이스 통계 출력
console.log('AI 툴 데이터베이스 통계:', toolsManager.getStats());