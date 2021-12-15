
/* Estrutura de Dados com new Map();
   Este tipo de estrutura de objetos, quando iterada respeita a estrutura inicial, não setando para valores ASC ou DESC by default.
   1. Com for of iteramos um array de objetos.
   2. Atribuição por desestruturação, re-ordenamos a estrutura de objetos.
   3. Para configuramos os valores com Map usamos o SET(chave, { valor }).
   4. Para obter o valor do map utilizamos o get. novovalor.get(1,2,3...);
Se iterarmos o mapa, ele retorna um array de objetos. [{...}, {...} ...];
Métodos Especiais
//objeto.keys()   Mostra apenas as chaves.
//objeto.values() Mostra apenas os valores.
//objeto.delete() Deleta o índice desejado. 
*/

const pessoas = [
  {id: 3, nome: 'Gabriel'},
  {id: 2, nome: 'Felipe'},
  {id: 1, nome: 'Isabella'}
];

let novasPessoas = {};

novasPessoas = new Map(); 
//Atribuição por desestruturação. (Atribuímos às chaves o valor nome que será retirado através da "desestruturação" de pessoas a cada laço.)
for (let iterando of pessoas){
  let { id } = iterando; //Separando o { id } a cada laço.
  novasPessoas.set(id, { ...iterando });  //Agora novas pessoas, a cada laço recebe o ID + { ...spread }
}

//Destructuring de objetos específicos de novas pessoas. (Retornará um array, com estes dados.)
for(let [identifier, {id, nome}] of novasPessoas){
  // console.log(nome);
}