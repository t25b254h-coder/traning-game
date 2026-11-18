import { getLevel } from './levelup.js';

// 1〜4番目のひよこが解放されるレベル
const UNLOCK_LEVELS = [5, 10, 15, 20];

// 最初から選べる標準のひよこ
const DEFAULT_IMG = 'GIF_studying.gif';

// 3科目すべてがMAXレベルで選べるようになる神ひよこ
const GOD_IMG = 'god_GIF.gif';

// ホーム画面に表示する「最後に選んだひよこ」の保存キー
const HOME_CHICK_KEY = 'homeChick';

const CHICK_CONFIG = {
  math: {
    imgId: 'chick-img-math',
    selectId: 'chick-select-math',
    storageKey: 'mathChick',
    files: ['math_1_GIF.gif', 'math_2_GIF.gif', 'math_3_GIF.gif', 'math_4_GIF.gif']
  },
  physics: {
    imgId: 'chick-img-physics',
    selectId: 'chick-select-physics',
    storageKey: 'physicsChick',
    files: ['physics_1_GIF.gif', 'physics_2_GIF.gif', 'physics_3_GIF.gif', 'physics_4_GIF.gif']
  },
  pro: {
    imgId: 'chick-img-pro',
    selectId: 'chick-select-pro',
    storageKey: 'programmingChick',
    files: ['pro_1_GIF.gif', 'pro_2_GIF.gif', 'pro_3_GIF.gif', 'pro_4_GIF.gif']
  }
};

// 科目のスタート画面に、ひよこ選択ボタンを描画する
// godUnlocked: 3科目すべてがMAXレベルなら true（神ひよこが選べる）
function renderChickSelector(subjectKey, score, godUnlocked) {
  const cfg = CHICK_CONFIG[subjectKey];
  const mainImg = document.getElementById(cfg.imgId);
  const container = document.getElementById(cfg.selectId);
  if (!mainImg || !container) return;

  const level = getLevel(score);

  // 標準 + 4匹 + 神 の選択肢
  const options = [
    { src: DEFAULT_IMG, unlocked: true, caption: '標準', lockText: '' },
    ...cfg.files.map((src, i) => ({
      src,
      unlocked: level >= UNLOCK_LEVELS[i],
      caption: `Lv${UNLOCK_LEVELS[i]}`,
      lockText: `Lv${UNLOCK_LEVELS[i]}で解放`
    })),
    { src: GOD_IMG, unlocked: godUnlocked, caption: '神', lockText: '全科目Lv20で解放' }
  ];

  // 保存済みの選択を読み込む（未解放・不明なら標準に戻す）
  let selected = localStorage.getItem(cfg.storageKey) || DEFAULT_IMG;
  const selectedOpt = options.find(o => o.src === selected);
  if (!selectedOpt || !selectedOpt.unlocked) {
    selected = DEFAULT_IMG;
  }

  mainImg.src = selected;
  container.innerHTML = '';

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chick-btn';
    if (opt.src === selected) btn.classList.add('selected');

    if (opt.unlocked) {
      btn.innerHTML = `<img src="${opt.src}" alt=""><span>${opt.caption}</span>`;
      btn.addEventListener('click', () => {
        localStorage.setItem(cfg.storageKey, opt.src);
        // ホーム画面にも反映（標準を選んだ場合はホームも最初のひよこに戻す）
        if (opt.src === DEFAULT_IMG) {
          localStorage.removeItem(HOME_CHICK_KEY);
        } else {
          localStorage.setItem(HOME_CHICK_KEY, opt.src);
        }
        renderChickSelector(subjectKey, score, godUnlocked);
      });
    } else {
      // 未解放は中身（ひよこ）を見せず、鍵だけ表示
      btn.classList.add('locked');
      btn.disabled = true;
      btn.innerHTML = `<span class="lock">🔒</span><span>${opt.lockText}</span>`;
    }

    container.appendChild(btn);
  });
}

// データリセット時に、選んでいたひよこも標準に戻す
function resetChickSelection() {
  Object.values(CHICK_CONFIG).forEach(cfg => localStorage.removeItem(cfg.storageKey));
  localStorage.removeItem(HOME_CHICK_KEY);
}

// 指定された科目の現在選択中のひよこ画像のパスを返す関数
function getSelectedChick(subjectKey) {
  const cfg = CHICK_CONFIG[subjectKey];
  if (!cfg) return DEFAULT_IMG;
  return localStorage.getItem(cfg.storageKey) || DEFAULT_IMG;
}

export { UNLOCK_LEVELS, GOD_IMG, HOME_CHICK_KEY, renderChickSelector, resetChickSelection, getSelectedChick };
