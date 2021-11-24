
/* Arrays Básico

• Remover o ultimo e retorna-lo, sem alterar o índice. -> pop(..);
• Adiciona no índice '0' o valor desejado.             -> unshift(..);
• Deletar sem mover o índice.                          -> delete array[?];
• Fatiar valores de um array.                          -> slice(.|.);
• Para converter strings em array                      -> split(', ');
• Para converter Arrays em String                      -> join(' ');  

*/

const literals = ['Gabriel', 'Isabella', 'João', 'Fernanda']             // Array Literals []
const constructor = new Array ('Gabriel','Isabella','João','Fernanda')   // Constructor, constrói tudo inclusive Arrays

let link = literals;                                                     // Valor por referência: apena cria o link mas não copia o objeto.
let copia = [...literals];                                               // Spread/Rest Operator: copia o objeto e não cria link.
delete literals[0];                                                      // Deleta sem mover o índice.

let strings = 'Gabriel, Felipe, Carvalho, Paula, Milly, Eduardo';
let organizando = strings.split(', ');                                   // Remove elementos indesejados (, ) e concatena.



