// Questão 12: Escreva um código JavaScript utilizando o operador ternário para determinar se uma pessoa pode votar. A variável idade contém a idade da pessoa. Atribua o resultado à variável podeVotar.

let idade = 18
let podeVotar = (idade >= 18) ? "Deve votar" : (idade >= 16) ? "Pode votar" : "Não pode votar";

console.log(podeVotar)