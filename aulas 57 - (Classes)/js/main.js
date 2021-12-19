(() => {

  /* Classes - Fazem as mesmíssimas coisas que uma função construtora, embora de uma maneira diferente.
O mais legal das classes é que elas automaticamente tornam os métodos prototypes, sem ter que "atrela-los",
... bastando adicioná-los como métodos na função construtora.
*/

class Pessoa {

  constructor(nome, sobrenome){
    this.nome = nome;              //Instância, recebe parâmetro nome.
    this.sobrenome = sobrenome;    //Instância, recebe parâmetro sobrenome.
  }

  metodo() { console.log(`Já sou um prototype!`) };

}

const teste = new Pessoa('Teste', 'da Silva');


})();