const MOTOR =13;
const POT = 36;


pinMode (MOTOR, "output");


setInterval(() => {
    let valorPOT =  analogRead(POT) * 100;
    let ang = valorPOT;
    let p = (ang / 18 + 2.5) / 100;

    analogWrite(MOTOR, p, { freq: 50 });
}, 100)

