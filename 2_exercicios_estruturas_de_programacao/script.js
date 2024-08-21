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

//---------------------------------------
//01
let a = 10;
let b = 5;
let c = 20;
if (a + b < c) {
    console.log(`A soma de ${a} + ${b} é menor que ${c}.`);
} else {
    console.log(`A soma de ${a} + ${b} é maior que ${c}.`);
}

// 02°
let nome02 = "Ravi Felipe";
let sexo = "F";
let estadoCivil = "CASADA";
let tempoDeCasamento = 0;
if (sexo == "F" && estadoCivil == "CASADA") {
    tempoDeCasamento = prompt("Qual o tempo de casamento?");
    console.log(`O tempo de casamento de ${nome02} é ${tempoDeCasamento} anos`);
}

// 03°
let numero = 11;
if (numero % 2 == 0) {
    console.log(`o número ${numero} é par`);
} else {
    console.log(`o número ${numero} é impar`);
}

// 04°
let valorA = 10;
let valorB = 11;
if (valorA == valorB) {
    let soma = valorA + valorB;
    console.log(`A soma dos valores ${valorA} + ${valorB} é ${soma}`);
} else {
    let multiplicacao = valorA * valorB;
    console.log(`A multiplicação dos valores ${valorA} * ${valorB} é ${multiplicacao}`);
}

// 05°
let numeroB = -10;
if (numeroB > 0) {
    let dobroDoNumero = numeroB * 2;
    console.log(`O dobro do número ${numeroB} é ${dobroDoNumero}`);
} else if (numeroB < 0) {
    let triploDoNumero = numeroB * 3;
    console.log(`O triplo do número ${numeroB} é ${triploDoNumero}`);
}

// 06°
let valueBooleanA = true;
let valueBooleanB = false;
if (valueBooleanA == true && valueBooleanB == true) {
    console.log('Ambos os valores são TRUE')
} else if (valueBooleanA == false && valueBooleanB == false) {
    console.log('Ambos os valores são FALSE');
} else if (valueBooleanA == true && valueBooleanB == false) {
    console.log(`O valor A é TRUE e o valor B é FALSE`);
} else if (valueBooleanA == false && valueBooleanB == true) {
    console.log(`O valor A é FALSE e o valor B é TRUE`);
}

// 07°
let numeroC = 11;
if (numeroC % 2 == 0) {
    let soma = numeroC + 5;
    console.log(`A soma de ${numeroC} + 5 é ${soma}. ${numeroC} é PAR.`)
} else {
    let soma = numeroC + 8;
    console.log(`A soma de ${numeroC} + 8 é ${soma}. ${numeroC} é ÍMPAR.`)
}

// 08°
let x = 10;
let y = 20;
let z = 30;
if (x >= y && x >= z && y >= z) {
    console.log(`A ordem decrescente é: ${x}, ${y}, ${z}`);
} else if (x >= y && x >= z && z >= y) {
    console.log(`A ordem decrescente é: ${x}, ${z}, ${y}`);
} else if (y >= x && y >= z && x >= z) {
    console.log(`A ordem decrescente é: ${y}, ${x}, ${z}`);
} else if (y >= x && y >= z && z >= x) {
    console.log(`A ordem decrescente é: ${y}, ${z}, ${x}`);
} else if (z >= x && z >= y && x >= y) {
    console.log(`A ordem decrescente é: ${z}, ${x}, ${y}`);
} else if (z >= x && z >= y && y >= x) {
    console.log(`A ordem decrescente é: ${z}, ${y}, ${x}`);
}

// 09°
let alturaPessoa01 = 1.81;
let sexoPessoa01 = 'MASCULINO';
if (sexoPessoa01 == 'MASCULINO') {
    let pesoIdealMasculino = (72.7 * alturaPessoa01) - 58;
    console.log(`Tendo em vista que a pessoa é do sexo masculino, o peso ideal é ${pesoIdealMasculino}`);
} else if (sexoPessoa01 == 'FEMININO') {
    let pesoIdealFeminino = (61.1 * alturaPessoa01) - 44.7;
    console.log(`Tendo em vista que a pessoa é do sexo masculino, o peso ideal é ${pesoIdealFeminino}`);
} else {
    console.log(`Insira o 'sexo' novamente.`)
}

