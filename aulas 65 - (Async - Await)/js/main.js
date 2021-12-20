
/* Ordenando Promises com Async e Await.
    • Função Principal retorna um new Promises((1 | 2) => {...}) possui duas possibilidades, resolve(..) ou reject (...).
    • Async permite que as funções sejam ordenadas via await.
    • Try irá garantir a captura de algum erro.
    • Fases recebe o return das funções.

    log: -> resolve(msg) || reject(error)
*/

const rand = (n = 5) => { 
  let random = Math.floor(Math.random() * n) * 1000; 
  return random; 
};
const txt = (txt) => {
  let time = rand();
  return time > 1 ? txt:4;
} 
function sys(msg, tempo) {                                     

  return new Promise((resolve, reject) => {
                                                                
    setTimeout( () => {

      if(typeof msg !== 'string') {
        reject(new Error(`Error: ${msg}`))
        return;
      };

      resolve(msg);
    }, tempo );

  })
};

(async () => {

  try {
    let fases;                                                              
    fases = await sys(txt('Validating...'), rand()); console.log(fases);

    fases = await sys(txt('Updating database...'), rand()); console.log(fases);
    
    fases = await sys(txt('Done!'), rand()); console.log(fases);

  } catch(e) { console.log(e); }; 

})();


