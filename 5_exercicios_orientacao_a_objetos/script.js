//01
class ContaBanco {
    constructor(saldo) {
        this.saldo = saldo;
    }

    get exibirSaldo() {
        console.log(`Saldo: ${this.saldo}`)
    }

    set alteraSaldo(novoSaldo) {
        this.saldo = novoSaldo;
    }

    deposito = function (valorDeposito) {
        this.saldo = this.saldo + valorDeposito;
    }

    saque = function (valorSaque) {
        this.saldo = this.saldo - valorSaque;
    }
}
let contaRavi01 = new ContaBanco(100);
contaRavi01.exibirSaldo;
contaRavi01.deposito(50);
contaRavi01.exibirSaldo;
contaRavi01.saque(10);
contaRavi01.exibirSaldo;

//02
class CarrinhoCompras {
    constructor(itens, quantidadeTotal, valorTotal) {
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;
    }

    addItem(item) {

        let contador = 0;

        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].quantidade += item.quantidade;
                contador = 1;
            }
        }
        if (contador == 0) {
            this.itens.push(item); //Adicionando um novo objeto no array de itens
        }
        this.quantidadeTotal += item.quantidade; //Aumentando a quantidade total após a adição
        this.valorTotal += item.precoUnitario * item.quantidade; //Atualizando o valorTotal
    }

    removeItem(item) {

        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {

                let objetoParaRemover = this.itens[itemCarrinho];
                let index = this.itens.findIndex(
                    function (objetoParaRemover) {
                        return objetoParaRemover.id == item.id
                    }
                );
                this.quantidadeTotal -= this.itens[itemCarrinho].quantidade; //Diminuindo a quantidade total após a remoção
                this.valorTotal -= this.itens[itemCarrinho].precoUnitario * this.itens[itemCarrinho].quantidade; //Atualizando o valorTotal

                this.itens.splice(index, 1); //Removendo o item do array
            }
        }
    }
}

let carrinho01 = new CarrinhoCompras([
    {
        id: 1,
        nome: "Camisa",
        quantidade: 1,
        precoUnitario: 20

    },
    {
        id: 2,
        nome: "Calça",
        quantidade: 2,
        precoUnitario: 50
    }
], 3, 120);

console.log(carrinho01);
carrinho01.addItem({ id: 1, nome: "Camisa", quantidade: 2, precoUnitario: 20 });
console.log(carrinho01);
carrinho01.addItem({ id: 3, nome: "Bone", quantidade: 1, precoUnitario: 15 });
console.log(carrinho01);

carrinho01.removeItem({ id: 1, nome: "Camisa", quantidade: 1, precoUnitario: 20 });
console.log(carrinho01);

//03
class EnderecoCliente {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    get exibirRua() {
        console.log(this.rua);
    }

    get exibirBairro() {
        console.log(this.bairro);
    }

    get exibirCidade() {
        console.log(this.cidade);
    }

    get exibirEstado() {
        console.log(this.estado);
    }

    set alterarRua(novaRua) {
        this.rua = novaRua;
    }

    set alterarBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set alterarCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set alterarEstado(novoEstado) {
        this.estado = novoEstado;
    }

}
let enderecoRavi = new EnderecoCliente("Rua 01", "Dionísio Torres", "Fortaleza", "Ceará");
console.log(enderecoRavi);
enderecoRavi.exibirRua;
enderecoRavi.exibirBairro;
enderecoRavi.exibirCidade;
enderecoRavi.exibirEstado;

enderecoRavi.alterarRua = "Rua São João";
enderecoRavi.alterarBairro = "Montese";
enderecoRavi.alterarCidade = "Caucaia";
enderecoRavi.alterarEstado = "Alagoas";

enderecoRavi.exibirRua;
enderecoRavi.exibirBairro;
enderecoRavi.exibirCidade;
enderecoRavi.exibirEstado;

//04
class Carro {
    constructor(marca, cor, gasolinaRestante, consumoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumoPorKm = consumoPorKm;
    }

