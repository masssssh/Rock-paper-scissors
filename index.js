function getComputerChoise () {

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

function PlayRound (ComputerChoice, HumanChoice) {

    if (ComputerChoice === "камень" && HumanChoice === "бумага") {
        console.log("Поздравляю! Бумага бьет камень!");
        HumanScore++;
    }

    else if (ComputerChoice === "камень" && HumanChoice === "ножницы") {
        console.log("Увы! Камень бьет бумагу.");
        ComputerScore++;
    }

    else if (ComputerChoice === "ножницы" && HumanChoice === "бумага") {
        console.log("Увы! Ножницы бьют бумагу.");
        ComputerScore++;
    }

    else if (ComputerChoice === "ножницы" && HumanChoice === "камень") {
        console.log("Поздравляю! Камень бьет ножницы!");
        HumanScore++;
    } 

    else if (ComputerChoice === "бумага" && HumanChoice === "камень") {
        console.log("Увы! Бумага бьют камень.");
        ComputerScore++;
    }

    else if (ComputerChoice === "бумага" && HumanChoice === "ножницы") {
        console.log("Поздравляю! Ножницы бьют бумагу!");
        HumanScore++;
    }

    else { 
        console.log("Ничья.");
    }
}




for (let i = 0; i < 5; i++) {
    
    console.log(`Раунд ${i + 1}`);
    let HumanChoice = getHumanChoice().toLowerCase();
    let СomputerChoice = getComputerChoise();
    PlayRound(СomputerChoice, HumanChoice);
    console.log(ComputerScore);
    console.log(HumanScore);
}


console.log(("Результаты: Вы набрали " + HumanScore + " очков, компьютер - " + ComputerScore ));