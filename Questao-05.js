// Questão 5: Escreva um código JavaScript utilizando o operador ternário para determinar se uma pessoa é maior de idade ou menor de idade. A variável idade contém a idade da pessoa. Atribua o resultado à variável status. 

let idade = -1;

let status = (idade >= 18) ? "Maior de idade" : (idade < 18) ? "Menor de idade" : "Invalido";

console.log(status);