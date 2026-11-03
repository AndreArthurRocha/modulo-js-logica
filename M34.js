// Um mapa guarda o perfil de uma montanha como uma sequência de alturas, medidas da esquerda para a direita. 
// Duas alturas vizinhas nunca são iguais. 
// A montanha tem mais de um pico quando existe um vale: 
// uma posição do meio da sequência (nem a primeira nem a última) com altura menor que a da vizinha da esquerda 
// e também menor que a da vizinha da direita. 
// Se não existe nenhum vale, a montanha tem um pico só. Diga qual é o caso.

const alturas = [2, 5, 3, 4, 1, 6];

let picos = 1;
let anterior = 0;
let proximo = 0;

for (i = 0; i < alturas.length; i++) {

    proximo = alturas[i + 1];

    //console.log("Anterior: " + anterior + " | Atual: " + alturas[i] + " | Proximo: " + proximo);

    if (alturas[i] < anterior && alturas[i] < proximo) {

        picos++;

    }

    anterior = alturas[i];
}

//console.log("Picos: " + picos);

if (picos > 1) {

    console.log("Mais de um pico.");

} else {

    console.log("Um pico.");

}