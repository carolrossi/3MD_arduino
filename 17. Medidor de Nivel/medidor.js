// Habilita a comunicação utilizando o protocolo I2C
I2C1.setup();

// Estabelecer a conexão com o dispositivo
let bmp = require("BMP085").connect(I2C1);

setInterval(() => {

    bmp.getPressure((i) => {
        let pressao = i.pressure;
        let temp = i.temperature;
        let altitudeSensor = bmp.getAltitude(pressao, 101325);
        let altitudeCalc = -(temp + 273) / 0.0342 * Math.log(pressao/101325)

        // console.log("Alt. Sensor: " + altitudeSensor.toFixed(2) + 'm');
        // console.log("Alt. Calc: " + altitudeCalc.toFixed(2) + 'm');
        // console.log()

        Serial1.print(">")
        Serial1.print("AltSensor: " + altitudeSensor + ',');
        Serial1.print("AltCalc: " + altitudeCalc + '\r\n');
    })

}, 100);



