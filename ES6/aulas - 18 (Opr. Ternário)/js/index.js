/* Operadores Ternários
São comumente utilizados para substituir códigos ' if ' simples onde existem apenas condicionais de sim ou não.

EXEMPLO

if (user > 100){
    user = 'Vip';
}else{
    user = 'Regular';
}
-------------------------
const userLevel = user > 100 ? 'Vip' : 'Regular' ;
*/

//Operação Ternária
const user = 90;
const userLevel = user >= 100 ? 'Vip' : 'Regular' ;
//log: userLevel: 'Regular'

//Operação Curto-Circuito (Também muito útil).
const corUsuario = null;
const defaultColor = corUsuario || 'Preto';
//log: defaultColor: 'Preto';

