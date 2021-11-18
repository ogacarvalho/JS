/* Switch Case
Quando uma mesma variável for posta sob teste diversas vezes, recomendamos o uso do Switch como uma alternativa 'menos verbosa' ao if.

A maneira abaixo, é a forma correta de uso, onde devemos sempre colocar dentro de funções, o que protege, facilita a manutenção e também torna reutilizável.
*/

const dados = new Date();
const diaDaSemana = dados.getDay();

const semana = (diaDaSemana) => {
    let texto;
    switch (diaDaSemana){
        case 0:
            texto = 'Domingo';
            return texto;
        case 1:
            texto = 'Segunda';
            return texto;
        case 2:
            texto = 'Terça';
            return texto;
        case 3:
            texto = 'Quarta';
            return texto;
        case 4:
            texto = 'Quinta';
            return texto;
        case 5:
            texto = 'Sexta';
            return texto;
        default:
            texto = 'Sábado';
            return texto;
    }
};

console.log(semana(diaDaSemana));


/* Forma Complexa: IF

 if(diaDaSemana === 1){
     diaDaSemanaTxt = 'Segunda';
 }else if(diaDaSemana === 2){
     diaDaSemanaTxt = 'Terça';
 }else if(diaDaSemana === 3){
     diaDaSemanaTxt = 'Quarta';
 }else if(diaDaSemana === 4){
     diaDaSemanaTxt = 'Quinta';
 }else if(diaDaSemana === 5){
     diaDaSemanaTxt = 'Sexta';
 }else if(diaDaSemana === 6){
     diaDaSemanaTxt = 'Sábado'
 }else{diaDaSemanaTxt = 'Domingo'};
 
 */

 // Forma Simples: Switch Case
// switch (diaDaSemana){
//     case 0:
//         diaDaSemanaTxt = 'Domingo';
//         break;
//     case 1:
//         diaDaSemanaTxt = 'Segunda';
//         break;
//     case 2:
//         diaDaSemanaTxt = 'Terça';
//         break;
//     case 3:
//         diaDaSemanaTxt = 'Quarta';
//         break;
//     case 4:
//         diaDaSemanaTxt = 'Quinta';
//         break;
//     case 5:
//         diaDaSemanaTxt = 'Sextou!';
//         break;
//     default:
//         diaDaSemanaTxt = 'Sábado';
//         break;
// }

// console.log(diaDaSemanaTxt);