// sound.js

// 1. 音声ファイルの読み込み
const hiyokoSound = new Audio('chicken.mp3');
const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');

hiyokoSound.volume = 0.5;
correctSound.volume = 1.0;
wrongSound.volume = 1.0;

// 2. 連打されたときに音が途切れないように再生する関数
function playAudio(audio) {
  audio.currentTime = 0; // 再生位置を最初に戻す（連打対策）
  audio.play().catch(error => {
    // ブラウザの自動再生ブロック対策
    console.log("再生がブロックされました:", error);
  });
}

// 3. 画面内のすべての <button> をクリックしたらひよこの音を鳴らす
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    playAudio(hiyokoSound);
  }
});

// 4. 正解・不正解の音を外から呼べるように登録
window.playCorrectSound = () => playAudio(correctSound);
window.playWrongSound = () => playAudio(wrongSound);