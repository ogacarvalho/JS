
/* O promises é uma função que recebe o argumento/retorno principal e com o "then" decide o que fazer com ele.
Neste caso, uma função só será executada, quando o then quiser.
*/
const aleatorio = (n) => { 
  let random = Math.floor(Math.random() * n) * 1000; 
  return random; 
};

function wait(msg, tempo) {                    // 1. Cria a função desejada, que retornará o seu conteúdo dentro do Promise.
  return new Promise((resolve, reject) => {    // 2. Quando 'wait' for executado, promise irá resolver a seguinte função.
    if(typeof msg !== 'string') reject(new Error('ERROR')); //Caso este erro seja encontrado, o catch executará o reject.

    setTimeout( () => {                        // 3. Após determinado tempo, ao invés de executar ali mesmo, enviaremos essa função a resolve.
      resolve(msg);                            // 4. Resolve é o ".then( .. )", que irá decidir o que fazer após a função por executada.
    }, tempo );  
  })
};

wait('Conecting to database...', aleatorio(5))             // 5. Executamos a função que entrega o argumento 'msg' ao then.
.then(argumento => {                                       // 6. Then após receber o argumento, joga para o log.
  console.log(argumento)             
  return wait('Searching data...', aleatorio(5));          // 7. E executa a função novamente, com um novo argumento.
})
.then(argumento => {                                       // 8. Dai o then novamente faz o que quiser com o retorno.
  console.log(argumento)             
  return wait('Threating data from database...', aleatorio(5));   
})
.then(argumento => {                 
  console.log(argumento)             
  return wait(123, aleatorio(5));                          // 9. Erro proposital.
})
.then(argumento => {
  console.log(argumento)
})
.catch(e => {                                              // 10. O catch captura qualquer erro pré-configurado, e executa o "reject()".
  console.log(e);
})
