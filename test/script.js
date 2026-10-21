// 正解判定と進化の処理
function checkAnswer(selectedOption) {
    const message = document.getElementById("message");
    const avatar = document.getElementById("char-avatar");
    const status = document.getElementById("char-status");

    // 3番が正解 (ad - bc)
    if (selectedOption === 3) {
        message.style.color = "green";
        message.textContent = "⭕️ 正解！キャラクターが進化しました！";

        // キャラクターを進化させる
        avatar.textContent = "🦅"; // ひよこから鷹（マッチョ鳥）へ
        avatar.style.transform = "scale(1.3)";
        status.textContent = "レベル: MAX (ムキムキ鳥)";
    } else {
        message.style.color = "red";
        message.textContent = "❌ 不正解... もう一度挑戦しよう！";
    }
}
