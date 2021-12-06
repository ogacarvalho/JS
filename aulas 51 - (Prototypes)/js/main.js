
/* Protótipos
1. A ação de criar novos objetos provenientes de funções construtoras ou moldes, é chamada de "instanciação", todo novo objeto (produto) é uma instância.

O JavaScript é baseado em protótipos que passam propriedades e métodos de um objeto para outro. Portanto, quando sua instância, adquiri acesso à um prototype de terceiros, logo ela recebe acesso aos métodos e atributos deste terceiro.

Resumo
O prototype é um mecanismo de transferência de métodos e atributos através de "heranças". Toda função construtora, recebe um objeto "prototype" que pode e deve ser preenchida com métodos próprios que serão acessados pelas futuras instâncias desta função, porém este construtor de objeto, também pode ter acesso à heranças anteriores, formando assim uma "cadeia de protótipos" que chegarão até o pai de todos o "Objeto". E todas as instâncias desta função construtora, terão acesso ao métodos até o pai de todos

É importante saber que no JS é possível compartilhar herança, portanto novas instâncias, podem compartilhar métodos de funções contrutoras (pais) diferentes.
*/


function Pessoas (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

//Adicionando funções ao prototype de Pessoas e agora todas suas instâncias terão acesso à este método.
Pessoas.prototype.nomeCompleto = function(){    
    return `${this.nome} ${this.sobrenome}`;
};

const pessoa1 = new Pessoas('Gabriel', 'Felipe');

function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function (desconto){
    const sistema = this.preco - this.preco / 100 * desconto
    return `Valor atual do produto ${this.nome}: R$ ${sistema.toFixed(2)}! 
    Você acaba de receber ${desconto}% de desconto!`
};

Produto.prototype.aumento = function (aumento){
    const sistema = this.preco + this.preco / 100 * aumento
    return `Valor atual do produto ${this.nome}: R$ ${sistema.toFixed(2)}! 
    Você acaba aumentar o valor em ${aumento}%!`
};

const produto1 = new Produto('Banana', 50);

const produto2 = { nome: 'Caneca', preco: 15 };
Object.setPrototypeOf(produto2, Produto.prototype); //Adicionando herança à um objeto literal.

//Modo Hardcore 
const produto3 = Object.create(Produto.prototype, { //-> Object.create( Pai.prototype, {dados} )
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Chocolate'        
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 150
    }
});



console.log(produto3.aumento(50)); 