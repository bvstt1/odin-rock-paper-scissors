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

function playRound(humanChoice) {
    let computerChoice = getComputerChoice(2)
    console.log("The computer has chosen " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie, nobody wins");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You have won this round, " + humanChoice + " beats " + computerChoice);
    } else {
        console.log("You lost this round, " + computerChoice + " beats " + humanChoice);
    }
    const container = document.querySelector("#container");

    const message = document.createElement("div");
    message.style.cssText = "color: blue; background: white; margin-top: 10px;";
    message.setAttribute("id", "message");
    message.textContent = "You has chosen " + humanChoice;
    return container.appendChild(message);
}

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));