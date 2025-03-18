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

const container = document.querySelector("#container");
let div = document.createElement("div");
let message = document.createElement("p");
let message2 = document.createElement("p");
let message3 = document.createElement("p");

function playRound(container,div, message, message2, message3, humanChoice) {
    let computerChoice = getComputerChoice(2)
    div.style.cssText = "color: green; background: white; margin-top: 10px;";
    div.setAttribute("id", "message");
    div.textContent = "You has chosen " + humanChoice;
    container.appendChild(div);

    if (humanChoice === computerChoice) {
        message.textContent="It's a tie, nobody wins";
        div.appendChild(message);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        message2.textContent="You have won this round, " + humanChoice + " beats " + computerChoice;
        div.appendChild(message2);
    } else {
        message3.textContent="You lost this round, " + computerChoice + " beats " + humanChoice;
        div.appendChild(message3)
    }      
}

rock.addEventListener("click", () => playRound(container, div, message, message2, message3, "rock"));
paper.addEventListener("click", () => playRound(container, div, message, message2, message3, "paper"));
scissors.addEventListener("click", () => playRound(container, div, message, message2, message3, "scissors"));