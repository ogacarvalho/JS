
// Factory Functions + Prototypes. (Fica ao seu critério usar tanto Constructor quanto Factory.)


//Métodos desacoplados.
const falar = {  falar() {console.log(`${this.nome} está falando.`)}  };
const comer = {  comer() {console.log(`${this.nome} está comendo!`)}  };

const prototipo = {...falar, ...comer}; //Link entre Factory Function e Métodos. (Mixin / Composição)

const prototipoAlternativo = Object.assign( {}, falar, comer );  //Modo alternativo.

//Factory Function
function criaPessoa(nome, sobrenome){
  return Object.create(prototipo, {         //Cria-se o objeto, e realiza o Mixin (Composição) adicionando os métodos desacoplados, e depois 
    nome: {value: nome},                    //...cria-se os atributos e suas propriedades.
    sobrenome: {value: sobrenome}
  }); 
}

//Constructor
function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.falar = function falar(){
  console.log(`${this.nome} está falando.`)
};

Pessoa.prototype.comer = function comer(){
  console.log(`${this.nome} está bebendo.`)
};

const pessoa = criaPessoa('Gabriel', 'Felipe');
const gabriel = new Pessoa('Gabriel', 'Felipe');

