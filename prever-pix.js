let saldo = 150;
let valor = 200;

if (saldo >= valor) {
saldo = saldo - valor;
console.log("Pix enviado. Saldo: R$", saldo.toFixed(2));
} else {
    console.log("Saldo insuficiente.");
}