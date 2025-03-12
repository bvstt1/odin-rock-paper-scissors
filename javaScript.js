function getComputerChoice(num){
    let random = Math.floor(Math.random() * num);
    if (random === 0){
        return "rock";
    } else if (random === 1){
        return "paper";
    } else if (random === 2){
        return "scissors";
    }
}

function getHumanChoice() {
    let option;
    while (true) {
        option = prompt(`Write your choice! (rock | paper | scissors)`);
        
        if (option === null || option.trim() === "") {
            alert("You must enter a valid choice!");
        } else {
            option = option.toLowerCase();
            if (option === "rock" || option === "paper" || option === "scissors") {
                return option;
            } else {
                alert("Invalid choice! Please enter rock, paper, or scissors.");
            }
        }
    }
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    console.log("The computer has chosen " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie, nobody wins");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You have won this round, " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("You lost this round, " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    return [humanScore, computerScore];
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    while (round <= 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice(3);
        console.log("Round number " + round);

        [humanScore, computerScore] = playRound(humanChoice, computerChoice, humanScore, computerScore);
        console.log("User: " + humanScore + " points. | Computer: " + computerScore + " points.");
        round++;
    }
    if (humanScore > computerScore){
        console.log("You Win. Congratulations!")
    }else if (humanScore < computerScore){
        console.log("You Lose. Computer Wins!")
    }else{
        console.log("It's a tie")
    }
    console.log("Reload the page to play again")
}

playGame()
