const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanchoice) => {
  playTheGame(humanchoice, playMachine());
};

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => playHuman("rock"));
paperButton.addEventListener("click", () => playHuman("paper"));
scissorsButton.addEventListener("click", () => playHuman("scissors"));

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " Máquina: " + machine);

  if (human === machine) {
    result.innerHTML = "&#128529;";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "&#128522;";
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber;
    
    result.innerHTML = "&#128533;";
  }
};

