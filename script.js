const buttons = document.querySelectorAll(".choice");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

// Baby theme emoji mappings
const babyEmojis = {
  rock: "🧸",
  paper: "🍼",
  scissors: "🐥"
};

// Cute baby messages
const babyMessages = {
  win: ["Yay! You won! 🎀", "So cute! You beat the computer! 🧸", "Great job! 🍼💖"],
  lose: ["Oh no! You lost! 😢", "Computer won this time! 🐥", "Try again, cutie! 🎀"],
  draw: ["It's a tie! 🐣", "Aww! Same choice! 💗", "No winner this time! 🧸"]
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(playerChoice, computerChoice);

    updateUI(playerChoice, computerChoice, result);
  });
});

function determineWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }

  return "lose";
}

function updateUI(player, computer, result) {
  let message = "";

  if (result === "win") {
    message = getRandomMessage(babyMessages.win);
    playerScore++;
  } else if (result === "lose") {
    message = getRandomMessage(babyMessages.lose);
    computerScore++;
  } else {
    message = getRandomMessage(babyMessages.draw);
  }

  resultText.innerHTML = `
    <p style="font-size:22px;">
      You chose ${babyEmojis[player]}  
      | Computer chose ${babyEmojis[computer]}
    </p>
    <p style="margin-top:10px;">${message}</p>
  `;

  scoreText.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  // Cute pop animation
  resultText.style.transform = "scale(1.1)";
  setTimeout(() => {
    resultText.style.transform = "scale(1)";
  }, 200);
}

function getRandomMessage(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
