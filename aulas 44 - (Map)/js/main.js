
/* Método Map
Essa função extremamente poderosa, possui a mesma base do Filter, porém o filter possui um retorno booleano, enquanto o Map não, o filter irá dizer se há um item com aquela condicional ou não, e irá retornar o item que atende a condicional solicitada pelo programador.

Enquanto o Map irá "Mapear" através da iteração e realizar a aplicação das mudanças solicitadas pelo programador em cada elemento do array.
*/

//Exemplo 1;
// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// let mapa;

// Dobre os valores
// callback = valor => valor * 2;                                    // Função externa, caso pretenda compartilha-la.

// mapa = numbers.map(callback);                                     // Passe apenas como referência, ao invés de executa-la.
// mapa = numbers.map(valor => valor * 2);                           // Ou passar diretamente como f. anônima.


//Exemplo 2;
// const pessoas = [
//     { nome: 'Gabriel', idade: 25 },
//     { nome: 'Maria', idade: 23},
//     { nome: 'João', idade: 51},
//     { nome: 'Pedro', idade: 33},
//     { nome: 'Josef', idade: 26},    
// ];


// // Retorne apenas uma string com o nome da pessoa...
// mapa = pessoas.map(objeto => objeto.nome);


// //Retorne apenas a chave idade.

// //Opção 1
// mapa = pessoas.map( (objeto) => {              //Deletar outras chaves e retornar o objeto.
//     delete objeto.nome;
//     return objeto;
// });


// //Opção 2                           ( {Expressão} )
// mapa = pessoas.map( objeto => ({idade: objeto.idade}) );  //Criar um novo objeto "idade" que recebe o valor idade.



//Adicione uma chave de "id" em cada objeto;

//Modo Não-Seguro - (Alteração Array Raiz)
// pessoas.map((objeto, indice) => { 
//     objeto.id =  indice;                
//     return objeto;
// });

//Modo Seguro
// let map;
// map = pessoas.map((objeto, indice) => {            //Criamos uma variável que receberá uma cópia modificada do array raiz.
//     const novo = {...objeto};                      //Dessa forma evitamos a modificação do array raiz.
//     novo.id = indice;
//     return novo;
// });


// function map(array, callback) {
//     const newArray = [];
   
//     for (let i = 0; i < array.length; i++) {
//       newArray.push(callback(array[i]));
//     }
   
//     return newArray;
//   }
   
//   const array = [1, 2, 3, 4];
//   // Função de callback multiplica itens por 2
//   const newArray = map(array, function (item) {
//     return item * 2;
//   });
   
//   console.log(newArray); // [ 2, 4, 6, 8 ]

//Simulação Map
  const map = (array, callback) => {              //1. Função de dois parâmetros (array, callback)
    const novoArray = [];                         //2. Crie um array vazio.
    for (let i = 0; i < array.length; i++){       //3. Motor do map. (Novo Array Recebe CallBack Aplicado em Cada Elemento do Array.)
        novoArray.push(callback(array[i]));
    }
    return novoArray;                             //4. Após o loop finalizar, retorna o novo array.
  }

  const array = [1, 2, 3, 4];
  const novoArray = map(array, item => item * 2);

  console.log(novoArray);
  
