// Um sistema dá três chances para acertar a senha, que é caju2026. 
// A cada tentativa errada que ainda deixa outra chance, mostra Senha incorreta. 
// Se acertar, mostra Acesso liberado e termina. Se errar a terceira, mostra Conta bloqueada.

//Empaquei nessa questao pois tinha entendido errado o uso do while.
//Tentei fazer "while (numTentativas > 0 || tentativa !== senha".
//O loop se repetia mesmo depois de 3 tentativas, me retornando valores negativos no numTentativas, mostrando que definitivamente tinha algo errado.
//Depois de mais de um dia mexendo no resto do codigo, mas nao nesse operador, me rendi e joguei o codigo na IA perguntando por que o loop nao parava.
//Entendi o funcionamento do while. a condicao ou condicoes estabelecidas nao sao condicoes de parada do loop, 
//mas sim declaracoes que ele checa a cada iteracao do loop e repete o que tem dentro do bloco enquanto as declaracoes sao verdadeiras.
//Usando && ele precisa que todas as declaracoes sejam verdadeiras para executar o loop, enquanto que usando ||, basta que uma so ainda seja para executar o loop.
//Entao do jeito que estava, mesmo que a pessoa estourasse o numero de tentativas, porque "tentativa !== senha" ainda era verdadeiro, ele continuava rodando.
//Para ser transparente, a IA tambem apontou alguns outros erros, que eu corrigi em seguida, como por exemplo, a logica do meu codigo estava baguncada,
//a checagem (numTentativas > 0) para exibir "Conta bloqueada." estava dentro da checagem se a senha estava correta ou não e logo apos a mensagem de senha incorreta.

// const prompt = require("prompt-sync")();
// const senha = "caju2026";
// let numTentativas = 3;
// let tentativa = String(prompt("Insira sua senha. Restam " + numTentativas + " tentativas. "));

// while (numTentativas > 0 || tentativa !== senha) {
//     //problema no numTentativas > 0, ele vai pra numeros negativos e não para o script por algum motivo

//     if (tentativa === senha) {

//         console.log("Acesso liberado");

//     } 
    
//     if (numTentativas >= 1) {

//         numTentativas--;
//         // talvez o problema esteja aqui
//         console.log("Senha incorreta. Restam " + numTentativas + " tentativas.");

//         tentativa = String(prompt("Insira sua senha. Restam " + numTentativas + " tentativas. "))
//         //talvez o problema esteja aqui, ele continua pedindo nessa repeticao pq a senha ainda da diferente da certa
//     }

//     if (numTentativas == 0) {

//         console.log("Acesso bloqueado.");

//     }

// }

//Funciou, depois de trocar o || por &&, mas a logica estava estranha. Alem disso a IA recomendou que eu usasse uma variavel boleana para identificar se a senha estava correta ou nao, uma flag,
//no lugar de simplesmente comparar as String. Eu teimei em não usar a flag mas realmente ficou melhor com, entao mantive meu codigo aqui, comentado, mas
//deixei a correcao da IA como resposta.
//Ah, a IA tambem comentou do comando "break", que eu tinha esquecido que existia, e entendi o motivo do por que usa-lo.

// const prompt = require("prompt-sync")();
// const senha = "caju2026";
// let numTentativas = 3;
// let tentativa;
// let acessoLiberado = false;

// while (numTentativas > 0 && !acessoLiberado) {
    
//     tentativa = String(prompt("Insira sua senha. Restam " + numTentativas + " tentativas: "));

//     if (tentativa === senha) {

//         console.log("Acesso liberado.");

//         acessoLiberado = true;
    
//     } else {
    
//         numTentativas--;
    
//         if (numTentativas > 0) {
    
//             console.log("Senha incorreta.");
    
//         } else {
    
//             console.log("Conta bloqueada.");

//         }
        
//     }
// }

const prompt = require("prompt-sync")();
const senha = "caju2026";
let numTentativas = 3;
let tentativa;
let acessoLiberado = false;

while (numTentativas > 0 && !acessoLiberado) {

    tentativa = String(prompt("Insira sua senha. Restam " + numTentativas + " tentativas: "));

    if (tentativa === senha) {

        console.log("Acesso liberado.");

        acessoLiberado = true;

    } else {

        numTentativas--;

        if (numTentativas > 0) {

            console.log("Senha incorreta.");

        } else {

            console.log("Conta bloqueada.");

        }

    }

}