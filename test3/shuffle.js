let currentQuestionIndex = 0;
let shuffledChoices = [];
let currentCorrectOriginalIndex = 0;

// 配列をシャッフルする関数（Fisher-Yatesのシャッフル）
function shuffleArray(array) {
    const cloned = [...array];
    for (let i = cloned.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
    }
    return cloned;
}

function loadQuiz() {
    if (currentQuestionIndex >= quizDataMath.length) {
        // 終了処理
        return;
    }

    const q = quizDataMath[currentQuestionIndex];
    document.getElementById('quiz-question').textContent = q.question;

    // 選択肢のテキストと「元のインデックス（どれが正解だったか）」をペアにする
    let indexedChoices = q.choices.map((text, originalIndex) => {
        return { text: text, originalIndex: originalIndex };
    });

    // 選択肢をランダムにシャッフルする
    shuffledChoices = shuffleArray(indexedChoices);

    // 画面にボタンとして描画
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = "";

    shuffledChoices.forEach((item, displayIndex) => {
        const btn = document.createElement('button');
        btn.className = "opt-btn";
        btn.textContent = `${displayIndex + 1}. ${item.text}`;
        
        // ボタンが押されたときの判定
        btn.onclick = () => checkAnswer(item.originalIndex, q.correctIndex);
        optionsDiv.appendChild(btn);
    });
}

// 答え合わせ
function checkAnswer(selectedOriginalIndex, correctOriginalIndex) {
    if (selectedOriginalIndex === correctOriginalIndex) {
        alert("正解！");
    } else {
        alert("不正解…");
    }
    currentQuestionIndex++;
    loadQuiz();
}
