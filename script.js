let vocabData = [];
let currentLevel = 'all'; // Biến lưu trữ cấp độ đang chọn

async function init() {
    const res = await fetch('data.json');
    vocabData = await res.json();
    renderCards(vocabData);
}

// Hàm phát âm
function speakText(text) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'ja-JP';
    msg.rate = 0.9;
    window.speechSynthesis.speak(msg);
}

// Hàm hiển thị thẻ
function renderCards(data) {
    const grid = document.getElementById('cardGrid');
    document.getElementById('count').innerText = data.length;
    
    grid.innerHTML = data.map(item => `
        <div class="card" onclick="handleCardClick(this, '${item.kanji}')">
            <div class="card-inner">
                <div class="front">
                    <div class="level level-${item.level.toLowerCase()}">${item.level}</div>
                    <h2>${item.kanji}</h2>
                    <p class="reading">${item.reading}</p>
                    <div class="audio-icon">🔊 Nghe</div>
                </div>
                <div class="back back-${item.level.toLowerCase()}">
                    <h3>Ý nghĩa:</h3>
                    <p style="font-size: 1.3rem;">${item.meaning}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function handleCardClick(cardElement, textToSpeak) {
    cardElement.classList.toggle('is-flipped');
    if (cardElement.classList.contains('is-flipped')) {
        speakText(textToSpeak);
    }
}

// HÀM QUAN TRỌNG: Lọc theo cấp độ khi bấm nút
function filterByLevel(level) {
    currentLevel = level;
    
    // Đổi trạng thái màu sắc nút bấm
    const buttons = document.querySelectorAll('.btn-filter');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText === (level === 'all' ? 'Tất cả' : level)) {
            btn.classList.add('active');
        }
    });

    applyFilters();
}

// Hàm tổng hợp cả Tìm kiếm và Lọc cấp độ
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = vocabData.filter(v => {
        const matchesSearch = v.kanji.includes(searchTerm) || v.meaning.toLowerCase().includes(searchTerm);
        const matchesLevel = (currentLevel === 'all' || v.level === currentLevel);
        return matchesSearch && matchesLevel;
    });
    
    renderCards(filtered);
}

// Lắng nghe sự kiện gõ ô tìm kiếm
document.getElementById('searchInput').addEventListener('input', applyFilters);

init();