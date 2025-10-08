// Habilita a comunicação utilizando o protocolo I2C
I2C1.setup();

// Estabelecer a com. com o dispositivo
let mpu = require("MPU6050").connect(I2C1);

setInterval(() => {
    const acc = mpu.getGravity();
    const rot = mpu.getRotation();

    console.log(
        `Aceleracao (g):\n  X: ${acc[0].toFixed(2)}\n  Y: ${acc[1].toFixed(2)}\n  Z: ${acc[2].toFixed(2)}\n` +
        `Rotacao (°):\n  Roll: ${rot[0].toFixed(2)}\n  Pitch: ${rot[1].toFixed(2)}\n  Yaw: ${rot[2].toFixed(2)}\n`
    );
}, 300);



