

const colorBox = document.getElementById('colorBox');
const colorOptionsContainer = document.querySelector('.color-options');
const gameStatus = document.getElementById('gameStatus');
const scoreElement = document.getElementById('score');
const newGameButton = document.getElementById('newGameButton');

let colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FFB533", "#33FFF5"];
let targetColor;
let score = 0;

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setupGame() {
  
    targetColor = getRandomColor();
    colorBox.style.backgroundColor = targetColor;

    colorOptionsContainer.innerHTML = "";


    colors.forEach(color => {
        const colorOption = document.createElement("button");
        colorOption.style.backgroundColor = color;
        colorOption.classList.add('color-option');
        colorOption.setAttribute('data-testid', 'colorOption');
        colorOption.addEventListener("click", checkGuess);
        colorOptionsContainer.appendChild(colorOption);
    });

    gameStatus.textContent = "Guess the correct color!";
    gameStatus.className = '';
    scoreElement.textContent = score;
}


function checkGuess(event) {
    const clickedColor = event.target.style.backgroundColor;
    if (clickedColor === targetColor) {
        score++;
        gameStatus.textContent = "Correct! 🎉";
        gameStatus.classList.add('correct');
    } else {
        score = Math.max(0, score - 1);
        gameStatus.textContent = "Wrong! Try again. 😢";
        gameStatus.classList.add('wrong');
    }

    scoreElement.textContent = score;

    gameStatus.classList.add('fade-out');

 
    setTimeout(() => {
        gameStatus.classList.remove('fade-out');
        setupGame();
    }, 1500);
}

newGameButton.addEventListener('click', setupGame);


setupGame();
