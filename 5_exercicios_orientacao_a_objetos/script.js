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