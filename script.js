let vocabData = [];
let currentLevel = 'N5';
let learnedList = JSON.parse(localStorage.getItem('jlpt_learned')) || [];
let favorites = JSON.parse(localStorage.getItem('jlpt_favs')) || [];
let unlockedLevels = JSON.parse(localStorage.getItem('jlpt_unlocked')) || ['N5'];
let isShowFavOnly = false;

async function init() {
    const res = await fetch('data.json');
    vocabData = await res.json();
    checkUnlockStatus(false);
    
    // Hiệu ứng pháo hoa khi mở app
    setTimeout(() => {
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#6c5ce7', '#a29bfe', '#ff7675']
        });
    }, 500);
}

function showSection(section) {
    document.getElementById('overviewSection').classList.toggle('hidden', section !== 'overview');
    document.getElementById('mainHeader').classList.toggle('hidden', section === 'overview');
    document.getElementById('cardGrid').classList.toggle('hidden', section !== 'main');
    document.getElementById('quizArea').classList.toggle('hidden', section !== 'quiz');
    if (section === 'main') renderCards();
}

// LOGIC NGHE
function speak(text) {
    window.speechSynthesis.cancel();
    const speed = document.getElementById('speedRange').value;
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'ja-JP';
    msg.rate = parseFloat(speed);
    window.speechSynthesis.speak(msg);
}

// LOGIC TRẮC NGHIỆM
function startQuiz() {
    showSection('quiz');
    nextQuizQuestion();
}

function nextQuizQuestion() {
    const feedback = document.getElementById('quizFeedback');
    feedback.innerText = "";
    
    let pool = vocabData.filter(v => v.level === currentLevel);
    if (pool.length < 4) pool = vocabData; 

    const question = pool[Math.floor(Math.random() * pool.length)];
    const options = [question];
    
    while (options.length < 4) {
        const rand = vocabData[Math.floor(Math.random() * vocabData.length)];
        if (!options.includes(rand)) options.push(rand);
    }
    options.sort(() => Math.random() - 0.5);

    document.getElementById('quizQuestion').innerText = question.kanji;
    const optionsGrid = document.getElementById('quizOptions');
    optionsGrid.innerHTML = options.map(opt => `
        <button class="opt-btn" onclick="checkAnswer(this, '${opt.kanji}', '${question.kanji}')">${opt.meaning}</button>
    `).join('');
}

function checkAnswer(btn, selected, correct) {
    const btns = document.querySelectorAll('.opt-btn');
    btns.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct');
        speak(correct);
        setTimeout(nextQuizQuestion, 1200);
    } else {
        btn.classList.add('wrong');
        btns.forEach(b => {
            if (b.innerText === vocabData.find(v => v.kanji === correct).meaning) b.classList.add('correct');
        });
        setTimeout(nextQuizQuestion, 2000);
    }
}

function checkUnlockStatus(celebrate = true) {
    const lvls = ['N5', 'N4', 'N3', 'N2', 'N1'];
    let newlyUnlocked = false;

    lvls.forEach((lvl, i) => {
        if (lvl === 'N5') return;
        const prevWords = vocabData.filter(v => v.level === lvls[i-1]);
        const prevLearned = prevWords.filter(v => learnedList.includes(v.kanji));
        const progress = (prevLearned.length / (prevWords.length || 1)) * 100;

        const btn = document.getElementById(`btn-${lvl}`);
        if (btn) {
            if (progress >= 80 || unlockedLevels.includes(lvl)) {
                if (!unlockedLevels.includes(lvl)) {
                    unlockedLevels.push(lvl);
                    newlyUnlocked = true;
                }
                btn.classList.remove('is-locked');
                btn.disabled = false;
            } else {
                btn.classList.add('is-locked');
                btn.disabled = true;
            }
        }
    });

    if (newlyUnlocked && celebrate) confetti({ particleCount: 150, spread: 70 });

    const currWords = vocabData.filter(v => v.level === currentLevel);
    const currLearned = currWords.filter(v => learnedList.includes(v.kanji));
    const percent = (currLearned.length / (currWords.length || 1)) * 100;
    
    const fill = document.getElementById('progressFill');
    if (fill) fill.style.width = percent + '%';
    
    const notice = document.getElementById('unlockNotice');
    if (notice) notice.innerText = `Tiến độ ${currentLevel}: ${percent.toFixed(0)}%`;
    
    localStorage.setItem('jlpt_unlocked', JSON.stringify(unlockedLevels));
}

