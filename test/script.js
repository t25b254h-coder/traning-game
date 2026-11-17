import { quizDataMath } from './quiz_data_math.js';
import { quizDataPhysics } from './quiz_data_physics.js';
import { quizDataPro } from './quiz_data_pro.js';
import { levelUp } from './levelup.js';

// 3分野すべてのデータを1つの配列にまとめる
const allQuizData = [
  ...quizDataMath,
  ...quizDataPhysics,
  ...quizDataPro
];

// 各コンテナ・要素の取得
const homeContainer = document.getElementById('home-container');
const quiz1Btn = document.getElementById('quiz1-btn');
const quiz2Btn = document.getElementById('quiz2-btn');
const quiz3Btn = document.getElementById('quiz3-btn');
const resetBtn = document.getElementById('reset-btn');
const scoreDisplay = document.getElementById('save-score');
const STORAGE_KEY = 'allTimeCorrectScore';

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

let activeQuizList = []; // 選択された分野のシャッフル済み問題リスト
let currentQuiz = 0;
let score = 0;
let userAnswers = [];

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

// 累計スコアの初期化とレベル表示
let scorecount = Number(localStorage.getItem(STORAGE_KEY)) || 0;
scoreDisplay.textContent = `スコア: ${scorecount}`;
levelUp(scoreDisplay);

// MathJaxで数式をレンダリングする関数
function renderMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

// ホーム画面を表示する関数
function showHome() {
  homeContainer.style.display = 'block';
  startContainer.style.display = 'none';
  startContainer2.style.display = 'none';
  startContainer3.style.display = 'none';
  quizHeaderElm.style.display = 'none';
  resultsConElm.style.display = 'none';
  finalResults.style.display = 'none';
}
showHome();

// ホーム画面の各分野ボタン
quiz1Btn.addEventListener('click', () => {
  homeContainer.style.display = 'none';
  startContainer.style.display = 'block';
});
quiz2Btn.addEventListener('click', () => {
  homeContainer.style.display = 'none';
  startContainer2.style.display = 'block';
});
quiz3Btn.addEventListener('click', () => {
  homeContainer.style.display = 'none';
  startContainer3.style.display = 'block';
});

// 戻るボタン
backBtn.addEventListener('click', showHome);
backBtn2.addEventListener('click', showHome);
backBtn3.addEventListener('click', showHome);

// リセットボタン
resetBtn.addEventListener('click', () => {
  if (confirm("本当にデータをリセットしますか？")) {
    scorecount = 0;
    localStorage.removeItem(STORAGE_KEY);
    scoreDisplay.textContent = `スコア: ${scorecount}`;
    levelUp(scoreDisplay);
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

  if (isCorrect) {
    score++;
    scorecount++;
    localStorage.setItem(STORAGE_KEY, scorecount);
    scoreDisplay.textContent = `スコア: ${scorecount}`;
    levelUp(scoreDisplay);
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
    resultsElm.innerHTML = `⭕️ 正解！${explanationHtml}`;
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
  levelUp(scoreDisplay);
  currentQuiz = 0;
  score = 0;
  userAnswers = [];
  showHome();
});
