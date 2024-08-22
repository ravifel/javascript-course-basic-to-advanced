function escreverNoConsole() {
    console.log("Escrevendo no console!");
}
escreverNoConsole();

const textoNoConcole = function () {
    console.log("Texto no console");
}
textoNoConcole();

const textoPorParametro = function (texto) {
    console.log(texto);
}
textoPorParametro("Olá, Ravi! Bem-vindo");

function imprimirUmNumero(numero) {
    console.log(`O número é 2 ${numero}`);
}
imprimirUmNumero(33);

function numeroAleatorio() {
    let numeroAleatorio = Math.random().toFixed(2);
    console.log(numeroAleatorio);
}
numeroAleatorio();

//RETURN
function soma(a, b) {
    return a + b;
}
console.log(soma(3, 5));

function saudacao(nome) {
    if (nome == 'Ravi') {
        return `Olá ${nome}`;
    }
}
console.log(saudacao('Ravi'));

function podeDirigir(idade, temCnh) {
    if (idade >= 18 && temCnh == true) {
        console.log('Pode dirigir!');
    } else {
        console.log('Não pode dirigir.');
    }
}
podeDirigir(18, true);
podeDirigir(17, 0);
podeDirigir(18, 0);
podeDirigir(16, 1);

//ARROW FUNCTIONS
const parOuImpar = (numero) => {
    return numero % 2;
}
parOuImpar(3);

let consoleTeste = () => {
    console.log("Hellor world!")
}
consoleTeste();

let consoleTesteSaudacao = (nome) => {
    return console.log(`Olá ${nome}!`);
}
consoleTesteSaudacao('Ravi');

const raizQuadrada1 = (x) => {
    return x * x;
}

const raizQuadrada2 = n => n * n;
console.log(raizQuadrada1(2));
console.log(raizQuadrada2(4));

//ARGUMENTOS OPCIONAIS
function nomeComIdade(nome, idade) {
    if (idade === undefined) {
        console.log(`O seu nome é ${nome}.`);
    } else {
        console.log(`O seu nome é ${nome} e você tem ${idade} anos.`)
    }
}
nomeComIdade('Ravi');
nomeComIdade('Ravi', 22);

function soma(a, b) {
    if (a === undefined || b === undefined) {
        console.log('Essa função precisa ter os 2 argumentos.')
    } else {
        return a + b;
    }
}
console.log(soma(1));

//ARGUMENTOS COM VALOR DEFAULT
function repetirFrase(frase, n = 2) {
    for (let x = 1; x <= n; x++) {
        console.log(`${frase} ${x}`);
    }
}
repetirFrase('Testando', 5);
repetirFrase('Só duas vezes');

function calculaPotencia(base, expoente = 2) {
    let potencia = Math.pow(base, expoente);
    return console.log(potencia);
}
calculaPotencia(2);
calculaPotencia(2, 2);
calculaPotencia(2, 3);

//CLOSURE
function armazenarSoma(x) {

    //return y => x + y
    return function (y) {
        return x + y;
    }
}
let soma1 = armazenarSoma(2);
console.log(soma1(5));

let soma2 = armazenarSoma(5);
console.log(soma2(7));

function contador(i) {
    let cont = i;
    let somarContador = function () {
        console.log(cont);
        cont++;
    }
    return somarContador;
}
let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
let meuContador2 = contador(1);
meuContador2();
meuContador2();
meuContador2();

//RECURSION
function retornarNumeroPar(n) {
    if (n % 2 == 0) {
        console.log(`n agora é par: ${n}`);
    } else {
        console.log(n);
        retornarNumeroPar(n - 1);
    }
}
retornarNumeroPar(33);

function recursao(numero) {
    if (numero - 1 <= 2) {
        console.log('Recursão parou.');
    } else if (numero % 2 != 0) {
        console.log(`Número ${numero} é ímpar.`);
        recursao(numero - 1);
    } else {
        console.log(`Número ${numero} é par.`);
        console.log(numero);
        recursao(numero - 2);
    }
}
recursao(10);
recursao(39);
recursao(55);