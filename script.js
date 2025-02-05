const colorBox = document.getElementById('colorBox');
const colorOptionsContainer = document.getElementById('colorOptions');
const gameStatus = document.getElementById('gameStatus');
const scoreElement = document.getElementById('score');
const newGameButton = document.getElementById('newGameButton');

let score = 0;
let correctColor;

const colors = [
    'red', 'green', 'blue', 'yellow', 'purple', 'orange',
    'pink', 'cyan', 'magenta', 'lime', 'indigo', 'violet'
];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function setUpGame() {
    correctColor = getRandomColor();
    colorBox.style.backgroundColor = correctColor;
    gameStatus.textContent = 'Guess the correct color!';
    gameStatus.classList.remove('correct', 'wrong');
    gameStatus.style.opacity = 1; 
    colorOptionsContainer.innerHTML = '';

    let colorOptions = [];
    while (colorOptions.length < 6) {
        const color = getRandomColor();
        if (!colorOptions.includes(color)) {
            colorOptions.push(color);
        }
    }

    const randomIndex = Math.floor(Math.random() * 6);
    colorOptions[randomIndex] = correctColor; 
    colorOptions.forEach(color => {
        const button = document.createElement('button');
        button.classList.add('color-option');
        button.style.backgroundColor = color;
        button.setAttribute('data-testid', 'colorOption');
        button.addEventListener('click', () => checkGuess(color));
        colorOptionsContainer.appendChild(button);
    });
}

function checkGuess(selectedColor) {
    if (selectedColor === correctColor) {
        score++;
        gameStatus.textContent = 'Correct! 🎉';
        gameStatus.classList.add('correct');
        scoreElement.textContent = score;
        setTimeout(() => {
            colorBox.style.backgroundColor = getRandomColor();
            setUpGame();
        }, 1000); 
    } else {
        gameStatus.textContent = 'Wrong, try again! ❌';
        gameStatus.classList.add('wrong');
        setTimeout(() => {
            colorBox.style.backgroundColor = getRandomColor();
            setUpGame();
        }, 1000); 

    setTimeout(() => {
        gameStatus.style.opacity = 1; 
    }, 1500);
}

newGameButton.addEventListener('click', () => {
    score = 0;
    scoreElement.textContent = score;
    setUpGame();
});
}
setUpGame()
