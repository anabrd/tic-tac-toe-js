let gameEnd = false;
let counter = 1;

function putSign(id, sign) {
    document.getElementById(id).innerHTML = sign;
}


while (counter <= 9) {


    // Player X scenarios
    if (counter % 2 == 1) {
        let sign = "x";
        document.getElementById("instructions").innerHTML = `Player X's turn:`;

    }


    counter++;
}