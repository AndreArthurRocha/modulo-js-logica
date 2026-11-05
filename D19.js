// Num jogo, bolas pretas e brancas são arrumadas num triângulo de cabeça para baixo.
// A primeira fileira tem N bolas lado a lado.
// Embaixo de cada par de bolas vizinhas entra uma bola nova, então cada fileira tem uma bola a menos que a de cima.
// A cor da bola nova depende das duas bolas de cima que ela toca:

//     se as duas têm a mesma cor, a bola nova é preta;

//     se as duas têm cores diferentes, a bola nova é branca.

// As fileiras vão sendo montadas até sobrar uma fileira com uma bola só. 
// Por exemplo, a primeira fileira preta, branca, branca gera branca, preta, que gera branca.

// Dada a primeira fileira, descubra a cor da última bola.


const lista = ["branca", "branca", "preta", "branca", "branca", "preta", "preta", "preta", "branca", "preta"];

let listaAnterior = [];

for (i = 0; i < lista.length; i++){

    listaAnterior [i] = lista [i];

}

console.log("Linha inicial:" + lista);

while (listaAnterior.length > 1) {
    let listaAtual = [];

    for (let i = 0; i < listaAnterior.length - 1; i++) {
        let atual = listaAnterior[i];
        let proxima = listaAnterior[i + 1];

        if (atual === proxima) {
            listaAtual.push("preta");
        } else {
            listaAtual.push("branca");
        }
    }

    console.log(listaAtual);

    listaAnterior = listaAtual;
}

console.log("");
console.log("Última bola: " + listaAnterior);