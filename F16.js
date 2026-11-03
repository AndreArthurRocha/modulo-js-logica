// Uma confeitaria só faz bolos com a receita completa, nunca com meia receita.
// Cada bolo leva 2 xícaras de farinha, 3 ovos e 5 colheres de leite.
// Sabendo quanto há de cada ingrediente no estoque, quantos bolos inteiros dá para fazer?

const xicarasFarinha = 8;
const ovos = 12;
const colheresLeite = 4;
let bolos = 0;

if (xicarasFarinha < 2){
    console.log("Nao ha xicaras de farinha o bastante para fazer 1 bolo.");
}

if (ovos < 3){
    console.log("Nao ha ovos o bastante para fazer 1 bolo.");
}

if (colheresLeite < 5) {
    console.log("Nao ha colheres de leite o bastante para fazer 1 bolo.");
}

if (xicarasFarinha/2 <= ovos/3){
    bolos = xicarasFarinha/2;
}

if (xicarasFarinha/2 <= colheresLeite/5){
    bolos = xicarasFarinha/2;
}

if (ovos/3 <= colheresLeite/5){
    bolos = ovos/3;
} else {
    bolos = colheresLeite/5;
}

if (bolos < 1) {
    bolos = 0;
}

console.log("Com " + xicarasFarinha + " xicaras de farinha, " + ovos + " ovos e " + colheresLeite + " colheres de leite e possivel fazer " + bolos.toFixed(0) + " bolo(s).");