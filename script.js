let rockElement = document.getElementById("rock");
let paperElement = document.getElementById("paper");
let scissorsElement = document.getElementById("scissors");

let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let drawScore = document.getElementById("draw-score");

let messageElement = document.getElementById("message");

let turnElement = document.querySelector(".trun-message");

let user = 0;
let computer = 0;
let draw = 0;

let fristPlayer = true;

let choices = ["rock", "paper", "scissor"];

let player1Choice = "";
let player2Choice = "";

function updateScores() {
    if (player1Choice == player2Choice) {
        draw++;
        drawScore.innerText = draw;
        messageElement.innerText = "It's Draw";
        messageElement.style.backgroundColor = "black";
        player1Choice = "";
        player2Choice = "";
        fristPlayer = true;

        turnElement.innerText = "Player 1 Turn";
    } else if (
        (player1Choice == "rock" && player2Choice == "scissor") ||
        (player1Choice == "paper" && player2Choice == "rock") ||
         (player1Choice == "scissor" && player2Choice == "paper")
    ) {
     user++;
     userScore.innerText = user;
     messageElement.innerText = 'Player1 Won! ${userChoice} beat ${player1Choice}';
     messageElement.style.backgroundColor = "green";
    } else {
        computer++;
        computerScore.innerText = computer;
        messageElement.innerText = 'Player1 Lost! ${player2Choice} beat ${userChoice}';
        messageElement.style.backgroundColor = "green";
    }
}

rockElement.addEventListener("click", () => {
    console.log("inside rock");
    if (fristPlayer) {
        player1Choice = "rock";
        fristPlayer = false;
        turnElement.innerText = "Player 2 Turn";
    } else {
        player2Choice = "rock";
        updateScores();
    }
});

paperElement.addEventListener("click", () => {
    if (fristPlayer) {
        player1Choice = "paper";
        fristPlayer = false;
        turnElement.innerText = "Player 2 Turn";
    } else {
        player2Choice = "paper";
        updateScores();
    }
});

scissorsElement.addEventListener("click", () => {
    if (fristPlayer) {
        player1Choice = "scissors";
        fristPlayer = false;
        turnElement.innerText = "Player 2 Turn";
    } else {
        player2Choice = "scissors";
        updateScores();
    }
});