// 콘텐츠 템플릿 (기존과 동일하지만 더 긴 문구로 확장)
const contentTemplates = {
    naver: {
        후기: {
            친근함: (data) => `[${data.productName} 솔직한 후기]

안녕하세요! 😊
오늘은 정말 좋은 상품을 소개해드리려고 합니다.
저도 요즘 많이 사용하는 ${data.productName}이에요!

【 상품 정보 】
- 상품명: ${data.productName}
- 카테고리: ${data.category}
- 가격대: ${data.price || '합리적인 가격대'}

【 사용 후 느낀 점 】
정말 좋더라고요! 😍

${data.description || '품질이 정말 우수합니다.'}

처음에는 약간 의심했지만, 써보니까 정말 좋네요!
가격대비 정말 훌륭한 상품이라고 생각합니다.

【 추천 대상 】
특히 ${data.targetAudience || '많은 분들'}에게 강렬 추천합니다!
이 상품의 매력을 느낄 수 있을 거라고 확신해요.

【 최종 평가 】
⭐⭐⭐⭐⭐ 강렬 추천합니다!

혹시 아직 ${data.productName}을 경험하지 못했다면,
지금 바로 확인해보세요!
후회 없는 선택이 될 거예요!

#${data.productName} #후기 #추천 #${data.category}`,

            전문적: (data) => `[${data.productName} 상세 리뷰]

안녕하세요.
오늘은 ${data.category} 분야의 ${data.productName}을(를) 상세히 리뷰해드리겠습니다.

【 기본 정보 】
• 상품명: ${data.productName}
• 카테고리: ${data.category}
• 가격대: ${data.price || '미정'}

【 제품 분석 】
${data.description || '우수한 품질과 기능성을 갖춘 제품입니다.'}

이 제품은 해당 카테고리에서 주목할 만한 선택지입니다.
기능성과 내구성 면에서 모두 우수합니다.

【 사용자층 】
주요 대상: ${data.targetAudience || '광범위한 사용자층'}
이 제품은 다양한 연령대와 성별의 사람들에게 적합합니다.

【 가격 대비 평가 】
${data.price}대의 가격대에서 이 정도의 품질을 갖춘 제품은 드뭅니다.
투자 가치가 충분하다고 평가합니다.

【 유지보수 및 사후관리 】
제품의 품질 유지가 우수합니다.
 A/S와 반품 정책도 체계적입니다.

【 최종 평가 】
종합적으로 이 제품은 충분히 고려할 가치가 있습니다.
신중한 선택이 필요하다면 추천할 만한 옵션입니다.

#${data.productName} #리뷰 #상세분석 #${data.category}`,

            유머러스: (data) => `[${data.productName}, 이거 진짜 꿀!]

어? ${data.productName} 이거 뭐야?
아직 안 봤다고? 진짜 손해인데?

🔥 제 생각:
${data.description || '정말 좋아! 진짜!'}
정말 이거 사람을 불감증으로 만들 정도야!
처음엔 별 기대 안 했는데... 어라? 이게 뭐지?

"와, 이거 진짜 좋네?"
이게 제 첫 느낌이었어요!

【 가격 】
${data.price}? 이 정도면 착한 가격이지!

【 누가 사면 좋을까? 】
${data.targetAudience || '누구나 다'} (진짜 누구나!)

【 결론 】
지금 당장 사! 진짜! 안 사면 손해!
인생에서 후회 없는 구매가 될 거야!

⭐⭐⭐⭐⭐ 만점!

더 이상 뭘 설명해야 하나?
그냥 사! 이게 정답!

#${data.productName} #강추 #이거사세요 #꿀상품`,

            고급스러움: (data) => `[프리미엄 라이프스타일 | ${data.productName}]

≡ 품격 있는 선택의 기준

${data.productName}

이것은 단순한 구매가 아닙니다.
그것은 라이프스타일의 선택입니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【 핵심 가치 】
${data.description || '세련된 디자인과 우수한 기능성'}

이 제품은 단순히 기능만 우수한 것이 아닙니다.
품질과 디자인이 완벽하게 조화를 이루고 있습니다.

【 우아한 투자 】
${data.price}

가격은 가치를 반영합니다.
이 정도의 품질을 원한다면 합리적인 투자입니다.

【 추천 대상 】
${data.targetAudience || '품격 있는 선택을 하는 분들'}의 선택

진정한 질의 가치를 아는 분들을 위한 제품입니다.

【 라이프스타일 평가 】
이 제품을 선택하는 것은:
✓ 감각적인 선택
✓ 영리한 투자
✓ 자신감 있는 결정

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

당신의 라이프스타일을 한 단계 업그레이드할 준비가 되셨나요?

#${data.productName} #프리미엄 #라이프스타일 #선택`
        }
    },
    instagram: {
        릴스: {
            친근함: (data) => `[릴스 스크립트 - 친근함]

🎬 도입부 (0-3초)
"안녕! 오늘 진짜 좋은 거 발견했어! 😊"

📱 본론 (3-15초)
"바로 ${data.productName}인데..."
"${data.description || '정말 좋아!'}"

"가격도 ${data.price}이고"
"누가 뭐래도 강추야!"

💡 핵심 (15-20초)
"이거 사면 진짜 후회 안 한다!"
"특히 ${data.targetAudience || '모두'}}에게 추천!"

🎯 클로징 (20-25초)
"지금 확인해보세요!"
"링크는 프로필에!"
"구독 부탁해요! 💕"
"다음 영상도 봐주세요!"

#${data.productName} #추천 #강추 #후기`,

            전문적: (data) => `[릴스 스크립트 - 전문적]

📢 도입부 (0-3초)
"안녕하세요. 오늘 추천할 상품이 있습니다."

📊 본론 (3-15초)
"${data.productName}이라는 제품입니다."

"주요 특징은:"
"${data.description || '우수한 품질'}"

"카테고리는 ${data.category}이고"
"가격대는 ${data.price}입니다."

📈 핵심 (15-20초)
"이 제품의 장점은 다양합니다."
"특히 ${data.targetAudience || '많은 사람들'}}에게 적합합니다."

🔗 클로징 (20-25초)
"더 자세한 정보는 프로필 링크를 참고하세요."
"구독 및 좋아요 부탁드립니다."

#${data.productName} #정보 #추천 #리뷰`,

            유머러스: (data) => `[릴스 스크립트 - 유머러스]

😂 0-3초)
"어? ${data.productName} 이거 뭐야?"
"아직 안 봤다고? 손해인데!"

🔥 3-10초)
"${data.description || '진짜 좋아!'}"
"가격? ${data.price}}도 싸더!"
"누가 사? 누구나 사!"

💥 10-18초)
"진짜 이거 사면 후회 안 함"
"100프로! 진짜!"
"안 사면 손해!"

🎉 18-25초)
"지금 당장 구매 버튼 눌러야 함!"
"진짜 진짜!"
"링크 클릭! 지금!"

#${data.productName} #꿀 #강추 #지금사세요`,

            고급스러움: (data) => `[릴스 스크립트 - 고급스러움]

✨ 0-3초)
"당신의 라이프스타일을 한 단계 업그레이드할 준비가 되셨나요?"

🎨 3-10초)
"${data.productName}"
"${data.description || '세련된 품질의 제품'}}"

💎 10-18초)
"카테고리: ${data.category}}"
"투자 가치: ${data.price}}"
"대상: ${data.targetAudience || '선택의 안목이 있는 분들'}}"

🌟 18-25초)
"프로필 링크에서 더 알아보세요."
"당신의 선택이 당신을 정의합니다."
"구독 부탁드립니다."

#${data.productName} #프리미엄 #라이프스타일 #선택`
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
const quickImageInput = document.getElementById('quickImage');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');

const HISTORY_KEY = 'adContentHistory';

// 이미지 업로드 처리
quickImageInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImg.src = e.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// 이미지 제거
function removeImage() {
    quickImageInput.value = '';
    imagePreview.style.display = 'none';
    previewImg.src = '';
}

// 드래그 앤 드롭
const uploadArea = document.querySelector('.image-upload-area');
if (uploadArea) {
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.background = 'rgba(102, 126, 234, 0.15)';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.background = 'rgba(102, 126, 234, 0.05)';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.background = 'rgba(102, 126, 234, 0.05)';
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            quickImageInput.files = files;
            const event = new Event('change', { bubbles: true });
            quickImageInput.dispatchEvent(event);
        }
    });
}

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

// 톤 선택
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
    const imageUrl = previewImg.src;

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

    generateAndDisplay(data, tone, naver, insta, ['후기'], ['릴스'], imageUrl);
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
    const imageUrl = previewImg.src;

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

    generateAndDisplay(data, tone, naverFormats.length > 0, instaFormats.length > 0, naverFormats, instaFormats, imageUrl);
}

// 템플릿 사용
function useTemplate(category) {
    document.getElementById('quickCategory').value = category;
    document.querySelector('.tab-btn[data-tab="quick"]').click();
    document.getElementById('quickProductName').focus();
}

// 콘텐츠 생성 및 표시
function generateAndDisplay(data, tone, showNaver, showInsta, naverFormats, instaFormats, imageUrl) {
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

    // 이미지 표시
    if (imageUrl) {
        document.getElementById('resultImage').src = imageUrl;
        document.getElementById('resultImageSection').style.display = 'block';
    } else {
        document.getElementById('resultImageSection').style.display = 'none';
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
    removeImage();
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
    removeImage();
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
