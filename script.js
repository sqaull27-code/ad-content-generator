// 콘텐츠 템플릿
const contentTemplates = {
    naver: {
        후기: {
            친근함: (data) => `[${data.productName} 후기]

안녕하세요! 오늘은 정말 좋은 상품을 발견했어서 소개해드려요! 🙌

상품명: ${data.productName}
카테고리: ${data.category}
가격: ${data.price || '미정'}

【 사용 후기 】
${data.description || '정말 만족도 높은 제품입니다!'}

【 추천 대상 】
특히 ${data.targetAudience || '모든 사람'}에게 강력 추천합니다!

【 결론 】
이 상품 정말 후회 없는 구매가 될 거예요. 
관심 있으신 분들은 꼭 확인해보세요! ✨

#${data.productName} #후기 #추천 #${data.category}`,
            
            전문적: (data) => `[${data.productName} 상세 후기]

안녕하세요. 오늘은 ${data.category} 분야의 화제 상품인 ${data.productName}을(를) 소개해드립니다.

【 상품 정보 】
- 상품명: ${data.productName}
- 카테고리: ${data.category}
- 가격대: ${data.price || '미정'}

【 상품 분석 】
${data.description || '우수한 품질과 가성비를 갖춘 제품입니다.'}

【 사용자층 】
${data.targetAudience || '광범위한 사용자층'}에게 적합한 상품입니다.

【 최종 평가 】
종합적으로 이 상품은 해당 카테고리에서 주목할 만한 선택지입니다.
상세 정보는 링크를 통해 확인하시기 바랍니다.

#${data.productName} #${data.category} #상품평`,
            
            유머러스: (data) => `[${data.productName}, 이거 진짜 꿀!

안녕, 나 오늘 진짜 좋은 거 찾았어! 🔥
바로 ${data.productName}인데...

『 상품 정보 』
- 이름: ${data.productName}
- 종류: ${data.category}
- 가격: ${data.price || '아주 착함'}

『 제 생각 』
${data.description || '정말 강추! 안 사면 손해!'}

『 누가 사면 좋을까? 』
${data.targetAudience || '누구나 다'}

『 한 줄 평 』
존나 좋음. 끝.

관심 있으면 링크 클릭! 👍

#${data.productName} #강추 #꿀`,
            
            고급스러움: (data) => `[프리미엄 상품 리뷰 | ${data.productName}]

≡ 품격 있는 선택의 기준

${data.productName}

━━━━━━━━━━━━━━━━━━━━━━━━

【 상품 개요 】
${data.productName} | ${data.category}
가격대: ${data.price || '프리미엄'}

【 핵심 특징 】
${data.description || '세련된 디자인과 우수한 기능성이 돋보입니다.'}

【 추천 대상 】
${data.targetAudience || '품격 있는 선택을 추구하는 분들'}

【 최종 평가 】
진정한 가치를 아는 고객을 위한 선택입니다.

━━━━━━━━━━━━━━━━━━━━━━━━

자세히 알아보기 →

#${data.productName} #프리미엄 #라이프스타일`
        },
        
        정보: {
            친근함: (data) => `[${data.productName} 사기 전에 알아야 할 것들!]

안녕하세요! 오늘은 ${data.productName}에 대해 쉽고 재미있게 설명해드릴게요! 😊

🎯 이 상품이 뭐예요?
${data.description || '정말 좋은 상품입니다.'}

💰 가격은 얼마?
${data.price || '합리적인 가격대'}

👥 누가 사면 좋아?
${data.targetAudience || '모든 분들'}

📌 구매 전 확인할 것들
1️⃣ 다른 상품과 비교해보기
2️⃣ 사용자 후기 읽어보기
3️⃣ 반품 정책 확인하기
4️⃣ 배송료 확인하기

궁금한 점이 있으면 댓글로 물어봐주세요! 💕

#${data.productName} #정보 #꿀팁`,
            
            전문적: (data) => `[${data.productName} 상품 가이드]

【 상품 소개 】
${data.productName}는 ${data.category} 분야의 주목할 만한 제품입니다.

【 기본 정보 】
• 상품명: ${data.productName}
• 카테고리: ${data.category}
• 가격대: ${data.price || '미정'}

【 제품 설명 】
${data.description || '우수한 기능성과 품질을 갖추고 있습니다.'}

【 대상 고객 】
${data.targetAudience || '광범위한 사용자층'}

【 구매 가이드 】
1. 제품 사양 확인
2. 가격 비교
3. 사용자 후기 검토
4. 보증 및 A/S 정책 확인
5. 구매 결정

【 결론 】
이 상품은 충분히 고려할 가치가 있는 제품입니다.

#${data.productName} #가이드 #정보`,
            
            유머러스: (data) => `[${data.productName} 이것만 알면 끝!]

안녕, 여기는 쉽게 설명하는 곳이야! 🎉

❓ 뭐 하는 건데?
→ ${data.description || '좋은 거 한다'}

❓ 얼마예요?
→ ${data.price || '그냥 사'}

❓ 누가 써?
→ ${data.targetAudience || '너도 써!'}

❓ 뭐가 좋아?
→ 다 좋아! 진짜!

⚡ 꿀팁 몇 개
- 후기 읽고 사
- 다른 거랑 비교해봐
- 반품 되는지 확인해
- 배송료 안 비싼지 봐

자, 이제 알겠지? 가서 사! 👋

#${data.productName} #정보 #꿀팁`,
            
            고급스러움: (data) => `[전문가 상품 분석 | ${data.productName}]

━━━━━━━━━━━━━━━━━━━━━━━━

【 시장 분석 】

상품명: ${data.productName}
분류: ${data.category}
가격대: ${data.price || '프리미엄 대역'}

【 제품 평가 】

${data.description || '현저히 우수한 품질을 갖춘 제품입니다.'}

【 타겟 분석 】

주요 수요층: ${data.targetAudience || '고급 소비자층'}

【 구매 결정 프로세스 】

1단계: 시장 조사
2단계: 제품 비교
3단계: 가격 분석
4단계: 리뷰 검토
5단계: 최종 구매

【 전문가 평가 】

이 상품은 해당 카테고리에서
높은 수준의 가치를 제공합니다.

━━━━━━━━━━━━━━━━━━━━━━━━

#${data.productName} #분석 #리뷰`
        },
        
        하이라이트: {
            친근함: (data) => `🌟 ${data.productName} 한눈에 보기!

📦 상품: ${data.productName}
🏷️ 카테고리: ${data.category}
💳 가격: ${data.price || '합리적'}

✨ 뭐가 좋은데?
${data.description || '정말 좋은 상품이에요!'}

😊 누가 추천해?
${data.targetAudience || '모두'}

👉 지금 확인해보세요!

#${data.productName} #강추 #클릭`,
            
            전문적: (data) => `✨ ${data.productName} 핵심 정보

⭐ 상품명: ${data.productName}
📦 카테고리: ${data.category}
💰 가격: ${data.price || '미정'}

📌 주요 특징:
${data.description || '우수한 품질의 제품'}

👥 추천 대상:
${data.targetAudience || '전체'}

🔗 자세히 보기: [링크]

#${data.productName} #정보 #추천`,
            
            유머러스: (data) => `🔥 ${data.productName} 꼭 사세요!

✔️ 상품: ${data.productName}
✔️ 종류: ${data.category}
✔️ 가격: ${data.price || '쌈'}

💥 왜 좋은데?
${data.description || '그냥 좋음'}

😎 누가 사?
${data.targetAudience || '너'}

👍 지금 당장 클릭!

#${data.productName} #강추`,
            
            고급스러움: (data) => `══════════════════════
💎 ${data.productName}
══════════════════════

상품: ${data.productName}
분류: ${data.category}
가격: ${data.price || '프리미엄'}

특징:
${data.description || '세련된 선택'}

대상:
${data.targetAudience || '고급 소비자'}

══════════════════════
더 알아보기 →

#${data.productName}`
        }
    },
    
    instagram: {
        릴스: {
            친근함: (data) => `[릴스 스크립트 - 친근함]

0-3초) 안녕! 오늘 진짜 좋은 거 발견했어!

3-10초) 바로 ${data.productName}인데...
${data.description || '정말 좋아!'}

10-18초) 가격도 착하고 ${data.targetAudience || '모두'} 추천해!

18-25초) 지금 확인해봐! 댓글 달아! 구독해! 💕

#${data.productName} #강추 #꿀 #지금`,
            
            전문적: (data) => `[릴스 스크립트 - 전문적]

도입(0-3초)
"안녕하세요! ${data.productName}을 소개합니다."

본론(3-15초)
${data.description || '높은 품질의 상품입니다.'}
카테고리: ${data.category}
가격대: ${data.price || '합리적'}

핵심(15-20초)
${data.targetAudience || '모든 고객'} 추천 상품

클로징(20-25초)
자세한 정보는 프로필 링크를 확인하세요!

#${data.productName} #추천 #정보`,
            
            유머러스: (data) => `[릴스 스크립트 - 유머러스]

0-3초) 어? 이게 뭐야? 존나 좋은데?? 🔥

3-12초) ${data.productName}!
${data.description || '진짜 개좋음!'}

12-20초) 가격? 쌈!! 🎉
누가 사? ${data.targetAudience || '누구나'}}!

20-25초) 지금 당장 사! 진짜! 안 사면 손해! 👍

#${data.productName} #꼭사세요 #강추`,
            
            고급스러움: (data) => `[릴스 스크립트 - 고급스러움]

오프닝(0-3초)
"당신의 라이프스타일을 한 단계 업그레이드하세요."

메인(3-15초)
${data.productName}
${data.description || '세련된 품질의 제품'}
${data.category} | ${data.price || '프리미엄'}

특징(15-20초)
${data.targetAudience || '품격 있는 선택을 하는 분들'}을 위한 상품

클로징(20-25초)
프로필 링크에서 자세히 확인하세요.

#${data.productName} #프리미엄 #라이프스타일`
        },
        
        캐러셀: {
            친근함: (data) => `[카드 1️⃣] 어? 이거 봤어?
${data.productName}! 🌟

[카드 2️⃣] 뭐 하는 건데?
${data.category}

[카드 3️⃣] 가격은?
${data.price || '착함'}

[카드 4️⃣] 뭐가 좋아?
${data.description || '다 좋아!'}

[카드 5️⃣] 누가 사?
${data.targetAudience || '너'}

지금 확인해! 💕`,
            
            전문적: (data) => `[카드 1️⃣] ${data.productName} 소개

[카드 2️⃣] 카테고리
${data.category}

[카드 3️⃣] 가격
${data.price || '미정'}

[카드 4️⃣] 주요 특징
${data.description || '우수한 제품'}

[카드 5️⃣] 추천 대상
${data.targetAudience || '전체'}

자세히 보기 →`,
            
            유머러스: (data) => `[카드 1️⃣] 헐!!! ${data.productName} 존나 좋음

[카드 2️⃣] 분류?
${data.category}

[카드 3️⃣] 비용?
${data.price || '쌈'}

[카드 4️⃣] 뭐 하는데?
${data.description || '개좋음'}

[카드 5️⃣] 지금 당장 사!
👉 링크 클릭!`,
            
            고급스러움: (data) => `[카드 1️⃣] 프리미엄
${data.productName}

[카드 2️⃣] 분류
${data.category}

[카드 3️⃣] 투자
${data.price || '프리미엄'}

[카드 4️⃣] 특징
${data.description || '세련된 선택'}

[카드 5️⃣] 대상
${data.targetAudience || '고급 소비자'}

자세히 보기 →`
        },
        
        스토리: {
            친근함: (data) => `[스토리 1️⃣]
어? 이거 봤어?
${data.productName}! 😍

[스토리 2️⃣]
${data.category}

[스토리 3️⃣]
${data.price || '합리적'}

[스토리 4️⃣]
정말 좋아:
${data.description || '강추!'}

[스토리 5️⃣]
지금 확인! 👉`,
            
            전문적: (data) => `[스토리 1️⃣]
${data.productName} 추천!

[스토리 2️⃣]
카테고리: ${data.category}
가격: ${data.price || '미정'}

[스토리 3️⃣]
특징:
${data.description || '우수한 제품'}

[스토리 4️⃣]
대상: ${data.targetAudience || '전체'}

[스토리 5️⃣]
지금 확인!
링크 클릭`,
            
            유머러스: (data) => `[스토리 1️⃣]
오 미 지
${data.productName}! 🔥

[스토리 2️⃣]
${data.category}

[스토리 3️⃣]
${data.price || '쌈'}

[스토리 4️⃣]
정말 좋음!
${data.description || '개좋음'}

[스토리 5️⃣]
지금 당장!`,
            
            고급스러움: (data) => `[스토리 1️⃣]
프리미엄 추천
${data.productName}

[스토리 2️⃣]
${data.category}

[스토리 3️⃣]
투자: ${data.price || '프리미엄'}

[스토리 4️⃣]
${data.description || '세련된 선택'}

[스토리 5️⃣]
자세히 보기`
        }
    }
};

