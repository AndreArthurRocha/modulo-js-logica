// Uma loja deixa dividir uma compra de V reais em P parcelas sem juros. 
// A divisão segue quatro regras: 
// (1) cada parcela é um valor inteiro em reais; 
// (2) a soma das parcelas dá exatamente V; 
// (3) a maior parcela e a menor parcela diferem em no máximo 1 real; 
// (4) as parcelas maiores vêm antes das menores. 
// Mostre o valor de cada parcela, da primeira à última.

//Empaquei um pouco com essa questão tambem, minha logica estava correta, eu so nao estava conseguindo adicionar o resto as primeiras parcelas emitidas.
//Quebrei a cabeça nessa questao tambem, menos que na M7, mas tambem fiquei umas horas aqui.
//Acabei pedindo pra IA explicar por que o programa não executava o "for (resto; resto <= 0; resto--)"
//Acabou que era meio que o mesmo erro do "while" da M7. Eu entendia a segunda declaracao do for, nesse caso o "resto <= 0" como um criterio de parada,
//quando na verdade essa segunda declaracao e algo que o "for" checa se e verdadeiro ou falso e roda se for verdadeiro.
//No caso desse codigo, a expressao ja comecava com essa declaracao como falsa (resto = 5), entao nunca entrava no loop.
//Fiz mais alguns ajustes apos a correcao da IA mas no geral foi esse o problema maior.

// const V = 53;
// const P = 6;

// const valorParcela = Math.trunc(V / P);

// let resto = V % P;

// console.log(valorParcela);
// console.log(resto);

// for (i = 1; i <= P; i++) {

//     if (resto != 0) {

//         for (resto; resto <= 0; resto--) {
//             console.log("Parcela " + i + ": " + (valorParcela + 1));
//         }

//     }

//     console.log("Parcela " + i + ": " + valorParcela);

// }

const V = 17;
const P = 8;

let valorParcela = Math.trunc(V / P);

let resto = V % P;

for (i = 1; i <= P; i++) {

    if (resto > 0) {

        console.log("Parcela " + i + ": " + (valorParcela + 1));

        resto--;

    } else {

        console.log("Parcela " + i + ": " + valorParcela);

    }
    
}