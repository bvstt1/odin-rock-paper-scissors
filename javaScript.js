const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

// Computer Choice
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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice(2)
    console.log("You has chosen " + humanChoice);
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

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

