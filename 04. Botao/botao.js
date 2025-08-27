const BUTTON = 32;
const LED = 25;
const BUTTON2 = 14;


pinMode(LED, "output");
pinMode(BUTTON, "input_pullup");
pinMode(BUTTON2, "input_pullup");

setInterval(function () {
    let statusButton = digitalRead(BUTTON);
    let statusButton2 = digitalRead(BUTTON2);

    if (statusButton == 0) {
        digitalWrite(LED, 1);
    }

    if (statusButton2 == 0){
        digitalWrite(LED, 0);
    }

    console.log(statusButton);
}, 10);

