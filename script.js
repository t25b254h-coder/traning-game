import { quizDataMath } from './quiz_data_math.js';
import { quizDataPhysics } from './quiz_data_physics.js';
import { quizDataPro } from './quiz_data_pro.js';
import { getLevel, updateLevelDisplay, MAX_LEVEL } from './levelup.js';
import { UNLOCK_LEVELS, GOD_IMG, HOME_CHICK_KEY, renderChickSelector, resetChickSelection } from './chicks.js';

// 3分野すべてのデータを1つの配列にまとめる
const allQuizData = [
  ...quizDataMath,
  ...quizDataPhysics,
  ...quizDataPro
];

// 各コンテナ・要素の取得
const homeContainer = document.getElementById('home-container');
const homeImg = document.getElementById('home-img');
const quiz1Btn = document.getElementById('quiz1-btn');
const quiz2Btn = document.getElementById('quiz2-btn');
const quiz3Btn = document.getElementById('quiz3-btn');
const resetBtn = document.getElementById('reset-btn');

const startContainer = document.getElementById('start-container');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');

const startContainer2 = document.getElementById('start-container2');
const startBtn2 = document.getElementById('start-btn2');
const backBtn2 = document.getElementById('back-btn2');

const startContainer3 = document.getElementById('start-container3');
const startBtn3 = document.getElementById('start-btn3');
const backBtn3 = document.getElementById('back-btn3');

const quizHeaderElm = document.getElementById('quiz-header');
const categoryBadge = document.getElementById('category-badge');
const questionElm = document.getElementById('question');
const optionsDiv = document.getElementById('quiz-options');

const resultsConElm = document.getElementById('results-container');
const resultsHeader = document.getElementById('results-header');
const resultsElm = document.getElementById('results');
const nextQuizBtn = document.getElementById('next-quiz');

// 最終結果用エレメント
const finalResults = document.getElementById('final-results');
const scoreText = document.getElementById('score-text');
const summaryList = document.getElementById('summary-list');
const restartBtn = document.getElementById('restart-btn');
const backHomeBtn = document.getElementById('back-home-btn');

// 科目ごとの情報をまとめたテーブル（キーは問題データの category と同じ）
const subjects = {
  math: {
    label: '数学',
    scoreLabel: '数学スコア',
    levelId: 'math-level',
    storageKey: 'mathCorrectScore',
    scoreEl: document.getElementById('math-score'),
    score: 0
  },
  physics: {
    label: '物理',
    scoreLabel: '物理スコア',
    levelId: 'physics-level',
    storageKey: 'physicsCorrectScore',
    scoreEl: document.getElementById('physics-score'),
    score: 0
  },
  pro: {
    label: 'PG',
    scoreLabel: 'PGスコア',
    levelId: 'programming-level',
    storageKey: 'programmingCorrectScore',
    scoreEl: document.getElementById('programming-score'),
    score: 0
  }
};

let activeQuizList = []; // 選択された分野のシャッフル済み問題リスト
let currentQuiz = 0;
let score = 0;
let userAnswers = [];
let unlockMessage = ''; // 直前の正解で新しいひよこが解放されたときのメッセージ

// カテゴリー名の日本語表示マップ
const categoryNames = {
  math: '📐 数学',
  physics: '⚡ 物理',
  pro: '💻 プログラミング'
};

// 時計の更新
function updateClock() {
  const now = new Date();
  const datestr = now.toLocaleDateString('ja-JP');
  const timestr = now.toLocaleTimeString('ja-JP');
  const clockEl = document.getElementById('clock');
  if (clockEl) {
    clockEl.innerHTML = `${datestr}<br>${timestr}`;
  }
}
setInterval(updateClock, 1000);
updateClock();

// ホーム画面のひよこ：最後に選んだひよこ（なければ最初のひよこ）
const DEFAULT_HOME_IMG = 'nebusoku_GIF.gif';

function isAllMaxLevel() {
  return Object.values(subjects).every(s => getLevel(s.score) >= MAX_LEVEL);
}

function updateHomeImage() {
  if (!homeImg) return;
  const next = localStorage.getItem(HOME_CHICK_KEY) || DEFAULT_HOME_IMG;
  // 同じ画像なら入れ替えない（GIFのアニメを途切れさせないため）
  if (homeImg.getAttribute('src') !== next) {
    homeImg.src = next;
  }
}

// スコアとレベルの表示を更新
function refreshScoreDisplay(key) {
  const s = subjects[key];
  s.scoreEl.textContent = `${s.scoreLabel}: ${s.score}`;
  updateLevelDisplay(s.levelId, s.label, s.score);
  updateHomeImage();
}

// 累計スコアの読み込みと表示
Object.keys(subjects).forEach(key => {
  subjects[key].score = Number(localStorage.getItem(subjects[key].storageKey)) || 0;
  refreshScoreDisplay(key);
});