// DOM 요소
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const toneCards = document.querySelectorAll('.tone-card');
const resultSection = document.getElementById('resultSection');
const helpModal = document.getElementById('helpModal');
const historyModal = document.getElementById('historyModal');

// 로컬스토리지 키
const HISTORY_KEY = 'adContentHistory';

// 탭 네비게이션
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;
        
        // 활성 탭 업데이트
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// 톤 카드 선택
toneCards.forEach(card => {
    card.addEventListener('click', () => {
        toneCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        card.querySelector('input[type="radio"]').checked = true;
    });
});

// 빠른 생성
function generateQuickContent() {
    const productName = document.getElementById('quickProductName').value.trim();
    const category = document.getElementById('quickCategory').value;
    const price = document.getElementById('quickPrice').value;
    const tone = document.querySelector('input[name="quickTone"]:checked').value;
    const naver = document.getElementById('quickNaver').checked;
    const insta = document.getElementById('quickInsta').checked;

    if (!productName || !category) {
        alert('⚠️ 상품명과 카테고리는 필수입니다!');
        return;
    }

    if (!naver && !insta) {
        alert('⚠️ 최소한 하나의 플랫폼을 선택해주세요!');
        return;
    }

    const data = {
        productName,
        category,
        price,
        description: '',
        targetAudience: ''
    };

    generateAndDisplay(data, tone, naver, insta, ['후기'], ['릴스']);
}

