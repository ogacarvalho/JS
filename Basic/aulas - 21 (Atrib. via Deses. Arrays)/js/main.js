
/* Desestruturação Básica por Atribuição

let a = 'A'; 
let b = 'B';
let c = 'C';

[a, b, c] = [b, c, a]; 
log(abc): BCA;

*/

const numeros = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


const a = numeros[0];
const b = numeros[1];
const c = numeros[2];

const [zero, , vinte, , quarenta, cinquenta, ... resto] = numeros;
// os três pontos são conhecidos como rest operator / spread operator.
// Quando se pula casas usando virgula você pula os índices.


//                     0          1          2       Indice
//                  0  1  2    0  1  2    0  1  2    Sub-Indice
const complexo = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];


const [,indice1] = complexo;                         // estamos acessando o índice 1 com o uso da vírgula.
const [,[,,num6]] = complexo;                        // estamos acessando o sub-indice 1 numero 6 também com o uso da vírgula.
console.log(complexo[1][2]);    //log: 6             // estamos acessando o sub-indice 1 numero 6 por log, então usamos colchetes.

console.log(indice1);           //log: [4,5,6]
console.log(num6);              //log: 6

const [lista1, lista2, lista3] = complexo;  // É muito mais fácil fazer desta maneira.
console.log(lista2[1]);                     //log: 5



