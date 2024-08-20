//Exercicio 1 
//3 valores em "string"
const nome = "Ravi Felipe"
console.log(`Meu nome é ${nome}`);
console.log('Eu tenho 22 anos');
console.log("Eu moro em Fortaleza");

console.log('12');
console.log("200" + "1");
console.log(`${120}, ${99}, ${123}`);

//Exercicio 2
//3 valores em "number"
//Com números inteiros, números com casas decimais e por aritmética
console.log(120);
console.log(22.4);
var numero1 = 10;
var numero2 = 15;
var numero3 = 5;
var numero4 = 10;
console.log(numero3 * (numero1 + numero2));
console.log(numero2 - numero1);
console.log(numero2 / numero3);

//Exercicio 3
//3 comparações de boolean
//Uma com "Maior", "Menor", "Igual", "Diferente"
console.log(numero2 > numero1);
console.log(numero3 < numero1);
console.log(numero1 === numero4);
console.log(numero1 != numero3 && "Ravi" != "Felipe");

//Exercicio 4
//Escreva 3 comparações com operadores lógicos
//&&, ||, !
console.log(numero1 >= numero3 && numero1 != numero2);
console.log(numero4 + numero3 == numero2 || numero1 == numero3);
console.log(numero4 + numero3 == numero2 && "numero1" == "numero3");
console.log(!(numero1 != numero2)); //Muda o resultado para o contrário

//Exercicio 5
//Faça uma operação que gere o "NaN"
console.log(100 / "Ravi");
console.log(2 * "a");
console.log(100 - "Ravi");