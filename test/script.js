import { quizDataJp } from './quiz_data_jp.js';
import { levelUp } from './levelup.js';
// import './shuffle.js';


// 各コンテナ・要素の取得
const homeContainer = document.getElementById('home-container');
const quiz1Btn = document.getElementById('quiz1-btn');
const quiz2Btn = document.getElementById('quiz2-btn');
const quiz3Btn = document.getElementById('quiz3-btn');
const resetBtn = document.getElementById('reset-btn');
const levelDisplay = document.getElementById('level');
const scoreDisplay = document.getElementById('save-score');
const STORAGE_KEY = 'allTimeCorrectScore'; // スコアを保存するためのキー

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
const questionElm = document.getElementById('question');

const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');

const submitBtn = document.getElementById('submit');
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

let currentQuiz = 0;
let score = 0;
let userAnswers = []; // 各問の正否結果を記録する配列

//時間表示
function updateClock() {
  const now = new Date();
  const datestr  = now.toLocaleDateString('ja-JP');
  const timestr = now.toLocaleTimeString('ja-JP');
  document.getElementById('clock').innerHTML = `${datestr}<br>${timestr}`;
}
setInterval(updateClock, 1000);

// スコアの初期化と表示
let scorecount = Number(localStorage.getItem('allTimeCorrectScore')) || 0;
scoreDisplay.textContent = `スコア: ${scorecount}`;

function addTotalScore(scoreDisplay) {
  const pastScore = Number(localStorage.getItem(STORAGE_KEY)) || 0;
  scorecount += pastScore;
  localStorage.setItem(STORAGE_KEY, scorecount);
  scoreDisplay.textContent = `スコア: ${scorecount}`;
}

levelUp(scoreDisplay); // 初期レベルを表示


//初期状態ではホーム画面を表示
homeContainer.style.display = 'block';
startContainer.style.display = 'none';
quizHeaderElm.style.display = 'none';
resultsConElm.style.display = 'none';
finalResults.style.display = 'none';


//ホーム画面で「数学問題」ボタンを押したときの処理
quiz1Btn.addEventListener('click', () => {
  homeContainer.style.display = 'none';
  startContainer.style.display = 'block';
});

//ホーム画面で「物理問題」ボタンを押したときの処理
quiz2Btn.addEventListener('click', () => {
  homeContainer.style.display = 'none';
  startContainer2.style.display = 'block';
});

//ホーム画面で「プログラミング問題」ボタンを押したときの処理
quiz3Btn.addEventListener('click', () => {
  homeContainer.style.display = 'none';
  startContainer3.style.display = 'block';
});

// スタートボタンを押したときの処理
startBtn.addEventListener('click', () => {
  startContainer.style.display = 'none';
  showQuiz();
  loadQuiz();
});

// スタートボタン2を押したときの処理
startBtn2.addEventListener('click', () => {
  startContainer2.style.display = 'none';
  showQuiz();
  loadQuiz();
});

// スタートボタン3を押したときの処理
startBtn3.addEventListener('click', () => {
  startContainer3.style.display = 'none';
  showQuiz();
  loadQuiz();
});

//リセットボタンを押したときの処理
resetBtn.addEventListener('click', () => {
  if (confirm("本当にデータをリセットしますか？")) {
    scorecount = 0;
    localStorage.removeItem(STORAGE_KEY);
    scoreDisplay.textContent = `スコア: ${scorecount}`;
    alert("データがリセットされました。");
  } else {
    alert("データのリセットをキャンセルしました。");
  } 
});

// 戻るボタンを押したときの処理
backBtn.addEventListener('click', () => {
  startContainer.style.display = 'none';
  homeContainer.style.display = 'block';
});

// 戻るボタン2を押したときの処理
backBtn2.addEventListener('click', () => {
  startContainer2.style.display = 'none';
  homeContainer.style.display = 'block';
});

// 戻るボタン3を押したときの処理
backBtn3.addEventListener('click', () => {
  startContainer3.style.display = 'none';
  homeContainer.style.display = 'block';
});

