// Um caderno antigo guarda o resumo de cada campeonato que um time disputou, com cinco números: 
// jogos (J), pontos (P), vitórias (V), empates (E) e derrotas (D). 
// Cada vitória vale 3 pontos, cada empate vale 1 ponto e derrota não vale ponto. Por isso, em todo resumo vale:

//     J = V + E + D

//     P = 3 × V + E

// Com o tempo, alguns números ficaram ilegíveis e foram anotados como -1. Descubra os números que faltam e mostre o resumo completo.

let entrada = [-1, -1, 7, 2, 5];

let J = entrada[0];
let P = entrada[1];
let V = entrada[2];
let E = entrada[3];
let D = entrada[4];

if (J === -1 && P === -1) {
    J = V + E + D;
    P = 3 * V + E;
} else if (J === -1 && V === -1) {
    V = (P - E) / 3;
    J = V + E + D;
} else if (J === -1 && E === -1) {
    E = P - 3 * V;
    J = V + E + D;
} else if (P === -1 && V === -1) {
    V = J - E - D;
    P = 3 * V + E;
} else if (P === -1 && E === -1) {
    E = J - V - D;
    P = 3 * V + E;
} else if (P === -1 && D === -1) {
    P = 3 * V + E;
    D = J - V - E;
} else if (V === -1 && E === -1) {
    V = (P - J + D) / 2;
    E = J - V - D;
} else if (V === -1 && D === -1) {
    V = (P - E) / 3;
    D = J - V - E;
} else if (E === -1 && D === -1) {
    E = P - 3 * V;
    D = J - V - E;
}

if (J === -1) {
    J = V + E + D;
}
if (P === -1) {
    P = 3 * V + E;
}
if (V === -1) {
    V = (P - E) / 3;
}
if (E === -1) {
    E = P - 3 * V;
}
if (D === -1) {
    D = J - V - E;
}

console.log("Jogos: " + J);
console.log("Pontos: " + P);
console.log("Vitórias: " + V);
console.log("Empates: " + E);
console.log("Derrotas: " + D);