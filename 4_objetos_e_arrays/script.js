//ARRAYS
let numeros = [1, 3, 5, 8, 12];
let nomes = ["Ravi", "Felipe", "Davi", "Ana", "Maria"];
let booleans = [true, false, true, true, false];
let informacoesMisturadas = ["Matheus", 12, true, "Teste", 2];
console.log(numeros);
console.log(nomes);
console.log(booleans);
console.log(informacoesMisturadas);

//ACESSAR CADA ELEMENTO DO ARRAY INDIVIDUALMENTE
console.log(numeros[1]);
console.log(nomes[0]);
console.log(booleans[2]);
console.log(informacoesMisturadas[informacoesMisturadas.length - 1]);

//PROPRIEDADES
let nomeRavi = "Ravi";
console.log(nomeRavi.length);

console.log(numeros.length);
console.log(numeros['length']);
console.log(numeros[3]);

//MÉTODOS
console.log(nomeRavi.toUpperCase()); //RAVI
console.log(nomeRavi.toLowerCase()); //ravi
console.log(typeof nomeRavi.toUpperCase); //Function

//OBJETOS
let pessoa = {
    nome: "Ravi",
    profissao: "Analista de Testes",
    idade: 22,
    peso: 90,
    altura: 1.81,
    imc: function () {
        let imc = (this.peso / (this.altura * this.altura)).toFixed(2);
        console.log(`O IMC de ${this.nome} é ${imc}`);
        if (imc < 18.5) {
            console.log(`${this.nome} está Abaixo do Peso.`);
        } else if (imc > 18.5 && imc < 24.9) {
            console.log(`${this.nome} está com o Pesso adequado`);
        } else if (imc >= 25) {
            console.log(`${this.nome} está com Sobrepeso.`);
        }


    }
}
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.idade);
console.log(pessoa.peso);
console.log(pessoa.altura);
pessoa.imc();
pessoa.pessoaCasada = false;
console.log(pessoa.pessoaCasada);

let pet = {
    tipoDeAnimal: "Gato",
    patas: 4,
    nome: "Mel",
    latir: function () {
        console.log("AuAu!")
    },
    miar: function () {
        console.log('Miau!')
    }
}
console.log(pet);
console.log(pet.tipoDeAnimal);
console.log(pet.patas);
console.log(pet.nome);
pet.latir();
pet.miar();

pet.idade = 5;
console.log(pet.idade);

pet.detalhes = function () {
    console.log(`${this.nome} é um(a) ${this.tipoDeAnimal}`);
}
pet.detalhes();

console.log(pet.patas)
delete pet.patas;
console.log(pet.patas);

//COPIANDO OBJETO
let objetoA = {
    propriedade1: "teste 1",
    propriedade2: "teste 2",
}
let objetoB = {
    propriedade3: 'teste 3'
}

Object.assign(objetoA, objetoB);

console.log(objetoA)
console.log(objetoB)

let carro = {
    portas: 2,
    postaMalas: '200l',
    motor: '2.0',
}
let adicionais = {
    tetoSolar: true,
    arCondicionado: true,
}
Object.assign(carro, adicionais);
console.log(carro);

//MÉTODO KEYS (OBJECT)
console.log(carro);
console.log(Object.keys(carro));

//MUTAÇÃO (MUTABILITY)
let pessoa2 = {
    nome: 'Ravi Felipe Ferreira',
}
let pessoa3 = pessoa2;
console.log(pessoa2 == pessoa3); //true
console.log(pessoa == pessoa2); //false
console.log(pessoa == pessoa3); //false

console.log(pessoa3.nome);
console.log(pessoa2.nome);

pessoa3.nome = "João";
console.log(pessoa3.nome);
console.log(pessoa2.nome);

pessoa2.nome = "Maria";
console.log(pessoa3.nome);
console.log(pessoa2.nome);

//LOOPS EM ARRAYS
let listaNumeros = [1, 5, 10, 15, 20, 25];
for (let i = 0; i <= listaNumeros.length; i++) {
    console.log(listaNumeros[i]);
}

let listaNomes = ["Esmeralda", "Zeze", "Ravi", "Rian"];
for (let i = 0; i <= listaNomes.length; i++) {
    console.log(listaNomes[i]);
}

//MÉTODOS DE ARRAY: PUSH E POP
listaPessoas = ["Maria", "Joao", "Ana", "Marcos", "Matheus"];
console.log(listaPessoas);

let pessoaAdicionada = listaPessoas.push("Theo");
console.log(listaPessoas);

let pessoaRemovida = listaPessoas.pop();
console.log(pessoaRemovida);
console.log(listaPessoas);

//MÉTODOS DE ARRAY: SHIFT e UNSHIFT
let listaFrutas = ["Maçã", "Melão", "Banana", "Uva"];
console.log(listaFrutas);
listaFrutas.unshift("Graviola");
console.log(listaFrutas);

let frutaRemovida = listaFrutas.shift();
console.log(frutaRemovida);
console.log(listaFrutas);

