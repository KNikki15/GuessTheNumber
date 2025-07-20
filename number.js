let randomNumber;
let guessCount;

function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("guessCount").textContent = "0";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById("message").textContent = "Please enter a number between 1 and 100.";
    return;
  }

  guessCount++;
  document.getElementById("guessCount").textContent = guessCount;

  if (userGuess === randomNumber) {
    document.getElementById("message").textContent = "🎉 Correct! You guessed it!";
    document.getElementById("guessInput").disabled = true;
  } else if (userGuess < randomNumber) {
    document.getElementById("message").textContent = "📉 Too low!";
  } else {
    document.getElementById("message").textContent = "📈 Too high!";
  }
}

startGame();
