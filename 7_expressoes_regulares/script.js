//CRIANDO UMA EXPRESSÃO REGULAR
let regex01 = new RegExp("teste");
let regex02 = /teste/;
let regex03 = /Ravi/;

let text1 = "RaviFelipeRaviFelipe";

console.log(regex01.test("ttttesteeeeee"));
console.log(regex02.test("cecvecxrswc"));
console.log(/Ravi/.test("RaviFelipeRavi"));
console.log(regex03.test(text1));

//CONJUNTO DE CARACTERES
console.log(/[123]/.test("Existe 123 aqui?"));
console.log(/[0-9]/.test("O número 8 está presente aqui?"));

// CARACTERES ESPECIAIS
// .
console.log('---> .');
const pontoRegex = /./;
console.log(pontoRegex.test('ABC'));
console.log(pontoRegex.test(123));
console.log(pontoRegex.test('A1B2C3'));
console.log(pontoRegex.test(' '));
console.log(pontoRegex.test('!'));

// \d
console.log('---> \d');
const dRegex = /\d/; // [0-9]
console.log(dRegex.test(123));
console.log(dRegex.test('ABC'));
console.log(dRegex.test('A1B2C3'));
console.log(dRegex.test(' '));
console.log(dRegex.test('!'));

// \D
console.log('---> \D');
const dRegex2 = /\D/; // [^0-9]
console.log(dRegex2.test(123));
console.log(dRegex2.test('ABC'));
console.log(dRegex2.test('A1B2C3'));
console.log(dRegex2.test(' '));
console.log(dRegex2.test('!'));

// \s
console.log('---> \s');
const sRegex = /\s/;
console.log(sRegex.test(123));
console.log(sRegex.test('ABC'));
console.log(sRegex.test('A1B2C3'));
console.log(sRegex.test(' '));
console.log(sRegex.test('!'));

// \S
console.log('---> \S');
const sRegex2 = /\S/;
console.log(sRegex2.test(123));
console.log(sRegex2.test('ABC'));
console.log(sRegex2.test('A1B2C3'));
console.log(sRegex2.test(' '));
console.log(sRegex2.test('!'));

// \w
console.log('---> \w');
const wRegex = /\w/;
console.log(wRegex.test(123));
console.log(wRegex.test('ABC'));
console.log(wRegex.test('A1B2C3'));
console.log(wRegex.test(' '));
console.log(wRegex.test('!'));

// \W
console.log('---> \W');
const wRegex2 = /\W/;
console.log(wRegex2.test(123));
console.log(wRegex2.test('ABC'));
console.log(wRegex2.test('A1B2C3'));
console.log(wRegex2.test(' '));
console.log(wRegex2.test('!'));

//REGEX COM CARACTERES ESPECIAIS
let ano = /\d\d\d\d/;
console.log(ano)
console.log(ano.test('10'));
console.log(ano.test('2024'));
console.log(ano.test('1'));

let palavraTresLetras = /\w\w\w/;
console.log(palavraTresLetras)
console.log(palavraTresLetras.test('dia') && 'dia'.length == 3);
console.log(palavraTresLetras.test('a'));
console.log(palavraTresLetras.test('ai'));
console.log(palavraTresLetras.test('semana') && 'semana'.length == 3);

//OPERADOR NOT ^
let palavrasSemAeB = /[^123]/;
console.log(palavrasSemAeB.test('1112'));
console.log(palavrasSemAeB.test('14'));
console.log(palavraTresLetras.test('1'));

const notAeB = /[^ab]/;
console.log(notAeB.test('a'));
console.log(notAeB.test('Aqui tem a'));

const notAtoZ = /[^a-z]/;
console.log(notAtoZ.test('a'));
console.log(notAtoZ.test('Aqui tem a'));

//OPERADOR PLUS +
let muitosOuPoucosDigitos = /\d+/;
console.log(muitosOuPoucosDigitos.test('123'));
console.log(muitosOuPoucosDigitos.test('123456789'));
console.log(muitosOuPoucosDigitos.test(''));
console.log(muitosOuPoucosDigitos.test('abcdef'));

//OPERADOR ?
let opcional = /Prova\s?\d?/;
console.log(opcional.test('Prova'));
console.log(opcional.test('Prova 1'));
console.log(opcional.test('Prova 2'));

let opcional2 = /Abacax?i/;
console.log(opcional.test('Abacaxi'));
console.log(opcional.test('Abacai'));

//OPERADOR Precisa
let telefone = /\(\d{2}\)\d{4,5}-\d{4}/;
console.log(telefone.test('(85)4004-5050'));
console.log(telefone.test('(85)99999-8080'));
console.log(telefone.test('()999-999'));
console.log(telefone.test('(8)9999-9'));

let cep = /\d{2}-\d{3}-\d{3}/;
console.log(cep.test('60-175-175'));
console.log(cep.test('60898-175-175'));

//MÉTODO EXEC
let teste = /\d+/.exec("O número 100");
console.log(teste);
console.log(teste.index);
console.log(teste.groups);
console.log(teste.input);

//MÉTODO Match
let teste2 = "O número 602".match(/\d+/);
let teste3 = "O número ".match(/\d+/);
console.log(teste2);
console.log(teste2.index);
console.log(teste3);

//MÉTODO CHOICE PATTERN
let palavraTeste = /\d+ (laranjas|bananas|macas)/;
console.log(palavraTeste.test('10 laranjas'));
console.log(palavraTeste.test('25 batatas'));
console.log(palavraTeste.test('8 laranjas'));

let palavraTesteNome1 = /\w+: (Ravi|Ana|Felipe)/;
console.log(palavraTesteNome1.test('Nome: Ravi'));
console.log(palavraTesteNome1.test('Nome: Pedro'));
console.log(palavraTesteNome1.test('Nome: Maria'));

//NA PRÁTICA: Validando um domínio
let validandoDominio = /[?www.]\w+\.com.br|.com/;
console.log(validandoDominio.test('www.teste.com'));
console.log(validandoDominio.test('www.teste.com.br'));
console.log(validandoDominio.test('teste.com.br'));
console.log(validandoDominio.test('www.teste'));

//NA PRÁTICA: Validando um email
let validandoUmEmail = /\w+@\w+\.\w+/;
console.log(validandoUmEmail.test('ravifelipee@gmail.com'));
console.log(validandoUmEmail.test('ravifelipee@gmail.com.br'));
console.log(validandoUmEmail.test('ravifelipee@gmail'));
console.log(validandoUmEmail.test('gmail.com.br'));

//NA PRÁTICA: Validando data de nascimento
let validarDataNascimento = /\d{2}[/]\d{2}[/]\d{4}/;
console.log(validarDataNascimento.test('03/12/2001'));
console.log(validarDataNascimento.test('03-12-2001'));
console.log(validarDataNascimento.test('03/12/15'));
console.log(validarDataNascimento.test('3/1/15'));
console.log(validarDataNascimento.test('2001/12/03'));