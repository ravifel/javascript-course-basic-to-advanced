//MÉTODOS
let cachorro = {
    raca: "",
    latir: function () {
        console.log("AU aU");
    },
    uivar: function () {
        console.log("Auuuu");
    },
    rosnar: function () {
        console.log("GRRRR");
    },
    setRaca: function (raca) {
        this.raca = raca;
    },
    getRaca: function () {
        return this.raca;
    }
}
cachorro.latir();
cachorro.uivar();
cachorro.rosnar();
console.log(cachorro.raca);
cachorro.setRaca("Pastor alemão");
console.log(cachorro.raca);


let pessoa = {
    nome: '',
    setNome: function (novoNome) {
        this.nome = novoNome;
    },
    getNome: function () {
        return this.nome;
    }
}
console.log(pessoa.getNome());
pessoa.setNome("Ravi");
console.log(pessoa.getNome());
pessoa.setNome("Ravi Felipe");
console.log(pessoa.getNome());

//PROTOTYPES
console.log(pessoa);
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);
console.log(pessoa.hasOwnProperty('nome'));
console.log(pessoa.hasOwnProperty('idade'));

pessoa.maos = 2;

let pessoaNova = Object.create(pessoa);
console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova) == pessoa);
console.log(pessoaNova.hasOwnProperty("maos"));
console.log(Object.getPrototypeOf(pessoaNova) === pessoa)

//CLASSES
let carro = {
    marca: 'SRD',
    quantidadePortas: 0,
    motor: 0,
    gasolinaAcabando: function () {
        console.log('A sua gasolina está acabando.')
    }
}

let carroFiat = Object.create(carro);
carroFiat.marca = 'Palio Fiat';
carroFiat.quantidadePortas = 4;
carroFiat.motor = 1.0;
carroFiat.gasolinaAcabando();
console.log(carroFiat);

let carroToyota = Object.create(carro);
carroToyota.marca = 'Corolla Toyota';
carroToyota.quantidadePortas = 4;
carroToyota.motor = 2.0;
carroToyota.gasolinaAcabando();
console.log(carroToyota);

//CONSTRUCTOR POR FUNÇÃO
function criarAnimal(nome, habitat, comunicacao) {
    let animal = Object.create({});
    animal.nome = nome;
    animal.habitat = habitat;
    animal.comunicacao = function () {
        console.log(comunicacao);
    }
    return animal;
}

let peixe = criarAnimal('Tilápia', 'Agua', 'FishFish');
console.log(`${peixe.nome} vive na ${peixe.habitat}`);
peixe.comunicacao();

//CONSTRUCTOR POR NEW
function Animal(nome, habitat, comunicacao) {
    this.nome = nome;
    this.habitat = habitat;
    this.comunicacao = comunicacao;
    this.comunicacao = function () {
        console.log(comunicacao);
    }
}
let ave = new Animal('Papagaio', 'Ar', 'Oi Oi Oi');
console.log(ave);
ave.comunicacao();

//CONSTRUCTOR POR MÉTODO
function Comida(nome, sabor, preco) {
    this.nome = nome;
    this.sabor = sabor;
    this.preco = preco;
}

Comida.prototype.isCaro = function () {
    if (this.preco >= 10) {
        console.log('É caro!');
    } else {
        console.log('É barato!');
    }
}

let pizza = new Comida('pizza de calabresa', 'salgado', 10000);
console.log(pizza);
pizza.isCaro();

//CONSTRUCTOR NA CLASSE (ES6)
class Computador {
    constructor(marca, modelo, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
    }

    isCaro() {
        if (this.preco >= 10) {
            console.log('É caro!');
        } else {
            console.log('É barato!');
        }
    }
}

let telas = Symbol();
Computador.prototype[telas] = 1;

let ideapadS145 = new Computador('Lenovo', 'Ideapad S145', 2500);
console.log(ideapadS145);
ideapadS145.isCaro();
console.log(ideapadS145[telas]);

//OVERRIDE NAS PROPRIEDADES DO PROTOTYPE
Computador.prototype.modelo = 'Sem modelo definido';
console.log(Computador.prototype.modelo); //Valor default
console.log(ideapadS145.modelo);

//SYMBOLS
let teclado = Symbol();
Computador.prototype[teclado] = 1;

console.log(Computador.prototype[teclado]);
console.log(ideapadS145[teclado]);

//GETTERS and SETTERS
class Curso {
    constructor(nomeCurso, areaCurso) {
        this.nomeCurso = nomeCurso;
        this.areaCurso = areaCurso;
    }

    get verNomeCurso() {
        console.log(this.nomeCurso);
    }

    set alterarNomeCurso(novoNomeCurso) {
        this.nomeCurso = novoNomeCurso;
    }

    get verAreaCurso() {
        console.log(this.areaCurso);
    }

    set alterarAreaCurso(novaAreaCurso) {
        this.areaCurso = novaAreaCurso;
    }
}

let enfermagem = new Curso("Enfermagem", "Saude");

console.log(enfermagem);
enfermagem.verNomeCurso;
enfermagem.verAreaCurso;
enfermagem.alterarNomeCurso = "Computação";
enfermagem.alterarAreaCurso = "Exatas";
enfermagem.verNomeCurso;
enfermagem.verAreaCurso;

//HERANÇA (Inheritance)
class Automovel {
    constructor(quantidadeAssentos, quantidadeRodas) {
        this.quantidadeAssentos = quantidadeAssentos;
        this.quantidadeRodas = quantidadeRodas;
    }

    get exibirQuantidadeAssentos() {
        console.log(this.quantidadeAssentos);
    }

    set alterarQuantidadeAssentos(novaQuantidade) {
        this.quantidadeAssentos = novaQuantidade;
    }

    get exibirQuantidadeRodas() {
        console.log(this.quantidadeRodas);
    }

    set alterarQuantidadeRodas(novaQuantidade) {
        this.quantidadeRodas = novaQuantidade;
    }
}


class Moto extends Automovel {
    constructor(quantidadeAssentos, quantidadeRodas, corGuidao) {
        super(quantidadeAssentos, quantidadeRodas);
        this.corGuidao = corGuidao;
    }

    get exibirCorGuidao() {
        console.log(this.corGuidao);
    }

    set alterarCorGuidao(novaCor) {
        this.corGuidao = novaCor;
    }
}

let motoCross = new Moto(2, 2, "Amarelo");
console.log(motoCross);

class Caminhao extends Automovel {
    constructor(quantidadeAssentos, quantidadeRodas, quantidadeCarroceria) {
        super(quantidadeAssentos, quantidadeRodas);
        this.quantidadeCarroceria = quantidadeCarroceria;
    }

    get verQuantidadeCarroceria() {
        console.log(this.quantidadeCarroceria);
    }

    set alterarQuantidadeCarroceria(novaQuantidade) {
        this.quantidadeCarroceria = novaQuantidade;
    }
}

let caminhaoPequeno = new Caminhao(2, 12, 1);
console.log(caminhaoPequeno);