    //PRECISA CORRIGIR OS METODOS, TEM ALGO ERRADO
    dirigirCarros(kmRodados) {
        let reducaoGasolina = kmRodados / this.consumoPorKm;
        this.gasolinaRestante = this.gasolinaRestante - reducaoGasolina;
        console.log(`A gasolina restante agora é ${this.gasolinaRestante}. Após dirigir.`);
    }

    aumetarGasolina(quantidadeParaAumentar) {
        this.gasolinaRestante = this.gasolinaRestante + quantidadeParaAumentar;
        console.log(`A nova quantidade de gasolina é ${this.gasolinaRestante} após o aumento da gasolina.`)
    }
}

let carroRavi = new Carro('Toyota', 'Prata', 100, 10);
console.log(carroRavi);
console.log(carroRavi.gasolinaRestante);
carroRavi.dirigirCarros(1);
console.log(carroRavi.gasolinaRestante);
carroRavi.aumetarGasolina(15);
console.log(carroRavi.gasolinaRestante);

//05
class contaBancaria {
    constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca) {
        this.saldoContaCorrente = saldoContaCorrente;
        this.saldoContaPoupanca = saldoContaPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }

    depositoContaCorrente(valorDoDeposito) {
        this.saldoContaCorrente = this.saldoContaCorrente + valorDoDeposito;
        return this.saldoContaCorrente;
    }

    saqueContaCorrente(valorDoSaque) {
        if (this.saldoContaCorrente > 0 && valorDoSaque <= this.saldoContaCorrente) {
            this.saldoContaCorrente = this.saldoContaCorrente - valorDoSaque;
            return this.saldoContaCorrente;

        } else if (this.saldoContaCorrente <= 0) {
            console.log(`Para fazer um saque você precisa ter um saldo superior a zero. Saldo Atual: ${this.saldoContaCorrente}`)

        } else if (valorDoSaque > this.saldoContaCorrente) {
            console.log(`Não é permitido realizar um saque maior do que o valor disponivel na sua conta. Você poderá realizar um saque de acordo com o seu saldo. Saldo Atual: ${this.saldoContaCorrente}`)
        }
    }

    depositoContaPoupanca(valorDoDeposito) {
        this.saldoContaPoupanca = this.saldoContaPoupanca + valorDoDeposito;
        return this.saldoContaPoupanca
    }

    saqueContaPoupanca(valorDoSaque) {
        if (this.saldoContaPoupanca > 0 && valorDoSaque <= this.saldoContaPoupanca) {
            this.saldoContaPoupanca = this.saldoContaPoupanca - valorDoSaque;
            return this.saldoContaPoupanca

        } else if (this.saldoContaPoupanca <= 0) {
            console.log(`Para fazer um saque você precisa ter um saldo superior a zero. Saldo Atual: ${this.saldoContaPoupanca}`)
        } else if (valorDoSaque > this.saldoContaPoupanca) {
            console.log(`Não é permitido realizar um saque maior do que o valor disponivel na sua conta. Você poderá realizar um saque de acordo com o seu saldo. Saldo Atual: ${this.saldoContaPoupanca}`)
        }
    }

    transferenciaCorrenteParaPoupanca(valorTransferencia) {
        if (valorTransferencia <= this.saldoContaCorrente && valorTransferencia > 0) {
            this.saldoContaPoupanca = this.saldoContaPoupanca + valorTransferencia;
            this.saldoContaCorrente = this.saldoContaCorrente - valorTransferencia;
            return console.log(`Saldo Conta Poupança:${this.saldoContaPoupanca} - Saldo Conta Corrente: ${this.saldoContaCorrente}`);
        } else if (valorTransferencia > this.saldoContaCorrente) {
            console.log(`Esse valor não está disponivel para ser transferido da sua conta corrente. O seu saldo na conta corrente é R${this.saldoContaCorrente}`);
        } else if (valorTransferencia < 0) {
            console.log('Não é possivel realizar transferencias de valores negativos. Tente novamente')
        }
    }

    transferenciaPoupancaParaCorrente(valorTransferencia) {
        if (valorTransferencia <= this.saldoContaPoupanca && valorTransferencia > 0) {
            this.saldoContaCorrente = this.saldoContaCorrente + valorTransferencia;
            this.saldoContaPoupanca = this.saldoContaPoupanca - valorTransferencia;
            return console.log(`Saldo Conta Poupança:${this.saldoContaPoupanca} - Saldo Conta Corrente: ${this.saldoContaCorrente}`);
        } else if (valorTransferencia > this.saldoContaPoupanca) {
            console.log(`Esse valor não está disponivel para ser transferido da sua conta poupança. O seu saldo na conta poupança é R${this.saldoContaPoupanca}`);
        } else if (valorTransferencia < 0) {
            console.log('Não é possivel realizar transferencias de valores negativos. Tente novamente')
        }
    }

    jurosAniversario() {
        let juros = (this.saldoContaPoupanca * this.jurosAniversario) / 100;
        this.saldoContaPoupanca = this.saldoContaPoupanca + juros;
    }

}

