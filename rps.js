// Create variable UserWins
let userWins = 0;
// Create variable ComputerWins
let computerWins = 0;
// Create loop to run all previous functions
// Loop game five times total
for (let i = 0; i < 5; i++) {
    // Compare ComputerChoice to UserChoice
    console.log(ComputerChoice)
    console.log(UserChoice)

    // Use game logic to decide winner
    // If same choice, tie
    if (UserChoice === ComputerChoice) {
        console.log("Tie!");
    // If rock and paper, paper
    } else if ((UserChoice === "rock" || ComputerChoice === "rock") && (UserChoice === "paper" || ComputerChoice === "paper")) {
        if (UserChoice === "paper") {
            console.log("Winner!");
            userWins++; 
        } else {
            console.log("Loser!");
            computerWins++;
        }

    // If rock and scissors, rock
    } else if ((UserChoice === "rock" || ComputerChoice === "rock") && (UserChoice === "scissors" || ComputerChoice === "scissors")) {
        if (UserChoice === "rock") {
            console.log("Winner!");
            userWins++;
        } else {
            console.log("Loser!");
            computerWins++;
        }
    // If paper and scissors, scissors
    } else if ((UserChoice === "paper" || ComputerChoice === "paper") && (UserChoice === "scissors" || ComputerChoice === "scissors")) {
        if (UserChoice === "scissors") {
            console.log("Winner!");
            userWins++;
        } else {
            console.log("Loser!");
            computerWins++;
        }
    }
    console.log(computerWins)
    console.log(userWins)
}
// After loop, compare UserWins to Computer Wins
// If UserWins is higher, print a victorious message
// If ComputerWins is higher, print a failure message


// Create humanChoice function
function humanChoice() {
    // Create variable UserChoice
    let UserChoice = 0;
    // Prompt user for value for UserChoice
    UserChoice = prompt("Rock, Paper, or Scissors?", "Rock");
    // Make sure UserChoice is case invalid
    UserChoice = UserChoice.toLowerCase();
    // Check if UserChoice is valid
    while (!(UserChoice === "rock") 
        && !(UserChoice === "paper") 
        && !(UserChoice === "scissors")) {
            UserChoice = prompt("Please select a valid value: Rock, Paper, or Scissors?");
            UserChoice = UserChoice.toLowerCase();
        }

}

// Create computerChoice
function computerChoice() {
        // Randomly select one of three choices
    // Assign choice to computer choice
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        ComputerChoice = "rock";
    } else if (choice === 1) {
        ComputerChoice = "paper";
    } else if (choice === 2) {
        ComputerChoice = "scissors";
    }
}

// Create playRound function
function playRound(humanChoice, ComputerChoice) {

}