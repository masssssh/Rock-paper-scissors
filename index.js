function getComputerChoise () {

    let ComputerChoice = Math.random ( );

    if (ComputerChoice < 0.33) 
        return "камень";

    else if (ComputerChoice > 0.66)
        return "ножницы";

    else 
    return "бумага";

}

function getHumanChoice () {
    let HumanChoice = prompt("Выберите камень, ножницы или бумагу");    
    return HumanChoice;
}

let HumanChoice = getHumanChoice().toLowerCase();
let СomputerChoice = getComputerChoise;

let HumanScore = 0;
let ComputerScore = 0;

function PlayRound (ComputerChoice, HumanChoice) {

    switch (true) {

    case (ComputerChoice === "камень" && HumanChoice === "бумага"):
        console.log("Поздравляю! Бумага бьет камень!");
        break;

    case (ComputerChoice === "камень" && HumanChoice === "ножницы"):
        console.log("Увы! Камень бьет бумагу.");
        break;

    case (ComputerChoice === "ножницы" && HumanChoice === "бумага"):
        console.log("Увы! Ножницы бьют бумагу.");
        break;

    case (ComputerChoice === "ножницы" && HumanChoice === "камень"):
        console.log("Поздравляю! Камень бьет ножницы!");
        break;

    case (ComputerChoice === "бумага" && HumanChoice === "камень"):
        console.log("Увы! Бумага бьют камень.");
        break;

    case (ComputerChoice === "бумага" && HumanChoice === "ножницы"):
        console.log("Поздравляю! Ножницы бьют бумагу!");
        break;

    default: 
        console.log("Ничья.");
        break;
    }
}

PlayRound(СomputerChoice, HumanChoice);