// AI 툴 동적 렌더링 시스템
class AIToolsRenderer {
  constructor() {
    this.toolsManager = new AIToolsManager(aiToolsDatabase);
    this.currentFilters = {
      function: [],
      purpose: [],
      price: null,
      search: ''
    };
    this.currentPage = window.location.pathname.includes('tools.html') ? 'tools' : 'index';
    this.init();
  }

  init() {
    this.renderAllTools();
    this.setupEventListeners();
    this.updateFilterResults();
    this.setupHeroSearch();
  }

  // 페이지별 요소 식별
  getPageElements() {
    const isToolsPage = this.currentPage === 'tools';
    const suffix = isToolsPage ? '-tools' : '';
    
    return {
      toolsGrid: document.querySelector('.tools-grid'),
      searchInput: document.querySelector(`.search-input${suffix}`) || document.querySelector('.search-input'),
      searchButton: document.querySelector(`.search-button${suffix}`) || document.querySelector('.search-button'),
      filterResults: document.getElementById(`new-filter-results${suffix}`) || document.getElementById('filter-results'),
      selectedTagsContainer: document.getElementById(`selected-tags-container${suffix}`),
      selectedTags: document.getElementById(`selected-tags${suffix}`),
      clearAllBtn: document.getElementById(`clear-all-filters${suffix}`),
      noResults: document.getElementById('no-search-results') || document.getElementById('no-results'),
      functionCheckboxes: document.querySelectorAll('input[name="function"]'),
      purposeCheckboxes: document.querySelectorAll('input[name="purpose"]'),
      priceRadios: document.querySelectorAll('input[name="price"]')
    };
  }

