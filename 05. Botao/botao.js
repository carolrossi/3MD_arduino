const BT1 = 26;
const BT2 = 27;
const LED = 25;

pinMode(BT1, "input_pullup");
pinMode(BT2, "input_pullup");
pinMode(LED, "output");

let timeout = 0;

setInterval(function () {

    if (timeout == 0) {
    if (digitalRead(BT1) == 0 || digitalRead(BT2) == 0) {
            timeout = 1;
        }
        setTimeout(function () {
            if (digitalRead(BT1) == 0 && digitalRead(BT2) == 0) {
                digitalWrite(LED, 1)
            }
        }, 500)

    } else {
        if (digitalRead(BT1) == 1 || digitalRead(BT2) == 1)
        {
            digitalWrite(LED, 0)
            if (digitalRead(BT1) == 1 && digitalRead(BT2) == 1)
            {
                timeout = 0;
            }
        }
    }
}, 100)
