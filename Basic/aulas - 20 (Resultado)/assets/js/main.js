
//Modo Elegante
// const data = new Date();

// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };

// const result = document.querySelector('#texto').innerHTML = data.toLocaleString("pt-BR", opcoes);
// console.log(result);

//Modo Simples

(function onload(){

    const data = new Date();
    const weekday = data.getDay();
    const month = data.getMonth();
    const minutesData = data.getMinutes();
    const minutes = minutesData < 10 ? `0${minutesData}` : minutesData;
   
    const semana = (numero) => {
        const semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        return semana[numero];
    };

    const meses = (numero) => {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return meses[numero];
    };
    
    const text = `<strong>Hoje é ${semana(weekday)} dia ${data.getDate()} de ${meses(month)} de ${data.getFullYear()} às ${data.getHours()}:${minutes}</strong>`;
    
    const result = document.querySelector('#texto').innerHTML = text;
    
    })();
    









