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
console.log(typeof nomeRavi.toUpperCase);
console.log(nomeRavi.toUpperCase());
console.log(nomeRavi.toLowerCase());