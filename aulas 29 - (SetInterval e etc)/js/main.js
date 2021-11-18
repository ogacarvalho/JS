
const funcao = () => console.log('teste'); // Função tratada como dados. (Executável)

const timer = setInterval( funcao, 1000 );  // setInterval precisa ser nomeado para que possamos usa-lo como parâmetro.
const stop = () => clearInterval(timer, timer1, timer2);   // Função tratada como dados. (Executável)

setTimeout( stop, 3000 ); // O bloco de execução será acionado em 5s, ativando a função que finaliza intervalos.

