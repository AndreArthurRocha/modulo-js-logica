const prompt = require("prompt-sync")()

let saldo = Number(prompt("Qual o seu saldo? "));
let hora = Number(prompt("Qual o horario da transacao? "));
let valor = Number(prompt("Qual o valor do pix? "));

let limite = 5000;

if (hora >= 20 || hora <= 5){
    limite = 1000;
}

if (valor <= 0) {
    console.log("Valor inválido.");
}

if (saldo < valor) {
    console.log("Saldo insuficiente.");
}

if (valor < limite) {
saldo = saldo - valor;
console.log("Pix enviado. Saldo: R$", saldo.toFixed(2));
}

if (valor >= limite){
    console.log("Acima do limite de transferencia.");
}