const CLK = 4;
const DT = 16;
const SW = 17;

const senhaCorreta = [2, 4, 2, 5, 0, 4, 6, 3];
let senhaInserida = [];

let pulsos = 0;
let pulsos2 = 0;
let numeroAtual = 0;

console.log("Sistema de senha iniciado.");
console.log("Gire para selecionar um número (0-9), pressione para confirmar.");
console.log("Pulsos2: " + pulsos2 + " -> Número selecionado: " + numeroAtual);

require("Encoder").connect(DT, CLK, function (d) {

    pulsos = pulsos + d;

    pulsos2 = Math.round(pulsos / 2);

    numeroAtual = (pulsos2 % 10 + 10) % 10;

    console.log(" -> Número selecionado: " + numeroAtual);
});

function verificarSenha() {

    if (senhaInserida.length !== senhaCorreta.length) {
        console.log("Continue inserindo a senha...");
        return;
    }

    let corresponde = true;
    for (let i = 0; i < senhaCorreta.length; i++) {
        if (senhaInserida[i] !== senhaCorreta[i]) {
            corresponde = false;
            break;
        }
    }

    if (corresponde) {
        console.log("SENHA CORRETA! Acesso concedido.");

    } else {
        console.log("Senha incorreta. Tente novamente.");

    }

    senhaInserida = [];
    console.log("\nInsira a próxima senha.");
    console.log("Número selecionado: " + numeroAtual);
}

pinMode(SW, "input_pullup");
setWatch(function () {

    senhaInserida.push(numeroAtual);
    console.log("Número " + numeroAtual + " adicionado. Senha atual: [" + senhaInserida.join(", ") + "]");

    verificarSenha();

}, SW, {
    repeat: true,
    edge: 'falling',
    debounce: 50
});