/* Filter - Filtrando Arrays 
   O filter é uma ferramenta extremamente poderosa, que itera (for) o array e verifica cada elemento retornando-o através de um sistema booleano de acordo com a condicional imposta pelo usuário.

   0. O filter sempre retorna um novo array.
   1. callback (valor, índice, [array]) -> Possui três parâmetros padronizados.
*/

//Exemplo 1;
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let filtro;

// Números maiores que 10...
callback = valor => valor > 10;

filtro = numbers.filter(callback);                             // Passe apenas como referência, ao invés de executa-la.
filtro = numbers.filter(valor => valor > 10);                  // Ou passar diretamente como f. anônima.


//Exemplo 2;
const pessoas = [
    { nome: 'Gabriel', idade: 25 },
    { nome: 'Maria', idade: 23},
    { nome: 'João', idade: 51},
    { nome: 'Pedro', idade: 33},
    { nome: 'Josef', idade: 26},    
];

// Nomes maiores de 5 letras; 
filtro = pessoas.filter(objeto => objeto.nome.length >= 5);

// Nomes com final A;
filtro = pessoas.filter(objeto => objeto.nome.toLowerCase().startsWith('j')); //Checa se o objeto iterado, começa com a letra 'j';