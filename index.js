const readline = require("readline-sync");

// calculo de media de notas de um bimestre 

// entrada
// o usuario deve informar 4 notas
const nota_prova_1 = readline.questionFloat("Qual a nota da prova 1?\n");
const nota_prova_2 = readline.questionFloat("Qual a nota da prova 2?\n");
const nota_prova_3 = readline.questionFloat("Qual a nota da prova 3?\n");
const nota_prova_4 = readline.questionFloat("Qual a nota da prova 4?\n");

console.log(nota_prova_1, nota_prova_2, nota_prova_3, nota_prova_4);

// PROCESSAMENTO

//somar todas as notas e armazenar o valor em uma variavel

//operadores aritimeticos
//soma(+)
//subtração(-)
//divisao (/)
//multiplicaçao(*)

const soma_notas = nota_prova_1 + nota_prova_2 + nota_prova_3 + nota_prova_4;

console.log(soma_notas);

//calcular a medida e calcular em uma variavel

const media_notas = soma_notas / 4;

//SAIDA
//interpolação de texto

console.log(`A media das notas é: ${media_notas}`);