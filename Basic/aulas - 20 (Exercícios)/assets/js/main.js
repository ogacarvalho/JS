(function onload(){

const data = new Date();
const weekday = data.getDay();
const monthData = data.getMonth();
const minutesData = data.getMinutes();
const minutes = minutesData < 10 ? `0${minutesData}` : minutesData;

// Função Dia da Semana
const week = (weekday) => {
    let text;
    switch (weekday){
        case 0:
            text = 'Domingo';
            return text;
        case 1:
            text = 'Segunda-Feira';
            return text;
        case 2:
            text = 'Terça-Feira';
            return text;
        case 3:
            text = 'Quarta-Feira';
            return text;
        case 4:
            text = 'Quinta-Feira';
            return text;
        case 5:
            text = 'Sexta-Feira';
            return text;
        default:
            text = 'Sábado';
            return text;
    }
};

// Função Mês
const month = (month) => {
    let text;
    switch (month){
        case 0:
            text = 'Janeiro';
            return text;
        case 1:
            text = 'Fevereiro';
            return text;
        case 2:
            text = 'Março';
            return text;
        case 3:
            text = 'Abril';
            return text;
        case 4:
            text = 'Maio';
            return text;
        case 5:
            text = 'Junho';
            return text;
        case 6:
            text = 'Julho';
            return text;
        case 7:
            text = 'Agosto';
            return text;
        case 8:
            text = 'Setembro';
            return text;
        case 9:
            text = 'Outubro';
            return text;
        case 10:
            text = 'Novembro';
            return text;
        default:
            text = 'Dezembro';
            return text;
    }
}

const text = `<strong>Hoje é ${week(weekday)} dia ${data.getDate()} de ${month(monthData)} de ${data.getFullYear()} às ${data.getHours()}:${minutes}</strong>`;
const result = document.querySelector('#texto').innerHTML = text;

})();

