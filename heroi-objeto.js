const controleDoJogo = {
    jogando: true,
    combate: false

}

const heroi = {
    nome: "Magno",
    vida: 10,
    dano: 3,
    veneno: 0,
    critico: 0.2,
    danoCritico: 2,
    inventario: [],
    caminhar: caminhar() //declaracao de funcao dentro de um objeto
}

const aranha = {
    nome: "aranha da caverna",
    vida: 10,
    dano: 2,
    chance: 0.4,
    veneno: 3
}

// console.log(heroi.vida);
// heroi.vida = 15;
// heroi = 15; //erro de constante sendo mudada (TypeError: Assignment to constant variable.)
// console.log(heroi.vida);

console.log(heroi.inventario);

heroi.inventario.push("Moeda Furada");

console.log("O heroi: " + heroi.nome + " recebeu o item: " + heroi.inventario);

console.log(heroi);

// exemplo de declaracao de funcao e chamada de funcao

// function caminhar () {

// }

// heroi.caminhar;

function calculoDano (heroi, dano){
    heroi.vida = heroi.vida - dano;
    let chance = Math.random();
    
    if (chance <= inimigo.chance){
        heroi.veneno = inimigo.danoVeneno;
        console.log("A aranha injeta o veneno em " + heroi.nome + " " + heroi.veneno + " " + heroi.nome + " se sente mal...")
    }
    
    console.log(heroi.nome + " levou " + dano + " de dano!");
    
    if (heroi.vida <= 0){
        heroi.vida = 0
        console.log(heroi.nome + " caiu!")
        combate = false;
        jogando = false;
    }
}

function combate(heroi, inimigo){
    calculoDano(heroi, inimigo);
}

calculoDano(heroi, aranha);