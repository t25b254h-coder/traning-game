function levelUp(scoreDisplay) {
  const levelDisplay1 = document.getElementById('math-level');
  let currentLevel1 = parseInt(levelDisplay1.textContent.split(': ')[1]);
  const scorecount = parseInt(scoreDisplay.textContent.split(': ')[1]);

  if (scorecount < 10) {
    currentLevel1 = 1;
    currentLevel2 = 1;
    currentLevel3 = 1;
  } else if (scorecount < 30) {
    currentLevel1 = 2;
    currentlevel2 = 2;
  } else if (scorecount < 50) {
    currentLevel1 = 3;

  } else if (scorecount < 75) {
    currentLevel1 = 4;
  } else if (scorecount < 100) {
    currentLevel1 = 5;

  } else if (scorecount < 150) {
    currentLevel1 = 6;

  } else if (scorecount < 200) {
    currentLevel1 = 7;

  } else if (scorecount < 300) {
    currentLevel1 = 8;
  } else if (scorecount < 500) {
    currentLevel1 = 9;

  } else {
    currentLevel1 = 10;
  }
  levelDisplay1.textContent = `数学レベル: ${currentLevel1}`;
}

export { levelUp };