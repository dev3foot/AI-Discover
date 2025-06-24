function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicator');
    const prevBtn = document.querySelector('.hero-prev');
    const nextBtn = document.querySelector('.hero-next');
    
    if (slides.length === 0) return; // 슬라이드가 없으면 종료
    
    let currentSlide = 0;
    let isTransitioning = false;
    let autoSlideInterval;
    
    // 슬라이드 배경 설정
    function setSlideBackground(index) {
        const slide = slides[index];
        const bgGradient = slide.dataset.bg;
        slide.style.background = bgGradient;
    }
    
    // 모든 슬라이드 배경 초기화
    slides.forEach((slide, index) => {
        setSlideBackground(index);
    });
    
    // 슬라이드 변경
    function goToSlide(index) {
        if (isTransitioning || index === currentSlide) return;
        
        isTransitioning = true;
        
        // 현재 슬라이드 비활성화
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        // 새 슬라이드 활성화
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentSlide = index;
        
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }
    
    // 다음 슬라이드
    function nextSlide() {
        const next = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        goToSlide(next);
    }
    
    // 이전 슬라이드
    function prevSlide() {
        const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        goToSlide(prev);
    }
    
    // 자동 슬라이드
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 8000); // 8초마다 자동 슬라이드
    }
    
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }
    
    // 이벤트 리스너 (화살표 버튼 제거로 인해 주석 처리)
    // nextBtn?.addEventListener('click', () => {
    //     nextSlide();
    //     stopAutoSlide();
    //     startAutoSlide(); // 자동 슬라이드 재시작
    // });
    
    // prevBtn?.addEventListener('click', () => {
    //     prevSlide();
    //     stopAutoSlide();
    //     startAutoSlide(); // 자동 슬라이드 재시작
    // });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            stopAutoSlide();
            startAutoSlide(); // 자동 슬라이드 재시작
        });
    });
    
    // 마우스 호버 시 자동 슬라이드 일시정지
    const heroSection = document.querySelector('.hero-section');
    heroSection?.addEventListener('mouseenter', stopAutoSlide);
    heroSection?.addEventListener('mouseleave', startAutoSlide);
    
    // 자동 슬라이드 시작
    startAutoSlide();
}

