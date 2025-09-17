const TRIGGER = 32;
const ECHO = 33;
let peso = null;

pinMode(TRIGGER, "output");
pinMode(ECHO, "input");

setInterval(() => {


    //configuração do ECHO    
    setWatch(function (i) {
        let tempo = i.time - i.lastTime;

        let distancia = 17000 * tempo;

        let altura = 220 - distancia.toFixed(2);


        if (peso != null && altura != 0) {
            console.log("altura: ", altura.toFixed(2) + "cm", "    distancia: ", distancia.toFixed(2) + "cm", "   peso: ", peso + "kg")
            let imc = peso / ((altura / 100) * (altura / 100))
            console.log("imc", imc.toFixed(2))
        }
    }, ECHO, { edge: "falling" });

    // disparando trigger
    digitalPulse(TRIGGER, 1, 1);
}, 1000);