const taxaFixa = 12;
const kWh = 0.8;
const adicional = 0.1;

let consumo = 150;

const valorFinal = consumo * kWh + taxaFixa;
const valorFinalBandeiraVermelha = consumo * (kWh + adicional) + taxaFixa;

console.log("O valor da conta de luz é: " + valorFinal);

console.log("O valor da conta de luz em Bandeira Vermelha é: " + valorFinalBandeiraVermelha);