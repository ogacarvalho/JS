/* Estrutura de Dados (Map); 

*/

const pessoas = [
  {id: 3, nome: 'Gabriel'},
  {id: 2, nome: 'Felipe'},
  {id: 1, nome: 'Isabella'}
];

let novasPessoas = {};

//Solução 1 (Com detalhes)
// // Pessoa recebe iteração de pessoas.
// for (let pessoa of pessoas){ //... A cada objeto(pessoa) de pessoas.
//   let { id } = pessoa;       // O objeto vázio receberá ID de pessoa (objeto).
//   novasPessoas[id] = { ...pessoa }; //Novas pessoas[ID] receberá, os dados completos de { ...pessoa}.
// }

novasPessoas = new Map();


console.log(novasPessoas);

