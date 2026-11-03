// Um carrinho de compras guarda, para cada item, o nome do produto, o preço da unidade e a quantidade.
// Mostre cada item com o subtotal e, no fim, o número de unidades e o total da compra.

let total = 0;
let qtdItems = 0;

const carrinho = [
  { produto: "Farinha de Trigo 1 kg", preco: 4.25, qtd: 3 },
  { produto: "Tomate 3 kg", preco: 12.00, qtd: 1 },
  { produto: "Mussarela 1 kg", preco: 37.82, qtd: 1 },
  {produto: "Fermento Biologico 10 g", preco: 1.68, qtd: 5}
];

for (i = 0; i < carrinho.length; i++){

    total = total + (carrinho[i].qtd*carrinho[i].preco);
    qtdItems = qtdItems + carrinho[i].qtd;
    console.log(carrinho[i].produto + ": " + carrinho[i].qtd + " X R$ " + carrinho[i].preco + " = " + (carrinho[i].qtd*carrinho[i].preco));    

}

console.log("Items: " + qtdItems);
console.log("Total: R$ " + total.toFixed(2));