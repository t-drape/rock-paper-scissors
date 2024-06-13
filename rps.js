// Create variable UserWins
let userWins = 0;
// Create variable ComputerWins
let computerWins = 0;
// Create loop to run all previous functions
// Loop game five times total
for (let i = 0; i < 5; i++) {
    // Compare computerChoice to humanChoice
    console.log(computerChoice)
    console.log(humanChoice)

    // Use game logic to decide winner
    // If same choice, tie
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    // If rock and paper, paper
    } else if ((humanChoice === "rock" || computerChoice === "rock") && (humanChoice === "paper" || computerChoice === "paper")) {
        if (humanChoice === "paper") {
            console.log("Winner!");
            userWins++; 
        } else {
            console.log("Loser!");
            computerWins++;
        }

    // If rock and scissors, rock
    } else if ((humanChoice === "rock" || computerChoice === "rock") && (humanChoice === "scissors" || computerChoice === "scissors")) {
        if (humanChoice === "rock") {
            console.log("Winner!");
            userWins++;
        } else {
            console.log("Loser!");
            computerWins++;
        }
    // If paper and scissors, scissors
    } else if ((humanChoice === "paper" || computerChoice === "paper") && (humanChoice === "scissors" || computerChoice === "scissors")) {
        if (humanChoice === "scissors") {
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
    // Create variable humanChoice
    let humanChoice = 0;
    // Prompt user for value for humanChoice
    humanChoice = prompt("Rock, Paper, or Scissors?", "Rock");
    // Make sure humanChoice is case invalid
    humanChoice = humanChoice.toLowerCase();
    // Check if humanChoice is valid
    while (!(humanChoice === "rock") 
        && !(humanChoice === "paper") 
        && !(humanChoice === "scissors")) {
            humanChoice = prompt("Please select a valid value: Rock, Paper, or Scissors?");
            humanChoice = humanChoice.toLowerCase();
        }

}

// Create computerChoice
function computerChoice() {
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
}

// Create playRound function
function playRound(humanChoice, computerChoice) {
        // Use game logic to decide winner
    // If same choice, tie
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    // If rock and paper, paper
    } else if ((humanChoice === "rock" || computerChoice === "rock") && (humanChoice === "paper" || computerChoice === "paper")) {
        if (humanChoice === "paper") {
            console.log("Winner!");
            userWins++; 
        } else {
            console.log("Loser!");
            computerWins++;
        }

    // If rock and scissors, rock
    } else if ((humanChoice === "rock" || computerChoice === "rock") && (humanChoice === "scissors" || computerChoice === "scissors")) {
        if (humanChoice === "rock") {
            console.log("Winner!");
            userWins++;
        } else {
            console.log("Loser!");
            computerWins++;
        }
    // If paper and scissors, scissors
    } else if ((humanChoice === "paper" || computerChoice === "paper") && (humanChoice === "scissors" || computerChoice === "scissors")) {
        if (humanChoice === "scissors") {
            console.log("Winner!");
            userWins++;
        } else {
            console.log("Loser!");
            computerWins++;
        }
    }
}