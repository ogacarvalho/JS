/* Protótipos
1. A ação de criar novos objetos provenientes de funções construtoras ou moldes, é chamada de "instanciação", todo novo objeto (produto) é uma instância.

O JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo utilizado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade 'prototype' da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar procurar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo "null" e encontrar ( ou não ) tal membro.

Se um método estiver dentro do molde, toda instância vai carregar o método... (Bad Performance), para isso jogamos o método na cadeia de protótipos.

*/

// Função construtora -> molde e para outras linguagens > "classe"
function Pessoas (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

Pessoas.prototype.nomeCompleto = function(){    // Criando protótipos para seus moldes
    return `${this.nome} ${this.sobrenome}`;    // Agora todas as intâncias deste molde terão acesso ao protótipo criado
};


//Instâncias da função construtora 'Pessoas'
const pessoa1 = new Pessoas('Gabriel', 'Felipe');
console.dir(pessoa1.nomeCompleto());