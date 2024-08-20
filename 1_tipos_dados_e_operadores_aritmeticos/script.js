console.log(typeof 2);
console.log(12);
console.log("Ravi");
console.log(typeof "Ravi");
console.log(5 + (2 * 4))


//NUMBER
console.log(2 + 3); //soma
console.log(5 - 12); //subtração
console.log(4 * 4); //multiplicação
console.log(5 / 3); //divisão
console.log(20 % 2); //resto
console.log(21 % 2); //resto

//SPECIAL NUMBERS
console.log(Infinity); //number
console.log(-Infinity); //number
console.log(NaN); //number

//STRING
console.log("Olá");
console.log('Teste');
console.log(`Teste`);
console.log('Teste1 \n Teste2');
console.log('"Teste3"');
console.log("'Teste4'");
console.log(`Idade: ${21 + 1}`);
console.log("Ravi " + "Felipe " + "Ferreira");

//BOOLEAN
console.log(true);
console.log(false);
console.log(10 > 2);
console.log(5 < 100);
console.log(typeof (19 > 2)); //boolean

//COMPARAÇÃO
console.log(1 > 2);
console.log(5 < 10);
console.log(3 >= 3);
console.log(5 <= 4);
console.log(5 == 4);
console.log('Matheus' != 'Matheus');
console.log(3 === '3');
console.log(4 === 4);

//OPERADORES LÓGICOS
console.log(5 > 3 && 3 == 2);
console.log(5 > 3 && 3 == 1);
console.log(3 == 3 && 3 == 3);
console.log("Felipe" == "João" || false);
console.log(!(true && true));

//OPERADOR TERNÁRIO
console.log(5 > 2 ? 'É maior' : 'É menor');
console.log(2 == 2 ? 'É igual' : 'Não é igual');
console.log(2 == 3 ? 'É igual' : 'Não é igual');
console.log(false ? 5 : 4);
console.log('Ravi' == 'Ravi' ? 'Olá, Ravi' : 'Não é o Ravi');

//EMPTY VALUES
console.log(undefined);
console.log(null);

//CONVERSÃO DE TIPO AUTOMÁTICA
console.log(5 * null);
console.log("5" - 3);
console.log("5" + 1);
console.log("dois" * "três");