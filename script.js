let currentLevel='ALL';
let currentCategory='ALL';
let keyword='';
let currentRate=0.9;
let isSpeaking=false;

// ===== FILTER =====
function filterLevel(lvl,btn){
 currentLevel=lvl;
 document.querySelectorAll('.lvl-btn').forEach(b=>b.classList.remove('active'));
 btn.classList.add('active');
 render();
}

function filterCategory(cat,btn){
 currentCategory=cat;
 document.querySelectorAll('.topic-btn').forEach(b=>b.classList.remove('active'));
 btn.classList.add('active');
 render();
}

function handleSearch(){
 keyword=searchInput.value.toLowerCase();
 render();
}

function setSpeed(rate){ currentRate=rate; }

// ===== SPEAK (FIX DOUBLE READ) =====
function speak(text){
 if(!speechSynthesis)return;
 speechSynthesis.cancel();
 setTimeout(()=>{
  const u=new SpeechSynthesisUtterance(text);
  u.lang='ja-JP';
  u.rate=currentRate;
  speechSynthesis.speak(u);
 },120);
}

// ===== RECORD & COMPARE =====
let rec;
if('webkitSpeechRecognition'in window){
 rec=new webkitSpeechRecognition();
 rec.lang='ja-JP';
}

function record(target){
 if(!rec){alert('Không hỗ trợ ghi âm');return;}
 rec.start();
 rec.onresult=e=>{
  const said=e.results[0][0].transcript;
  const score=compare(said,target);
  alert(`Bạn nói: ${said}\nĐộ khớp: ${score}%`);
 };
}

function compare(a,b){
 a=a.replace(/\s/g,'');
 b=b.replace(/\s/g,'');
 let m=0;
 for(let i=0;i<Math.min(a.length,b.length);i++)
  if(a[i]===b[i])m++;
 return Math.round(m/b.length*100);
}

// ===== RENDER =====
function render(){
 const grid=document.getElementById('data-grid');
 grid.innerHTML='';

 const list=lessonData.filter(w=>
  (currentLevel==='ALL'||w.lvl===currentLevel)&&
  (currentCategory==='ALL'||w.category===currentCategory)&&
  (w.kanji.includes(keyword)||w.mean.toLowerCase().includes(keyword))
 );

 list.forEach(w=>{
  grid.innerHTML+=`
  <div class="flip-card" onclick="this.classList.toggle('flipped')">
   <div class="flip-inner">
    <div class="flip-front">
     <div class="kanji">${w.kanji}</div>
     <div>${w.furigana}</div>
     <div>${w.mean}</div>
     <div class="speaker" onclick="event.stopPropagation();speak('${w.kanji}')">🔊</div>
    </div>
    <div class="flip-back">
     <b>${w.example}</b>
     <p>${w.ex_mean}</p>
     <div class="speaker" onclick="event.stopPropagation();speak('${w.example}')">🔊</div>
     <div class="mic" onclick="event.stopPropagation();record('${w.example}')">🎤</div>
    </div>
   </div>
  </div>`;
 });

 counter.innerText=`${list.length}/${lessonData.length}`;
}

document.addEventListener('DOMContentLoaded',render);
