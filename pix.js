const prompt = require("prompt-sync")()

let saldo = Number(prompt("Qual o seu saldo? "));
let hora = Number(prompt("Qual o horario da transacao? "));
let valor = Number(prompt("Qual o valor do pix? "));

let limite = 1000;

if (saldo >= valor) {
saldo = saldo - valor;
console.log("Pix enviado. Saldo: R$", saldo.toFixed(2));
} else {
    console.log("Saldo insuficiente.");
}
