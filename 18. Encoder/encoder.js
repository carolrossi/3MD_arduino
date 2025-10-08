const CLK = 4
const DT = 16
const SW = 17

let pulsos = 0
let pulsos2;

pinMode(SW, "input_pullup")

require ("Encoder").connect(DT, CLK, function(d)

{
    pulsos = pulsos + d
    pulsos2 = Math.round(pulsos/2)
    console.log(d)
});

setInterval(function()
{
    let sw = digitalRead(SW);
    console.log("Valor de SW: " + sw)
}, 500)