// MathJaxで数式をレンダリングする関数
function renderMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

// ホーム画面を表示する関数
function showHome() {
  updateHomeImage();
  homeContainer.style.display = 'block';
  startContainer.style.display = 'none';
  startContainer2.style.display = 'none';
  startContainer3.style.display = 'none';
  quizHeaderElm.style.display = 'none';
  resultsConElm.style.display = 'none';
  finalResults.style.display = 'none';
}
showHome();

// 科目のスタート画面を開く（ひよこ選択ボタンも更新）
function openStartScreen(key, container) {
  homeContainer.style.display = 'none';
  renderChickSelector(key, subjects[key].score, isAllMaxLevel());
  container.style.display = 'block';
}

// ホーム画面の各分野ボタン
quiz1Btn.addEventListener('click', () => openStartScreen('math', startContainer));
quiz2Btn.addEventListener('click', () => openStartScreen('physics', startContainer2));
quiz3Btn.addEventListener('click', () => openStartScreen('pro', startContainer3));

// 戻るボタン
backBtn.addEventListener('click', showHome);
backBtn2.addEventListener('click', showHome);
backBtn3.addEventListener('click', showHome);

// リセットボタン
resetBtn.addEventListener('click', () => {
  if (confirm("本当にデータをリセットしますか？")) {
    Object.keys(subjects).forEach(key => {
      localStorage.removeItem(subjects[key].storageKey);
      subjects[key].score = 0;
      refreshScoreDisplay(key);
    });
    resetChickSelection();
    updateHomeImage(); // ホームのひよこを最初の絵に戻す
    alert("データがリセットされました。");
  } else {
    alert("データのリセットをキャンセルしました。");
  }
});

// Fisher-Yates シャッフル関数
function shuffleArray(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

// カテゴリーで問題を抽出し、出題順をシャッフルして開始する関数
function startQuizByCategory(category) {
  const filtered = allQuizData.filter(item => item.category === category);
  const targetData = filtered.length > 0 ? filtered : allQuizData;

  // 問題の順番をランダムにシャッフルし、先頭から10問だけを切り出す
  activeQuizList = shuffleArray(targetData).slice(0, 10);

  currentQuiz = 0;
  score = 0;
  userAnswers = [];

  showQuiz();
  loadQuiz();
}

// 各スタートボタンのイベント
startBtn.addEventListener('click', () => {
  startContainer.style.display = 'none';
  startQuizByCategory('math');
});
startBtn2.addEventListener('click', () => {
  startContainer2.style.display = 'none';
  startQuizByCategory('physics');
});
startBtn3.addEventListener('click', () => {
  startContainer3.style.display = 'none';
  startQuizByCategory('pro');
});

// クイズ画面の表示切り替え
function showQuiz() {
  quizHeaderElm.style.display = 'block';
  resultsConElm.style.display = 'none';
  finalResults.style.display = 'none';
}

// クイズの問題とシャッフルされた選択肢ボタンを表示する関数
function loadQuiz() {
  const q = activeQuizList[currentQuiz];
  const catLabel = categoryNames[q.category] || q.category;

  if (categoryBadge) {
    categoryBadge.textContent = `【${catLabel}】 第 ${currentQuiz + 1} / ${activeQuizList.length} 問`;
  }

  // プログラミング問題（改行を含むコード）は見やすく整形して表示
  if (q.category === 'pro') {
    questionElm.style.whiteSpace = 'pre-wrap';
    questionElm.style.textAlign = 'left';
    questionElm.style.background = 'rgba(255, 255, 255, 0.7)';
    questionElm.style.padding = '15px';
    questionElm.style.borderRadius = '10px';
    questionElm.style.fontFamily = 'monospace';
    questionElm.textContent = q.question;
  } else {
    questionElm.style.whiteSpace = 'normal';
    questionElm.style.textAlign = 'center';
    questionElm.style.background = 'transparent';
    questionElm.style.padding = '0';
    questionElm.style.fontFamily = 'inherit';
    questionElm.innerHTML = q.question;
  }

  // 選択肢と元のインデックス（0が正解）をペアにする
  const indexedChoices = q.choices.map((text, originalIndex) => {
    return { text: text, originalIndex: originalIndex };
  });

  // 選択肢の並び順をシャッフル
  const shuffledChoices = shuffleArray(indexedChoices);

  // 3択ボタンを生成
  optionsDiv.innerHTML = '';
  shuffledChoices.forEach((item, displayIndex) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.style.margin = '12px 0';
    btn.style.borderRadius = '15px';

    if (q.category === 'pro') {
      btn.textContent = `${displayIndex + 1}. ${item.text}`;
    } else {
      btn.innerHTML = `${displayIndex + 1}. ${item.text}`;
    }

    btn.addEventListener('click', () => {
      checkAnswer(item.originalIndex, q.correctIndex);
    });

    optionsDiv.appendChild(btn);
  });

  // 数式を綺麗に変換
  renderMath();
}

