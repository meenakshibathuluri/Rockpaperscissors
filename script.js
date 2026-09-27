const choices = document.querySelectorAll(".choice");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const message = document.getElementById("message");
const playerChoiceSpan = document.getElementById("player-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const resetBtn = document.getElementById("reset-btn");

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const playerMove = choice.dataset.move;
    const computerMove = getComputerMove();

    highlightChoice(choice);
    updateChoicesText(playerMove, computerMove);
    updateScores(playerMove, computerMove);
  });
});

resetBtn.addEventListener("click", resetGame);

function getComputerMove() {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function highlightChoice(activeChoice) {
  choices.forEach(btn => btn.classList.remove("active"));
  activeChoice.classList.add("active");
}

function updateChoicesText(playerMove, computerMove) {
  playerChoiceSpan.textContent = capitalize(playerMove);
  computerChoiceSpan.textContent = capitalize(computerMove);
}

function updateScores(playerMove, computerMove) {
  if (playerMove === computerMove) {
    message.textContent = "It's a draw!";
    return;
  }

  const playerWins =
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper");

  if (playerWins) {
    playerScore++;
    playerScoreSpan.textContent = playerScore;
    message.textContent = "Congratulations!! You win this round!";
  } else {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    message.textContent = "Computer wins this round!";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpan.textContent = "0";
  computerScoreSpan.textContent = "0";
  message.textContent = "Choose your move";
  playerChoiceSpan.textContent = "-";
  computerChoiceSpan.textContent = "-";
  choices.forEach(btn => btn.classList.remove("active"));
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
