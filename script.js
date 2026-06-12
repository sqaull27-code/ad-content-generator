// 확장된 콘텐츠 템플릿
const contentTemplates = {
    naver: {
        후기: {
            친근함: (data) => `[${data.productName} 솔직한 후기]

안녕하세요! 😊
오늘은 저도 많이 사용하는 ${data.productName}을(를) 소개해드릴게요.

【 상품 정보 】
• 상품명: ${data.productName}
• 카테고리: ${data.category}
• 가격: ${data.price || '미정'}

【 사용 후 느낀 점 】
정말 좋더라고요! 😍
${data.description || '특별한 매력이 있는 제품입니다.'}

【 추천 대상 】
${data.targetAudience || '모든 분'} 이라면 후회 없는 선택이 될 것 같아요!

【 최종 평가 】
⭐⭐⭐⭐⭐ 강력 추천합니다!

#${data.productName} #후기 #추천 #${data.category}`,

            전문적: (data) => `[${data.productName} 상세 리뷰]

안녕하세요.
오늘은 ${data.category} 분야의 ${data.productName}을(를) 소개해드리겠습니다.

【 기본 정보 】
• 상품명: ${data.productName}
• 카테고리: ${data.category}
• 가격대: ${data.price || '미정'}

【 제품 분석 】
${data.description || '우수한 품질과 기능성을 갖춘 제품입니다.'}

【 사용 대상 】
${data.targetAudience || '광범위한 사용자'} 에게 적합한 제품입니다.

【 구매 가이드 】
1. 다양한 옵션 확인하기
2. 가격 비교하기
3. 사용자 후기 참고하기
4. 배송 및 반품 정책 확인하기

【 결론 】
종합적으로 이 제품은 충분히 고려할 가치가 있습니다.
자세한 정보는 링크를 통해 확인하세요.

#${data.productName} #제품리뷰 #상세분석`,

            유머러스: (data) => `[${data.productName}, 이거 진짜 꿀!]

어? ${data.productName} 이거 봤어? 아직 안 봤다고?? 🔥

【 상품 정보 】
- 이름: ${data.productName}
- 종류: ${data.category}
- 가격: ${data.price || '착함'}

【 내 생각 】
${data.description || '정말 좋아! 진짜!'}
정말 이거 사면 후회 없음. 100프로!

【 누가 사면 좋을까? 】
${data.targetAudience || '너'} (특히 너!!)

【 한 줄 평 】
존나 좋다. 끝.

지금 당장 링크 클릭하고 사세요! 👍

#${data.productName} #꿀 #강추 #당장사`,

            고급스러움: (data) => `[프리미엄 라이프스타일 | ${data.productName}]

≡ 품격 있는 선택

${data.productName}

이는 단순한 구매가 아닙니다.
그것은 라이프스타일의 선택입니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

【 핵심 가치 】
${data.description || '세련된 디자인과 우수한 기능성'}

【 투자 대상 】
${data.category}
가격대: ${data.price || '프리미엄'}

【 추천 대상 】
${data.targetAudience || '품질을 아는 분'}

【 평가 】
이 제품은 진정한 가치를 지니고 있습니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

더 자세한 정보를 원하신다면 링크를 확인하세요.

#${data.productName} #프리미엄 #라이프스타일 #선택`
        },

        정보: {
            친근함: (data) => `[${data.productName} 구매 가이드]

안녕하세요! 👋
오늘은 ${data.productName}을(를) 제대로 선택하는 방법을 알려드릴게요!

【 상품 소개 】
${data.productName}는 ${data.category} 상품으로, 많은 사람들이 찾는 제품입니다.

【 주요 특징 】
✓ ${data.description || '좋은 품질'}
✓ 합리적인 가격
✓ 신뢰할 수 있는 상품

【 이런 분들에게 추천! 】
📌 ${data.targetAudience || '모든 분'}

【 구매 팁 】
1️⃣ 여러 제품 비교하기
2️⃣ 실제 사용자 후기 읽어보기
3️⃣ 가격대 확인하기
4️⃣ 배송 기간 확인하기
5️⃣ 반품 정책 확인하기

더 자세한 정보는 아래 링크에서 확인하세요! 😊

#${data.productName} #가이드 #구매팁`,

            전문적: (data) => `[${data.productName} 상품 분석]

【 상품 개요 】
상품명: ${data.productName}
카테고리: ${data.category}
가격대: ${data.price || '미정'}

【 제품 분석 】
${data.description || '다양한 기능을 갖춘 제품'}

【 시장 평가 】
현재 ${data.category} 시장에서 주목할 만한 제품입니다.

【 사용자층 】
주요 대상: ${data.targetAudience || '광범위한 사용층'}

【 구매 의사결정 프로세스 】

1단계: 필요성 분석
 - 정말 필요한가?
 - 대체 상품이 있는가?

2단계: 기능 검토
 - 주요 기능 확인
 - 추가 기능 검토

3단계: 가격 비교
 - 최저가 확인
 - 품질 대비 가격

4단계: 후기 참고
 - 실제 사용자 평가
 - 장단점 파악

5단계: 구매 결정
 - 최종 확인
 - 결제

【 전문가 의견 】
이 제품은 충분히 검토할 가치가 있는 옵션입니다.

#${data.productName} #분석 #가이드`,

            유머러스: (data) => `[${data.productName} 이것만 알면 끝!]

자, 이제 ${data.productName}에 대해 쉽게 설명해드릴게! 🎯

【 이게 뭐예요? 】
${data.description || '좋은 거!'}

【 얼마예요? 】
${data.price || '착함'}

【 누가 사요? 】
${data.targetAudience || '너도 나도'}

【 어디서 사요? 】
링크 클릭하면 돼!

【 장점 】
✓ 좋다
✓ 싸다
✓ 받을 수 있다

【 단점 】
❌ 그만 사세요 (다 팔릴 수도)

더 복잡하게 생각할 필요 없어! 그냥 사!

#${data.productName} #쌩이면 #언제사 #지금사`,

            고급스러움: (data) => `[전문가 가이드 | ${data.productName}]

━━━━━━━━━━━━━━━━━━━━━━━━━━━

【 마켓 리포트 】

상품: ${data.productName}
분류: ${data.category}
시장가: ${data.price || '프리미엄 대역'}

【 제품 평가 】

${data.description || '고급 기능과 우수한 품질'}

【 타겟 분석 】

주요 사용층: ${data.targetAudience || '고객층'}

【 구매 의사결정 매트릭스 】

✓ 필요성: 높음
✓ 품질: 우수
✓ 가성비: 적절
✓ 신뢰도: 높음

【 최종 평가 】

본 제품은 해당 카테고리에서
고려할 가치 있는 선택지입니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

#${data.productName} #프로분석 #추천`
        },

        하이라이트: {
            친근함: (data) => `⭐ ${data.productName} 한눈에 보기!

📦 상품: ${data.productName}
📂 카테고리: ${data.category}
💰 가격: ${data.price || '확인해보세요!'}

✨ 좋은 점:
${data.description || '품질 좋고 가격도 착함!'}

👥 누가 추천해?
${data.targetAudience || '모두!'}

⭐⭐⭐⭐⭐ 5점 만점!

👉 지금 확인해보세요!

#${data.productName} #추천 #강추`,

            전문적: (data) => `✨ ${data.productName} 정보 요약

📋 기본 정보
상품: ${data.productName}
분류: ${data.category}
가격: ${data.price || '미정'}

📌 주요 특징
${data.description || '우수한 품질의 제품'}

👥 추천 대상
${data.targetAudience || '전체'}

⭐⭐⭐⭐⭐ 높은 평가

정보 보기 → [링크]

#${data.productName} #정보 #추천`,

            유머러스: (data) => `🔥 ${data.productName} 꼭 사세요!

✔️ 상품: ${data.productName}
✔️ 종류: ${data.category}
✔️ 가격: ${data.price || '싼데'}

왜 좋아?
${data.description || '그냥 좋아!'}

너? 이거 사야 돼!
${data.targetAudience || '누구나'}

👍 지금 당장 클릭!

#${data.productName} #강추 #당장`,

            고급스러움: (data) => `━━━━━━━━━━━━━━━━━━━━━
💎 ${data.productName}
━━━━━━━━━━━━━━━━━━━━━

상품: ${data.productName}
분류: ${data.category}
투자: ${data.price || '프리미엄'}

특징:
${data.description || '세련된 품질'}

대상:
${data.targetAudience || '고객'}

━━━━━━━━━━━━━━━━━━━━━

자세히 보기 →

#${data.productName} #선택`
        }
    },

    instagram: {
        릴스: {
            친근함: (data) => `[릴스 스크립트 - 친근함]

🎬 0-3초) 안녕! 오늘 진짜 좋은 거 발견했어! 😍

📱 3-10초) 바로 ${data.productName}인데...
${data.description || '진짜 좋아!'}

✨ 10-18초) 가격도 생각보다 착하고
${data.targetAudience || '모두'} 추천할 수 있을 것 같아!

🙌 18-25초) 지금 확인해봐! 링크는 프로필에!
구독하고 알림 켜! 💕

#${data.productName} #강추 #후기 #추천`,

            전문적: (data) => `[릴스 스크립트 - 전문적]

📢 0-3초) 안녕하세요. 오늘 추천할 상품이 있습니다.

🎯 3-10초) ${data.productName}
${data.description || '높은 품질의 제품입니다.'}

💼 10-18초) 카테고리: ${data.category}
가격: ${data.price || '확인해주세요'}

🔗 18-25초) 더 자세한 정보는 링크에서 확인하세요.

#${data.productName} #정보 #추천 #리뷰`,

            유머러스: (data) => `[릴스 스크립트 - 유머러스]

🔥 0-3초) 어? 이거 봤어? 존나 좋은데??

😂 3-10초) ${data.productName}!
${data.description || '진짜 개꿀!'}

💥 10-18초) 가격도 싸고
${data.targetAudience || '누구나'}} 추천!

🎉 18-25초) 지금 사세요! 진짜!
링크 클릭 → [프로필]

#${data.productName} #꿀 #강추 #지금사`,

            고급스러움: (data) => `[릴스 스크립트 - 고급스러움]

✨ 0-3초) 당신의 라이프스타일을 한 단계 업그레이드하세요.

🎨 3-10초) ${data.productName}
${data.description || '세련된 선택'}

💎 10-18초) ${data.category}
투자 가치: ${data.price || '프리미엄'}

🌟 18-25초) ${data.targetAudience || '고객'}}을 위한 선택
프로필 링크에서 확인하세요.

#${data.productName} #프리미엄 #라이프스타일 #선택`
        },

        캐러셀: {
            친근함: (data) => `[카드 1️⃣] 어? 이거 봤어?
${data.productName}! 😍

[카드 2️⃣] 뭐 하는 건데?
${data.category}

[카드 3️⃣] 가격은?
${data.price || '착함!'}

[카드 4️⃣] 뭐가 좋아?
${data.description || '다 좋아!'}

[카드 5️⃣] 누가 추천해?
${data.targetAudience || '나도 너도'}

[카드 6️⃣] 지금 확인해! 💕`,

            전문적: (data) => `[카드 1️⃣] ${data.productName} 소개

[카드 2️⃣] 카테고리
${data.category}

[카드 3️⃣] 가격
${data.price || '미정'}

[카드 4️⃣] 특징
${data.description || '우수한 품질'}

[카드 5️⃣] 추천 대상
${data.targetAudience || '전체'}

[카드 6️⃣] 자세히 보기`,

            유머러스: (data) => `[카드 1️⃣] 헐!!! ${data.productName}
존나 좋음

[카드 2️⃣] 종류?
${data.category}

[카드 3️⃣] 가격?
${data.price || '싼데'}

[카드 4️⃣] 뭐 하는데?
${data.description || '좋아!'}

[카드 5️⃣] 지금 당장 사!
👉 링크

[카드 6️⃣] 안 사면 손해!`,

            고급스러움: (data) => `[카드 1️⃣] 프리미엄
${data.productName}

[카드 2️⃣] 분류
${data.category}

[카드 3️⃣] 투자
${data.price || '프리미엄'}

[카드 4️⃣] 특징
${data.description || '세련된 품질'}

[카드 5️⃣] 대상
${data.targetAudience || '고객'}

[카드 6️⃣] 자세히 보기`
        },

        스토리: {
            친근함: (data) => `[스토리 1️⃣] 어? 이거 봤어?
${data.productName}! 😍

[스토리 2️⃣] 뭐예요?
${data.category}

[스토리 3️⃣] 가격은?
${data.price || '착함!'}

[스토리 4️⃣] 좋은 점?
${data.description || '다 좋아!'}

[스토리 5️⃣] 추천!
${data.targetAudience || '누구나'}

[스토리 6️⃣] 프로필 링크 클릭! 💕`,

            전문적: (data) => `[스토리 1️⃣]
${data.productName} 소개

[스토리 2️⃣]
카테고리: ${data.category}

[스토리 3️⃣]
가격: ${data.price || '미정'}

[스토리 4️⃣]
특징: ${data.description || '우수함'}

[스토리 5️⃣]
대상: ${data.targetAudience || '전체'}

[스토리 6️⃣]
자세히 보기 →`,

            유머러스: (data) => `[스토리 1️⃣]
오 미 지
${data.productName}! 🔥

[스토리 2️⃣]
${data.category}

[스토리 3️⃣]
${data.price || '싼데'}

[스토리 4️⃣]
정말 좋음!
${data.description || '개꿀!'}

[스토리 5️⃣]
지금 당장!

[스토리 6️⃣]
링크 클릭!`,

            고급스러움: (data) => `[스토리 1️⃣]
프리미엄 선택
${data.productName}

[스토리 2️⃣]
${data.category}

[스토리 3️⃣]
투자: ${data.price || '프리미엄'}

[스토리 4️⃣]
${data.description || '세련된 품질'}

[스토리 5️⃣]
대상: ${data.targetAudience || '고객'}

[스토리 6️⃣]
자세히 보기`
        }
    }
};

