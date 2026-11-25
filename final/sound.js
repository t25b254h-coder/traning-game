// sound.js

// ミュート状態（保存しておくので、ページを開き直しても引き継がれる）
let isMuted = localStorage.getItem('isMuted') === 'true';

// 1. 音声ファイルの読み込み
const hiyokoSound = new Audio('chicken.mp3');
const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');
const homeBGM = new Audio('サンタは中央線でやってくる.mp3');

hiyokoSound.volume = 0.0;   // ボタンを押したときの音（0.0 = 無音。鳴らしたいなら 0.5 など）
correctSound.volume = 1.0;
wrongSound.volume = 1.0;
homeBGM.volume = 0.3;
homeBGM.loop = true;        // 曲が終わったら最初から繰り返す

const muteBtn = document.getElementById('muteBtn');

// 2. 連打されたときに音が途切れないように再生する関数
function playAudio(audio) {
  if (isMuted) return;

  audio.currentTime = 0; // 再生位置を最初に戻す（連打対策）
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

// 4. 正解・不正解の音を外から呼べるように登録（script.js から使う）
window.playCorrectSound = () => playAudio(correctSound);
window.playWrongSound = () => playAudio(wrongSound);

// 5. ミュートボタン（効果音もBGMもまとめてオン・オフ）
function applyMute() {
  muteBtn.textContent = isMuted ? 'ミュート：ON' : 'ミュート：OFF';
  if (isMuted) {
    homeBGM.pause();
  } else {
    homeBGM.play().catch(() => {});
  }
}

muteBtn.addEventListener('click', () => {
  isMuted = !isMuted;
  localStorage.setItem('isMuted', isMuted);
  applyMute();
});

// 6. BGM：ブラウザの仕様で自動再生はできないので、最初のクリックで開始
muteBtn.textContent = isMuted ? 'ミュート：ON' : 'ミュート：OFF';
document.addEventListener('click', () => {
  if (!isMuted) {
    homeBGM.play().catch(() => {});
  }
}, { once: true });
