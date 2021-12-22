
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Felipe',
    idade: '25',
    endereco: {
        cidade: 'Ilhabela',
        estado: 'São Paulo'
    }
};

const teste = pessoa.nome;                                      // atribuição comum
const { nome = '', sobrenome, idade } = pessoa;                 // atribuição via desestruturação e nome = '' (setando valor padrão)
const { endereco: logradouro} = pessoa;                         // É possível especificar o nome da variável do objeto.
const { endereco: { cidade, estado } } = pessoa;                // Estamos acessando objetos dentro do objeto.


console.log(nome, idade, logradouro);                           // log: Gabriel, 25, (endereço)
console.log(cidade);                                            // log: Ilhabela
console.log(pessoa.nome, pessoa.idade, pessoa.endereco)         // log: Gabriel, 25, (endereço)