// DOM 요소
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const toneOptions = document.querySelectorAll('.tone-option');
const resultSection = document.getElementById('resultSection');
const helpModal = document.getElementById('helpModal');
const historyModal = document.getElementById('historyModal');

const HISTORY_KEY = 'adContentHistory';

// 탭 이벤트
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// 톤 옵션 클릭
toneOptions.forEach(option => {
    option.addEventListener('click', () => {
        toneOptions.forEach(o => o.classList.remove('active'));
        option.classList.add('active');
        option.querySelector('input[type="radio"]').checked = true;
    });
});

// 빠른 생성
function generateQuickContent() {
    const productName = document.getElementById('quickProductName').value.trim();
    const category = document.getElementById('quickCategory').value;
    const price = document.getElementById('quickPrice').value;
    const description = document.getElementById('quickDescription').value;
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
        description,
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

    if (showNaver) {
        naverHtml = '<div>';
        naverFormats.forEach(format => {
            const template = contentTemplates.naver[format]?.[tone];
            if (template) {
                const content = template(data);
                naverHtml += `<div style="margin-bottom: 20px;"><strong>📖 ${format} 형식</strong><br>${content.replace(/\n/g, '<br>')}</div>`;
            }
        });
        naverHtml += '</div>';
        
        document.getElementById('naverResult').innerHTML = `<div class="result-text">${naverHtml}</div>`;
        document.getElementById('naverResult').parentElement.style.display = 'block';
    } else {
        document.getElementById('naverResult').parentElement.style.display = 'none';
    }

    if (showInsta) {
        instaHtml = '<div>';
        instaFormats.forEach(format => {
            const template = contentTemplates.instagram[format]?.[tone];
            if (template) {
                const content = template(data);
                instaHtml += `<div style="margin-bottom: 20px;"><strong>📸 ${format} 형식</strong><br>${content.replace(/\n/g, '<br>')}</div>`;
            }
        });
        instaHtml += '</div>';
        
        document.getElementById('instaResult').innerHTML = `<div class="result-text">${instaHtml}</div>`;
        document.getElementById('instaResult').parentElement.style.display = 'block';
    } else {
        document.getElementById('instaResult').parentElement.style.display = 'none';
    }

    saveToHistory({
        productName: data.productName,
        tone: tone,
        timestamp: new Date().toLocaleString('ko-KR')
    });

    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// 복사
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
    document.getElementById('quickDescription').value = '';
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

// 폼 초기화
function resetQuickForm() {
    document.getElementById('quickProductName').value = '';
    document.getElementById('quickCategory').value = '';
    document.getElementById('quickPrice').value = '';
    document.getElementById('quickDescription').value = '';
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
        
        toneOptions.forEach(o => o.classList.remove('active'));
        document.querySelector(`.tone-option[data-tone="${history[idx].tone}"]`).classList.add('active');
        
        closeHistory();
        document.querySelector('.tab-btn[data-tab="quick"]').click();
        document.getElementById('quickProductName').focus();
    }
}

// 모달 외부 클릭
window.addEventListener('click', (e) => {
    if (e.target === helpModal) closeHelp();
    if (e.target === historyModal) closeHistory();
});
