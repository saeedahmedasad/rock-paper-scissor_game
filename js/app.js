const computerScore = document.querySelector("#compScore");
const userScore = document.querySelector("#userScore");
const ROCK = document.querySelector("#rock");
const PAPER = document.querySelector("#paper");
const SCISSOR = document.querySelector("#scissor");
const BUTTON = document.querySelector("#button");
const LOGO = document.querySelector(".logo");

let choices = ["rock", "paper", "scissor"];
let userChoice, compChoice;
let userMarks = 0;
let compMarks = 0;
const losingWord = () => {
  let losingWords = ["aaw", "oooh", "damn it", "shit", "by margin", "oops"];
  let random = Math.floor(Math.random() * losingWords.length);
  losingWords = losingWords[random];
  return losingWords;
};
const winingWord = () => {
  let winingWords = [
    "yess",
    "ooo",
    "damn good",
    "playing like a ghost",
    "by margin",
    "great",
  ];
  let random = Math.floor(Math.random() * winingWords.length);
  winingWords = winingWords[random];
  return winingWords;
};
const randomCompChoice = () => {
  let random = Math.floor(Math.random() * choices.length);
  let randomcompChoice = choices[random];
  return randomcompChoice;
};
const checker = (choice) => {
  compChoice = randomCompChoice();
  userChoice = choice;
  if (userChoice == compChoice) {
    userMarks++;
    userScore.innerText = userMarks;
    LOGO.innerText = `${winingWord()} You Won`;
  } else {
    compMarks++;
    compScore.innerText = compMarks;
    LOGO.innerText = `${losingWord()} You Lost`;
  }
};

ROCK.addEventListener("click", () => {
  let choice = "rock";
  checker(choice);
  ROCK.style.transform = "scale(1.2)";
  setTimeout(() => {
    ROCK.style.transform = "scale(1)";
  }, 500);
});
PAPER.addEventListener("click", () => {
  let choice = "paper";
  checker(choice);
  PAPER.style.transform = "scale(1.2)";
  setTimeout(() => {
    PAPER.style.transform = "scale(1)";
  }, 500);
});
SCISSOR.addEventListener("click", () => {
  let choice = "scissor";
  checker(choice);
  SCISSOR.style.transform = "scale(1.2)";
  setTimeout(() => {
    SCISSOR.style.transform = "scale(1)";
  }, 500);
});

BUTTON.addEventListener("click", () => {
  userMarks = 0;
  compMarks = 0;
  LOGO.innerText = "Resetted";
  userScore.innerText = userMarks;
  compScore.innerText = compMarks;
});
