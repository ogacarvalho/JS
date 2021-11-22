
/* Função-construtora - É feita para criação de objetos.
Essa função, diferente das outras é completamente desenvolvida, para construção de objetos.
A palavra new, é um atributo especial e possui características:
1. Com ela não precisamos utilizar o return, ela automaticamente retorna o objeto.
2. Ela cria o link que associa o this à variável portadora do objeto. (" let pessoa1 = new ")
3. Não precisa usar vírgulas, sintaxe normal do JS.

Para funciona, a função-construtora possui algumas regras:
1. Por convenção toda função construtora, inicia-se com letra ( Maiúscula ).
2. Para usa-la é necessário o uso da palavra ( new )
*/

function Pessoa(nome,sobrenome){
    //Atributos Privados
    const ID = '456260598-73';                          //Atributo privado, ele existe mas jamais será mostrado.
    const internMethod = () => ID;                      //Método Privado, apenas para uso interno.

    //Atributos Públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => `${this.nome} sou um método`;
}

const pessoa = new Pessoa('Gabriel', 'Carvalho');
console.log(pessoa.ID);

