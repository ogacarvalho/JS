
/* ForEach - Iterando Arrays
Esta função funciona da mesma forma que as outras, embora seja menos performático usa-lo para tudo, ainda assim é possível.
- Funcionamento: Iteração de Array's
- Padrões: forEach(valor, índice, array)
*/

const array = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

let total = [];
array.forEach(elemento => total.push(elemento * 2));   // "Para cada elemento..."
                                                       // log: total = [10, 100, 160, 2...]

