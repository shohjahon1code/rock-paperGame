const button = document.querySelector(".button");
const elModalBtn = document.querySelector("#btn");
const elModal = document.querySelector(".modal");
const elOverlay = document.querySelector(".overlay");

function showModal() {
  elOverlay.classList.add("active");
  elModal.classList.add("active");
}

function closeModal() {
  elOverlay.classList.remove("active");
  elModal.classList.remove("active");
}

setTimeout(showModal, 2000);

elModalBtn.addEventListener("click", () => {
  closeModal();
});

//constants
const ROCK = "ROCK";
const SCISSORS = "SCISSORS";
const PAPER = "PAPER";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";
const RESULT_PLAYER_WINS = "PLAYER_WINS";

function getPlayerChoice() {
  const selection = prompt(
    `${ROCK}, ${SCISSORS} and ${PAPER} choose one of them?`
  ).toUpperCase();
  if (selection !== ROCK && selection !== SCISSORS && selection !== PAPER) {
    alert(
      `Invalid choice so that I have to get ${DEFAULT_USER_CHOICE} for your choice`
    );
    return;
  } else {
    return selection;
  }
}

function getComputerChoice() {
  const randomSelection = Math.random();
  if (randomSelection < 0.35) {
    return ROCK;
  } else if (randomSelection < 0.7) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

function determineWinner(computerChoice, playerChoice = DEFAULT_USER_CHOICE) {
  if (computerChoice == playerChoice) {
    return RESULT_DRAW;
  } else if (
    (computerChoice == ROCK && playerChoice == PAPER) ||
    (computerChoice == PAPER && playerChoice == SCISSORS) ||
    (computerChoice == SCISSORS && playerChoice == ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
}

button.addEventListener("click", () => {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = determineWinner(computerSelection, playerSelection);
  } else {
    winner = determineWinner(computerSelection);
  }
  let msg = `You chose ${
    playerSelection || DEFAULT_USER_CHOICE
  }, and computer chose ${computerSelection} so that you `;

  if (winner == RESULT_DRAW) {
    msg += "had a draw";
  } else if (winner == RESULT_PLAYER_WINS) {
    msg += "won";
  } else {
    msg += "lost";
  }
  alert(msg);
});
