//Uma transportadora quer saber quanto custa uma viagem de ponta a ponta numa rodovia de L quilômetros. 
// Cada quilômetro rodado custa K reais. 
// Além disso, a rodovia tem uma praça de pedágio a cada D quilômetros: 
// a primeira fica no quilômetro D, a segunda no quilômetro 2·D, e assim por diante. 
// No quilômetro 0, onde a viagem começa, não há pedágio. 
// Se uma praça cair exatamente no último quilômetro da rodovia, ela também é paga. 
// Cada praça cobra P reais. Qual é o custo total da viagem?

const prompt = require("prompt-sync")();

let L = Number(prompt("Qual o comprimento da rodovia em KM? "));
let D = Number(prompt("Qual a distancia entre duas pracas de pedagio em KM? "));
let K = Number(prompt("Qual o custo de cada KM em Reais? "));
let P = Number(prompt("Qual o valor de cada pedagio em Reais? "));
let numParadas;
let total = 0;

numParadas = Math.trunc(L/D);
total = (L * K) + numParadas * P;

console.log("Valor da viagem (apenas valor por KM): " + (L * K));
console.log("Quantidade de pracas de pedagio na viagem: " + (L/D));
console.log("Valor gasto em pracas de pedagio: " + ((L/D)*P));

console.log("O valor total da viagem e: " + total.toFixed(2));