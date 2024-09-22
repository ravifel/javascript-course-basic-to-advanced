'use strict'

function checarNumero(valor) {
    let resultado = Number(valor);
    if (Number.isNaN(resultado)) {
        return null;
    } else {
        return resultado;
    }
}
console.log(checarNumero('Ravi'));
console.log(checarNumero('1'));
console.log(checarNumero(123));


//EXCEPTIONS
let a = 2;
if (a != 2) {
    throw new Error("O valor de 'A' não pode ser 1");
}

function saudacao(nome) {
    if (typeof nome != 'string') {
        throw new Error("O parâmetro 'nome' precisa ser string.");
    } else {
        console.log(`Olá ${nome}!`);
    }
}
saudacao('Ravi');
//saudacao(12334);


//TRY, CATCH, FINALLY
try {
    let c = b + a;
    //Tentar executar esse bloco
} catch (error) {
    console.log("Algo deu errado: " + error);
    //Caso dê erro
} finally {
    console.log("O bloco de código foi executado");
}

try {
    let d = 2;
    //Tentar executar esse bloco
} finally {
    console.log("O bloco de código foi executado");
}

//ASSERTIONS
function itemArray(arr) {
    if (arr.length == 0) {
        throw new Error("O array precisa ter elementos");
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}
let arrayTeste = [];
itemArray(arrayTeste);