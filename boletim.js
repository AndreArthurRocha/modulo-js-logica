const mediaEscola = 7;

const nomes = ["Ana", "Bruno", "Carla", "Diego", "Elias", "Fabio"];
const medias = [10, 9, 8, 7, 6, 5];

for(let i = 0; i < 6; i++){
    if (medias[i]>= mediaEscola){
        console.log("Aluno(a): " + nomes[i] + " - " + "Media: " + medias[i] + " - Aprovado(a)");
    }else{
        console.log("Aluno(a): " + nomes[i] + " - " + "Media: " + medias[i] + " - Reprovado(a)");
    }
}