// 10°
let alturaPessoa02 = 1.81;
let pesoPessoa02 = 89.00;
let imcPessoa02 = pesoPessoa02 / (alturaPessoa02 ** 2);
console.log(`Olá! O seu IMC é: ${imcPessoa02}`);
if (imcPessoa02 < 18.5) {
    console.log('Abaixo do peso!');
} else if (imcPessoa02 >= 18.5 && imcPessoa02 < 25) {
    console.log('Peso normal');
} else if (imcPessoa02 >= 25 && imcPessoa02 < 30) {
    console.log('Acima do peso');
} else if (imcPessoa02 >= 30) {
    console.log('Obeso');
}

// 11°
let precoInicialProduto = 100;
let etiqueta = 3;

const etiqueta1Avista = 0.10; //Desconto
const etiqueta2CartaoAvista = 0.15; //Desconto
const etiqueta3Cartao2Vezes = 0; //Preço normal
const etiqueta4Cartao2Vezes = 0.10; //Acrescimo, Juros

if (etiqueta == 1) {
    let precoFinalProduto = precoInicialProduto - (precoInicialProduto * etiqueta1Avista);
    console.log(`Teve um desconto para esse produto. Antes o valor era ${precoInicialProduto} e agora passou a ser ${precoFinalProduto}. A etiqueta escolhida foi a de N°${etiqueta}.`);
} else if (etiqueta == 2) {
    let precoFinalProduto = precoInicialProduto - (precoInicialProduto * etiqueta2CartaoAvista);
    console.log(`Teve um desconto para esse produto. Antes o valor era ${precoInicialProduto} e agora passou a ser ${precoFinalProduto}. A etiqueta escolhida foi a de N°${etiqueta}.`);
} else if (etiqueta == 3) {
    let precoFinalProduto = precoInicialProduto - (precoInicialProduto * etiqueta3Cartao2Vezes);
    console.log(`Não houve desconto para esse produto. O valor do produto é ${precoFinalProduto}. A etiqueta escolhida foi a de N°${etiqueta}.`);
} else if (etiqueta4Cartao2Vezes) {
    let precoFinalProduto = precoInicialProduto + (precoInicialProduto * etiqueta4Cartao2Vezes);
    console.log(`Teve um acréscimo para esse produto. Antes o valor era ${precoInicialProduto} e agora passou a ser ${precoFinalProduto}. A etiqueta escolhida foi a de N°${etiqueta}.`);
}

// 12°
let codigoAluno = 1234;
let notaAvaliacao1 = 70;
let notaAvaliacao2 = 70;
let notaAvaliacao3 = 70;
let mediaExerciciosAluno = 70;
let mediaAproveitamentoConceito = ((notaAvaliacao1 + (notaAvaliacao2 * 2) + (notaAvaliacao3 * 3) + mediaExerciciosAluno) / 7).toFixed(2);
console.log(`A Média de Aproveitamento do aluno ${codigoAluno} foi ${mediaAproveitamentoConceito}.`);
if (mediaAproveitamentoConceito >= 90) {
    console.log('O aluno foi Aprovado! Classificação A.');
} else if (mediaAproveitamentoConceito >= 75 && mediaAproveitamentoConceito < 90) {
    console.log('O aluno foi Aprovado! Classificação B.');
} else if (mediaAproveitamentoConceito >= 60 && mediaAproveitamentoConceito < 75) {
    console.log('O aluno foi Aprovado! Classificação C.');
} else if (mediaAproveitamentoConceito >= 40 && mediaAproveitamentoConceito < 60) {
    console.log('O aluno foi Reprovado! Classificação D.');
} else if (mediaAproveitamentoConceito < 40) {
    console.log('O aluno foi Reprovado! Classificação E.');
}