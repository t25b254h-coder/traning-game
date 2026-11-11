function levelUp() {
  const levelDisplay = document.getElementById('level');
  let currentLevel = parseInt(levelDisplay.textContent.split(': ')[1]);
  if (scorecount < 10) {
    currentLevel = 2;
  } else if (scorecount < 30) {
    currentLevel = 3;
  } else if (scorecount < 50) {
    currentLevel = 4;
  } else if (scorecount < 75) {
    currentLevel = 5;
  } else if (scorecount < 100) {
    currentLevel = 6;
  } else if (scorecount < 150) {
    currentLevel = 7;
  } else if (scorecount < 200) {
    currentLevel = 8;
  } else if (scorecount < 300) {
    currentLevel = 9;
  } else if (scorecount < 500) {
    currentLevel = 10;
  }
  levelDisplay.textContent = `レベル: ${currentLevel}`;
}

export { levelUp };