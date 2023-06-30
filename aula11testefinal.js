// O cardapio de uma lanchonete é o seguinte:
// Especificação   Codigo  Preço
// Cachorro Qente   100    R$ 1,20
// Bauru Simples    101    R$ 1,30
// Bauro com ovo    102    R$ 1,50
// Hamburguer       103    R$ 1,20
// Cheeseburguer    104    R$ 1,30
// Refrigerante     105    R$ 1,00

// Faça um programa que leia o codigo dos itens pedidos e as quantidades desejadas. Calcule
// e mostre o valor  a ser pago por item (preço * quantidade) e o total geral do pedido.
// O peido e encerrado quando o cliente digitar o codigo 999.
// controlar para que o cliente só possa digitar os codigos do menu.

// cod 100  15 115,00
// cod 101  10 100,00

// valor total: 215,00

var prompt = require("prompt-sync")();

let quantidade = [];
let codigo = [0];
let n = 0;
let valorItem = [];
let valorTotal = 0;
let entrada = "";
let qtd = 0;

const regex = /[a-z]+/i;

console.log(
  "Bem-vindo ao Trailer do Willian. Escolha os produtos de acordo com a tabela abaixo:\n\n"
);

console.table([
  { Código: 100, Produto: "Cachorro Quente", Preço: "R$ 1,20" },
  { Código: 101, Produto: "Bauru Simples", Preço: "R$ 1,30" },
  { Código: 102, Produto: "Bauro com ovo", Preço: "R$ 1,50" },
  { Código: 103, Produto: "Hamburguer", Preço: "R$ 1,20" },
  { Código: 104, Produto: "Cheeseburguer", Preço: "R$ 1,30" },
  { Código: 105, Produto: "Refrigerante", Preço: "R$ 1,00" },
]);

console.log("\n");

while (true) {
  entrada = Number(prompt("Qual o codigo do item? -> "));

  if (regex.test(entrada)) {
    console.log("Digite um código de produto válido!");
    continue;
  }

  if (entrada === 999) {
    break;
  }

  if (entrada < 100 && entrada > 105) {
    console.log("Digite um código de produto válido!");
    continue;
  }

  qtd = Number(prompt("Qual quantidade desejada desse item? -> "));

  if (regex.test(qtd)) {
    console.log("Digite uma quantidade válida!");
    continue;
  }

  codigo[n] = entrada;
  quantidade[n] = qtd;

  switch (entrada) {
    case 100:
      valorItem[n] = 1.2 * qtd;
      break;
    case 101:
      valorItem[n] = 1.3 * qtd;
      break;
    case 102:
      valorItem[n] = 1.5 * qtd;
      break;
    case 103:
      valorItem[n] = 1.2 * qtd;
      break;
    case 104:
      valorItem[n] = 1.3 * qtd;
      break;
    case 105:
      valorItem[n] = 1.0 * qtd;
      break;
    default:
      console.log(`[ERRO] Codigo inexistente`);
      break;
  }

  n++;
}

let codigoLimpo = [];

for (j = 0; j < codigo.length; j++) {
  if (codigo[j] >= 100 && codigo[j] <= 105) {
    codigoLimpo[j] = codigo[j];

    console.log(
      `Código: ${codigoLimpo[j]}, Quantidade: ${
        quantidade[j]
      }, Valor: ${valorItem[j].toFixed(2)}  `
    );

    valorTotal += valorItem[j];
  }
}

console.log(`\nValor total: ${valorTotal.toFixed(2)}`);

console.log("\n##### Muito obrigado e volte sempre! ######");
