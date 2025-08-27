const TOUCH_PIN = 13;
const TOUCH_PIN2 = 27;
let touch = require("touch.js").connect(TOUCH_PIN);
let touch2 = require("touch.js").connect(TOUCH_PIN2);
let STATUS;
let LED = 2; // led do esptruino
pinode(LED, "output") // liga led

// estamos lendo o touch
setInterval(() => {
    let count = touch.read();
    console.log("TOUCH 1: ", count); 
    if (count < 100) {
        STATUS = 1;
        digitalWrite(LED, STATUS)
    }
}, 100);

setInterval(() => {
    let count = touch2.read();
    console.log("TOUCH 2: ", count);
    if (count < 100) {
        STATUS = 0;
        digitalWrite(LED, STATUS)
    }
}, 100)




















// setInterval ( () {
//     let count = count.read();
//     console.log("TOUCH 1: ", count);
// })
// let LED = 2;

// let LEDSTATUS = 0;


// pinmode(LED, "output")

// setInterval(function(){
//     LEDSTATUS = !LEDSTATUS;
//     digitalWrite(LED, LEDSTATUS)
// }, 5000);
