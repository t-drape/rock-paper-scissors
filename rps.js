
// Create variable humanScore
let humanScore = 0;
let human_score = document.querySelector(".human_content");
human_score.textContent = humanScore;
// Create variable computerScore
let computerScore = 0;
let computer_score = document.querySelector(".computer_content");
computer_score.textContent = computerScore;
// Create loop to run all previous functions
// Loop game five times total
// After loop, compare humanScore to Computer Wins
// If humanScore is higher, print a victorious message
// If computerScore is higher, print a failure message

// No longer needed

// // Create humanChoice function
// function getHumanChoice() {
//     // Create variable humanChoice
//     let humanChoice = 0;
//     // Prompt user for value for humanChoice
//     humanChoice = "rock";

//     if (humanChoice !== null) {
//         // Make sure humanChoice is case invalid
//         humanChoice = humanChoice.toLowerCase();
//         // Check if humanChoice is valid
//         while (!(humanChoice === "rock") 
//             && !(humanChoice === "paper") 
//             && !(humanChoice === "scissors")) {
//                 humanChoice = prompt("Please select a valid value: Rock, Paper, or Scissors?");
//                 humanChoice = humanChoice.toLowerCase();
//             }
//         return humanChoice;
//     }

// }

// Create computerChoice
function getComputerChoice() {
        // Randomly select one of three choices
    // Assign choice to computer choice
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        computerChoice = "rock";
    } else if (choice === 1) {
        computerChoice = "paper";
    } else if (choice === 2) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

let message = document.querySelector(".message");

// Create playRound function
function playRound(playerChoice, computerChoice) {
    // Use game logic to decide winner
    // If same choice, tie
    if (playerChoice === computerChoice) {
        message.textContent = `Tie! ${playerChoice} equals ${computerChoice}.`;
    // If rock and paper, paper
    } else if ((playerChoice === "rock" || computerChoice === "rock") && (playerChoice === "paper" || computerChoice === "paper")) {
        if (playerChoice === "paper") {
            message.textContent = "Winner! Paper beats Rock!";
            humanScore++; 
        } else {
            message.textContent = "Loser! Paper beats Rock!";
            computerScore++;
        }

    // If rock and scissors, rock
    } else if ((playerChoice === "rock" || computerChoice === "rock") && (playerChoice === "scissors" || computerChoice === "scissors")) {
        if (playerChoice === "rock") {
            message.textContent = "Winner! Rock beats Scissors!";
            humanScore++;
        } else {
            message.textContent = "Loser! Rock beats Scissors!";
            computerScore++;
        }
    // If paper and scissors, scissors
    } else if ((playerChoice === "paper" || computerChoice === "paper") && (playerChoice === "scissors" || computerChoice === "scissors")) {
        if (playerChoice === "scissors") {
            message.textContent = "Winner! Scissors beats Paper!";
            humanScore++;
        } else {
            message.textContent = "Loser! Scissors beats Paper!";
            computerScore++;
        }
    }
    human_score = document.querySelector(".human_content");
    human_score.textContent = humanScore;

    computer_score = document.querySelector(".computer_content");
    computer_score.textContent = computerScore;
}

// Create loop to run all previous functions
// Loop game five times total
// After each loop, increment UserWins or ComputerWins


// Good code... just messing with scores 
// const humanSelection = getHumanChoice();
// if (humanSelection !== undefined) {
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//         // After loop, compare UserWins to Computer Wins
//     // If UserWins is higher, print a victorious message
//     // If ComputerWins is higher, print a failure message
//     if (humanScore > computerScore) {
//         console.log("Congratulations! You beat the computer!");
//     } else if (computerScore > humanScore) {
//         console.log("You lost to a computer! The robot takeover is about to happen...");
//     } else {
//         console.log("You tied a computer?");
//     }
// }

const play_round_btn = document.querySelector(".play_round_btn");

const container = document.querySelector(".container");
container.style.visibility = "hidden";

play_round_btn.addEventListener("click", () => {
    humanChoice = "";
    var_choice.textContent = "";
    comp_choice.textContent = "";
    message.textContent = "";
    container.style.visibility = "visible";
    play_round_btn.style.visibility = "hidden";
});

available_human_choices = ["rock", "paper", "scissors"];

choice_btns = document.querySelectorAll(".choices button");

const var_choice = document.querySelector(".var_choice");
const comp_choice = document.querySelector(".comp_choice");

humanScore = 4;

choice_btns.forEach((button) => {
    button.addEventListener("click", () => {
        if (!(available_human_choices.includes(humanChoice))) {
            humanChoice = button.id;
            var_choice.textContent = humanChoice;
            computerChoice = getComputerChoice();
            comp_choice.textContent = computerChoice;
            playRound(humanChoice, computerChoice);
            if ((humanScore == 5) || (computerScore == 5)) {
                if (humanScore == 5) {
                    message.textContent = "Congratulations! You beat the computer!";
                } else {
                    message.textContent = "You lost to a computer! The robot takeover is about to happen...";
                }
            } else {
                play_round_btn.style.visibility = "visible";
            }
        }
    });
});

// After each round reset all choices
function playGame() {
}







// If Play Round button pressed, activate round


