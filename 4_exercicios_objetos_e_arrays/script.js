//01
let arrayExercicio01 = [1, 2, 3, 4, 5];
console.log(arrayExercicio01[0]);
console.log(arrayExercicio01[2]);
console.log(arrayExercicio01[3]);

//02
let array01Exercicio2 = [344, 144];
let array02Exercicio2 = ["a", "b", "c", "d"];
console.log(array01Exercicio2.length);
console.log(array02Exercicio2.length);

//03
let onibus = {
    rodas: 8,
    limiteDePassageiros: 40,
    portas: 2
};
console.log(`Quantidade de rodas: ${onibus.rodas}`);
console.log(`Limite de passageiros: ${onibus.limiteDePassageiros}`);
console.log(`Quantidade de portas: ${onibus.portas}`);

//04
console.log(onibus);
delete onibus.rodas;
console.log(onibus.rodas);
console.log(onibus);
onibus.janelas = 20;
console.log(onibus.janelas);
console.log(onibus);

//05
let arrayExercicio05nomes = ["Felipe", "Maria", "João", "Ana", "Ravi"];

for (let i = 0; i < arrayExercicio05nomes.length; i++) {
    if (arrayExercicio05nomes[i] == "Ravi") {
        console.log(`O nome ${arrayExercicio05nomes[i]} existe no array !!`);
    }
}

if (arrayExercicio05nomes.includes("Ravi")) {
    console.log(`O nome "Ravi" existe no array !!`);
}

//06
let array01Exercicio06 = [1, 2, 3, 4, 5, 6, 7, 8];
let array02Exercicio06 = [1, 2];
function verificaNumeroElementos(array) {
    if (array.length < 5) {
        console.log("Poucos elementos");
    } else if (array.length >= 5) {
        console.log("Muitos elementos");
    }
}
verificaNumeroElementos(array01Exercicio06);
verificaNumeroElementos(array02Exercicio06);

//07
for (let i = 0; i < array01Exercicio06.length; i++) {
    console.log(array01Exercicio06[i]);
}

//08
let jsonExercicio08 = {
    "nome": "Ravi",
    "idade": 22,
    "sexo": "Masculino"
}
console.log(jsonExercicio08.nome);
console.log(jsonExercicio08.idade);
console.log(jsonExercicio08.sexo);

//09
let fraseExercicio09 = "O meu nome é Ravi Felipe Ferreira da Silva"
let arrayExercicio09 = fraseExercicio09.split(" ")
console.log(fraseExercicio09);
console.log(arrayExercicio09);
for (let i = 0; i < arrayExercicio09.length; i++) {
    console.log(`Elemento n°${i}: ${arrayExercicio09[i]}`);
}

//10
let objetoCalculadora09 = {
    soma: function (num1, num2) {
        let soma = num1 + num2;
        console.log(`SOMA: ${soma}`);
    },
    subtrair: function (num1, num2) {
        let subtrair = num1 - num2;
        console.log(`SUBTRAÇÃO: ${subtrair}`);
    },
    multiplicar: function (num1, num2) {
        let multiplicar = num1 * num2;
        console.log(`MULTIPLICAÇÃO: ${multiplicar}`);
    },
    dividir: function (num1, num2) {
        let dividir = num1 / num2;
        console.log(`DIVISÃO: ${dividir}`);
    }
}
objetoCalculadora09.soma(2, 2);
objetoCalculadora09.subtrair(10, 1);
objetoCalculadora09.subtrair(1, 10);
objetoCalculadora09.multiplicar(2, 10);
objetoCalculadora09.dividir(10, 2);

//11
const arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(i + 5);
}
console.log(arr);

//12
let maiorNumero = 0;
function findMaxNumber(array) {
    for (let i = 0; i < array.length; i++)
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    console.log(maiorNumero);
}
let arrayExercicio12 = [100, 4, 657, 34, 23, 7675, 22, 565675];
findMaxNumber(arrayExercicio12);

//13
function sumUniqueNumbers(){
    
}