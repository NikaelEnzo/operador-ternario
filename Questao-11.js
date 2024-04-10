// Questão 11: Escreva um código JavaScript utilizando o operador ternário para determinar se uma pessoa é um bebê, criança, adolescente, adulto ou idoso. A variável idade contém a idade da pessoa. Atribua o resultado à variável categoria. 

let idade = 65
let temConvite = true
let categoria = (idade < 0) ? "Não nasceu ou não é uma idade" : (idade >= 0 && idade <= 2) ? "É um bebê" : (idade > 2 && idade < 12) ? "É uma criança" : (idade >= 12 && idade < 20) ? "É um adolecente" : (idade >= 20 && idade < 60) ? "É um adulto" : "É um idoso";

console.log(categoria)