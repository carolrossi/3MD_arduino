const POT = 35;
const LEDVERMELHO = 32;
const LEDAMARELO = 33;
const LEDVERDE = 25;

setInterval(() => {
    let valorPOT = analogRead(POT) * 100;

    console.log("nivel DA BATERIA: " + valorPOT.toFixed(2));
    if (valorPOT < 20) {
        LEDVERMELHO = 1
    }
    if (valorPOT > 20.00 && valorPOT < 40.00) {
        LEDVERMELHO = 1
        LEDAMARELO = 1;
    }
}, 100);