// 答え合わせ判定
function checkAnswer(selectedOriginalIndex, correctOriginalIndex) {
  const isCorrect = (selectedOriginalIndex === correctOriginalIndex);
  unlockMessage = '';

  // 正解・不正解の効果音（sound.js で登録）
  if (isCorrect) {
    window.playCorrectSound?.();
  } else {
    window.playWrongSound?.();
  }


  if (isCorrect) {
    score++;

    const key = activeQuizList[currentQuiz].category;
    const s = subjects[key];
    if (s) {
      const levelBefore = getLevel(s.score);
      const allMaxBefore = isAllMaxLevel();
      s.score++;
      localStorage.setItem(s.storageKey, s.score);
      refreshScoreDisplay(key);

      // このレベルアップで解放ラインを越えたら、お知らせを出す
      const levelAfter = getLevel(s.score);
      const newlyUnlocked = UNLOCK_LEVELS.some(l => levelBefore < l && l <= levelAfter);
      if (newlyUnlocked) {
        unlockMessage = `<p style="font-size: 1rem; color: #d6336c; font-weight: bold; margin-top: 10px;">🎉 ${s.label}がレベル${levelAfter}になって、新しいひよこが解放された！スタート画面で選べるよ！</p>`;
      }

      // 3科目すべてがMAXレベルになった瞬間のお知らせ
      if (!allMaxBefore && isAllMaxLevel()) {
        localStorage.setItem(HOME_CHICK_KEY, GOD_IMG); // 最初だけホームに神ひよこを表示
        unlockMessage += `<p style="font-size: 1.1rem; color: #b8860b; font-weight: bold; margin-top: 10px;">🌟 全科目がレベル${MAX_LEVEL}達成！神ひよこが降臨した！スタート画面で好きなひよこに変えられるよ！</p>`;
      }
    }
  }

  userAnswers.push(isCorrect);
  showResults(isCorrect);
}

// 1問ごとの判定画面
function showResults(isCorrect) {
  quizHeaderElm.style.display = 'none';
  resultsConElm.style.display = 'block';
  resultsHeader.style.display = 'block';
  finalResults.style.display = 'none';

  const q = activeQuizList[currentQuiz];
  const correctText = q.choices[q.correctIndex];
  const explanationHtml = q.explanation
    ? `<p style="font-size: 1rem; color: #333; margin-top: 10px;">💡 解説: ${q.explanation}</p>`
    : '';

  if (isCorrect) {
    resultsElm.innerHTML = `⭕️ 正解！${explanationHtml}${unlockMessage}`;
  } else {
    resultsElm.innerHTML = `❌ 残念...<br><span style="font-size: 1.2rem;">正解は: ${correctText}</span>${explanationHtml}`;
  }

  renderMath();
}

// 次の問題へボタンを押したとき
nextQuizBtn.addEventListener('click', event => {
  event.preventDefault();
  currentQuiz++;

  if (currentQuiz < activeQuizList.length) {
    loadQuiz();
    showQuiz();
  } else {
    showFinalResults();
  }
});

// 全問終了時の最終結果を表示
function showFinalResults() {
  quizHeaderElm.style.display = 'none';
  resultsConElm.style.display = 'block';
  resultsHeader.style.display = 'none';
  finalResults.style.display = 'block';

  scoreText.innerText = `結果: ${score} / ${activeQuizList.length} 問正解！`;

  summaryList.innerHTML = '';
  activeQuizList.forEach((item, index) => {
    const isCorrect = userAnswers[index];
    const correctText = item.choices[item.correctIndex];

    const itemEl = document.createElement('div');
    itemEl.classList.add('summary-item');
    itemEl.style.borderBottom = '1px solid #ccc';
    itemEl.style.padding = '8px 0';
    itemEl.innerHTML = `
      <p style="margin: 4px 0; white-space: pre-wrap;"><strong>問 ${index + 1}: ${item.question}</strong></p>
      <p style="margin: 4px 0; color: ${isCorrect ? 'green' : 'red'}; font-weight: bold;">
        判定: ${isCorrect ? '⭕️ 正解' : `❌ 不正解 (正解: ${correctText})`}
      </p>
    `;
    summaryList.appendChild(itemEl);
  });

  renderMath();
}

// もう一度挑戦するボタン（同じカテゴリーで再シャッフルして開始）
restartBtn.addEventListener('click', () => {
  const currentCategory = activeQuizList.length > 0 ? activeQuizList[0].category : 'math';
  startQuizByCategory(currentCategory);
});

// ホームに戻るボタン
backHomeBtn.addEventListener('click', () => {
  currentQuiz = 0;
  score = 0;
  userAnswers = [];
  showHome();
});
