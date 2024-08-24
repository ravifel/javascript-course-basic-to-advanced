//01
console.log('Questão 01.');
function exibirHelloWorld() {
    console.log('Hello World!');
}
exibirHelloWorld();

//02
console.log('Questão 02.');
function exibirIdadeConsole(idade) {
    console.log(`Você tem ${idade} anos.`);
}
exibirIdadeConsole(22);

//03
console.log('Questão 03.');
function somatorio2Numeros(numero1, numero2) {
    let somatorio = numero1 + numero2;
    console.log(somatorio);
}
somatorio2Numeros(10, 2);
somatorio2Numeros(-20, 10);
somatorio2Numeros(5, 0);

//04
console.log('Questão 04.');
function retornandoNumeroAleatorio(numeroMaximo) {
    for (let i = 0; i < + numeroMaximo; i++) {
        let numeroAleatorio = Math.round(Math.random() * numeroMaximo);
        if (i <= numeroMaximo) {
            console.log(numeroAleatorio);
            break;
        }
    }
}
retornandoNumeroAleatorio(30);
retornandoNumeroAleatorio(100);
retornandoNumeroAleatorio(3000);

//05
console.log('Questão 05.');
function verificacaoEntradaAutoEscola(idade) {
    if (idade >= 18) {
        console.log(`Você poderá entrar na auto escola. Você tem ${idade} anos!`);
    } else {
        console.log(`Você não poderá entrar na auto escola. Você tem ${idade} anos.`)
    }
}
verificacaoEntradaAutoEscola(22);
verificacaoEntradaAutoEscola(17);
verificacaoEntradaAutoEscola(18);

//06
console.log('Questão 06.');
function detectaTipoDeDado(dado) {
    if (typeof (dado) === 'number') {
        console.log(`O tipo de dado de ${dado} é NUMBER.`);
    } else if (typeof (dado) === 'boolean') {
        console.log(`O tipo de dado de ${dado} é BOOLEAN.`);
    } else if (typeof (dado) === 'string') {
        console.log(`O tipo de dado de ${dado} é STRING.`);
    }
}
detectaTipoDeDado(22);
detectaTipoDeDado(true);
detectaTipoDeDado('Ravi');
detectaTipoDeDado(false);

//07
console.log('Questão 07.');
function inversaoDePositivoParaNegativo(numero) {
    if (numero < 0) {
        console.log(Math.abs(numero));
    } else {
        console.log(numero);
    }
}
inversaoDePositivoParaNegativo(-6);
inversaoDePositivoParaNegativo(6);
inversaoDePositivoParaNegativo(-6.76272);
inversaoDePositivoParaNegativo(0);

//08
console.log('Questão 08.');
function verificacaoTamanhoTexto(texto) {
    if (texto.length > 10) {
        console.log('Texto muito longo.');
    } else if (texto.length <= 10) {
        console.log('Texto dentro do limite.');
    }
}
verificacaoTamanhoTexto('qqqqqqqqqqqqqqqqqqqqqqqqqq');
verificacaoTamanhoTexto('1');
verificacaoTamanhoTexto('aaaaaaaaaa');
verificacaoTamanhoTexto('');

//09
console.log('Questão 09.');
function calcularPotencia(base, expoente = 2) {
    let potencia = Math.pow(base, expoente);
    return console.log(`O resultado da potenciação da base ${base} pelo expoênte ${expoente} é ${potencia}.`);
}
calcularPotencia(2, 3);
calcularPotencia(2);
calcularPotencia(-2, 5);
calcularPotencia(2, 0);

//10
console.log('Questão 10.');
function exibicaoNumerosParesDecrementando(numero) {
    console.log(`Número inicial: ${numero}`);
    for (let i = numero; i >= 0; i--) {
        if (i % 2 == 0) {
            console.log(`${i} é PAR`);
        }
    }
}
exibicaoNumerosParesDecrementando(3)
exibicaoNumerosParesDecrementando(10);
exibicaoNumerosParesDecrementando(2);

//11
console.log('Questão 11.')
function geradorTabuada(numero) {
    console.log(`Tabuada de ${numero}:`)
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${numero} = ${numero * i}`);
    }
}
geradorTabuada(2);
geradorTabuada(0);
geradorTabuada(9);
geradorTabuada(100);

//12
console.log('Questão 12');
function somatorio3Numeros(a, b, c) {
    let resultado = a + b + c;
    return console.log(resultado);
}
somatorio3Numeros(5, 10, 15);

//13
console.log('Questão 13');
function faixaEtaria(idade) {

    if (idade < 12) {
        console.log('Criança');
    } else if (idade >= 12 && idade <= 24) {
        console.log('Jovem');
    } else if (idade > 25) {
        console.log('Adulto');
    }
}
faixaEtaria(11);
faixaEtaria(22);
faixaEtaria(30);