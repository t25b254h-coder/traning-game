// sound.js

// 1. 音声ファイルの読み込み
const hiyokoSound = new Audio('chicken.mp3');
const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');
const homeBGM = new Audio('2_23_AM_2.mp3');

hiyokoSound.volume = 0.5;
correctSound.volume = 1.0;
wrongSound.volume = 1.0;
homeBGM.volume = 0.4;  // volomu → volume。効果音より小さめがおすすめ
homeBGM.loop = true;   // 曲が終わったら最初から繰り返す

// 2. 連打されたときに音が途切れないように再生する関数
function playAudio(audio) {
  audio.currentTime = 0;
  audio.play().catch(error => {
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

// 5. ホームBGM
let bgmWanted = false; // ホーム画面にいる間だけ true

function startHomeBGM() {
  bgmWanted = true;
  homeBGM.play().catch(() => {
    // 自動再生をブロックされた場合は、下のクリック処理で始める
  });
}

function stopHomeBGM() {
  bgmWanted = false;
  homeBGM.pause();
  homeBGM.currentTime = 0;
}

// ブロックされていた場合、最初のクリックでBGMを始める
document.addEventListener('click', () => {
  if (bgmWanted && homeBGM.paused) {
    homeBGM.play().catch(() => {});
  }
});

window.startHomeBGM = startHomeBGM;
window.stopHomeBGM = stopHomeBGM;

startHomeBGM();