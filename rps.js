// After each round reset all choices
function playGame() {
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
            message.textContent = `Tie! ${playerChoice} equals ${computerChoice}.`;
        // If rock and paper, paper
        } else if ((playerChoice === "rock" || computerChoice === "rock") && (playerChoice === "paper" || computerChoice === "paper")) {
            if (playerChoice === "paper") {
                humanScore++; 
                message.textContent = "Winner! Paper beats Rock!";
            } else {
                computerScore++;
                message.textContent = "Loser! Paper beats Rock!";
            }

        // If rock and scissors, rock
        } else if ((playerChoice === "rock" || computerChoice === "rock") && (playerChoice === "scissors" || computerChoice === "scissors")) {
            if (playerChoice === "rock") {
                humanScore++;
                message.textContent = "Winner! Rock beats Scissors!";
            } else {
                computerScore++;
                message.textContent = "Loser! Rock beats Scissors!";
            }
        // If paper and scissors, scissors
        } else if ((playerChoice === "paper" || computerChoice === "paper") && (playerChoice === "scissors" || computerChoice === "scissors")) {
            if (playerChoice === "scissors") {
                humanScore++;
                message.textContent = "Winner! Scissors beats Paper!";
            } else {
                computerScore++;
                message.textContent = "Loser! Scissors beats Paper!";
            }
        }
    }

    function resetGame() {
        // Reset values and initialize screen
        human_score.textContent = humanScore;
        computer_score.textContent = computerScore;
        humanScore = 0;
        computerScore = 0;
    }

    function stylePage() {
        play_round_btn.textContent = "Play Round";
        humanChoice = "";
        var_choice.textContent = "";
        comp_choice.textContent = "";
        container.style.visibility = "visible";
        message.style.visibility = "hidden";
        play_round_btn.style.visibility = "hidden";

    }

    function updateScreen() {
        var_choice.textContent = humanChoice;
        comp_choice.textContent = computerChoice;
    }

    function updateScore() {
        human_score.textContent = humanScore;
        computer_score.textContent = computerScore; 
    }

    function checkWinner(score_1, score_2) {
        if ((score_1 == 5) || (score_2 == 5)) {
            if (score_1 == 5) {
                message.textContent = "Congratulations! You beat the computer!";
                message.style.visibility = "visible";
                resetGame();
            } else {
                message.textContent = "You lost to a computer! The robot takeover is about to happen...";
                message.style.visibility = "visible";
                resetGame();
            }
            play_round_btn.textContent = "Play New Game";
            play_round_btn.style.visibility = "visible";
        } else {
            play_round_btn.style.visibility = "visible"; 
            message.style.visibility = "visible";          
        }
    }


    // Allows for rejecting null human choices
    available_human_choices = ["rock", "paper", "scissors"];

    // Create variable humanScore
    let humanScore = 0;
    // Create variable computerScore
    let computerScore = 0;

    // Create Variables for all DOM functions

    // Create changing variables

    let human_score = document.querySelector(".human_content");
    human_score.textContent = humanScore;

    let computer_score = document.querySelector(".computer_content");
    computer_score.textContent = computerScore; 

    let message = document.querySelector(".message");

    let humanChoice = "";


    // Create static variables

    const play_round_btn = document.querySelector(".play_round_btn");

    const container = document.querySelector(".container");

    const var_choice = document.querySelector(".var_choice");

    const comp_choice = document.querySelector(".comp_choice");

    // Set initial visibility to allow for user interactivity

    container.style.visibility = "hidden";

    message.style.visible = "hidden";

    // Button event for user to start game

    play_round_btn.addEventListener("click", () => {
        updateScore();
        stylePage();
    });

    // Create NodeList of each choice for human (buttons)
    choice_btns = document.querySelectorAll(".choices button");

    // Manipulate the DOM according to button pressed

    choice_btns.forEach((button) => {
        button.addEventListener("click", () => {
            if (!(available_human_choices.includes(humanChoice))) {
                humanChoice = button.id;
                computerChoice = getComputerChoice();
                updateScreen();
                playRound(humanChoice, computerChoice);
                updateScore();
                checkWinner(humanScore, computerScore);
            }
        });
    });
}
playGame();