const TRIGGER = 32;
const ECHO = 33

pinMode(TRIGGER, 'output');
pinMode(ECHO, 'input');

setInterval(function () {

    // configurando ECHO
    setWatch(function (i) {

        //duração do eco
        let tempo = i.time - i.lastTime

        // calculando a distancia
        let distancia = 17000 * tempo

        console.log("Distância: " + distancia + "cm")
    }, ECHO, { edge: "falling" })

    //disparando o trigger
    digitalPulse(TRIGGER, 1, 1)

}, 1000)