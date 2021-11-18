
const getTimeSeconds = (sec) => {   // Formatação (Era Unix)
    const date = new Date(sec * 1000);
    return date.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' } );  // Configurações
};

const timer = document.querySelector('#timer');  // Variáveis
let seconds = 0;
let interval;

const clockStart = () => {   // Clock Engine
    interval = setInterval(() => {
        seconds++;
        timer.innerHTML = getTimeSeconds(seconds);
    }, 1000);
};

const click = document.addEventListener('click', performance = (e) => {
    const element = e.target;

    if ( element.classList.contains('start') ){
        (inicio = (event) => { 
            clearInterval(interval); 
            clockStart() 
            timer.classList.remove('pausado');
        })();
    }
    
    if( element.classList.contains('pause') ){
        (pausa = (event) => {
            timer.classList.add('pausado');
            clearInterval(interval);
        })();
    }
    
    if( element.classList.contains('stop') ){
        (parar = (event) => {
            timer.classList.remove('pausado');
            clearInterval(interval); 
            timer.innerHTML = '00:00:00'; 
            seconds = 0;
        })();
    }
});



