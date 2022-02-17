
/* Expressões Regulares - Ranges e Conjuntos

[abc] - [Conjunto] Qualquer coisa dentro de colchetes, será considerado um conjunto.
[^ab] - [Negação]  O Circunflexo significa "negar", então ele mostrará tudo, menos o que tiver o conjunto "ab".
[-]   - [Range]    De alguma coisa, até outra coisa, !Sempre mande o range do menor para o maior [0 - 9] E NÃO -> [9 - 0]

Por exemplo, podemos encontrar qualquer símbolo com esta expressão:                        [ alfabeto.match(/[^a-z0-9''-' ']/gi) ];
! O [+] quando colocado, encontrará as ocorrências em conjunto. instead ['a','b','c'] será ['abc'];
*/

let { alfabeto } = require('./base');


let teste_1 = alfabeto.match(/[^a-z0-9''-' ']/gi); // [ '@', '!' ]    -> Qualquer coisa diferente de espaço, numeros e letras.
let teste_2 = alfabeto.match(/[\u00A0-\u00BA]/g);  // Ele vai encontrar um range de símbolos, de acordo com o "Unicode".
let atalho = alfabeto.match(/(\W)/g);                // [ ' ', ' ', '@', '!', ' ' ] -> Basicamente a mesma coisa do teste_1, com excessão dos espaços.
let atalho_2 = alfabeto.match(/\S/g);              // Pega tudo, menos os espaços.                 