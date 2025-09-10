const POT = 32;
const LEDVERMELHO = 27;
const LEDAMARELO = 26;
const LEDVERDE = 25;

pinMode(LEDAMARELO, "output");
pinMode(LEDVERDE, "output");
pinMode(LEDVERMELHO, "output");

setInterval(() => {
    let valorPOT = analogRead(POT) * 100;

    console.log("nivel DA BATERIA: " + valorPOT.toFixed(2));

    if (valorPOT == 0) {
        digitalWrite(LEDAMARELO, 0);
        digitalWrite(LEDVERDE, 0);
        digitalWrite(LEDVERMELHO, 0);
    }else if (valorPOT <= 30) {
        digitalWrite(LEDVERMELHO, 1); 
        digitalWrite(LEDAMARELO, 0);
        digitalWrite(LEDVERDE, 0);
    }else if (valorPOT > 30.00 && valorPOT <= 70.00) {
        digitalWrite(LEDVERMELHO, 1); 
        digitalWrite(LEDAMARELO, 1); 
        digitalWrite(LEDVERDE, 0); 
    } else {
        digitalWrite(LEDAMARELO, 1); 
        digitalWrite(LEDVERDE, 1); 
        digitalWrite(LEDVERMELHO, 1); 
    };


}, 100);