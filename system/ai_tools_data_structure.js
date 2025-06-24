// AI 툴 데이터 구조
const aiToolsData = [
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
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "Notion 내에서 사용할 수 있는 AI 어시스턴트로 문서 작성, 요약, 아이디어 정리를 도와줍니다.",
    tags: ["문서작성", "요약", "정리"],
    category: "문서작성",
    function: ["text"],
    purpose: ["business", "study"],
    price: "freemium",
    url: "https://notion.so",
    icon: "📝",
    featured: true
  },
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
    id: "dall-e",
    name: "DALL-E",
    description: "OpenAI의 이미지 생성 AI로 텍스트 설명을 바탕으로 창의적이고 독창적인 이미지를 생성합니다.",
    tags: ["이미지생성", "창의적", "독창적"],
    category: "이미지생성",
    function: ["image"],
    purpose: ["content", "brand"],
    price: "freemium",
    url: "https://openai.com/dall-e-2",
    icon: "🎨",
    featured: true
  },
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
  // 추가 AI 툴들을 여기에 계속 추가할 수 있습니다.
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
    featured: false
  },
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

// 툴 카드 HTML 생성 함수
function generateToolCard(tool) {
  const purposeArray = Array.isArray(tool.purpose) ? tool.purpose : [tool.purpose];
  const functionArray = Array.isArray(tool.function) ? tool.function : [tool.function];
  
  return `
    <div class="tool-card" 
         data-function="${functionArray.join(',')}" 
         data-purpose="${purposeArray.join(',')}" 
         data-price="${tool.price}" 
         data-name="${tool.name}">
      <div class="tool-card-header">
        <div class="tool-icon">
          <div class="icon-placeholder">${tool.icon || ''}</div>
        </div>
        <span class="category-tag">${tool.category}</span>
      </div>
      <div class="tool-card-content">
        <h3 class="tool-name">${tool.name}</h3>
        <p class="tool-description">${tool.description}</p>
      </div>
      <div class="tool-card-footer">
        <div class="feature-tags">
          ${tool.tags.map(tag => `<span class="feature-tag">${tag}</span>`).join('')}
        </div>
        <span class="price-tag">${filterOptions.price[tool.price].label}</span>
      </div>
    </div>
  `;
}

// 모든 툴 카드 렌더링 함수
function renderAllTools() {
  const toolsGrid = document.querySelector('.tools-grid');
  if (toolsGrid) {
    toolsGrid.innerHTML = aiToolsData.map(tool => generateToolCard(tool)).join('');
  }
}

// 새로운 툴 추가 함수
function addNewTool(toolData) {
  aiToolsData.push({
    id: toolData.id || toolData.name.toLowerCase().replace(/\s+/g, '-'),
    ...toolData,
    featured: toolData.featured || false
  });
  renderAllTools();
  updateFilterResults();
}

// 툴 데이터 업데이트 함수
function updateTool(toolId, updatedData) {
  const toolIndex = aiToolsData.findIndex(tool => tool.id === toolId);
  if (toolIndex !== -1) {
    aiToolsData[toolIndex] = { ...aiToolsData[toolIndex], ...updatedData };
    renderAllTools();
    updateFilterResults();
  }
}

// 툴 삭제 함수
function removeTool(toolId) {
  const toolIndex = aiToolsData.findIndex(tool => tool.id === toolId);
  if (toolIndex !== -1) {
    aiToolsData.splice(toolIndex, 1);
    renderAllTools();
    updateFilterResults();
  }
}

// 필터 결과 업데이트 함수
function updateFilterResults() {
  const totalTools = document.querySelectorAll('.tool-card:not([style*="display: none"])').length;
  const resultDisplay = document.getElementById('new-filter-results');
  if (resultDisplay) {
    resultDisplay.textContent = `총 ${totalTools}개의 AI 툴이 검색되었습니다`;
  }
}

// 데이터 내보내기 함수 (JSON 형태로)
function exportToolsData() {
  return JSON.stringify(aiToolsData, null, 2);
}

// 데이터 가져오기 함수 (JSON에서)
function importToolsData(jsonData) {
  try {
    const importedData = JSON.parse(jsonData);
    aiToolsData.length = 0; // 기존 데이터 초기화
    aiToolsData.push(...importedData);
    renderAllTools();
    updateFilterResults();
    console.log('데이터가 성공적으로 가져와졌습니다.');
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
}

// 초기화 함수
function initializeToolsData() {
  renderAllTools();
  updateFilterResults();
}

// 사용 예시:
// initializeToolsData(); // 페이지 로드 시 호출