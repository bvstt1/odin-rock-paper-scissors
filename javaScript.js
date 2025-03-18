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

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

const container = document.querySelector("#container");
let div = document.createElement("div");
let message = document.createElement("p");
let message2 = document.createElement("p");
let message3 = document.createElement("p");

let roundCont = 0;
let humanWin = 0;
let computerWin = 0;

function playRound(container,div, message, message2, message3, humanChoice, humanWin, computerWin) {
    let computerChoice = getComputerChoice(2)
    div.style.cssText = "color: green; background: white; margin-top: 10px; width: 390px; heigth: 200px; border-radius: 10px; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 10px";
    div.setAttribute("id", "message");
    div.textContent = "You has chosen " + humanChoice;

    container.appendChild(div);

    if (humanChoice === computerChoice) {
        message.style.cssText = "margin: 0px"
        message.textContent="It's a tie, nobody wins";
        div.appendChild(message);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        message2.style.cssText="margin: 0px"
        message2.textContent="You have won this round, " + humanChoice + " beats " + computerChoice
        div.appendChild(message2);
        humanWin++;
    } else {
        message3.style.cssText="margin: 0px"
        message3.textContent="You lost this round, " + computerChoice + " beats " + humanChoice;
        div.appendChild(message3);
        computerWin++;
    }
}
rock.addEventListener("click", () => {
    roundCont++;
    const titleRound = document.querySelector("#title-round");
    titleRound.textContent = "Round: " + roundCont;
    playRound(container, div, message, message2, message3, "rock", humanWin, computerWin)
});
paper.addEventListener("click", () => {
    roundCont++;
    const titleRound = document.querySelector("#title-round");
    titleRound.textContent = "Round: " + roundCont;
    playRound(container, div, message, message2, message3, "paper", humanWin, computerWin)
});
scissors.addEventListener("click", () => {
    roundCont++;
    const titleRound = document.querySelector("#title-round");
    titleRound.textContent = "Round: " + roundCont;
    playRound(container, div, message, message2, message3, "scissors", humanWin, computerWin)
});