class contaEspecial extends contaBancaria {
    constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca) {
        super(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca * 2)
    }
}


let contaRavi02 = new contaBancaria(8000, 20000, 1);
//Corente
console.log(contaRavi02);
contaRavi02.jurosAniversario;
console.log(contaRavi02);

console.log(contaRavi02.saldoContaCorrente)
contaRavi02.depositoContaCorrente(20);
console.log(contaRavi02.saldoContaCorrente);
contaRavi02.saqueContaCorrente(30);
console.log(contaRavi02.saldoContaCorrente);

//Poupanca
console.log(contaRavi02.saldoContaPoupanca)
contaRavi02.depositoContaPoupanca(100);
console.log(contaRavi02.saldoContaPoupanca);
contaRavi02.saqueContaPoupanca(200);
console.log(contaRavi02.saldoContaPoupanca);

//Transferencias
console.log(contaRavi02.saldoContaCorrente)
console.log(contaRavi02.saldoContaPoupanca)
contaRavi02.transferenciaCorrenteParaPoupanca(20);
contaRavi02.transferenciaPoupancaParaCorrente(10);
console.log(contaRavi02.saldoContaCorrente)
console.log(contaRavi02.saldoContaPoupanca)

let contaRavi03 = new contaEspecial(80, 700, 1);
console.log(contaRavi03);
contaRavi03.depositoContaPoupanca(12);

//06
class retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        let area = this.largura * this.altura;
        return area;
    }

    calcularPerimetro() {
        let perimetro = 2 * (this.largura + this.altura);
        return perimetro;
    }
}

let retangulo01 = new retangulo(10, 6);
console.log(retangulo01);
console.log(retangulo01.calcularArea());
console.log(retangulo01.calcularPerimetro());

//07
class voo {
    constructor(codigoVoo, origem, destino, assentosDisponiveis) {
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    }

    reservarAssento() {
        this.assentosDisponiveis = this.assentosDisponiveis - 1;
        console.log(`O seu assendo foi reservado. Agora a quantidade de assentos disponiveis é ${this.assentosDisponiveis}`);
    }

    consultarAssentosDisponiveis() {
        console.log(`A quantidade de assentos disponiveis é ${this.assentosDisponiveis}`)
    }
}

let voo0223 = new voo('0223', 'Fortaleza', 'Lisboa', 6);
voo0223.consultarAssentosDisponiveis();
voo0223.reservarAssento();
voo0223.consultarAssentosDisponiveis();

//08
class livro {
    constructor(titulo, autor, disponivel) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }

    emprestar() {
        this.disponivel = false;
    }

    devolver() {
        this.disponivel = true;
    }

    consultarDisponibilidade() {
        console.log(`${(this.disponivel ? "DISPONIVEL" : "NÃO DISPONIVEL")}`);
    }
}
let livro1 = new livro('A Casa Verde', 'Joao Moura', true);
livro1.consultarDisponibilidade();
livro1.emprestar();
livro1.consultarDisponibilidade();
livro1.devolver();
livro1.consultarDisponibilidade();
