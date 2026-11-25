// スコアがこの値「未満」なら、配列の添字+1 がレベル
// Lv1〜10は元の設定のまま。Lv11〜20を追加（数値は自由に調整OK）
const LEVEL_THRESHOLDS = [
  10, 11, 12, 13, 14, 15, 16, 17, 18, // Lv1〜9
  19, 20, 21, 22, 23,              // Lv10〜14
  24, 25, 26, 27,                  // Lv15〜18
  28                                     // Lv19（3000以上はLv20）
];
const MAX_LEVEL = LEVEL_THRESHOLDS.length + 1; // 20

function getLevel(score) {
  const idx = LEVEL_THRESHOLDS.findIndex(t => score < t);
  return idx === -1 ? MAX_LEVEL : idx + 1;
}

function updateLevelDisplay(levelId, label, score) {
  const el = document.getElementById(levelId);
  if (el) {
    el.textContent = `${label}レベル: ${getLevel(score)}`;
  }
}

export { getLevel, updateLevelDisplay, LEVEL_THRESHOLDS, MAX_LEVEL };
