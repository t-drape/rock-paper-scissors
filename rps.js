function playGame() {
    // Create variable humanScore
    let humanScore = 0;
    // Create variable computerScore
    let computerScore = 0;
    // Create loop to run all previous functions
    // Loop game five times total
    // After loop, compare humanScore to Computer Wins
    // If humanScore is higher, print a victorious message
    // If computerScore is higher, print a failure message

    // Create humanChoice function
    function getHumanChoice() {
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
        return humanChoice;

    }

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

    // Create playRound function
    function playRound(playerChoice, computerChoice) {
        // Use game logic to decide winner
        // If same choice, tie
        if (playerChoice === computerChoice) {
            console.log(`Tie! ${playerChoice} equals ${computerChoice}.`);
        // If rock and paper, paper
        } else if ((playerChoice === "rock" || computerChoice === "rock") && (playerChoice === "paper" || computerChoice === "paper")) {
            if (playerChoice === "paper") {
                console.log("Winner! Paper beats Rock!");
                humanScore++; 
            } else {
                console.log("Loser! Paper beats Rock!");
                computerScore++;
            }

        // If rock and scissors, rock
        } else if ((playerChoice === "rock" || computerChoice === "rock") && (playerChoice === "scissors" || computerChoice === "scissors")) {
            if (playerChoice === "rock") {
                console.log("Winner! Rock beats Scissors!");
                humanScore++;
            } else {
                console.log("Loser! Rock beats Scissors!");
                computerScore++;
            }
        // If paper and scissors, scissors
        } else if ((playerChoice === "paper" || computerChoice === "paper") && (playerChoice === "scissors" || computerChoice === "scissors")) {
            if (playerChoice === "scissors") {
                console.log("Winner! Scissors beats Paper!");
                humanScore++;
            } else {
                console.log("Loser! Scissors beats Paper!");
                computerScore++;
            }
        }
    }
    
    // Create loop to run all previous functions
    // Loop game five times total
    // After each loop, increment UserWins or ComputerWins
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    // After loop, compare UserWins to Computer Wins
    // If UserWins is higher, print a victorious message
    // If ComputerWins is higher, print a failure message
    if (humanScore > computerScore) {
        console.log("Congratulations! You beat the computer!");
    } else if (computerScore > humanScore) {
        console.log("You lost to a computer! The robot takeover is about to happen...");
    } else {
        console.log("You tied a computer?");
    }
}


playGame();


