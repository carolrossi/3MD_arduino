const KEYBOARD_R = [19, 18, 5, 17];
const KEYBOARD_C =[16, 4, 2, 15]
const KEYBOARD_V = "d#0*C987B654A321"

let keyboard = require("KeyPad").connect(KEYBOARD_C, KEYBOARD_R)
let key = -1
let key_last = -1

setInterval(() => {
    key = keyboard.read();
    if (key >= 0 && key != key_last)
    console.log(KEYBOARD_V[key]);

    key_last = key;
}, 100);