// HTML 업데이트를 위한 통합 스크립트
// main.js에 추가하거나 별도 파일로 사용

class AIToolsRenderer {
  constructor(toolsData) {
    this.toolsManager = new AIToolsManager(toolsData);
    this.currentFilters = {
      function: [],
      purpose: [],
      price: null,
      search: ''
    };
    this.init();
  }

  init() {
    this.renderAllTools();
    this.setupEventListeners();
    this.updateFilterResults();
  }

  // 모든 툴 카드 렌더링
  renderAllTools() {
    const toolsGrid = document.querySelector('.tools-grid');
    if (!toolsGrid) return;

    const filteredTools = this.getFilteredTools();
    toolsGrid.innerHTML = filteredTools.map(tool => this.generateToolCard(tool)).join('');
    
    // 결과가 없는 경우 처리
    const noResultsDiv = document.getElementById('no-results');
    if (filteredTools.length === 0) {
      if (noResultsDiv) noResultsDiv.style.display = 'block';
    } else {
      if (noResultsDiv) noResultsDiv.style.display = 'none';
    }
  }

  // 개별 툴 카드 HTML 생성
  generateToolCard(tool) {
    const purposeArray = Array.isArray(tool.purpose) ? tool.purpose : [tool.purpose];
    const functionArray = Array.isArray(tool.function) ? tool.function : [tool.function];
    
    return `
      <div class="tool-card" 
           data-function="${functionArray.join(',')}" 
           data-purpose="${purposeArray.join(',')}" 
           data-price="${tool.price}" 
           data-name="${tool.name}"
           data-id="${tool.id}">
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
          <span class="price-tag">${this.getPriceLabel(tool.price)}</span>
        </div>
        ${tool.url ? `<a href="${tool.url}" target="_blank" class="tool-link" style="position: absolute; inset: 0; z-index: 1;"></a>` : ''}
      </div>
    `;
  }

  // 가격 라벨 가져오기
  getPriceLabel(price) {
    const priceLabels = {
      free: "무료",
      freemium: "부분무료",
      paid: "유료"
    };
    return priceLabels[price] || price;
  }

  // 필터링된 툴 목록 가져오기
  getFilteredTools() {
    let tools = this.toolsManager.tools;

    // 검색어 필터링
    if (this.currentFilters.search) {
      tools = this.toolsManager.searchTools(this.currentFilters.search);
    }

    // 기능, 목적, 가격 필터링
    return this.toolsManager.filterTools({
      function: this.currentFilters.function.length > 0 ? this.currentFilters.function : null,
      purpose: this.currentFilters.purpose.length > 0 ? this.currentFilters.purpose : null,
      price: this.currentFilters.price
    }).filter(tool => {
      if (this.currentFilters.search) {
        return this.toolsManager.searchTools(this.currentFilters.search).includes(tool);
      }
      return true;
    });
  }

