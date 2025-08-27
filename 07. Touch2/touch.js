const TOUCH_PIN = 13;
const TOUCH_PIN2 = 27;
let touch = require("touch.js").connect(TOUCH_PIN);
let touch2 = require("touch.js").connect(TOUCH_PIN2);
let STATUS;
let LED = 2; // led do esptruino
pinMode(LED, "output") // liga led

setInterval(() => {
    let count = touch.read();  // lendo nosso contato
    let count2 = touch2.read(); // lendo nosso contato
    if (count < 100) {
        STATUS = 1; // se o nosso contato for abaixo de 100 ele liga
        digitalWrite(LED, STATUS)
    }
    if (count2 < 100) {
        STATUS = 0; // se o nosso contato for abaixo de 100 ele desliga
        digitalWrite(LED, STATUS)
    }
    console.log("TOUCH 2: ", count2, "TOUCH 1: ", count );
}, 100);

