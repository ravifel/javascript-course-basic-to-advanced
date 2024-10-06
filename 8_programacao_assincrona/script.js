//CALLBACKS
console.log('Ainda não chamou o callback');
setTimeout(function () {
    console.log('Chamou o callback');
}, 3000);
console.log('Ainda não chamou o callback');

console.log("1");
console.log("2");
console.log("3");
console.log("4");
setTimeout(function () {
    console.log("5");
}, 2000);

//PROMISES
let promessa = Promise.resolve(4 + 8); //Resultado que está sendo aguadado
console.log('Algum código');
console.log(promessa);
promessa.then((value) => { return value + 5 })
    .then((value) => { console.log(value) });

let promessa2 = Promise.resolve(10 + 2);
console.log('Continuação do código enquando a promisse não está concluida.');
console.log(promessa2);
promessa2.then((value) => { console.log(`Resultado Promisse: ${value}`) })
    .then((value) => { return value + 5 })

//FALHAS NAS PROMISES
let promiseErrada = Promise.resolve(new Error("Algo deu errado"));
console.log('Continuação do código enquando a promisse não está concluida.');
promiseErrada
    .then((value) => console.log(value))
    .catch(reason => console.log("Erro: " + reason));

//REJEITANDO PROMISES
function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero == 2) {
            resolve(console.log(`O número é o ${numero}`));
        } else {
            reject(new Error("Não deu certo."));
        }
    });
}

verificarNumero(2);
//verificarNumero(3);

//RESOLVENDO VÁRIAS 'PROMISES'
const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(100);
    }, 2500);
})

const p2 = Promise.resolve(5);
const p3 = new Promise(function (resolve, reject) {
    resolve(10);
})

Promise.all([p1, p2, p3]).then((values) => console.log(values));


//ASYNC FUNCTIONS
async function somar(a, b) {
    return a + b;
}

somar(2, 2).then(function (value) {
    console.log(value);
})

//AWAIT
function somaComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(a + b);
        }, 2000);
    });
}

async function soma(a, b, c, d) {
    let x = somaComDelay(a, b);
    let y = somaComDelay(c, d);

    return await x + await y;
}
soma(2, 4, 6, 8).then(value => console.log(value));

//GENERATORS
function* genTest() {
    let id = 0;
    while(true){
        yield id++;
    }
}

let criarId = genTest();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);