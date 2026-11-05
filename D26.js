// Num jogo entre o time da casa e o visitante, o árbitro anotou o minuto de cada gol, numa lista separada para cada time.

// Monte a história do placar: comece em 0 x 0 e, a cada gol, na ordem em que os gols aconteceram, 
// mostre o minuto e o placar logo depois dele. O placar sempre mostra primeiro os gols do time da casa.

const golsCasa = [12, 40, 88];
const golsVisitante = [5, 77];

let minutos = 0;
let a = 0;
let b = 0;

console.log("Início: " + a + " X " + b);

while (minutos < 90) {

    if (golsCasa.includes(minutos)) {

        a++;

        console.log("Minuto " + minutos + ": " + a + " x " + b);


    }

    if (golsVisitante.includes(minutos)) {

        b++;

        console.log("Minuto " + minutos + ": " + a + " x " + b);

    }

    minutos++;

}