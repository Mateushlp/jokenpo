const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreValue = 0;
let machineScoreValue = 0;

const playHuman = (humanChoice) => {
  const machineChoice = playMachine();
  playTheGame(humanChoice, machineChoice);
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  if (human === machine) {
    result.innerHTML = "Deu Empate!";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreValue++;
    humanScore.textContent = humanScoreValue;
    result.innerHTML = "Parabéns, você ganhou!";
  } else {
    machineScoreValue++;
    machineScore.textContent = machineScoreValue;
    result.innerHTML = "Você perdeu!";
  }
};

// Adiciona eventos de clique aos botões
document.querySelector("#rock").addEventListener("click", () => playHuman("rock"));
document.querySelector("#paper").addEventListener("click", () => playHuman("paper"));
document.querySelector("#scissors").addEventListener("click", () => playHuman("scissors"));
