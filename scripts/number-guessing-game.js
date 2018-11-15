var randomNumber = Math.floor(Math.random() *100) + 1;
var guesses = document.querySelector(".guesses"),
    lastResult = document.querySelector(".lastResult"),
    lowOrHi = document.querySelector(".lowOrHi"),
    guessSubmit = document.querySelector(".guessSubmit"),
    guessField = document.querySelector(".guessField"),
    guessCount = 1,
    resetButton;
function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "上次猜的数：";
    }
    guesses.textContent += userGuess + " ";

    switch(true) {
        case userGuess === randomNumber :
            lastResult.textContent = "恭喜你猜对了";
            lastResult.style.backgroundColor = "green";
            lowOrHi.textContent = "";
            setGameOver();
            break;
        case guessCount === 10 && userGuess !== randomNumber :
            lastResult.textContent = "GAME OVER!!!";
            setGameOver();
            break;
        case guessCount < 10 && userGuess < randomNumber :
            lastResult.textContent = "你猜错了！";
            lastResult.style.backgroundColor = "red";
            lowOrHi.textContent = "你猜低了！";
            break;
        case guessCount < 10 && userGuess > randomNumber :
            lastResult.textContent = "你猜错了！";
            lastResult.style.backgroundColor = "red";
            lowOrHi.textContent = "你猜高了！";
            break;
        default :
            break;
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";
    guesses.textContent = "";

    randomNumber = Math.floor(Math.random() * 100) + 1;

}

guessSubmit.addEventListener("click", checkGuess);