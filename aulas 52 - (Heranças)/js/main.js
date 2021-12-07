/* Heranças
Através das heranças é possível especializar as funções construtoras, ou seja de um produto genérico á um produto específico que herda toda sua trajetória, possibilitando cadeias de produtos menos ou mais específicos, de modo performático.

1. Cria função construtora primária e seus métodos;
2. Criamos a primeira especialização da função primária (Camiseta);
3. Camiseta recebe link para usar as propriedades de Produtos.
4. Camiseta recebe herança de métodos de Produtos => Camiseta.prototype = Object.create(...)
5. Ao herdar os métodos, a origem construtora vai para Produtos, para mudar isso: Camiseta.prototype.constructor = Camiseta;

*/

function Produto(nome, preco) {
    this.nome = nome;            //chave nome da instância, recebe o parâmetro nome.
    this.preco = preco;          //chave preco da instância, recebe o parâmetro preço.
}

Produto.prototype.desconto = function (valor){
    let sistema = this.preco - this.preco / 100 * valor;
    if(Math.sign(valor) === 1){
        return `Desconto de ${valor}% aplicado. O valor atual do produto é: R$${sistema.toFixed(2)}`
    }else{
        return `Aumento de ${Math.abs(valor)}% aplicado. O valor atual do produto é: R$${sistema.toFixed(2)}`
    }
};

function Camiseta(nome, preco, cor, estoque){//  <-- Nova Func. Const. recebe herança da Func Const. Original, e as personalizará.
    Produto.call(this, nome, preco);//  <-- Link para Camiseta usar as propriedades de Produto.
    this.cor = cor;//  <-- Nova propriedade exclusiva de Camiseta.
    Object.defineProperty(this, 'estoque', { 
        enumerable: true,
        configurable: false,
        get: () => estoque, // O GET é o input da chave "estoque", porém só é ativado, quando usado.
        set: (input) => {   // O SET recebe o input do GET e apenas configura sua SAÍDA (após ativado).
            if(typeof input !== 'number') return;
            estoque = input;
            return estoque;
        }
    })
}

Camiseta.prototype = Object.create(Produto.prototype); //Camiseta recebe herança de métodos de Produtos (Origem const. passa a ser Produtos)
//Importante: Aqui não usamos o "Object.SetPrototypeOf" pois por sua natureza de funcionamento, que é "alterar" ao invés de "atribuir" gera muita lentidão, e problemas de performance. Por essa razão, apenas "atribuímos" ao invés de alterarmos.

Camiseta.prototype.constructor = Camiseta; //Reverter origem construtora para Camiseta (Serve para identificar o real "atuante")

//Personalizando os métodos prototypes herdados. (Exclusivos à Func. Constr. Camiseta)
Camiseta.prototype.desconto = function(valor) {
    return `${valor}%? Seria um excelente desconto, se eu quisesse dar. `
};

let tshirt = new Camiseta('John', 83, 'roxo', 10);