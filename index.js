
function getComputerChoise () {

    let ComputerChoice = Math.random ( );

    if (ComputerChoice < 0.33) 
        return "Камень";
    else if (ComputerChoice > 0.66)
        return "Ножницы";
    else 
    return "Бумага";

}

function getHumanChoice () {
    let HumanChoice = prompt("Выберите камень, ножницы или бумагу");    
    return HumanChoice;
}
let choice = getHumanChoice ();



