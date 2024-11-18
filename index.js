let roundResultSec = document.querySelector('#roundResult');
let score = document.querySelector('#score');

function getComputerChoice () {
    let ComputerChoice = Math.random ( );
        if (ComputerChoice < 0.33) 
            return "камень";
        else if (ComputerChoice < 0.66)
            return "ножницы";   
        else 
            return "бумага";
}

function getHumanChoice () {
    let HumanChoice = prompt("Выберите камень, ножницы или бумагу");    
    return HumanChoice;
}

let HumanScore = 0;
let ComputerScore = 0;
let roundResult = "";

function PlayRound (ComputerChoice, HumanChoice) {

    if (ComputerChoice === "камень" && HumanChoice === "бумага") {
        roundResult = "Поздравляю! Бумага бьет камень!";
        HumanScore++;
    }
    else if (ComputerChoice === "камень" && HumanChoice === "ножницы") {
        roundResult = "Увы! Камень бьет бумагу.";
        ComputerScore++;
    }
    else if (ComputerChoice === "ножницы" && HumanChoice === "бумага") {
        roundResult = "Увы! Ножницы бьют бумагу.";
        ComputerScore++;
    }
    else if (ComputerChoice === "ножницы" && HumanChoice === "камень") {
        roundResult = "Поздравляю! Камень бьет ножницы!";
        HumanScore++;
    } 
    else if (ComputerChoice === "бумага" && HumanChoice === "камень") {
        roundResult = "Увы! Бумага бьют камень.";
        ComputerScore++;
    }
    else if (ComputerChoice === "бумага" && HumanChoice === "ножницы") {
        roundResult = "Поздравляю! Ножницы бьют бумагу!";
        HumanScore++;
    }
    else { 
        roundResult = "Ничья.";
    }

roundResultSec.textContent = `Результаты раунда: ${roundResult}`;
score.textContent = `Счет: вы - ${HumanScore} очков, компьтер - ${ComputerScore}`;

if (HumanScore === 5 || ComputerScore === 5) {
    const winner = HumanScore === 5 ? "Вы победили!" : "Компьютер победил!";
        alert(`${winner} Финальный счет: вы - ${HumanScore}, компьютер - ${ComputerScore}`);
}
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener ('click', () => {
    PlayRound (getComputerChoice (), 'камень');
});

paperBtn.addEventListener ('click', () => {
    PlayRound (getComputerChoice (), 'бумага');
});

scissorsBtn.addEventListener ('click', () => {
    PlayRound (getComputerChoice (), 'ножницы');
});