// --- HÀM RENDER ĐÃ ĐƯỢC CẬP NHẬT MÀU SẮC ---
function renderCards() {
    const grid = document.getElementById('cardGrid');
    const term = document.getElementById('searchInput').value.toLowerCase();
    let filtered = vocabData.filter(v => v.level === currentLevel);
    
    if (isShowFavOnly) filtered = filtered.filter(v => favorites.includes(v.kanji));
    if (term) filtered = filtered.filter(v => v.kanji.includes(term) || v.meaning.toLowerCase().includes(term));

    // Chuyển level sang chữ thường để làm class CSS (N5 -> n5)
    const lvlClass = currentLevel.toLowerCase();

    grid.innerHTML = filtered.map(item => `
        <div class="card ${lvlClass}">
            <div class="level-badge badge-${lvlClass}">${item.level}</div>
            <div class="star-btn ${favorites.includes(item.kanji) ? 'active' : ''}" onclick="toggleFav(event, '${item.kanji}')">⭐</div>
            <div class="status-checkbox ${learnedList.includes(item.kanji) ? 'is-learned' : ''}" onclick="toggleStatus(event, '${item.kanji}')">
                ${learnedList.includes(item.kanji) ? '✓' : ''}
            </div>
            <div class="card-inner" onclick="handleFlip(this, '${item.kanji}')">
                <div class="front">
                    <h2>${item.kanji}</h2>
                    <p>${item.reading}</p>
                </div>
                <div class="back">
                    <p>${item.meaning}</p>
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('count').innerText = filtered.length;
}

function handleFlip(el, txt) {
    el.parentElement.parentElement.classList.toggle('is-flipped');
    if (el.parentElement.parentElement.classList.contains('is-flipped')) speak(txt);
}

function toggleStatus(e, kanji) {
    e.stopPropagation();
    learnedList = learnedList.includes(kanji) ? learnedList.filter(k => k !== kanji) : [...learnedList, kanji];
    localStorage.setItem('jlpt_learned', JSON.stringify(learnedList));
    checkUnlockStatus(true);// Cập nhật hàm checkUnlockStatus để có thông báo chữ
function checkUnlockStatus(celebrate = true) {
    const lvls = ['N5', 'N4', 'N3', 'N2', 'N1'];
    let newlyUnlocked = false;
    let unlockedLvlName = "";

    lvls.forEach((lvl, i) => {
        if (lvl === 'N5') return;
        const prevWords = vocabData.filter(v => v.level === lvls[i-1]);
        const prevLearned = prevWords.filter(v => learnedList.includes(v.kanji));
        const progress = (prevLearned.length / (prevWords.length || 1)) * 100;

        const btn = document.getElementById(`btn-${lvl}`);
        if (btn) {
            if (progress >= 80 || unlockedLevels.includes(lvl)) {
                if (!unlockedLevels.includes(lvl)) {
                    unlockedLevels.push(lvl);
                    newlyUnlocked = true;
                    unlockedLvlName = lvl; // Lưu tên level vừa mở
                }
                btn.classList.remove('is-locked');
                btn.disabled = false;
            }
        }
    });

    if (newlyUnlocked && celebrate) {
        confetti({ particleCount: 150, spread: 70 });
        // Hiển thị thông báo chữ
        showUnlockMessage(`Chúc mừng! Bạn đã đạt 80% và mở khóa ${unlockedLvlName}`);
    }

    // Cập nhật Progress Bar
    const currWords = vocabData.filter(v => v.level === currentLevel);
    const currLearned = currWords.filter(v => learnedList.includes(v.kanji));
    const percent = (currWords.length > 0) ? (currLearned.length / currWords.length) * 100 : 0;
    
    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('unlockNotice').innerText = `Tiến độ ${currentLevel}: ${percent.toFixed(0)}%`;
    localStorage.setItem('jlpt_unlocked', JSON.stringify(unlockedLevels));
}

// Hàm hiển thị thông báo mở khóa
function showUnlockMessage(msg) {
    const div = document.createElement('div');
    div.className = 'unlock-toast';
    div.innerText = msg;
    document.body.appendChild(div);
    setTimeout(() => div.classList.add('show'), 100);
    setTimeout(() => {
        div.classList.remove('show');
        setTimeout(() => div.remove(), 500);
    }, 4000);
}

// Logic ẩn header khi vuốt lên (Scroll)
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const searchBar = document.getElementById('searchInput');
    const filterGroup = document.querySelector('.filter-group');

    if (window.scrollY > 100) {
        header.classList.add('header-compact');
        searchBar.classList.add('hidden');
        filterGroup.classList.add('hidden');
    } else {
        header.classList.remove('header-compact');
        searchBar.classList.remove('hidden');
        filterGroup.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});
    renderCards();
}

function toggleFav(e, kanji) {
    e.stopPropagation();
    favorites = favorites.includes(kanji) ? favorites.filter(f => f !== kanji) : [...favorites, kanji];
    localStorage.setItem('jlpt_favs', JSON.stringify(favorites));
    renderCards();
}

function selectLevel(lvl) {
    if (!unlockedLevels.includes(lvl)) return alert("Cần 80% cấp độ trước đó!");
    currentLevel = lvl;
    document.querySelectorAll('.btn-filter').forEach(b => b.classList.toggle('active', b.innerText.includes(lvl)));
    renderCards();
    checkUnlockStatus(false);
}

function toggleFavoritesView() {
    isShowFavOnly = !isShowFavOnly;
    document.getElementById('btnFav').classList.toggle('active');
    renderCards();
}

document.getElementById('speedRange').oninput = function() {
    document.getElementById('speedValue').innerText = this.value;
};

document.getElementById('searchInput').oninput = renderCards;

init();
// Thêm biến để quản lý vuốt
let touchstartX = 0;
let touchendX = 0;

function renderCards() {
    const grid = document.getElementById('cardGrid');
    const term = document.getElementById('searchInput').value.toLowerCase();
    let filtered = vocabData.filter(v => v.level === currentLevel);
    
    if (isShowFavOnly) filtered = filtered.filter(v => favorites.includes(v.kanji));
    if (term) filtered = filtered.filter(v => v.kanji.includes(term) || v.meaning.toLowerCase().includes(term));

    const lvlClass = currentLevel.toLowerCase();

    grid.innerHTML = filtered.map(item => `
        <div class="card ${lvlClass}" 
             ontouchstart="handleTouchStart(event)" 
             ontouchend="handleTouchEnd(event, '${item.kanji}')">
            <div class="level-badge badge-${lvlClass}">${item.level}</div>
            
            <div class="card-inner" onclick="handleFlip(this, '${item.kanji}')">
                <div class="front">
                    <div class="star-btn ${favorites.includes(item.kanji) ? 'active' : ''}" onclick="toggleFav(event, '${item.kanji}')">⭐</div>
                    <div class="status-checkbox ${learnedList.includes(item.kanji) ? 'is-learned' : ''}" onclick="toggleStatus(event, '${item.kanji}')">
                        ${learnedList.includes(item.kanji) ? '✓' : ''}
                    </div>
                    <h2>${item.kanji}</h2>
                    <p>${item.reading}</p>
                </div>
                <div class="back">
                    <p>${item.meaning}</p>
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('count').innerText = filtered.length;
}

// Sửa hàm lật (Đảm bảo target đúng class .card)
function handleFlip(el, txt) {
    const card = el.closest('.card');
    card.classList.toggle('is-flipped');
    if (card.classList.contains('is-flipped')) speak(txt);
}

// Logic Vuốt (Swipe)
function handleTouchStart(e) {
    touchstartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e, kanji) {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe(kanji);
}

function handleSwipe(kanji) {
    const threshold = 50; // Độ dài vuốt tối thiểu
    if (touchendX < touchstartX - threshold) {
        // Vuốt sang trái -> Đánh dấu Đã học
        toggleStatus(new Event('click'), kanji);
    }
    if (touchendX > touchstartX + threshold) {
        // Vuốt sang phải -> Thêm vào Yêu thích
        toggleFav(new Event('click'), kanji);
    }
}
// Cập nhật hàm checkUnlockStatus để có thông báo chữ
function checkUnlockStatus(celebrate = true) {
    const lvls = ['N5', 'N4', 'N3', 'N2', 'N1'];
    let newlyUnlocked = false;
    let unlockedLvlName = "";

    lvls.forEach((lvl, i) => {
        if (lvl === 'N5') return;
        const prevWords = vocabData.filter(v => v.level === lvls[i-1]);
        const prevLearned = prevWords.filter(v => learnedList.includes(v.kanji));
        const progress = (prevLearned.length / (prevWords.length || 1)) * 100;

        const btn = document.getElementById(`btn-${lvl}`);
        if (btn) {
            if (progress >= 80 || unlockedLevels.includes(lvl)) {
                if (!unlockedLevels.includes(lvl)) {
                    unlockedLevels.push(lvl);
                    newlyUnlocked = true;
                    unlockedLvlName = lvl; // Lưu tên level vừa mở
                }
                btn.classList.remove('is-locked');
                btn.disabled = false;
            }
        }
    });

    if (newlyUnlocked && celebrate) {
        confetti({ particleCount: 150, spread: 70 });
        // Hiển thị thông báo chữ
        showUnlockMessage(`Chúc mừng! Bạn đã đạt 80% và mở khóa ${unlockedLvlName}`);
    }

    // Cập nhật Progress Bar
    const currWords = vocabData.filter(v => v.level === currentLevel);
    const currLearned = currWords.filter(v => learnedList.includes(v.kanji));
    const percent = (currWords.length > 0) ? (currLearned.length / currWords.length) * 100 : 0;
    
    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('unlockNotice').innerText = `Tiến độ ${currentLevel}: ${percent.toFixed(0)}%`;
    localStorage.setItem('jlpt_unlocked', JSON.stringify(unlockedLevels));
}

// Hàm hiển thị thông báo mở khóa
function showUnlockMessage(msg) {
    const div = document.createElement('div');
    div.className = 'unlock-toast';
    div.innerText = msg;
    document.body.appendChild(div);
    setTimeout(() => div.classList.add('show'), 100);
    setTimeout(() => {
        div.classList.remove('show');
        setTimeout(() => div.remove(), 500);
    }, 4000);
}

// Logic ẩn header khi vuốt lên (Scroll)
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const searchBar = document.getElementById('searchInput');
    const filterGroup = document.querySelector('.filter-group');

    if (window.scrollY > 100) {
        header.classList.add('header-compact');
        searchBar.classList.add('hidden');
        filterGroup.classList.add('hidden');
    } else {
        header.classList.remove('header-compact');
        searchBar.classList.remove('hidden');
        filterGroup.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});