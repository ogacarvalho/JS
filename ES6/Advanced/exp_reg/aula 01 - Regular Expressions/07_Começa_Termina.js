
/* Expressões Regulares - Começa com, Termina com.

^ - Começa com.
$ - Termina com.
m - multiline.
[^] - Negação.

*/

const CPF = `
456.260.597-73 457.223.197-97
454.103.423-87
412.115.591-12
487.220.535-54
`;

const FOUND =  /(\d{3}\.){2}\d{3}-\d{2}/gm; 
console.log(CPF.match(FOUND));
// Básico necessário para ter perfeição ao validar campos de formulário.
