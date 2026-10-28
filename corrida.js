const valorBase = 5;
const valorPorMinuto = 0.5;
const valorPorKm = 2;

let km = 9.5;
let minutos = 20;

console.log("O valor da variável é: " + km);

//typeof indica o tipo da variável
console.log(typeof km);

let total = valorBase + km * valorPorKm + minutos * valorPorMinuto;
console.log("O valor da corrida é: R$" + total.toFixed(2));