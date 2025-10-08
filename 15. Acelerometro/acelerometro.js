// Habilita a comunicação utilizando I2C
I2C1.setup();

//Estabelecer a com. com o dispositivo
let mpu = require("MPU6050").connect(I2C1);

setInterval(function () {
    let acc = mpu.getGravity();
    let rot = mpu.getDegreesPerSecond();

    // console.log("X: " + acc[0].toFixed(2))
    // console.log("X: " + acc[1].toFixed(2))
    // console.log("Z: " + acc[2].toFixed(2))


    // console.log("Roll(x): " + rot[0].toFixed(2))
    // console.log("Pitch(y): " + rot[1].toFixed(2))
    // console.log("Yall(Z): " + rot[2].toFixed(2))
    // console.log()

    Serial1.print(">");
    Serial1.print("MAX:" + 2 + ",")
    Serial1.print("MIN:" + -2 + ",")
    Serial1.print("X: " + acc[0] +",")
    Serial1.print("Y: " + acc[1] +",")
    Serial1.print("Z: " + acc[2] +"\r\n")
}, 10)