  // 모든 툴 카드 렌더링
  renderAllTools() {
    const elements = this.getPageElements();
    if (!elements.toolsGrid) return;

    const filteredTools = this.getFilteredTools();
    
    // index.html에서는 처음 9개 툴만 표시 (처음 로드시)
    const toolsToShow = this.currentPage === 'index' && this.isEmptyFilter() 
      ? this.toolsManager.getFeaturedTools().slice(0, 9)
      : this.currentPage === 'index' 
        ? filteredTools.slice(0, 9)
        : filteredTools;

    elements.toolsGrid.innerHTML = toolsToShow.map(tool => this.generateToolCard(tool)).join('');
    
    // 결과가 없는 경우 처리
    if (elements.noResults) {
      elements.noResults.style.display = toolsToShow.length === 0 ? 'block' : 'none';
    }

    // 툴 카드 클릭 이벤트 설정
    this.setupToolCardEvents();
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
           data-id="${tool.id}"
           data-url="${tool.url || ''}">
        <div class="tool-card-header">
          <div class="tool-icon">
            <div class="icon-placeholder"></div>
          </div>
          <span class="category-tag">${tool.category}</span>
        </div>
        <div class="tool-card-content">
          <h3 class="tool-name">${tool.name}</h3>
          <p class="tool-description">${tool.description}</p>
        </div>
        <div class="tool-card-footer">
          <div class="feature-tags">
            ${tool.tags.slice(0, 3).map(tag => `<span class="feature-tag">${tag}</span>`).join('')}
          </div>
          <span class="price-tag">${this.getPriceLabel(tool.price)}</span>
        </div>
      </div>
    `;
  }

  // 툴 카드 클릭 이벤트 설정
  setupToolCardEvents() {
    document.querySelectorAll('.tool-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const url = card.dataset.url;
        if (url && url !== 'undefined' && url !== '') {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      });
      
      // 호버 효과 개선
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '';
      });
    });
  }

  // 가격 라벨 가져오기
  getPriceLabel(price) {
    return filterOptions.price[price]?.label || price;
  }

  // 필터가 비어있는지 확인
  isEmptyFilter() {
    return this.currentFilters.function.length === 0 && 
           this.currentFilters.purpose.length === 0 && 
           !this.currentFilters.price && 
           !this.currentFilters.search;
  }

  // 필터링된 툴 목록 가져오기
  getFilteredTools() {
    let tools = this.toolsManager.tools;

    // 검색어 필터링
    if (this.currentFilters.search) {
      tools = this.toolsManager.searchTools(this.currentFilters.search);
    }

    // 기능, 목적, 가격 필터링
    const filtered = this.toolsManager.filterTools({
      function: this.currentFilters.function.length > 0 ? this.currentFilters.function : null,
      purpose: this.currentFilters.purpose.length > 0 ? this.currentFilters.purpose : null,
      price: this.currentFilters.price
    });

    // 검색어가 있는 경우 교집합 반환
    if (this.currentFilters.search) {
      return filtered.filter(tool => tools.includes(tool));
    }

    return filtered;
  }

  // 히어로 섹션 검색 설정
  setupHeroSearch() {
    if (this.currentPage !== 'index') return;

    const heroSearchInput = document.querySelector('#hero .search-input');
    const heroSearchButton = document.querySelector('#hero .search-button');
    
    if (heroSearchInput && heroSearchButton) {
      const performHeroSearch = () => {
        const searchTerm = heroSearchInput.value.trim();
        if (searchTerm) {
          // tools.html로 이동하면서 검색어 전달
          window.location.href = `tools.html?search=${encodeURIComponent(searchTerm)}`;
        }
      };

      heroSearchButton.addEventListener('click', performHeroSearch);
      heroSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          performHeroSearch();
        }
      });
    }
  }

  // 이벤트 리스너 설정
  setupEventListeners() {
    const elements = this.getPageElements();

    // URL 파라미터에서 검색어 추출
    this.handleUrlParams();

    // 검색 입력
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        this.currentFilters.search = e.target.value;
        this.renderAllTools();
        this.updateFilterResults();
        this.updateSelectedTags();
      });
    }

    if (elements.searchButton) {
      elements.searchButton.addEventListener('click', () => {
        this.renderAllTools();
        this.updateFilterResults();
      });
    }

    // 기능 필터 체크박스
    elements.functionCheckboxes.forEach(checkbox => {
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
    elements.purposeCheckboxes.forEach(checkbox => {
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
    elements.priceRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.currentFilters.price = e.target.checked ? e.target.value : null;
        this.renderAllTools();
        this.updateFilterResults();
        this.updateSelectedTags();
      });
    });

    // 모든 필터 지우기 버튼
    if (elements.clearAllBtn) {
      elements.clearAllBtn.addEventListener('click', () => {
        this.clearAllFilters();
      });
    }
  }

  // URL 파라미터 처리
  handleUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    
    if (searchParam) {
      this.currentFilters.search = searchParam;
      const elements = this.getPageElements();
      if (elements.searchInput) {
        elements.searchInput.value = searchParam;
      }
    }
  }

  // 필터 결과 수 업데이트
  updateFilterResults() {
    // index.html에서는 결과 카운트를 표시하지 않음
    if (this.currentPage === 'index') return;
    
    const filteredTools = this.getFilteredTools();
    const elements = this.getPageElements();
    
    if (elements.filterResults) {
      elements.filterResults.textContent = `총 ${filteredTools.length}개의 AI 툴이 검색되었습니다`;
    }
  }

  // 선택된 필터 태그 업데이트
  updateSelectedTags() {
    const elements = this.getPageElements();
    if (!elements.selectedTagsContainer || !elements.selectedTags) return;

    const allFilters = [
      ...this.currentFilters.function.map(f => ({ type: 'function', value: f, label: this.getFunctionLabel(f) })),
      ...this.currentFilters.purpose.map(p => ({ type: 'purpose', value: p, label: this.getPurposeLabel(p) })),
      ...(this.currentFilters.price ? [{ type: 'price', value: this.currentFilters.price, label: this.getPriceLabel(this.currentFilters.price) }] : [])
    ];

    if (allFilters.length === 0) {
      elements.selectedTagsContainer.style.display = 'none';
      return;
    }

    elements.selectedTagsContainer.style.display = 'flex';
    elements.selectedTags.innerHTML = allFilters.map(filter => 
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
      const checkbox = document.querySelector(`input[name="function"][value="${value}"]`);
      if (checkbox) checkbox.checked = false;
    } else if (type === 'purpose') {
      this.currentFilters.purpose = this.currentFilters.purpose.filter(p => p !== value);
      const checkbox = document.querySelector(`input[name="purpose"][value="${value}"]`);
      if (checkbox) checkbox.checked = false;
    } else if (type === 'price') {
      this.currentFilters.price = null;
      const radio = document.querySelector(`input[name="price"][value="${value}"]`);
      if (radio) radio.checked = false;
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
    const elements = this.getPageElements();
    if (elements.searchInput) elements.searchInput.value = '';

    this.renderAllTools();
    this.updateFilterResults();
    this.updateSelectedTags();
  }

  // 라벨 헬퍼 함수들
  getFunctionLabel(value) {
    return filterOptions.function[value]?.label || value;
  }

  getPurposeLabel(value) {
    return filterOptions.purpose[value]?.label || value;
  }

  // 추천 툴만 표시
  showFeaturedOnly() {
    const elements = this.getPageElements();
    if (!elements.toolsGrid) return;

    const featuredTools = this.toolsManager.getFeaturedTools();
    elements.toolsGrid.innerHTML = featuredTools.map(tool => this.generateToolCard(tool)).join('');
    this.setupToolCardEvents();
    
    if (elements.filterResults) {
      elements.filterResults.textContent = `추천 AI 툴 ${featuredTools.length}개`;
    }
  }

  // 전체 툴 표시
  showAllTools() {
    this.renderAllTools();
  }

  // 통계 정보 표시
  showStats() {
    const stats = this.toolsManager.getStats();
    console.log('AI 툴 데이터베이스 통계:', stats);
    return stats;
  }
}

// 전역 변수
let aiToolsRenderer;

// DOM 로드 완료 후 초기화
document.addEventListener('DOMContentLoaded', function() {
  // AI 툴 렌더러 초기화
  aiToolsRenderer = new AIToolsRenderer();
  
  console.log('AI 툴 큐레이터가 초기화되었습니다.');
  console.log(`총 ${aiToolsRenderer.toolsManager.tools.length}개의 AI 툴이 로드되었습니다.`);
});