// 고급 생성
function generateAdvancedContent() {
    const productName = document.getElementById('quickProductName').value.trim();
    const category = document.getElementById('quickCategory').value;
    const price = document.getElementById('quickPrice').value;
    const description = document.getElementById('advDescription').value;
    const targetAudience = document.getElementById('advTargetAudience').value;
    const tone = document.querySelector('input[name="quickTone"]:checked').value;
    
    const naverFormats = Array.from(document.querySelectorAll('.advNaverFormat:checked')).map(el => el.value);
    const instaFormats = Array.from(document.querySelectorAll('.advInstaFormat:checked')).map(el => el.value);

    if (!productName || !category) {
        alert('⚠️ 상품명과 카테고리는 필수입니다!');
        return;
    }

    if (naverFormats.length === 0 && instaFormats.length === 0) {
        alert('⚠️ 최소한 하나의 형식을 선택해주세요!');
        return;
    }

    const data = {
        productName,
        category,
        price,
        description,
        targetAudience
    };

    generateAndDisplay(data, tone, naverFormats.length > 0, instaFormats.length > 0, naverFormats, instaFormats);
}

// 템플릿 사용
function useTemplate(category) {
    document.getElementById('quickCategory').value = category;
    document.querySelector('.tab-btn[data-tab="quick"]').click();
    document.getElementById('quickProductName').focus();
}

