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


var prompt = require('prompt-sync')();

let quantidade = [];
let codigo = [0];
let n = 0;
let valorItem = []
let valorTotal = 0 



do{
    codigo[n] = Number(prompt(`Qual o codigo do item? `));
    switch(codigo[n]){
        case 100 : 
           quantidade[n] = Number(prompt(`Qual quantidade deseja desse item? `));
           valorItem [n] = 1.20*quantidade[n];
            break;
        case 101 : 
           quantidade[n] = Number(prompt(`Qual quantidade deseja desse item? `));
           valorItem [n] = 1.30*quantidade[n];
            break;
        case 102 : 
           quantidade[n] = Number(prompt(`Qual quantidade deseja desse item? `));
           valorItem [n] = 1.50*quantidade[n];
            break;
        case 103 : 
           quantidade[n] = Number(prompt(`Qual quantidade deseja desse item? `));
           valorItem [n] = 1.20*quantidade[n];
            break;
        case 104 : 
           quantidade[n] = Number(prompt(`Qual quantidade deseja desse item? `));
           valorItem[n] = 1.30*quantidade[n];
            break;
        case 105 : 
           quantidade[n] = Number(prompt(`Qual quantidade deseja desse item? `));
           valorItem [n] = 1.00*quantidade[n];
            break;
        case 999 :
            break;    
        default:
            console.log(`[ERRO] Codigo inexistente`);
            break;
        
    };
      n++;
}
while( codigo[codigo.length - 1] != 999);

let codigoLimpo = []

for(j=0; j<codigo.length-1; j++){

   if(codigo[j] > 100 && codigo[j] < 105){
    codigoLimpo[j] = codigo[j]
   
    console.log(` cod  ${codigoLimpo[j]}   ${quantidade[j]}  ${valorItem[j].toFixed(2)}  ` );
    valorTotal += valorItem[j]
   }
}

console.log(`Valor total : ${valorTotal.toFixed(2)}`)

    













