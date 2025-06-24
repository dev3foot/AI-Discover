// 확장된 AI 툴 데이터베이스
const extendedAiToolsData = [
  // 기존 툴들
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI에서 개발한 대화형 AI로 질문답변, 번역, 요약 등 다양한 텍스트 작업을 수행합니다.",
    tags: ["질문답변", "번역", "요약"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "study", "content"],
    price: "freemium",
    url: "https://chat.openai.com",
    icon: "🤖",
    featured: true
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic에서 개발한 안전하고 유용한 AI 어시스턴트로 대화, 분석, 창작 작업에 특화되어 있습니다.",
    tags: ["대화", "분석", "창작"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "study", "developer"],
    price: "freemium",
    url: "https://claude.ai",
    icon: "🤖",
    featured: true
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "텍스트 프롬프트를 통해 고품질의 아트워크와 일러스트를 생성하는 AI 이미지 생성 도구입니다.",
    tags: ["이미지생성", "아트워크", "일러스트"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand"],
    price: "paid",
    url: "https://midjourney.com",
    icon: "🎨",
    featured: true
  },
  
  // 텍스트 생성 AI들
  {
    id: "jasper",
    name: "Jasper",
    description: "마케팅 콘텐츠 제작에 특화된 AI 라이팅 도구로 블로그, 광고 카피, 소셜미디어 포스트를 생성합니다.",
    tags: ["마케팅", "카피라이팅", "콘텐츠"],
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
    tags: ["카피라이팅", "이메일", "광고문구"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "content"],
    price: "freemium",
    url: "https://copy.ai",
    icon: "📝",
    featured: false
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description: "AI 기반 문법 검사 및 글쓰기 개선 도구로 영문 작성의 품질을 높여줍니다.",
    tags: ["문법검사", "교정", "영문작성"],
    category: "텍스트생성",
    function: ["text"],
    purpose: ["business", "study"],
    price: "freemium",
    url: "https://grammarly.com",
    icon: "✅",
    featured: false
  },

  // 이미지 생성 AI들
  {
    id: "dall-e",
    name: "DALL-E 3",
    description: "OpenAI의 최신 이미지 생성 AI로 텍스트 설명을 바탕으로 창의적이고 독창적인 이미지를 생성합니다.",
    tags: ["이미지생성", "창의적", "독창적"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand"],
    price: "freemium",
    url: "https://openai.com/dall-e-3",
    icon: "🎨",
    featured: true
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "오픈소스 이미지 생성 AI로 다양한 스타일과 용도의 이미지를 무료로 생성할 수 있습니다.",
    tags: ["오픈소스", "무료생성", "다양한스타일"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand"],
    price: "free",
    url: "https://stability.ai",
    icon: "🖼️",
    featured: false
  },
  {
    id: "leonardo-ai",
    name: "Leonardo AI",
    description: "게임과 콘텐츠 제작에 특화된 AI 이미지 생성 도구로 일관된 캐릭터와 아셋을 생성합니다.",
    tags: ["게임아셋", "캐릭터", "일관성"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand"],
    price: "freemium",
    url: "https://leonardo.ai",
    icon: "🎮",
    featured: false
  },

  // 영상 제작 AI들
  {
    id: "runway-ml",
    name: "Runway ML",
    description: "AI 기반 영상 편집 및 생성 플랫폼으로 텍스트에서 영상을 만들고 고급 편집 기능을 제공합니다.",
    tags: ["영상생성", "영상편집", "고급기능"],
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
    tags: ["AI아바타", "다국어", "교육영상"],
    category: "영상생성",
    function: ["video"],
    purpose: ["business", "content"],
    price: "paid",
    url: "https://synthesia.io",
    icon: "👤",
    featured: false
  },
  {
    id: "pictory",
    name: "Pictory",
    description: "텍스트나 스크립트를 바탕으로 자동으로 영상을 생성하는 AI 도구입니다.",
    tags: ["자동영상", "스크립트", "텍스트변환"],
    category: "영상생성",
    function: ["video"],
    purpose: ["content", "business"],
    price: "freemium",
    url: "https://pictory.ai",
    icon: "📹",
    featured: false
  },

  // 음성/음악 생성 AI들
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "최첨단 AI 음성 합성 기술로 자연스럽고 감정이 담긴 음성을 생성하고 복제할 수 있습니다.",
    tags: ["음성합성", "음성복제", "감정표현"],
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
    tags: ["보이스오버", "다국어", "전문음성"],
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
    tags: ["음악생성", "가사작성", "멜로디"],
    category: "음악생성",
    function: ["voice"],
    purpose: ["content"],
    price: "freemium",
    url: "https://suno.com",
    icon: "🎵",
    featured: false
  },

  // 개발 도구 AI들
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI 기반 코드 자동완성 도구로 개발자의 코딩 생산성을 크게 향상시켜줍니다.",
    tags: ["코드생성", "자동완성", "개발지원"],
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
    tags: ["코드에디터", "자연어", "AI내장"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer"],
    price: "freemium",
    url: "https://cursor.sh",
    icon: "⌨️",
    featured: false
  },
  {
    id: "replit-ai",
    name: "Replit AI",
    description: "온라인 개발 환경에서 AI 코딩 어시스턴트를 제공하는 플랫폼입니다.",
    tags: ["온라인개발", "코딩어시스턴트", "협업"],
    category: "개발도구",
    function: ["development"],
    purpose: ["developer", "study"],
    price: "freemium",
    url: "https://replit.com",
    icon: "🔧",
    featured: false
  },

  // 디자인 AI들
  {
    id: "figma-ai",
    name: "Figma AI",
    description: "Figma에서 제공하는 AI 기능으로 디자인 자동완성, 색상 추천, 레이아웃 생성을 지원합니다.",
    tags: ["디자인", "색상추천", "레이아웃"],
    category: "디자인",
    function: ["design"],
    purpose: ["brand", "business"],
    price: "free",
    url: "https://figma.com",
    icon: "🎨",
    featured: true
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    description: "Canva의 AI 기능을 활용하여 자동으로 디자인을 생성하고 편집할 수 있습니다.",
    tags: ["자동디자인", "템플릿", "편집"],
    category: "디자인",
    function: ["design"],
    purpose: ["business", "content"],
    price: "freemium",
    url: "https://canva.com",
    icon: "🎨",
    featured: false
  },
  {
    id: "logoai",
    name: "Looka",
    description: "AI를 활용한 로고 디자인 도구로 브랜드 아이덴티티를 쉽게 만들 수 있습니다.",
    tags: ["로고디자인", "브랜딩", "아이덴티티"],
    category: "디자인",
    function: ["design"],
    purpose: ["brand", "business"],
    price: "paid",
    url: "https://looka.com",
    icon: "🏷️",
    featured: false
  },

  // 업무 자동화 AI들
  {
    id: "zapier-ai",
    name: "Zapier AI",
    description: "다양한 앱과 서비스를 연결하여 업무를 자동화하는 AI 도구입니다.",
    tags: ["업무자동화", "앱연동", "워크플로우"],
    category: "업무자동화",
    function: ["automation"],
    purpose: ["business"],
    price: "freemium",
    url: "https://zapier.com",
    icon: "⚡",
    featured: false
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "Notion 내에서 사용할 수 있는 AI 어시스턴트로 문서 작성, 요약, 아이디어 정리를 도와줍니다.",
    tags: ["문서작성", "요약", "정리"],
    category: "문서작성",
    function: ["text", "automation"],
    purpose: ["business", "study"],
    price: "freemium",
    url: "https://notion.so",
    icon: "📝",
    featured: true
  },
  {
    id: "otter-ai",
    name: "Otter.ai",
    description: "AI 기반 회의 녹음 및 전사 서비스로 자동으로 회의록을 생성합니다.",
    tags: ["회의록", "음성인식", "전사"],
    category: "업무자동화",
    function: ["automation"],
    purpose: ["business"],
    price: "freemium",
    url: "https://otter.ai",
    icon: "📝",
    featured: false
  },

  // 데이터 분석 AI들
  {
    id: "tableau-ai",
    name: "Tableau AI",
    description: "AI가 데이터를 자동으로 분석하고 인사이트를 제공하는 데이터 시각화 도구입니다.",
    tags: ["데이터시각화", "자동분석", "인사이트"],
    category: "데이터분석",
    function: ["data"],
    purpose: ["business"],
    price: "paid",
    url: "https://tableau.com",
    icon: "📊",
    featured: false
  },
  {
    id: "julius-ai",
    name: "Julius AI",
    description: "자연어로 데이터를 분석하고 차트를 생성할 수 있는 AI 데이터 분석 도구입니다.",
    tags: ["자연어분석", "차트생성", "데이터처리"],
    category: "데이터분석",
    function: ["data"],
    purpose: ["business", "study"],
    price: "freemium",
    url: "https://julius.ai",
    icon: "📈",
    featured: false
  },

  // 번역/언어 AI들
  {
    id: "deepl",
    name: "DeepL",
    description: "AI 기반 고품질 번역 서비스로 자연스럽고 정확한 다국어 번역을 제공합니다.",
    tags: ["번역", "다국어", "고품질"],
    category: "번역",
    function: ["translation"],
    purpose: ["business", "study"],
    price: "freemium",
    url: "https://deepl.com",
    icon: "🌐",
    featured: false
  },
  {
    id: "google-translate",
    name: "Google Translate",
    description: "구글의 AI 번역 서비스로 100개 이상의 언어를 지원하며 카메라 번역도 가능합니다.",
    tags: ["무료번역", "다언어", "카메라번역"],
    category: "번역",
    function: ["translation"],
    purpose: ["study", "business"],
    price: "free",
    url: "https://translate.google.com",
    icon: "🗣️",
    featured: false
  },

  // 교육/학습 AI들
  {
    id: "khan-academy-ai",
    name: "Khan Academy AI",
    description: "개인화된 학습을 제공하는 AI 튜터로 수학, 과학 등 다양한 과목을 학습할 수 있습니다.",
    tags: ["개인화학습", "AI튜터", "수학과학"],
    category: "교육",
    function: ["education"],
    purpose: ["study"],
    price: "free",
    url: "https://khanacademy.org",
    icon: "🎓",
    featured: false
  },
  {
    id: "quizlet-ai",
    name: "Quizlet",
    description: "AI가 학습 내용을 분석하여 맞춤형 퀴즈와 플래시카드를 생성하는 학습 도구입니다.",
    tags: ["퀴즈생성", "플래시카드", "맞춤학습"],
    category: "교육",
    function: ["education"],
    purpose: ["study"],
    price: "freemium",
    url: "https://quizlet.com",
    icon: "📚",
    featured: false
  },

  // 프레젠테이션 AI들
  {
    id: "gamma",
    name: "Gamma",
    description: "AI가 자동으로 디자인하는 프레젠테이션 도구로 텍스트만 입력하면 전문적인 슬라이드를 생성합니다.",
    tags: ["자동디자인", "슬라이드", "프레젠테이션"],
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
    tags: ["프레젠테이션", "자동디자인", "템플릿"],
    category: "프레젠테이션",
    function: ["design"],
    purpose: ["business"],
    price: "paid",
    url: "https://beautiful.ai",
    icon: "✨",
    featured: false
  }
];

// 데이터 관리 유틸리티 함수들
class AIToolsManager {
  constructor(data = extendedAiToolsData) {
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

  // 툴 추가
  addTool(toolData) {
    const newTool = {
      id: toolData.id || toolData.name.toLowerCase().replace(/\s+/g, '-'),
      ...toolData,
      featured: toolData.featured || false
    };
    this.tools.push(newTool);
    return newTool;
  }

  // 툴 업데이트
  updateTool(toolId, updatedData) {
    const toolIndex = this.tools.findIndex(tool => tool.id === toolId);
    if (toolIndex !== -1) {
      this.tools[toolIndex] = { ...this.tools[toolIndex], ...updatedData };
      return this.tools[toolIndex];
    }
    return null;
  }

  // 툴 삭제
  removeTool(toolId) {
    const toolIndex = this.tools.findIndex(tool => tool.id === toolId);
    if (toolIndex !== -1) {
      return this.tools.splice(toolIndex, 1)[0];
    }
    return null;
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

  // JSON으로 내보내기
  exportToJSON() {
    return JSON.stringify(this.tools, null, 2);
  }

  // JSON에서 가져오기
  importFromJSON(jsonData) {
    try {
      const importedData = JSON.parse(jsonData);
      this.tools = [...importedData];
      return true;
    } catch (error) {
      console.error('JSON 파싱 오류:', error);
      return false;
    }
  }
}

// 사용 예시
const toolsManager = new AIToolsManager();

// 현재 데이터베이스 통계
console.log('AI 툴 데이터베이스 통계:', toolsManager.getStats());

// 특정 카테고리 툴들 가져오기
console.log('이미지 생성 AI 툴들:', toolsManager.getToolsByFunction('image'));

// 업무용 툴들 가져오기
console.log('업무용 AI 툴들:', toolsManager.getToolsByPurpose('business'));