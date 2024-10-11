
function getComputerChoise () {

    let x = Math.random ( );

    if (x < 0.33) 
        return "Камень";
    else if (x > 0.66)
        return "Ножницы";
    else 
    return "Бумага";

}

