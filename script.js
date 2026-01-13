let vocabData = [];
let currentLevel = 'all';
let currentStatusFilter = 'all'; // 'all', 'learned', 'unlearned'
let readSpeed = 0.8;
let learnedList = JSON.parse(localStorage.getItem('jlpt_learned')) || []; // Lưu danh sách kanji đã thuộc
let currentMode = 'study';

async function init() {
    const res = await fetch('data.json');
    vocabData = await res.json();
    renderCards(vocabData);
}

function speakText(text) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance();
    msg.text = text; msg.lang = 'ja-JP'; msg.rate = readSpeed;
    window.speechSynthesis.speak(msg);
}

// HIỂN THỊ THẺ
function renderCards(data) {
    const grid = document.getElementById('cardGrid');
    let displayData = filterByStatus(data);
    document.getElementById('count').innerText = displayData.length;
    
    grid.innerHTML = displayData.map(item => {
        const isLearned = learnedList.includes(item.kanji);
        return `
        <div class="card ${isLearned ? 'learned' : 'unlearned'}">
            <div class="status-toggle" onclick="toggleStatus(event, '${item.kanji}')">
                ${isLearned ? '✅' : '❌'}
            </div>
            <div class="card-inner" onclick="handleCardClick(this, '${item.kanji}')">
                <div class="front">
                    <div class="level level-${item.level.toLowerCase()}">${item.level}</div>
                    <h2>${item.kanji}</h2>
                    <p class="reading">${item.reading}</p>
                </div>
                <div class="back back-${item.level.toLowerCase()}">
                    <p>${item.meaning}</p>
                </div>
            </div>
        </div>
    `}).join('');
}

// XỬ LÝ THUỘC / CHƯA THUỘC
function toggleStatus(event, kanji) {
    event.stopPropagation();
    if (learnedList.includes(kanji)) {
        learnedList = learnedList.filter(k => k !== kanji);
    } else {
        learnedList.push(kanji);
    }
    localStorage.setItem('jlpt_learned', JSON.stringify(learnedList));
    applyFilters();
}

function setStatusFilter(status) {
    currentStatusFilter = status;
    document.querySelectorAll('.btn-status').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(status));
    });
    applyFilters();
}

function filterByStatus(data) {
    if (currentStatusFilter === 'learned') return data.filter(v => learnedList.includes(v.kanji));
    if (currentStatusFilter === 'unlearned') return data.filter(v => !learnedList.includes(v.kanji));
    return data;
}

// CÁC HÀM CƠ BẢN KHÁC (GIỮ NGUYÊN VÀ TỐI ƯU)
function switchMode(mode) {
    currentMode = mode;
    document.getElementById('modeStudy').classList.toggle('active', mode === 'study');
    document.getElementById('modeQuiz').classList.toggle('active', mode === 'quiz');
    if (mode === 'quiz') {
        document.getElementById('cardGrid').style.display = 'none';
        document.getElementById('quizContainer').style.display = 'block';
        startNewQuiz();
    } else {
        document.getElementById('cardGrid').style.display = 'grid';
        document.getElementById('quizContainer').style.display = 'none';
        applyFilters();
    }
}

function startNewQuiz() {
    let pool = filterByStatus(vocabData);
    if (currentLevel !== 'all') pool = pool.filter(v => v.level === currentLevel);
    
    if (pool.length < 4) {
        alert("Danh sách hiện tại quá ít từ để làm trắc nghiệm!");
        switchMode('study');
        return;
    }

    const question = pool[Math.floor(Math.random() * pool.length)];
    const options = [question];
    while (options.length < 4) {
        const rand = vocabData[Math.floor(Math.random() * vocabData.length)];
        if (!options.includes(rand)) options.push(rand);
    }
    options.sort(() => Math.random() - 0.5);

    document.getElementById('quizQuestion').innerText = question.kanji;
    document.getElementById('quizOptions').innerHTML = options.map(opt => `
        <button class="option-btn" onclick="checkAnswer(this, '${opt.kanji}', '${question.kanji}')">${opt.meaning}</button>
    `).join('');
}

function checkAnswer(btn, chosen, correct) {
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);
    if (chosen === correct) {
        btn.classList.add('correct');
        speakText(correct);
        setTimeout(startNewQuiz, 1000);
    } else {
        btn.classList.add('wrong');
        btns.forEach(b => { if(b.innerText === vocabData.find(v => v.kanji === correct).meaning) b.classList.add('correct'); });
        setTimeout(startNewQuiz, 2000);
    }
}

function handleCardClick(inner, text) {
    inner.parentElement.classList.toggle('is-flipped');
    if (inner.parentElement.classList.contains('is-flipped')) speakText(text);
}

function applyFilters() {
    if (currentMode === 'quiz') return;
    const term = document.getElementById('searchInput').value.toLowerCase();
    let filtered = vocabData.filter(v => (v.kanji.includes(term) || v.meaning.toLowerCase().includes(term)));
    if (currentLevel !== 'all') filtered = filtered.filter(v => v.level === currentLevel);
    renderCards(filtered);
}

function filterByLevel(l) {
    currentLevel = l;
    document.querySelectorAll('.btn-filter').forEach(b => b.classList.toggle('active', b.innerText === (l==='all'?'Tất cả':l)));
    applyFilters();
}

document.getElementById('speedRange').addEventListener('input', (e) => {
    readSpeed = parseFloat(e.target.value);
    document.getElementById('speedValue').innerText = readSpeed;
});
document.getElementById('searchInput').addEventListener('input', applyFilters);

init();
// Cập nhật hàm renderCards trong file script.js của bạn:
function renderCards(data) {
    const grid = document.getElementById('cardGrid');
    let displayData = filterByStatus(data); // Lọc theo trạng thái người dùng chọn ở trên
    document.getElementById('count').innerText = displayData.length;
    
    grid.innerHTML = displayData.map(item => {
        const isLearned = learnedList.includes(item.kanji);
        return `
        <div class="card ${isLearned ? 'learned' : ''}">
            <div class="status-checkbox ${isLearned ? 'is-learned' : ''}" 
                 onclick="toggleStatus(event, '${item.kanji}')" 
                 title="Đánh dấu đã thuộc">
                ${isLearned ? '✓' : ''}
            </div>
            
            <div class="card-inner" onclick="handleCardClick(this, '${item.kanji}')">
                <div class="front">
                    <div class="level level-${item.level.toLowerCase()}">${item.level}</div>
                    <h2>${item.kanji}</h2>
                    <p class="reading">${item.reading}</p>
                </div>
                <div class="back back-${item.level.toLowerCase()}">
                    <h3>Nghĩa:</h3>
                    <p>${item.meaning}</p>
                </div>
            </div>
        </div>
    `}).join('');
}

// Hàm này xử lý khi người dùng tự tích vào ô vuông
function toggleStatus(event, kanji) {
    event.stopPropagation(); // Để không bị lật thẻ khi bấm vào ô tích
    if (learnedList.includes(kanji)) {
        learnedList = learnedList.filter(k => k !== kanji);
    } else {
        learnedList.push(kanji);
    }
    localStorage.setItem('jlpt_learned', JSON.stringify(learnedList));
    applyFilters(); // Cập nhật lại giao diện ngay lập tức
}