// const mediaEscola = 7;
// let soma = 0;
// let numAprovados = 0;
// let numReprovados = 0;

// const nomes = ["Ana", "Bruno", "Carla", "Diego", "Elias", "Fabio"];
// const medias = [8.4, 7.5, 4.3, 5.7, 10, 6.8];

// for(let i = 0; i < 6; i++){

//     soma = soma + medias[i];

//     if (medias[i]>= mediaEscola){
//         numAprovados++;
//         console.log("Aluno(a): " + nomes[i] + " - " + "Media: " + medias[i] + " - Aprovado(a)");
//     }else{
//         numReprovados++;
//         console.log("Aluno(a): " + nomes[i] + " - " + "Media: " + medias[i] + " - Reprovado(a)");
//     }
// }

// console.log("Media da Turma: " + (soma/medias.length).toFixed(2));
// console.log("Aprovados: " + numAprovados);
// console.log("Reprovados: " + numReprovados);

const prompt = require("prompt-sync")();
const medias = [];
let input;
let numAprovados = 0;
let numReprovados = 0;
const mediaEscola = 7;

while (input != -1) {

    input = Number(prompt("Insira a media do aluno. Insira -1 para encerrar. "));
    if (input >= 0) {
        medias.push(input);
    }
    console.log("Numero de medias cadastradas: " + medias.length);

}

for (i = 0; i < medias.length; i++) {
    if (medias[i] >= mediaEscola) {
        numAprovados++
    } else {
        numReprovados++
    }
}

console.log("Aprovados: " + numAprovados + " / " + "Reprovados: " + numReprovados);