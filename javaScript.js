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

// HTML variables
const container = document.querySelector("#container");
const title = document.querySelector("#title");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let div = document.createElement("div");
let message = document.createElement("p");
let message2 = document.createElement("p");
let message3 = document.createElement("p");
let numberOfWins = document.createElement("p");
let refreshButton = document.createElement("button");

let roundCont = 0;
let humanWin = 0;
let computerWin = 0;


// Game
function playRound(container,div, message, message2, message3, humanChoice, humanWin, computerWin) {
    let computerChoice = getComputerChoice(2)
    div.style.cssText = "color: green; background: white; margin-top: 10px; width: 390px; heigth: 200px; border-radius: 10px; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 10px";
    div.setAttribute("id", "message");
    div.textContent = "You choose: " + humanChoice + " | Computer choose: " + computerChoice;

    container.appendChild(div);

    if (humanChoice === computerChoice) {
        message.style.cssText = "margin: 5px 0px"
        message.textContent="It's a tie, nobody wins";
        div.appendChild(message);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {;
        message2.style.cssText="margin: 5px 0px";
        message2.textContent="You win this round, " + humanChoice + " beats " + computerChoice
        div.appendChild(message2);
        humanWin++;
    } else {
        message3.style.cssText="margin: 5px 0px";
        message3.textContent="You lost this round, " + computerChoice + " beats " + humanChoice;
        div.appendChild(message3);
        computerWin++;
    };
    return [humanWin, computerWin];
}


function roundText(roundCont){
    roundCont++;
    const titleRound = document.querySelector("#title-round");
    titleRound.textContent = "Round: " + roundCont;
    return roundCont;
}

function wins(title, numberOfWins, humanWin, computerWin){
    numberOfWins.textContent = "User: " + humanWin + " wins | Computer: " + computerWin + " wins";
    title.appendChild(numberOfWins);
}

function resultGame(resultMessage, pressTheButtonMessage, div, divEndGame, resetButton){
    div.appendChild(divEndGame);
    divEndGame.appendChild(resultMessage);
    divEndGame.appendChild(pressTheButtonMessage);
    divEndGame.appendChild(resetButton);
    resetButton.addEventListener("click", (_) => {
        location.reload();
    });
    console.log("You Win. Congratulations!");
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    return;
}

function endGame(div, humanWin, computerWin){
    let divEndGame = document.createElement("div");
    divEndGame.style.cssText = "display: flex; justify-content: center; align-items: center; flex-direction: column;"
    let resultMessage =document.createElement("p");
    resultMessage.style.cssText="margin: 10px; font-weight: 600;";
    let pressTheButtonMessage = document.createElement("p");
    pressTheButtonMessage.style.cssText="margin: 5px;";
    let resetButton = document.createElement("button");
    resetButton.style.cssText="height: 40px; width: auto; color: rgba(0, 0, 0, 0.73); margin-top: 10px;";
    resetButton.textContent="Im the button bellow :D";

    if (humanWin === 5){
        resultMessage.textContent="You win, congratulation!";
        pressTheButtonMessage.textContent="Press the button bellow to play again";
        resultGame(resultMessage, pressTheButtonMessage, div, divEndGame, resetButton);
        return;
    }else if (computerWin === 5){
        resultMessage.textContent="You lose! F";
        pressTheButtonMessage.textContent="Press the button bellow to play again"
        resultGame(resultMessage, pressTheButtonMessage, div, divEndGame, resetButton);
        return;
    };
}

// Buttons to options
rock.addEventListener("click", () => {
    roundCont = roundText(roundCont);
    [humanWin, computerWin] = playRound(container, div, message, message2, message3, "rock", humanWin, computerWin);
    wins(title, numberOfWins, humanWin, computerWin);
    endGame(div,humanWin,computerWin);
});
paper.addEventListener("click", () => {
    roundCont =  roundText(roundCont);
    [humanWin, computerWin] = playRound(container, div, message, message2, message3, "paper", humanWin, computerWin);
    wins(title, numberOfWins, humanWin, computerWin);
    endGame(div, humanWin,computerWin);
});
scissors.addEventListener("click", () => {
    roundCont = roundText(roundCont);
    [humanWin, computerWin] = playRound(container, div, message, message2, message3, "scissors", humanWin, computerWin);
    wins(title, numberOfWins, humanWin, computerWin);
    endGame(div, humanWin,computerWin);
});