let listaCarros = ["BMW", "Audi", "VW", "Fiat"];
let removerPrimeiroCarro = listaCarros.shift();
console.log(removerPrimeiroCarro);
console.log(listaCarros);
listaCarros.unshift("Gol");
console.log(listaCarros);

//MÉTODOS DE ARRAY: INDEXOF e LASTINDEXOF
let listaNumeros2 = [0, 1, 2, 1, 0];
console.log(listaNumeros2.indexOf(1)); //1
console.log(listaNumeros2.lastIndexOf(1)); //3

let listaNomes2 = ["Ana", "Maria", "João", "Marcos", "Davi", "Ana"];
console.log(listaNomes2.indexOf("Ana")); //0
console.log(listaNomes2.lastIndexOf("Ana")); //5
console.log(listaNomes2.lastIndexOf("Marcos")); //3

//MÉTODOS DE ARRAY: SLICE
let listaNomes3 = ["Ana", "Maria", "João", "Marcos", "Davi", "Ana", "Pedro", "Carlos"];
console.log(listaNomes3.slice(2, 4)); //2,3
console.log(listaNomes3.slice(2, 5)); //2,3,4
console.log(listaNomes3.slice(5)); //5,6,7
console.log(listaNomes3.slice(-2)); //6,7 (Pegou os 2 últimos números do Array)
console.log(listaNomes3.slice(3, -2)); //3,4,5 (excluindo os 2 últimos números)

//MÉTODOS DE ARRAY: FOREACH
listaNomes3.forEach(nome => {
    console.log(`O nome é ${nome}`);
})
listaCarros.forEach(carro => {
    console.log(carro);
})
listaNumeros.forEach(numero => {
    console.log(numero);
})

//MÉTODOS DE ARRAY: INCLUDES
console.log(listaNomes3.includes("Davi")); //true
console.log(listaNomes3.includes("Ravi")); //false
if (!listaNomes3.includes("Ravi")) {
    listaNomes3.unshift("Ravi");
    console.log(listaNomes3);
}

//MÉTODOS DE ARRAY: REVERSE
let listaNumeros3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(listaNumeros3);
console.log(listaNumeros3.reverse());
let listaNomes4 = ["Marcos", "Davi", "Ana", "Pedro", "Carlos", "Ana", "Maria", "João"]
console.log(listaNomes4);
console.log(listaNomes4.reverse());

//MÉTODOS DE STRING: TRIM
let texto = "     Ravi  ";
let textoCorrigido = texto.trim();
console.log(texto);
console.log(textoCorrigido);

let texto2 = " \n    Felipe   \n";
let textoCorrigido2 = texto2.trim();
console.log(texto2);
console.log(textoCorrigido2);

//MÉTODOS DE STRING: PADSTART
let codigo = 1;
let codigoComZeros = codigo.toString().padStart(6, "0");
console.log(codigoComZeros);
let codigo2 = 7348;
let codigoComZeros2 = codigo2.toString().padStart(6, "0");
console.log(codigoComZeros2);

//MÉTODOS DE STRING: SPLIT
let frase = "O rato roeu a roupa do rei de roma";
let palavras = frase.split(" ");
console.log(palavras);

let mercado = "Banana;Maçã;Uva;Melancia;Melão";
let produtos = mercado.split(";");
console.log(produtos);

//MÉTODOS DE STRING: JOIN
let fraseMontada = palavras.join('<->');
console.log(fraseMontada);
console.log(palavras.join(" "));
console.log(produtos.join(", "));

//MÉTODOS DE STRING: REPEAT
console.log('TesteRepeat-'.repeat(5));

//REST OPERATOR
function imprimirNoConsole01(...argumentos) {
    for (let i = 0; i < argumentos.length; i++) {
        console.log(argumentos[i]);
    }
}
imprimirNoConsole01(1, 2, 3, 4, "Teste");

//DESTRUCTURING COM OBJETOS
const pessoa4 = {
    nome: "Ravi",
    sobrenome: "Ferreira"
}

const { nome: fnome, sobrenome: fsobrenome } = pessoa4;
console.log(fnome);
console.log(fsobrenome);
console.log(pessoa4.nome);
console.log(pessoa4.sobrenome);

//DESTRUCTURING COM ARRAYS
let listaNomes5 = ["Ravi", "João", "Pedro"];
let [nomeA, nomeB, nomeC] = listaNomes5;
console.log(nomeA);
console.log(nomeB);
console.log(nomeC);

//JSON
let pessoa5 = {
    "name": "Ravi",
    "age": 22,
    "email": "ravifelipee@gmail.com",
    "languages": ["portuguese", "english", "french"]
}
console.log(pessoa5.name);
console.log(pessoa5.age);
console.log(pessoa5.email);
console.log(pessoa5.languages);

//JSON, STRING
let JsonToString = JSON.stringify(pessoa5); //JSON PARA STRING
console.log(JsonToString);
console.log(typeof (JsonToString));

let stringToJson = JSON.parse(JsonToString); //STRING PARA JSON
console.log(stringToJson);
console.log(stringToJson.name);
console.log(typeof (stringToJson));