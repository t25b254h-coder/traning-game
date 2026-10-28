import { quizDataJp } from './quiz_data_jp.js';

// 各コンテナ・要素の取得
const startContainer = document.getElementById('start-container');
const startBtn = document.getElementById('start-btn');

const quizHeaderElm = document.getElementById('quiz-header');
const questionElm = document.getElementById('question');

const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');

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

let currentQuiz = 0;
let score = 0;
let userAnswers = []; // 各問の正否結果を記録する配列

// スタートボタンを押したときの処理
startBtn.addEventListener('click', () => {
  startContainer.style.display = 'none';
  showQuiz();
  loadQuiz();
});

function loadQuiz() {
  const currentQuizData = quizDataJp[currentQuiz];

  questionElm.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
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