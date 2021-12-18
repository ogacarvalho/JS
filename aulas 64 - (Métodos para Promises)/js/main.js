/* Métodos Úteis para Promises
• Promise.all     -> Executa múltiplos promises e retorna seu valor em um array único. (Importante usar com array, para guardar as func.)
• Promise.race    -> Retorna a função que terminar primeiro. 
• Promise.resolve -> É uma espécie de atalho, você simplesmente diz que o promise vai resolver, caso algo aconteça. 
• Promise.reject  -> Faz a mesma coisa que o resolve, porém "promete rejeitar." E quando rejeita, executa o "catch."
*/

const aleatorio = (n) => { 
  let random = Math.floor(Math.random() * n) * 1000; 
  return random; 
};

const booleano = (n) => { 
  let random = Math.round(Math.random() * n); 
  return random; 
};
let random = booleano(1);

// function wait(msg, tempo) {

//   return new Promise((resolve, reject) => {

//     setTimeout( () => {                              //Executa, após tempo aleatório, descobre se é erro ou não.
//       if(typeof msg !== 'string') {
//         reject(new Error('ERROR'))
//         return;
//       };
//       resolve(msg);
//     }, tempo );

//   })
// };


// const promises = [
//   wait('Promise 1', aleatorio(4)),
//   wait('Promise 2', aleatorio(4)),
//   wait('Promise 3', aleatorio(4)),
//   wait('Promise 4', aleatorio(4))
// ];

//Promisse All
// Promise.race(promises).then(valor => console.log(valor)).catch(erro => console.log(erro)); 

function baixaPagina(){
  let emCache = random;

  if(emCache === 1){
    return Promise.resolve('Página em cache');
  }else{
    return Promise.reject('Página baixada')
  }
}
baixaPagina().then(argumento => console.log(argumento)).catch(e => console.log('ERRO'));