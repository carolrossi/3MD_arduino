const LED = 25;
const POT = 32;

setInterval(function()
    {
        let valorPot = analogRead(POT);
        analogWrite (LED, valorPot)

    }, 50)
