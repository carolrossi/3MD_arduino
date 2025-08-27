let ledStatus = 0
const LED_AZUL = 33
const LED_VERMELHO = 25
const LED_AMARELO = 14

function piscaLed() {
    digitalWrite(LED_VERMELHO, 1);

    setTimeout(() => {
        digitalWrite(LED_VERMELHO, 0);
        digitalWrite(LED_AZUL, 1);

        setTimeout(() => {
            digitalWrite(LED_AZUL, 0);
            digitalWrite(LED_AMARELO, 1)

            setTimeout(() => {
                digitalWrite(LED_AMARELO, 0);
                digitalWrite(LED_VERMELHO, 1);

                setTimeout(() => {
                    digitalWrite(LED_VERMELHO, 0)
                    piscaLed()


                }, 600);
            }, 600);
        }, 600);
    }, 600);
}

piscaLed() 