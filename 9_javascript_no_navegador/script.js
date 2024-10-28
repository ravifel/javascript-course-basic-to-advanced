console.log(document);
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1].textContent);

const element = document.getElementById('elementoId');
if (element !== null) {
    console.log(element.childNodes);
} else {
    console.log('O elemento não foi encontrado');
}


//Encontrando elementos: por tag
console.log(document.getElementsByTagName('h1'));

//Encontrando elementos: por id
console.log(document.getElementById('titulo-principal'));

//Encontrando elementos: por classes
console.log(document.getElementsByClassName('itens-1'));

//Encontrando elementos: por query
console.log(document.querySelector('#container-principal h1'));
console.log(document.querySelector('div div p'));
console.log(document.querySelector('footer h2'));


//Alterando a DOM com o 'insertBefore'

let novoElemento = document.createElement("p"); //O novo elemento que será adicionado (um paragráfo)
let texto = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem atque, rem nobis eligendi distinctio impedit cumque');
novoElemento.appendChild(texto); //Adicionando um texto dentro do paragrafo
let elementoAlvo = document.querySelector("#titulo-principal"); //Elemento alvo
let elementoPai = document.querySelector("#container-principal"); //Elemento pai
elementoPai.insertBefore(novoElemento, elementoAlvo); //Adicionando um novo parágrafo na DOM

//Alterando a DOM com o appendChild
let p = document.querySelector("#paragrafo-principal");
let pai = p.parentNode;
pai.appendChild(novoElemento);

//Alterando a DOM com replaceChild
// let heading = document.querySelector("#titulo-principal");
// let paiHeading = heading.parentNode;
// paiHeading.replaceChild(novoElemento, heading);

//Criando nós de texto
let pSemTexto = document.getElementById("sem-texto");
let texto2 = document.createTextNode("Inserir esse texto");
pSemTexto.appendChild(texto2);

//Criando elementos
let lista = document.createElement('ul');

for (i = 0; i < 5; i++) {
    let item = document.createElement('li');
    let texto3 = document.createTextNode("Texto Lista " + i);
    item.appendChild(texto3);
    lista.appendChild(item);
}

let container = document.getElementById("container-principal");
container.appendChild(lista);

//Modificando e lendo atributos
let a = document.querySelector("footer a");
console.log(a.getAttribute('href'))

let link = 'https://github.com/ravifel';
a.setAttribute('href', link);
console.log(a.getAttribute('href'));

//Verificando altura e largura dop elemento
let elemento = document.querySelector('#titulo-principal');
console.log('Width: ' + elemento.offsetWidth); //Considera as bordas
console.log('Height: ' + elemento.offsetHeight);
console.log('Width: ' + elemento.clientWidth); //Não considera as bordas
console.log('Height: ' + elemento.clientHeight);

//Posição do elemento na tela
console.log(elemento.getBoundingClientRect());

//Estilizando com JS
setTimeout(function () {
    elemento.style.color = 'red';
    elemento.style.backgroundColor = 'grey';
    elemento.style.width = '400px';
}, 2000)
console.log(elemento.style.color);

//Selecionar vários elementos com query
let itens = document.querySelectorAll('.itens-1');
console.log(itens);
itens[0].style.color = 'red';