  // 이벤트 리스너 설정
  setupEventListeners() {
    // 검색 입력
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.currentFilters.search = e.target.value;
        this.renderAllTools();
        this.updateFilterResults();
      });
    }

    if (searchButton) {
      searchButton.addEventListener('click', () => {
        this.renderAllTools();
        this.updateFilterResults();
      });
    }

    // 기능 필터 체크박스
    document.querySelectorAll('input[name="function"]').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          this.currentFilters.function.push(e.target.value);
        } else {
          this.currentFilters.function = this.currentFilters.function.filter(f => f !== e.target.value);
        }
        this.renderAllTools();
        this.updateFilterResults();
        this.updateSelectedTags();
      });
    });

    // 목적 필터 체크박스
    document.querySelectorAll('input[name="purpose"]').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          this.currentFilters.purpose.push(e.target.value);
        } else {
          this.currentFilters.purpose = this.currentFilters.purpose.filter(p => p !== e.target.value);
        }
        this.renderAllTools();
        this.updateFilterResults();
        this.updateSelectedTags();
      });
    });

    // 가격 필터 라디오 버튼
    document.querySelectorAll('input[name="price"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.currentFilters.price = e.target.checked ? e.target.value : null;
        this.renderAllTools();
        this.updateFilterResults();
        this.updateSelectedTags();
      });
    });

    // 모든 필터 지우기 버튼
    const clearAllBtn = document.getElementById('clear-all-filters');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', () => {
        this.clearAllFilters();
      });
    }
  }

  // 필터 결과 수 업데이트
  updateFilterResults() {
    const filteredTools = this.getFilteredTools();
    const resultDisplay = document.getElementById('new-filter-results');
    if (resultDisplay) {
      resultDisplay.textContent = `총 ${filteredTools.length}개의 AI 툴이 검색되었습니다`;
    }
  }

  // 선택된 필터 태그 업데이트
  updateSelectedTags() {
    const container = document.getElementById('selected-tags-container');
    const tagsDiv = document.getElementById('selected-tags');
    
    if (!container || !tagsDiv) return;

    const allFilters = [
      ...this.currentFilters.function.map(f => ({ type: 'function', value: f, label: this.getFunctionLabel(f) })),
      ...this.currentFilters.purpose.map(p => ({ type: 'purpose', value: p, label: this.getPurposeLabel(p) })),
      ...(this.currentFilters.price ? [{ type: 'price', value: this.currentFilters.price, label: this.getPriceLabel(this.currentFilters.price) }] : [])
    ];

    if (allFilters.length === 0) {
      container.style.display = 'none';
      return;
    }

    container.style.display = 'block';
    tagsDiv.innerHTML = allFilters.map(filter => 
      `<span class="selected-tag" data-type="${filter.type}" data-value="${filter.value}">
        ${filter.label}
        <button class="tag-remove" onclick="aiToolsRenderer.removeFilter('${filter.type}', '${filter.value}')">&times;</button>
      </span>`
    ).join('');
  }

  // 개별 필터 제거
  removeFilter(type, value) {
    if (type === 'function') {
      this.currentFilters.function = this.currentFilters.function.filter(f => f !== value);
      document.querySelector(`input[name="function"][value="${value}"]`).checked = false;
    } else if (type === 'purpose') {
      this.currentFilters.purpose = this.currentFilters.purpose.filter(p => p !== value);
      document.querySelector(`input[name="purpose"][value="${value}"]`).checked = false;
    } else if (type === 'price') {
      this.currentFilters.price = null;
      document.querySelector(`input[name="price"][value="${value}"]`).checked = false;
    }

    this.renderAllTools();
    this.updateFilterResults();
    this.updateSelectedTags();
  }

  // 모든 필터 지우기
  clearAllFilters() {
    this.currentFilters = {
      function: [],
      purpose: [],
      price: null,
      search: ''
    };

    // 모든 체크박스와 라디오 버튼 해제
    document.querySelectorAll('input[name="function"], input[name="purpose"], input[name="price"]').forEach(input => {
      input.checked = false;
    });

    // 검색 입력 지우기
    const searchInput = document.querySelector('.search-input');
    if (searchInput) searchInput.value = '';

    this.renderAllTools();
    this.updateFilterResults();
    this.updateSelectedTags();
  }

  // 라벨 헬퍼 함수들
  getFunctionLabel(value) {
    const labels = {
      text: "텍스트생성",
      image: "이미지생성",
      video: "영상제작",
      voice: "음성/음악생성",
      development: "개발도구",
      design: "디자인/제작",
      automation: "업무자동화",
      data: "데이터분석",
      translation: "번역/언어",
      education: "교육/학습"
    };
    return labels[value] || value;
  }

  getPurposeLabel(value) {
    const labels = {
      business: "업무용",
      content: "콘텐츠제작",
      study: "학습/공부용",
      developer: "개발자용",
      brand: "브랜드/디자인"
    };
    return labels[value] || value;
  }

  // 새 툴 추가 (동적)
  addNewTool(toolData) {
    this.toolsManager.addTool(toolData);
    this.renderAllTools();
    this.updateFilterResults();
  }

  // 툴 업데이트 (동적)
  updateTool(toolId, updatedData) {
    this.toolsManager.updateTool(toolId, updatedData);
    this.renderAllTools();
    this.updateFilterResults();
  }

  // 툴 삭제 (동적)
  removeTool(toolId) {
    this.toolsManager.removeTool(toolId);
    this.renderAllTools();
    this.updateFilterResults();
  }

  // 추천 툴만 표시
  showFeaturedOnly() {
    const featuredTools = this.toolsManager.getFeaturedTools();
    const toolsGrid = document.querySelector('.tools-grid');
    if (toolsGrid) {
      toolsGrid.innerHTML = featuredTools.map(tool => this.generateToolCard(tool)).join('');
    }
  }

  // 전체 툴 표시
  showAllTools() {
    this.renderAllTools();
  }
}

// 전역 변수로 렌더러 인스턴스 생성
let aiToolsRenderer;

// DOM 로드 완료 후 초기화
document.addEventListener('DOMContentLoaded', function() {
  // 확장된 데이터를 사용하여 렌더러 초기화
  aiToolsRenderer = new AIToolsRenderer(extendedAiToolsData);
});

// 새 툴 추가 예시 함수
function addNewAITool() {
  const newTool = {
    name: "새로운 AI 툴",
    description: "새로운 AI 도구의 설명입니다.",
    tags: ["신기능", "혁신", "효율성"],
    category: "새카테고리",
    function: ["text"],
    purpose: ["business"],
    price: "freemium",
    url: "https://example.com",
    icon: "🆕",
    featured: false
  };
  
  aiToolsRenderer.addNewTool(newTool);
}

// 툴 데이터 내보내기 함수
function exportToolsData() {
  const data = aiToolsRenderer.toolsManager.exportToJSON();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ai_tools_data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 툴 데이터 가져오기 함수
function importToolsData(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const success = aiToolsRenderer.toolsManager.importFromJSON(e.target.result);
    if (success) {
      aiToolsRenderer.renderAllTools();
      aiToolsRenderer.updateFilterResults();
      alert('데이터가 성공적으로 가져와졌습니다.');
    } else {
      alert('데이터 가져오기에 실패했습니다.');
    }
  };
  reader.readAsText(file);
}