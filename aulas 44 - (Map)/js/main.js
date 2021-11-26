/* Método Map
Essa função extremamente poderosa, possui a mesma base do Filter, porém o filter possui um retorno booleano, enquanto o Map não, o filter irá dizer se há um item com aquela condicional ou não, e irá retornar o item que atende a condicional solicitada pelo programador.

Enquanto o Map irá "Mapear" através da iteração e realizar a aplicação das mudanças solicitadas pelo programador em cada elemento do array.
*/

//Exemplo 1;
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let mapa;

// Dobre os valores
callback = valor => valor * 2;                                    // Função externa, caso pretenda compartilha-la.

mapa = numbers.map(callback);                                     // Passe apenas como referência, ao invés de executa-la.
mapa = numbers.map(valor => valor * 2);                           // Ou passar diretamente como f. anônima.


//Exemplo 2;
const pessoas = [
    { nome: 'Gabriel', idade: 25 },
    { nome: 'Maria', idade: 23},
    { nome: 'João', idade: 51},
    { nome: 'Pedro', idade: 33},
    { nome: 'Josef', idade: 26},    
];

// Retorne apenas uma string com o nome da pessoa...
mapa = pessoas.map(objeto => objeto.nome);

// Delete a chave nome: do objeto.
mapa = pessoas.map( (objeto) => {         //Opção 1. Deletar o objeto nome.
    delete objeto.nome;
    return objeto;
});

mapa = pessoas.map( (objeto) => {        //Opção 2. Cria um novo objeto {} <- lembrar das chaves...
    return { idade: objeto.idade };      //... com a nova configuração.
});

console.log(mapa);