// 콘텐츠 생성 및 표시
function generateAndDisplay(data, tone, showNaver, showInsta, naverFormats, instaFormats) {
    let naverHtml = '';
    let instaHtml = '';

    // 네이버 콘텐츠
    if (showNaver) {
        naverHtml = '<div style="margin-bottom: 20px;">';
        naverFormats.forEach(format => {
            const template = contentTemplates.naver[format][tone];
            if (template) {
                const content = template(data);
                naverHtml += `<div style="margin-bottom: 15px;"><strong>[${format} 형식]</strong><br>${content.replace(/\n/g, '<br>')}</div>`;
            }
        });
        naverHtml += '</div>';
        
        document.getElementById('naverResult').innerHTML = `<div class="result-text">${naverHtml}</div>`;
        document.getElementById('naverResult').parentElement.style.display = 'block';
    } else {
        document.getElementById('naverResult').parentElement.style.display = 'none';
    }

    // 인스타 콘텐츠
    if (showInsta) {
        instaHtml = '<div style="margin-bottom: 20px;">';
        instaFormats.forEach(format => {
            const template = contentTemplates.instagram[format][tone];
            if (template) {
                const content = template(data);
                instaHtml += `<div style="margin-bottom: 15px;"><strong>[${format} 형식]</strong><br>${content.replace(/\n/g, '<br>')}</div>`;
            }
        });
        instaHtml += '</div>';
        
        document.getElementById('instaResult').innerHTML = `<div class="result-text">${instaHtml}</div>`;
        document.getElementById('instaResult').parentElement.style.display = 'block';
    } else {
        document.getElementById('instaResult').parentElement.style.display = 'none';
    }

    // 히스토리 저장
    saveToHistory({
        productName: data.productName,
        tone: tone,
        timestamp: new Date().toLocaleString('ko-KR')
    });

    // 결과 표시
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// 클립보드 복사
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.querySelector('.result-text').innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('✅ 복사되었습니다!');
    }).catch(() => {
        alert('❌ 복사에 실패했습니다.');
    });
}

