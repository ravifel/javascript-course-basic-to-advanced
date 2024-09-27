//01
let validarLetrasMaiusculas = /[A-Z]/;
console.log(validarLetrasMaiusculas.test('C'));
console.log(validarLetrasMaiusculas.test('2A'));
console.log(validarLetrasMaiusculas.test('y'));
console.log(validarLetrasMaiusculas.test('123'));
console.log(validarLetrasMaiusculas.test('a1'));


//02
let validarStringTerminadaComID = /\d+ID\b/;
console.log(validarStringTerminadaComID.test('123433244ID'));
console.log(validarStringTerminadaComID.test('123433244'));
console.log(validarStringTerminadaComID.test('ABC'));
console.log(validarStringTerminadaComID.test('CasaID'));
console.log(validarStringTerminadaComID.test('ID'));
console.log(validarStringTerminadaComID.test('IDcASA'));

//03
let validarNomeMarca = /Marca: Nike|Adidas|Puma|Asics/;
console.log(validarNomeMarca.test('Marca: Nike'));
console.log(validarNomeMarca.test('Marca: Adidas'));
console.log(validarNomeMarca.test('Marca: Puma'));
console.log(validarNomeMarca.test('Marca: Asics'));
console.log(validarNomeMarca.test('Marca: Teste'));
console.log(validarNomeMarca.test('Teste: Nike'));

//04
let validarEnderecoIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
console.log(validarEnderecoIp.test('127.0.0.1'));
console.log(validarEnderecoIp.test('8.8.8.8'));
console.log(validarEnderecoIp.test('192.168.0.62'));

console.log(validarEnderecoIp.test('127.0.0'));
console.log(validarEnderecoIp.test('8'));
console.log(validarEnderecoIp.test('aaaaaaddd'));
console.log(validarEnderecoIp.test('323233544656'));
console.log(validarEnderecoIp.test('1111118.822222.833333.8444'));

//05
console.log(5);
let validarNomeUsuarios = /^(?=.{3,16}$)[a-z0-9-_]/;
console.log(validarNomeUsuarios.test("ravi"));
console.log(validarNomeUsuarios.test('ravi_felipe-ferr'));
console.log(validarNomeUsuarios.test('1234567891011121314151617'));