// クイズの問題を画面に表示する関数
function loadQuiz() {
  const currentQuizData = quizDataJp[currentQuiz];

  questionElm.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
}

function getAnswered() {
  return document.quizForm.answer.value;
}

// 1問ごとの判定画面
function showResults(isCorrect) {
  quizHeaderElm.style.display = 'none';
  submitBtn.style.display = 'none';
  resultsConElm.style.display = 'block';
  resultsHeader.style.display = 'block';
  finalResults.style.display = 'none';
  
  resultsElm.innerText = isCorrect ? '⭕️ 正解！' : '❌ 残念...';

}

// クイズ画面表示
function showQuiz() {
  quizHeaderElm.style.display = 'block';
  submitBtn.style.display = 'block';
  resultsConElm.style.display = 'none';
}

// 全問終了時の最終結果を表示
function showFinalResults() {
  quizHeaderElm.style.display = 'none';
  submitBtn.style.display = 'none';
  resultsConElm.style.display = 'block';
  resultsHeader.style.display = 'none'; // 「次の問題へ」のヘッダーを非表示
  finalResults.style.display = 'block';

  scoreText.innerText = `結果: ${score} / ${quizDataJp.length} 問正解！`;

  // 各問題の正誤一覧を生成
  summaryList.innerHTML = '';
  quizDataJp.forEach((item, index) => {
    const isCorrect = userAnswers[index];
    const itemEl = document.createElement('div');
    itemEl.classList.add('summary-item');
    itemEl.innerHTML = `
      <p><strong>問 ${index + 1}: ${item.question.replace(/\n/g, ' ')}</strong></p>
      <p class="${isCorrect ? 'correct-text' : 'wrong-text'}">
        判定: ${isCorrect ? '⭕️ 正解' : `❌ 不正解 (正解: ${item.correct.toUpperCase()}. ${item[item.correct]})`}
      </p>
    `;
    summaryList.appendChild(itemEl);
  });
}

// 回答するボタンを押したとき
submitBtn.addEventListener('click', event => {
  event.preventDefault();

  const answer = getAnswered();

  if (answer) {
    const isCorrect = (answer === quizDataJp[currentQuiz].correct);
    if (isCorrect) {
      score++;
      localStorage.setItem('allTimeCorrectScore', score);
      scoreDisplay.textContent = `スコア: ${score}`;
    }
    userAnswers.push(isCorrect); // 結果を保存

    showResults(isCorrect);

    // ラジオボタンの選択を解除
    const checkedRadio = document.querySelector('input[name="answer"]:checked');
    if (checkedRadio) {
      checkedRadio.checked = false;
    }
  }
});

// 次の問題へボタンを押したとき
nextQuizBtn.addEventListener('click', event => {
  event.preventDefault();

  currentQuiz++;

  if (currentQuiz < quizDataJp.length) {
    loadQuiz();
    showQuiz();
  } else {
    // 全問解き終わったら結果一覧を表示
    showFinalResults();
    addTotalScore(scoreDisplay); // スコアを合計して表示を更新
  }
});

// もう一度挑戦するボタンを押したとき（ループ・リセット）
restartBtn.addEventListener('click', () => {
  currentQuiz = 0;
  score = 0;
  userAnswers = [];
  
  // ホーム画面に戻る場合
  startContainer.style.display = 'block';
  resultsConElm.style.display = 'none';
  
  // （※もしすぐに問題1からスタートさせたい場合は以下に変更できます）
  // showQuiz();
  // loadQuiz();
});


// ホームに戻るボタンを押したとき
backHomeBtn.addEventListener('click', () => {
  levelUp(scoreDisplay); // スコアに応じてレベルを更新
  currentQuiz = 0;
  score = 0;
  userAnswers = [];
  // ホーム画面に戻る
  homeContainer.style.display = 'block';
  startContainer.style.display = 'none';
  resultsConElm.style.display = 'none';
});