// 다운로드
function downloadContent() {
    let content = '📝 광고 콘텐츠\n\n';
    
    const naverText = document.getElementById('naverResult')?.parentElement?.style.display !== 'none' 
        ? document.getElementById('naverResult').querySelector('.result-text').innerText 
        : '';
    const instaText = document.getElementById('instaResult')?.parentElement?.style.display !== 'none' 
        ? document.getElementById('instaResult').querySelector('.result-text').innerText 
        : '';

    if (naverText) content += '【 네이버 블로그 】\n' + naverText + '\n\n';
    if (instaText) content += '【 인스타그램 】\n' + instaText;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `광고콘텐츠_${new Date().toLocaleString('ko-KR').replace(/[/:]/g, '-')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 공유
function shareContent() {
    const text = '광고 콘텐츠 생성기로 만든 광고입니다!';
    
    if (navigator.share) {
        navigator.share({
            title: '광고 콘텐츠 생성기',
            text: text,
            url: window.location.href
        });
    } else {
        alert('✅ 링크: ' + window.location.href);
    }
}

// 새로 만들기
function createNew() {
    document.getElementById('quickProductName').value = '';
    document.getElementById('quickCategory').value = '';
    document.getElementById('quickPrice').value = '';
    document.getElementById('advDescription').value = '';
    document.getElementById('advTargetAudience').value = '';
    resultSection.style.display = 'none';
    document.querySelector('.tab-btn[data-tab="quick"]').click();
    document.getElementById('quickProductName').focus();
}

// 결과 닫기
function closeResult() {
    resultSection.style.display = 'none';
}

// 도움말
function showHelp() {
    helpModal.style.display = 'flex';
}

function closeHelp() {
    helpModal.style.display = 'none';
}

// 히스토리
function saveToHistory(item) {
    let history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    history.unshift(item);
    if (history.length > 10) history.pop();
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function showHistory() {
    const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    const historyList = document.getElementById('historyList');
    
    if (history.length === 0) {
        historyList.innerHTML = '<p style="color: #999; text-align: center;">📋 아직 생성한 콘텐츠가 없습니다.</p>';
    } else {
        historyList.innerHTML = history.map((item, idx) => `
            <div style="padding: 12px; border-bottom: 1px solid #e9ecef; cursor: pointer;" 
                 onclick="loadFromHistory(${idx})">
                <strong>${item.productName}</strong><br>
                <small style="color: #999;">${item.tone} | ${item.timestamp}</small>
            </div>
        `).join('');
    }
    
    historyModal.style.display = 'flex';
}

function closeHistory() {
    historyModal.style.display = 'none';
}

function loadFromHistory(idx) {
    const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    if (history[idx]) {
        document.getElementById('quickProductName').value = history[idx].productName;
        document.querySelector('input[name="quickTone"][value="' + history[idx].tone + '"]').checked = true;
        closeHistory();
        document.querySelector('.tab-btn[data-tab="quick"]').click();
    }
}

// 모달 클릭 시 닫기
window.addEventListener('click', (e) => {
    if (e.target === helpModal) closeHelp();
    if (e.target === historyModal) closeHistory();
});
