//Exercicio 01
let nome = "Ravi Felipe";
console.log(`Nome: ${nome} = ${typeof (nome)}`);
const sobrenome = "Silva"
console.log(`Sobrenome: ${sobrenome} = ${typeof (sobrenome)}`);

let idade = 22;
console.log(`Idade: ${idade} = ${typeof (idade)}`);
const telefone = 988887777;
console.log(`Telefone: ${telefone} = ${typeof (telefone)}`);

let temCarro = false;
console.log(`Tem carro: ${temCarro} = ${typeof (temCarro)}`);
const temPet = true;
console.log(`Tem pet: ${temPet} = ${typeof (temPet)}`);

//Exercicio 02
let idadePessoa = 18;
if (idadePessoa >= 18) {
    console.log("Pode entrar no evento! Sua idade é superior a 18 anos.");
} else {
    console.log("Não pode entrar no evento. Só é permitida a entrada de maiores de 17 anos.");
}

//Exercicio 03
let nome01 = "Ravi Felipe";
if (nome01 == "Ravi Felipe") {
    console.log(`Olá, bem-vindo ${nome01}`);
} else {
    console.log("O seu nome está incorreto. Tente novamente.");
}

//Exercicio 04
//Bases: 2, 3, 18 - Expoente: 2.
let potenciaDe2 = Math.pow(2, 2);
console.log(potenciaDe2);
let potenciaDe3 = Math.pow(3, 2);
console.log(potenciaDe3);
let potenciaDe18 = Math.pow(18, 2);
console.log(potenciaDe18);

//Exercicio 05
let verlocidadeAtual = 80;
let velocidadePermitida = 80;
if (verlocidadeAtual > velocidadePermitida) {
    console.log(`A sua velocidade atual está acima do limite de velocidade. Você acabou de levar uma multa. Velocidade Atual: ${verlocidadeAtual}.`)
} else if (verlocidadeAtual < (velocidadePermitida / 2)) {
    console.log(`A sua velocidade atual está abaixo do limite de velocidade permitido. Você acabou de levar uma multa. Velocidade Atual: ${verlocidadeAtual}.`)
} else {
    console.log(`A sua velocidade está dentro do limite permitido! Velocidade Atual: ${verlocidadeAtual}`)
}

//Exercicio 06
const idadePermitidaMotorista = 18;
let idadeMotorista = 18;
let temCNH = true;
if (idadeMotorista >= idadePermitidaMotorista && temCNH == false) {
    console.log(`O usuário não poderá dirigir pois não possui CNH.`)
} else if (idadeMotorista >= idadePermitidaMotorista && temCNH == true) {
    console.log(`O usuário pode dirigir pois a sua idade é superior a ${idadePermitidaMotorista} e possui CNH.`)
} else {
    console.log(`O usuário não poderá dirigir. Pois não atende aos requisitos de idade ou de possuir uma CNH.`);
}

//Exercicio 07
let incremento1 = 0;
while (incremento1 <= 10) {
    console.log(incremento1);
    incremento1++;
}

let incremento2 = 10;
while (incremento2 >= 0) {
    console.log(incremento2);
    incremento2--;
}

//Exercicio 08
for (let i = 100; i >= 50; i--) {
    console.log(`N° ${i}`);
}

//Exercicio 09
console.log('Resolução usando a estrutura FOR');
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(`O número ${i} é PAR`);
    } else {
        console.log(`O número ${i} é ÍMPAR`);
    }
}

let incremento3 = 0;
console.log('Resolução usando a estrutura WHILE');
while (incremento3 <= 50) {
    if (incremento3 % 2 == 0) {
        console.log(`O número ${incremento3} é PAR`);
    } else {
        console.log(`O número ${incremento3} é ÍMPAR`);
    }
    incremento3++;
}

//Exercicio 10 (Desafio)
let numeroPrimo = 41;
let divisoes = 0;

for (let i = 1; i <= numeroPrimo; i++) {
    if (numeroPrimo % i == 0) {
        divisoes++;
    }
}
console.log(`Divisoes: ${divisoes}`);

if (divisoes == 2) {
    console.log(`O número ${numeroPrimo} é PRIMO.`);
} else {
    console.log(`O número ${numeroPrimo} não é primo`);
}

//(Todos os números dentro de um intervalo)
for (let i = 1; i <= 50; i++) {
    let divisoes2 = 0;

    //Quantidade de divisões dos números
    for (let x = 1; x <= i; x++) {
        if (i % x == 0) {
            divisoes2++;
        }
    }
    console.log(`Divisoes: ${divisoes2}`);

    //Checando se é primo
    if (divisoes2 == 2) {
        console.log(`O número ${i} é PRIMO.`);
    } else {
        console.log(`O número ${i} não é primo`);
    }
}