document.addEventListener('DOMContentLoaded', function() {
    // 히어로 슬라이더 초기화
    initHeroSlider();
    console.log('AI 툴 큐레이터 웹사이트가 로드되었습니다.');
    
    // 히어로 섹션 검색 기능
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    if (searchInput && searchButton) {
        function performSearch() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                window.location.href = `tools.html?search=${encodeURIComponent(searchTerm)}`;
            }
        }
        
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // 페이지별 요소 선택 함수
    function getPageElements() {
        const isToolsPage = window.location.pathname.includes('tools.html');
        const suffix = isToolsPage ? '-tools' : '';
        
        return {
            functionCheckboxes: document.querySelectorAll('input[name="function"]'),
            purposeCheckboxes: document.querySelectorAll('input[name="purpose"]'),
            priceRadios: document.querySelectorAll('input[name="price"]'),
            selectedTagsContainer: document.getElementById(`selected-tags-container${suffix}`),
            selectedTagsElement: document.getElementById(`selected-tags${suffix}`),
            clearAllFiltersBtn: document.getElementById(`clear-all-filters${suffix}`),
            newFilterResults: document.getElementById(`new-filter-results${suffix}`),
            toolCards: document.querySelectorAll('.tool-card'),
            noResultsMessage: document.getElementById(`no-results${isToolsPage ? '' : ''}`)
        };
    }
    
    // 페이지별 요소들 가져오기
    const pageElements = getPageElements();
    const functionCheckboxes = pageElements.functionCheckboxes;
    const purposeCheckboxes = pageElements.purposeCheckboxes;
    const priceRadios = pageElements.priceRadios;
    const selectedTagsContainer = pageElements.selectedTagsContainer;
    const selectedTagsElement = pageElements.selectedTagsElement;
    const clearAllFiltersBtn = pageElements.clearAllFiltersBtn;
    const newFilterResults = pageElements.newFilterResults;
    const toolCards = pageElements.toolCards;
    const noResultsMessage = pageElements.noResultsMessage;
    
    // 기존 필터 시스템 (tools.html 호환용)
    const filterChips = document.querySelectorAll('.filter-chip');
    const filterResetBtn = document.getElementById('filter-reset');
    const filterResultsCount = document.getElementById('filter-results-count');
    
    let activeFilters = {
        function: [],
        purpose: [],
        price: null
    };
    
    // 새로운 필터 시스템 이벤트 리스너 (index.html용)
    if (functionCheckboxes.length > 0) {
        functionCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                updateNewFilters();
                applyNewFilters();
                updateSelectedTags();
                updateNewFilterResults();
            });
        });
    }
    
    if (purposeCheckboxes.length > 0) {
        purposeCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                updateNewFilters();
                applyNewFilters();
                updateSelectedTags();
                updateNewFilterResults();
            });
        });
    }
    
    if (priceRadios.length > 0) {
        priceRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                updateNewFilters();
                applyNewFilters();
                updateSelectedTags();
                updateNewFilterResults();
            });
        });
    }
    
    // 모든 필터 지우기 버튼
    if (clearAllFiltersBtn) {
        clearAllFiltersBtn.addEventListener('click', function() {
            clearAllFilters();
        });
    }
    
    // 기존 필터 칩 이벤트 리스너 (tools.html용)
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const category = this.dataset.category;
            const value = this.dataset.value;
            
            handleFilterClick(category, value, this);
            filterTools();
            updateFilterResults();
        });
    });
    
    // 기존 필터 초기화 버튼
    if (filterResetBtn) {
        filterResetBtn.addEventListener('click', function() {
            resetFilters();
        });
    }
    
    function handleFilterClick(category, value, chipElement) {
        if (value === 'all') {
            activeFilters[category] = ['all'];
            const categoryChips = document.querySelectorAll(`[data-category="${category}"]`);
            categoryChips.forEach(chip => chip.classList.remove('active'));
            chipElement.classList.add('active');
        } else {
            if (activeFilters[category].includes('all')) {
                activeFilters[category] = [];
                document.querySelector(`[data-category="${category}"][data-value="all"]`).classList.remove('active');
            }
            
            if (activeFilters[category].includes(value)) {
                activeFilters[category] = activeFilters[category].filter(f => f !== value);
                chipElement.classList.remove('active');
                
                if (activeFilters[category].length === 0) {
                    activeFilters[category] = ['all'];
                    document.querySelector(`[data-category="${category}"][data-value="all"]`).classList.add('active');
                }
            } else {
                activeFilters[category].push(value);
                chipElement.classList.add('active');
            }
        }
    }
    
    // 새로운 필터 시스템 함수들
    function updateNewFilters() {
        // 기능 필터 수집
        activeFilters.function = [];
        functionCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                activeFilters.function.push(checkbox.value);
            }
        });
        
        // 목적 필터 수집
        activeFilters.purpose = [];
        purposeCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                activeFilters.purpose.push(checkbox.value);
            }
        });
        
        // 가격 필터 수집
        activeFilters.price = null;
        priceRadios.forEach(radio => {
            if (radio.checked) {
                activeFilters.price = radio.value;
            }
        });
    }
    
    function applyNewFilters() {
        let visibleCount = 0;
        
        toolCards.forEach(card => {
            const cardFunction = card.dataset.function;
            const cardPurpose = card.dataset.purpose;
            const cardPrice = card.dataset.price;
            
            let shouldShow = true;
            
            // 기능별 필터 적용 (OR 조건)
            if (activeFilters.function.length > 0 && !activeFilters.function.includes(cardFunction)) {
                shouldShow = false;
            }
            
            // 목적별 필터 적용 (OR 조건)
            if (activeFilters.purpose.length > 0) {
                const cardPurposes = cardPurpose ? cardPurpose.split(',') : [];
                const hasMatchingPurpose = activeFilters.purpose.some(purpose => 
                    cardPurposes.includes(purpose)
                );
                if (!hasMatchingPurpose) {
                    shouldShow = false;
                }
            }
            
            // 가격별 필터 적용 (단일 선택)
            if (activeFilters.price && activeFilters.price !== cardPrice) {
                shouldShow = false;
            }
            
            if (shouldShow) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // 결과 없음 메시지 처리
        if (noResultsMessage) {
            if (visibleCount === 0) {
                noResultsMessage.style.display = 'block';
            } else {
                noResultsMessage.style.display = 'none';
            }
        }
    }
    
    function updateSelectedTags() {
        if (!selectedTagsContainer || !selectedTagsElement) return;
        
        const selectedFunctions = activeFilters.function || [];
        const selectedPurposes = activeFilters.purpose || [];
        const selectedPrice = activeFilters.price;
        
        // 모든 선택된 필터가 없으면 태그 컨테이너 숨기기
        if (selectedFunctions.length === 0 && selectedPurposes.length === 0 && !selectedPrice) {
            selectedTagsContainer.style.display = 'none';
            return;
        }
        
        selectedTagsContainer.style.display = 'flex';
        selectedTagsElement.innerHTML = '';
        
        // 기능 필터 태그 생성
        selectedFunctions.forEach(func => {
            const tag = createFilterTag(getFunctionName(func), 'function', func);
            selectedTagsElement.appendChild(tag);
        });
        
        // 목적 필터 태그 생성
        selectedPurposes.forEach(purpose => {
            const tag = createFilterTag(getPurposeName(purpose), 'purpose', purpose);
            selectedTagsElement.appendChild(tag);
        });
        
        // 가격 필터 태그 생성
        if (selectedPrice) {
            const tag = createFilterTag(getPriceName(selectedPrice), 'price', selectedPrice);
            selectedTagsElement.appendChild(tag);
        }
    }
    
    function createFilterTag(text, filterType, value) {
        const tag = document.createElement('span');
        tag.className = 'selected-tag';
        tag.innerHTML = `${text} <span class="remove-tag" data-type="${filterType}" data-value="${value}">×</span>`;
        
        // 개별 태그 제거 이벤트
        tag.querySelector('.remove-tag').addEventListener('click', function() {
            removeFilter(filterType, value);
        });
        
        return tag;
    }
    
    function removeFilter(filterType, value) {
        if (filterType === 'function') {
            const checkbox = document.querySelector(`input[name="function"][value="${value}"]`);
            if (checkbox) checkbox.checked = false;
        } else if (filterType === 'purpose') {
            const checkbox = document.querySelector(`input[name="purpose"][value="${value}"]`);
            if (checkbox) checkbox.checked = false;
        } else if (filterType === 'price') {
            const radio = document.querySelector(`input[name="price"][value="${value}"]`);
            if (radio) radio.checked = false;
        }
        
        updateNewFilters();
        applyNewFilters();
        updateSelectedTags();
        updateNewFilterResults();
    }
    
    function getFunctionName(value) {
        const names = {
            'text': '텍스트생성',
            'image': '이미지생성',
            'video': '영상제작',
            'voice': '음성/음악생성',
            'development': '개발도구',
            'design': '디자인/제작',
            'automation': '업무자동화',
            'data': '데이터분석',
            'translation': '번역/언어',
            'education': '교육/학습'
        };
        return names[value] || value;
    }
    
    function getPurposeName(value) {
        const names = {
            'business': '업무용',
            'content': '콘텐츠제작',
            'study': '학습/공부용',
            'developer': '개발자용',
            'brand': '브랜드/디자인'
        };
        return names[value] || value;
    }
    
    function getPriceName(value) {
        const names = {
            'free': '무료',
            'freemium': '부분무료',
            'paid': '유료'
        };
        return names[value] || value;
    }
    
    function updateNewFilterResults() {
        if (!newFilterResults) return;
        
        const visibleCards = Array.from(toolCards).filter(card => 
            card.style.display !== 'none'
        ).length;
        
        newFilterResults.textContent = `총 ${visibleCards}개의 AI 툴이 검색되었습니다`;
    }
    
    function clearAllFilters() {
        // 모든 체크박스 해제
        functionCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        purposeCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // 모든 라디오 버튼 해제
        priceRadios.forEach(radio => {
            radio.checked = false;
        });
        
        // 필터 상태 업데이트
        updateNewFilters();
        applyNewFilters();
        updateSelectedTags();
        updateNewFilterResults();
    }
    
    function resetFilters() {
        // 모든 필터 초기화
        activeFilters = {
            function: ['all'],
            price: ['all']
        };
        
        // 필터 칩 초기화
        const allFilterChips = document.querySelectorAll('.filter-chip');
        allFilterChips.forEach(chip => {
            chip.classList.remove('active');
            if (chip.dataset.value === 'all') {
                chip.classList.add('active');
            }
        });
        
        // 필터 적용
        filterTools();
        updateFilterResults();
    }
    
    function updateFilterResults() {
        const visibleCards = document.querySelectorAll('.tool-card[style*="block"], .tool-card:not([style*="none"])').length;
        
        if (filterResultsCount) {
            if (visibleCards === 0) {
                filterResultsCount.textContent = '검색 결과가 없습니다';
                filterResultsCount.style.color = 'var(--color-danger)';
            } else {
                filterResultsCount.textContent = `${visibleCards}개의 AI 툴이 표시됩니다`;
                filterResultsCount.style.color = 'var(--color-text-secondary)';
            }
        }
    }
    
    function filterTools() {
        let visibleCount = 0;
        
        toolCards.forEach(card => {
            const cardFunction = card.dataset.function;
            const cardPrice = card.dataset.price;
            
            let shouldShow = true;
            
            if (!activeFilters.function.includes('all') && !activeFilters.function.includes(cardFunction)) {
                shouldShow = false;
            }
            
            if (!activeFilters.price.includes('all') && !activeFilters.price.includes(cardPrice)) {
                shouldShow = false;
            }
            
            if (shouldShow) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        if (noResultsMessage) {
            if (visibleCount === 0) {
                noResultsMessage.style.display = 'block';
            } else {
                noResultsMessage.style.display = 'none';
            }
        }
    }
    
    // tools.html 페이지에서 검색 및 필터링 기능
    if (window.location.pathname.includes('tools.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('search');
        const filterParam = urlParams.get('filter');
        
        // tools.html 전용 검색바 기능
        const searchInputTools = document.getElementById('search-input-tools');
        const searchButtonTools = document.getElementById('search-button-tools');
        
        if (searchInputTools && searchButtonTools) {
            function performToolsSearch() {
                const searchTerm = searchInputTools.value.trim();
                if (searchTerm) {
                    const newUrl = `tools.html?search=${encodeURIComponent(searchTerm)}`;
                    window.location.href = newUrl;
                } else {
                    // 빈 검색어면 필터만 유지하고 검색 초기화
                    window.location.href = 'tools.html';
                }
            }
            
            searchButtonTools.addEventListener('click', performToolsSearch);
            searchInputTools.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performToolsSearch();
                }
            });
        }
        
        // URL 파라미터 처리
        if (searchTerm) {
            performToolSearch(searchTerm);
            if (searchInputTools) {
                searchInputTools.value = searchTerm;
            }
        }
        
        if (filterParam) {
            applyUrlFilter(filterParam);
        }
        
        // tools.html에서 새로운 필터링 시스템 사용
        // 기존 initializeToolsFiltering() 대신 통합 시스템 사용
        
        // tools.html용 필터 초기화 버튼
        const filterResetToolsBtn = document.getElementById('filter-reset-tools');
        if (filterResetToolsBtn) {
            filterResetToolsBtn.addEventListener('click', function() {
                resetToolsFilters();
            });
        }
    }
    
    function initializeToolsFiltering() {
        const toolsFilterChips = document.querySelectorAll('.filter-chip');
        const toolsCards = document.querySelectorAll('.tool-card');
        const toolsNoResults = document.getElementById('no-search-results');
        
        let toolsActiveFilters = {
            function: ['all'],
            job: ['all'],
            price: ['all']
        };
        
        toolsFilterChips.forEach(chip => {
            chip.addEventListener('click', function() {
                const category = this.dataset.category;
                const value = this.dataset.value;
                
                handleToolsFilterClick(category, value, this);
                filterToolsCards();
            });
        });
        
        function handleToolsFilterClick(category, value, chipElement) {
            if (value === 'all') {
                toolsActiveFilters[category] = ['all'];
                const categoryChips = document.querySelectorAll(`[data-category="${category}"]`);
                categoryChips.forEach(chip => chip.classList.remove('active'));
                chipElement.classList.add('active');
            } else {
                if (toolsActiveFilters[category].includes('all')) {
                    toolsActiveFilters[category] = [];
                    document.querySelector(`[data-category="${category}"][data-value="all"]`).classList.remove('active');
                }
                
                if (toolsActiveFilters[category].includes(value)) {
                    toolsActiveFilters[category] = toolsActiveFilters[category].filter(f => f !== value);
                    chipElement.classList.remove('active');
                    
                    if (toolsActiveFilters[category].length === 0) {
                        toolsActiveFilters[category] = ['all'];
                        document.querySelector(`[data-category="${category}"][data-value="all"]`).classList.add('active');
                    }
                } else {
                    toolsActiveFilters[category].push(value);
                    chipElement.classList.add('active');
                }
            }
        }
        
        function filterToolsCards() {
            let visibleCount = 0;
            
            toolsCards.forEach(card => {
                const cardFunction = card.dataset.function;
                const cardPrice = card.dataset.price;
                
                let shouldShow = true;
                
                if (!toolsActiveFilters.function.includes('all') && !toolsActiveFilters.function.includes(cardFunction)) {
                    shouldShow = false;
                }
                
                if (!toolsActiveFilters.price.includes('all') && !toolsActiveFilters.price.includes(cardPrice)) {
                    shouldShow = false;
                }
                
                if (shouldShow) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            updateResultsCount(visibleCount);
            
            if (toolsNoResults) {
                if (visibleCount === 0) {
                    toolsNoResults.style.display = 'block';
                } else {
                    toolsNoResults.style.display = 'none';
                }
            }
        }
        
        // 페이지 로드시 결과 개수 업데이트
        updateResultsCount(toolsCards.length);
    }
    
    function resetToolsFilters() {
        // tools.html용 필터 초기화 - 페이지 새로고침으로 간단하게 처리
        window.location.href = 'tools.html';
    }
    
    function performToolSearch(searchTerm) {
        const searchInfo = document.getElementById('search-info');
        const searchTermSpan = document.getElementById('search-term');
        const toolCards = document.querySelectorAll('.tool-card');
        const noSearchResults = document.getElementById('no-search-results');
        
        // 검색 정보 표시
        if (searchInfo && searchTermSpan) {
            searchTermSpan.textContent = `"${searchTerm}"`;
            searchInfo.style.display = 'block';
        }
        
        let visibleCount = 0;
        const searchLower = searchTerm.toLowerCase();
        
        toolCards.forEach(card => {
            const toolName = card.dataset.name?.toLowerCase() || '';
            const toolDescription = card.querySelector('.tool-description')?.textContent.toLowerCase() || '';
            const categoryText = card.querySelector('.category-tag')?.textContent.toLowerCase() || '';
            const featureTags = Array.from(card.querySelectorAll('.feature-tag')).map(tag => tag.textContent.toLowerCase());
            
            const isMatch = toolName.includes(searchLower) || 
                          toolDescription.includes(searchLower) || 
                          categoryText.includes(searchLower) ||
                          featureTags.some(tag => tag.includes(searchLower));
            
            if (isMatch) {
                card.style.display = 'block';
                visibleCount++;
                // 검색어 하이라이트
                highlightSearchTerm(card, searchTerm);
            } else {
                card.style.display = 'none';
            }
        });
        
        updateResultsCount(visibleCount);
        
        // 검색 결과가 없을 때 메시지 표시
        if (noSearchResults) {
            if (visibleCount === 0) {
                noSearchResults.style.display = 'block';
            } else {
                noSearchResults.style.display = 'none';
            }
        }
    }
    
    function highlightSearchTerm(card, searchTerm) {
        const elementsToHighlight = [
            card.querySelector('.tool-name'),
            card.querySelector('.tool-description')
        ];
        
        elementsToHighlight.forEach(element => {
            if (element) {
                const text = element.textContent;
                const regex = new RegExp(`(${searchTerm})`, 'gi');
                const highlightedText = text.replace(regex, '<mark style="background: #fff59d; padding: 1px 2px; border-radius: 2px;">$1</mark>');
                element.innerHTML = highlightedText;
            }
        });
    }
    
    function updateResultsCount(count) {
        const resultsCount = document.getElementById('results-count');
        if (resultsCount) {
            resultsCount.textContent = count;
        }
    }
    
    function applyUrlFilter(filterParam) {
        // URL 파라미터로 전달된 필터 적용
        const [filterType, filterValue] = filterParam.split('-');
        
        if (filterType === 'price') {
            // 새로운 필터 시스템 (체크박스/라디오)에서 필터 적용
            const priceRadio = document.querySelector(`input[name="price"][value="${filterValue}"]`);
            if (priceRadio) {
                priceRadio.checked = true;
                updateNewFilters();
                applyNewFilters();
                updateSelectedTags();
                updateNewFilterResults();
            }
        } else {
            // 기존 필터 칩 시스템에서 필터 적용
            const filterChip = document.querySelector(`[data-category="${filterType}"][data-value="${filterValue}"]`);
            if (filterChip) {
                filterChip.click();
            }
        }
    }
    
    // AI 조합 섹션 기능
    const comboTabs = document.querySelectorAll('.combo-tab');
    const comboShowcase = document.getElementById('combo-showcase');
    const comboCards = document.getElementById('combo-cards');
    
    // 직군별 AI 조합 데이터
    const aiCombinations = {
        designer: [
            {
                title: 'UI/UX 디자인 완전 정복',
                tools: [
                    { name: 'ChatGPT', desc: '아이디어 생성과 문서 작성' },
                    { name: 'Figma AI', desc: 'UI/UX 디자인 자동화' },
                    { name: 'Midjourney', desc: '고품질 이미지 생성' }
                ],
                cost: '월 50,000원'
            },
            {
                title: '브랜딩 & 로고 마스터',
                tools: [
                    { name: 'Claude', desc: '브랜드 전략 수립' },
                    { name: 'Looka', desc: '로고 디자인 생성' },
                    { name: 'DALL-E', desc: '브랜딩 이미지 제작' }
                ],
                cost: '월 35,000원'
            },
            {
                title: '소셜미디어 크리에이터',
                tools: [
                    { name: 'Copy.ai', desc: 'SNS 카피 작성' },
                    { name: 'Canva AI', desc: '소셜 그래픽 디자인' },
                    { name: 'Runway', desc: '숏폼 영상 제작' }
                ],
                cost: '월 45,000원'
            }
        ],
        planner: [
            {
                title: '전략기획 프로 패키지',
                tools: [
                    { name: 'ChatGPT', desc: '아이디어 생성과 문서 작성' },
                    { name: 'Notion AI', desc: '체계적인 기획서 정리' },
                    { name: 'Miro', desc: '시각적 전략 맵핑' }
                ],
                cost: '월 30,000원'
            },
            {
                title: '데이터 분석 & 인사이트',
                tools: [
                    { name: 'Claude', desc: '데이터 해석과 분석' },
                    { name: 'Tableau AI', desc: '고급 데이터 시각화' },
                    { name: 'Excel Copilot', desc: '스프레드시트 자동화' }
                ],
                cost: '월 55,000원'
            },
            {
                title: '콘텐츠 기획 올인원',
                tools: [
                    { name: 'Jasper', desc: '마케팅 콘텐츠 생성' },
                    { name: 'Gamma', desc: '프레젠테이션 제작' },
                    { name: 'Canva AI', desc: '비주얼 디자인' }
                ],
                cost: '월 40,000원'
            }
        ],
        developer: [
            {
                title: '풀스택 개발 마스터',
                tools: [
                    { name: 'GitHub Copilot', desc: 'AI 코드 생성' },
                    { name: 'Cursor', desc: 'AI 통합 IDE' },
                    { name: 'Claude', desc: '코드 리뷰와 최적화' }
                ],
                cost: '월 45,000원'
            },
            {
                title: '프론트엔드 전문가',
                tools: [
                    { name: 'Tabnine', desc: '코드 자동완성' },
                    { name: 'Figma AI', desc: '디자인 시스템 연동' },
                    { name: 'ChatGPT', desc: '개발 문제 해결' }
                ],
                cost: '월 35,000원'
            },
            {
                title: 'AI/ML 개발 특화',
                tools: [
                    { name: 'Replit AI', desc: '실시간 AI 코딩' },
                    { name: 'JetBrains AI', desc: '스마트 코드 분석' },
                    { name: 'Notion AI', desc: '기술 문서 작성' }
                ],
                cost: '월 60,000원'
            }
        ],
        marketer: [
            {
                title: '디지털 마케팅 올킬',
                tools: [
                    { name: 'Copy.ai', desc: '마케팅 카피 생성' },
                    { name: 'HubSpot AI', desc: '마케팅 자동화' },
                    { name: 'Canva AI', desc: '마케팅 크리에이티브' }
                ],
                cost: '월 55,000원'
            },
            {
                title: '콘텐츠 마케팅 프로',
                tools: [
                    { name: 'Jasper', desc: '콘텐츠 작성' },
                    { name: 'Loom AI', desc: '영상 콘텐츠 제작' },
                    { name: 'Buffer AI', desc: 'SNS 스케줄링' }
                ],
                cost: '월 48,000원'
            },
            {
                title: 'SNS 마케팅 스페셜',
                tools: [
                    { name: 'Later AI', desc: 'SNS 콘텐츠 관리' },
                    { name: 'Runway', desc: '트렌드 영상 제작' },
                    { name: 'ChatGPT', desc: '트렌드 카피 작성' }
                ],
                cost: '월 42,000원'
            }
        ]
    };
    
    if (comboTabs.length > 0) {
        comboTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const comboType = this.dataset.combo;
                
                // 탭 상태 업데이트
                comboTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // 조합 카드 표시
                showCombinations(comboType);
            });
        });
        
        // 페이지 로드시 기본값(디자이너) 표시
        showCombinations('designer');
    }
    
    function showCombinations(comboType) {
        const combinations = aiCombinations[comboType] || [];
        
        // 페이드 아웃 애니메이션
        if (comboCards) {
            comboCards.classList.add('fade-out');
            
            setTimeout(() => {
                // 기존 조합 카드 제거
                comboCards.innerHTML = '';
                
                // 새로운 조합 카드 생성
                combinations.forEach(combo => {
                    const comboCard = document.createElement('div');
                    comboCard.className = 'combo-card';
                    comboCard.innerHTML = `
                        <div class="combo-header">
                            <h3 class="combo-title">${combo.title}</h3>
                            <div class="combo-tools">
                                ${combo.tools.map(tool => `
                                    <a href="${getToolUrl(tool.name)}" target="_blank" class="combo-tool-card">
                                        <div class="combo-tool-name">${tool.name}</div>
                                        <div class="combo-tool-desc">${tool.desc}</div>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                        <div class="combo-stats">
                            <div class="combo-cost">
                                <span class="combo-cost-label">예상 비용</span>
                                <span class="combo-cost-value">${combo.cost}</span>
                            </div>
                        </div>
                    `;
                    comboCards.appendChild(comboCard);
                });
                
                // 페이드 인 애니메이션
                comboCards.classList.remove('fade-out');
            }, 150);
        }
    }
    
    // AI 툴 URL 매핑 함수
    function getToolUrl(toolName) {
        const toolUrls = {
            'ChatGPT': 'https://chat.openai.com',
            'Claude': 'https://claude.ai',
            'Figma AI': 'https://figma.com',
            'Midjourney': 'https://midjourney.com',
            'DALL-E': 'https://openai.com/dall-e-2',
            'Notion AI': 'https://notion.so',
            'Miro': 'https://miro.com',
            'Copy.ai': 'https://copy.ai',
            'Canva AI': 'https://canva.com',
            'Runway': 'https://runwayml.com',
            'Looka': 'https://looka.com',
            'Tableau AI': 'https://tableau.com',
            'Excel Copilot': 'https://microsoft.com/microsoft-365/excel',
            'Jasper': 'https://jasper.ai',
            'Gamma': 'https://gamma.app',
            'GitHub Copilot': 'https://github.com/features/copilot',
            'Cursor': 'https://cursor.sh',
            'Tabnine': 'https://tabnine.com',
            'Replit AI': 'https://replit.com',
            'JetBrains AI': 'https://jetbrains.com/ai',
            'HubSpot AI': 'https://hubspot.com',
            'Loom AI': 'https://loom.com',
            'Buffer AI': 'https://buffer.com',
            'Later AI': 'https://later.com'
        };
        
        return toolUrls[toolName] || '#';
    }
    
    // AI 정보 허브 슬라이드 기능
    const infoCards = document.querySelectorAll('.info-card');
    
    // 슬라이드 데이터
    const infoHubData = {
        news: [
            // 슬라이드 1
            [
                { title: 'OpenAI, GPT-5 개발 중단 발표', desc: 'AI 안전성 연구에 더 집중하기 위해 GPT-5 개발을 일시 중단한다고...', date: '2024.01.15' },
                { title: '구글, Gemini Pro 업데이트 공개', desc: '멀티모달 기능이 크게 개선된 새로운 Gemini Pro 버전을...', date: '2024.01.12' },
                { title: '메타, 오픈소스 AI 모델 Llama 3 출시', desc: '더욱 강력해진 성능과 한국어 지원이 개선된 Llama 3가...', date: '2024.01.10' }
            ],
            // 슬라이드 2
            [
                { title: 'Microsoft, Copilot Studio 정식 출시', desc: '기업용 AI 어시스턴트 개발 플랫폼인 Copilot Studio가...', date: '2024.01.08' },
                { title: 'Anthropic, Claude 3.5 Sonnet 발표', desc: '이전 버전 대비 2배 빨라진 처리 속도와 향상된 추론 능력을...', date: '2024.01.05' },
                { title: 'Adobe, Firefly 3.0 베타 공개', desc: '더욱 정교한 이미지 생성과 편집 기능을 제공하는...', date: '2024.01.03' }
            ],
            // 슬라이드 3
            [
                { title: 'OpenAI, DALL-E 3 API 무료화', desc: '개발자들을 위해 DALL-E 3 API를 무료로 제공하기로...', date: '2024.01.01' },
                { title: 'AI 윤리 가이드라인 국제 표준 채택', desc: 'UN에서 AI 개발과 사용에 대한 윤리 가이드라인을...', date: '2023.12.28' },
                { title: '삼성, 갤럭시 AI 글로벌 확장', desc: '갤럭시 스마트폰의 AI 기능을 전 세계 120개국으로...', date: '2023.12.25' }
            ]
        ],
        blog: [
            // 슬라이드 1
            [
                { title: 'AI SEOUL 2024 컨퍼런스', desc: '국내 최대 규모 AI 컨퍼런스로 글로벌 AI 리더들의 강연과 네트워킹', date: '2024.03.15-16 | 코엑스' },
                { title: 'AI 개발자 밋업 2024', desc: 'AI 개발자들을 위한 기술 공유 밋업. 실무 사례와 최신 트렌드 공유', date: '2024.02.20 | 강남 스타트업 허브' },
                { title: 'AI 비즈니스 활용 웨비나', desc: '중소기업을 위한 AI 도구 활용법. 실제 도입 사례와 ROI 분석', date: '2024.02.05 | 온라인 웨비나' }
            ],
            // 슬라이드 2
            [
                { title: 'Google AI Summit Korea', desc: '구글의 최신 AI 기술과 클라우드 솔루션 소개', date: '2024.04.10-11 | 그랜드하얏트' },
                { title: 'AI & 빅데이터 엑스포 2024', desc: '국내외 AI 기업들의 최신 제품과 서비스 전시회', date: '2024.05.22-24 | KINTEX' },
                { title: 'AI 스타트업 데모데이', desc: '유망 AI 스타트업들의 피칭과 투자자 네트워킹', date: '2024.03.28 | 판교 테크노밸리' }
            ],
            // 슬라이드 3
            [
                { title: 'Microsoft AI Tour Seoul', desc: 'Azure AI와 Copilot 활용 사례 및 실습 워크샵', date: '2024.06.15 | 삼성동 COEX' },
                { title: 'AI 윤리 포럼 2024', desc: 'AI 윤리와 규제에 대한 전문가 토론회', date: '2024.04.05 | 서울대학교' },
                { title: 'AI in Healthcare 심포지엄', desc: '의료 분야 AI 활용 사례와 미래 전망', date: '2024.05.10 | 연세대 의과대학' }
            ]
        ],
        video: [
            // 슬라이드 1
            [
                { title: 'AI로 1시간 만에 앱 만들기', desc: 'Claude와 Cursor를 활용해 실제 앱을 개발하는 과정을...', date: '조회수 245K' },
                { title: '미드저니 고급 활용법 총정리', desc: '프로페셔널한 이미지 생성을 위한 미드저니 팁과...', date: '조회수 189K' },
                { title: 'AI 업무 자동화 실전 사례', desc: '실제 회사에서 AI를 활용해 업무 효율을 3배 높인...', date: '조회수 156K' }
            ],
            // 슬라이드 2
            [
                { title: 'ChatGPT 마스터클래스', desc: '프롬프트 엔지니어링부터 API 활용까지 완벽 가이드...', date: '조회수 312K' },
                { title: 'AI 영상 편집 혁신 기술', desc: 'Runway와 Pika Labs로 만드는 전문가급 영상...', date: '조회수 278K' },
                { title: 'AI 음성 합성 완전 정복', desc: 'ElevenLabs와 Murf로 자연스러운 음성 콘텐츠 제작...', date: '조회수 198K' }
            ],
            // 슬라이드 3
            [
                { title: 'AI 데이터 분석 마스터', desc: 'Python과 AI로 빅데이터 분석하는 실전 노하우...', date: '조회수 167K' },
                { title: 'AI 게임 개발 튜토리얼', desc: 'Unity와 AI를 결합한 차세대 게임 개발 방법...', date: '조회수 145K' },
                { title: 'AI 로봇공학 최신 동향', desc: '휴머노이드 로봇과 AI 기술의 융합 현황과 미래...', date: '조회수 123K' }
            ]
        ],
        community: [
            // 슬라이드 1
            [
                { title: '한국 AI 개발자 모임', desc: 'AI 개발자들이 모여 최신 기술을 공유하고 협업하는...', date: '멤버 15.2K' },
                { title: 'AI 스타트업 네트워킹', desc: 'AI 기반 스타트업 창업자와 투자자들의 네트워킹...', date: '멤버 8.7K' },
                { title: 'AI 활용 사례 공유방', desc: '다양한 분야에서 AI를 활용한 실제 사례와 노하우를...', date: '멤버 22.1K' }
            ],
            // 슬라이드 2
            [
                { title: 'AI 연구자 포럼', desc: '학계와 산업계 AI 연구자들의 논문 리뷰와 토론...', date: '멤버 12.5K' },
                { title: 'AI 디자이너 클럽', desc: 'AI 도구를 활용하는 디자이너들의 작품 공유와 피드백...', date: '멤버 18.9K' },
                { title: 'AI 교육자 네트워크', desc: 'AI 교육 관련 강사와 교육자들의 커리큘럼 공유...', date: '멤버 6.3K' }
            ],
            // 슬라이드 3
            [
                { title: 'AI 투자자 모임', desc: 'AI 분야 투자 전문가들의 시장 분석과 투자 인사이트...', date: '멤버 4.2K' },
                { title: 'AI 윤리 연구회', desc: 'AI 윤리와 사회적 영향에 대한 연구와 토론...', date: '멤버 7.8K' },
                { title: 'AI 학습자 스터디', desc: 'AI를 공부하는 초보자들을 위한 스터디 그룹...', date: '멤버 25.7K' }
            ]
        ]
    };
    
    // 각 카드별 현재 슬라이드 인덱스
    const currentSlides = {
        news: 0,
        blog: 0,
        video: 0,
        community: 0
    };
    
    // 슬라이드 초기화
    if (infoCards.length > 0) {
        infoCards.forEach((card, index) => {
            const categories = ['news', 'blog', 'video', 'community'];
            const category = categories[index];
            
            if (category) {
                initializeSlider(card, category);
            }
        });
    }
    
    function initializeSlider(card, category) {
        const prevBtn = card.querySelector('.info-prev');
        const nextBtn = card.querySelector('.info-next');
        const indicators = card.querySelectorAll('.info-dot');
        
        // 초기 슬라이드 렌더링
        renderSlide(card, category, 0);
        
        // 이전 버튼 클릭
        prevBtn.addEventListener('click', () => {
            const newIndex = currentSlides[category] === 0 ? 2 : currentSlides[category] - 1;
            changeSlide(card, category, newIndex);
        });
        
        // 다음 버튼 클릭
        nextBtn.addEventListener('click', () => {
            const newIndex = currentSlides[category] === 2 ? 0 : currentSlides[category] + 1;
            changeSlide(card, category, newIndex);
        });
        
        // 인디케이터 클릭
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                changeSlide(card, category, index);
            });
        });
    }
    
    function changeSlide(card, category, newIndex) {
        const infoItems = card.querySelector('.info-items');
        
        // 페이드 아웃 애니메이션
        infoItems.style.opacity = '0';
        infoItems.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            currentSlides[category] = newIndex;
            renderSlide(card, category, newIndex);
            
            // 페이드 인 애니메이션
            infoItems.style.opacity = '1';
            infoItems.style.transform = 'translateY(0)';
        }, 150);
    }
    
    function renderSlide(card, category, slideIndex) {
        const infoItems = card.querySelector('.info-items');
        const indicators = card.querySelectorAll('.info-dot');
        const prevBtn = card.querySelector('.info-prev');
        const nextBtn = card.querySelector('.info-next');
        
        const slideData = infoHubData[category][slideIndex];
        
        // 슬라이드 콘텐츠 업데이트 (영상 섹션은 특별 처리)
        if (category === 'video') {
            infoItems.innerHTML = slideData.map(item => `
                <a href="https://www.naver.com/" target="_blank" class="info-item info-link video-item">
                    <div class="video-thumbnail">
                        <span class="play-icon">▶</span>
                    </div>
                    <div class="video-content">
                        <h4 class="info-item-title">${item.title}</h4>
                        <p class="info-item-desc">${item.desc}</p>
                        <span class="info-item-date">${item.date}</span>
                    </div>
                </a>
            `).join('');
        } else {
            infoItems.innerHTML = slideData.map(item => `
                <a href="https://www.naver.com/" target="_blank" class="info-item info-link">
                    <h4 class="info-item-title">${item.title}</h4>
                    <p class="info-item-desc">${item.desc}</p>
                    <span class="info-item-date">${item.date}</span>
                </a>
            `).join('');
        }
        
        // 인디케이터 업데이트
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === slideIndex);
        });
        
        // 버튼 상태 업데이트 (순환 구조이므로 항상 활성화)
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
    
    // 페이지 로드 시 필터 결과 초기화
    if (filterResultsCount) {
        updateFilterResults();
    }
    
    // 새로운 필터 시스템 초기화 (index.html용)
    if (newFilterResults) {
        updateNewFilterResults();
        updateFilterDisplay();
    }
    
    // 가이드 페이지 스크롤 애니메이션
    if (window.location.pathname.includes('guide.html')) {
        const guideSections = document.querySelectorAll('.guide-section');
        
        // Intersection Observer 설정
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // 한번 나타난 섹션은 다시 사라지지 않도록 observer 해제
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // 모든 가이드 섹션 관찰 시작
        guideSections.forEach(section => {
            sectionObserver.observe(section);
        });
        
        // 부드러운 스크롤 효과를 위한 추가 애니메이션
        const animateOnScroll = () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.guide-hero');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        };
        
        // 스크롤 이벤트에 throttle 적용
        let ticking = false;
        const scrollHandler = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    animateOnScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', scrollHandler);
        
        // 테이블 행 애니메이션
        const tableRows = document.querySelectorAll('.tools-table tr');
        
        const rowObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const rowObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 50);
                    rowObserver.unobserve(entry.target);
                }
            });
        }, rowObserverOptions);
        
        tableRows.forEach(row => {
            row.style.opacity = '0';
            row.style.transform = 'translateX(-20px)';
            row.style.transition = 'all 0.5s ease';
            rowObserver.observe(row);
        });
        
        // 카드 애니메이션
        const animateCards = (selector, delay = 100) => {
            const cards = document.querySelectorAll(selector);
            
            const cardObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0) scale(1)';
                        }, index * delay);
                        cardObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px) scale(0.95)';
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                cardObserver.observe(card);
            });
        };
        
        // 각종 카드 요소에 애니메이션 적용
        animateCards('.example-card', 150);
        animateCards('.ai-type-card', 100);
        animateCards('.use-case-card', 120);
        animateCards('.step-card', 200);
        animateCards('.faq-item', 80);
        animateCards('.free-tool-card', 100);
        
        // 생각 풍선 애니메이션
        const thoughtBubbles = document.querySelectorAll('.thought-bubble');
        const bubbleObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'scale(1) rotate(0deg)';
                    }, index * 200);
                    bubbleObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        thoughtBubbles.forEach(bubble => {
            bubble.style.opacity = '0';
            bubble.style.transform = 'scale(0.8) rotate(-5deg)';
            bubble.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            bubbleObserver.observe(bubble);
        });
    }
});