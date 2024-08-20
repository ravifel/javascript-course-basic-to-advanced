console.log(1 < 2);
console.log('Ravi');

// LET (Tem escopo de bloco)
let quadrado = 4, triangulo = 3, retangulo = 4;
console.log(quadrado * (triangulo + retangulo));

// VAR (Tem escopo global)
var email = "ravifelipee@gmail.com";
email = "ravi@gmail.com"
console.log(email);

// CONST (Não muda. Constante)
const nome = "Ravi Felipe";
const ip = "127.0.0.1";
console.log(nome);
console.log("IP:" + ip);

//PROMPT
// let idade = prompt("Digite a sua idade");
// console.log("A sua idade é " + idade + " anos.");
// let sobrenome = prompt("Digite o seu nome");
// console.log(`O seu sobrenome é ${sobrenome}`);

//ALERT
//alert("Esta é a mensagem!");

//MATH
let maiorNumero = Math.max(6, 12, 28, 55);
console.log(maiorNumero);
let menorNumero = Math.min(100, 55, 50, 3);
console.log(menorNumero);
let arredondarNumero = Math.round(2.79877797);
console.log(arredondarNumero);
let arredondarNumeroParaCima = Math.ceil(5.122323243234);
console.log(arredondarNumeroParaCima);


//CONSOLE.LOG
let idade = 22;
console.log(nome);
console.log(ip);
console.log(`O meu nome é ${nome} e a minha idade é ${idade} anos`);


//ESTRUTURAS DE CONTROLE (IF, ELSE, ELSE IF)
idade = 17;
let passaporte = true;
if ((nome == "Ravi Felipe" && idade >= 18) || passaporte == true) {
    console.log('Pode entrar no IF');
} else {
    console.log('Pode entrar no ELSE');
}


if (idade >= 18) {
    console.log('Pode entrar no IF');
} else if (idade == 17 && nome.length >= 11) {
    console.log('Pode entrar no ELSE IF');
} else {
    console.log('Pode entrar no ELSE');
}


//ESTRUTURA DE REPETIÇÃO (WHILE, DO WHILE, FOR)
//WHILE
let x = 10;
while (x > 0) {
    console.log(`O X é ${x}`);
    x = x - 1; //x--;
}

let y = 0;
while (y <= 10) {
    console.log(`O Y é ${y}`);
    y = y + 1; //y++;
}


//DO WHILE
let z = 0;
do {
    console.log(y);
    y = y + 1;
} while (y < 5);

let a = 100;
do {
    console.log(a + "/ 2 = " + (a / 2));
    a = a - 5
} while (a >= 0);


//FOR
for (let numero = 2; numero < 100; numero = numero * 2) {
    console.log("O numero é " + numero);
}

for (let i = 0; i < 100; i = i + 3) {
    console.log(`A soma de i com 2 é: ${i + 2}`);
}

//BREAK
for (let i = 0; i < 20; i = i + 1) {
    if (i % 10 == 0) {
        console.log('Saiu do loop! (break)');
        break;
    }
    console.log('Prosseguindo o loop.');
}

let nomeFor2 = 'Ravi';

for (let i = 0; i < 10; i = i + 1) {
    if (i == 3) {
        nomeFor2 = 'Felipe'
    }

    if (i == 5 && nomeFor2 == 'Felipe') {
        console.log('O nomeFor2 agora é Felipe');
        break;
    }

    console.log(i);
    console.log(`posição ${i} - nomeFor2: ${nomeFor2}`);
}


//CONTINUE
let numeroA = 0;

while (numeroA <= 10) {
    numeroA++;
    if (numeroA % 2 == 0) {
        continue;
    }
    console.log(numeroA);
    numeroA++;
}


for (let i = 10; i > 0; i--) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(`Número ${i}`);
}


//SWITCH
let nomeTesteSwitch = "Ravi Felipe";
switch (nomeTesteSwitch) {
    case "Ravi":
        console.log("O nome é 'Ravi'");
        break;
    case "Felipe":
        console.log("O nome é 'Felipe'");
        break;
    case "Ravi Felipe":
        console.log("O nome é 'Ravi Felipe'");
        break;
    default:
        console.log("O nome não foi encontrado");
        break;
}

//Fazendo o mesmo exemplo com um ecadeamento de IFs
if (nomeTesteSwitch == "Ravi") {
    console.log("O nome é 'Ravi'.");
} else if (nomeTesteSwitch == "Felipe") {
    console.log("O nome é 'Felipe'.");
} else if (nomeTesteSwitch == "Ravi Felipe") {
    console.log("O nome é 'Ravi Felipe'.");
} else {
    console.log("O nome não foi encontrado.");
}

//DECLARAÇÕES DE VARIÁVEIS
let carrovermelhogrande; //DIFICIL DE LER
let carro_vermelho_grande;
let CarroVermelhoGrande;
let carroVermelhoGrande; //MAIS UTILIZADO (camelCase)