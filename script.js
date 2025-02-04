const colorBox = document.getElementById('colorBox');
const colorOptions = document.querySelectorAll('.colorOption');
const gameInstructions = document.getElementById('gameInstructions');
const gameStatus = document.getElementById('gameStatus');
const scoreDisplay = document.getElementById('score');
const newGameButton = document.getElementById('newGameButton');
let score = 0;

const colors = ['#FF6347', '#8A2BE2', '#32CD32', '#FF1493', '#FFD700', '#4682B4'];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function startGame() {
  let targetColor = getRandomColor();
  colorBox.style.backgroundColor = targetColor;
  let colorChoices = [targetColor, getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];
  colorChoices = colorChoices.sort(() => 0.5 - Math.random());
  colorOptions.forEach((button, index) => {
    button.style.backgroundColor = colorChoices[index];
    button.onclick = () => checkGuess(button.style.backgroundColor, targetColor);
  });
  gameStatus.textContent = '';
}

function checkGuess(guessedColor, targetColor) {
  if (guessedColor === targetColor) {
    score++;
    gameStatus.textContent = 'Correct!';
  } else {
    gameStatus.textContent = 'Wrong!';
  }
  scoreDisplay.textContent = `Score: ${score}`;
}

newGameButton.addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  startGame();
});

startGame();
