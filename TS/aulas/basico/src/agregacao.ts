
// Agregação:
// → Trata-se de uma relação mais forte que a associação, onde a usabilidade fica comprometida quando um item não agrega ao outro.

class Carrinho {
    private readonly produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]):void {
        for (const produto of produtos){
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos():number {
        return this.produtos.length;
    }

    total():number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}


class Produto {
    constructor(public nome: string, public preco: number) {};
}

const produto_1 = new Produto('JBL', 300.9);
const produto_2 = new Produto('Volante Logitech G29', 2000);
const produto_3 = new Produto('Iphone 8 Plus 64GB', 1800.00);
const produto_4 = new Produto('Televisão 50', 1900.00);
const produto_5 = new Produto('Comida', 471.82);
const produto_6 = new Produto('Roupas', 280.00);
const produto_7 = new Produto('PS4', 2500.00);

const carrinho_de_compras = new Carrinho();
carrinho_de_compras.inserirProdutos(produto_1, produto_2, produto_3, produto_4, produto_5, produto_6, produto_7);
console.log(carrinho_de_compras.quantidadeProdutos());
