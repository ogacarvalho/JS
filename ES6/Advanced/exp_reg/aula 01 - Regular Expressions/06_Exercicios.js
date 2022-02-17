
/* Expressões Regulares - Exercícios

Encontrando CPFS:           [ cpfs.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g) ] 

!Atalho para apenas números: [ \d ]
! ^ <- fora dos colchetes significa "começa com..."
! $ <- "termina com..."
*/

let { ips } = require('./base');

const FOUND =  ips.match(/([1-9]+\.[1-9]+\.[1-9]+\.[1-9]+|0\.0\.0\.0)/g); // Apenas números em uma quantidade específica, seguindo um padrão específico. [123 . 123 . 123 - 12]
const FOUND2 =  ips.match(/(\d+\.){3}\d+/g);

console.log(FOUND2);
// Não pode ter dois digitos e começar com zero.