
/* Expressões Regulares - LookAhead - LookAround - LookBehind [Buscando padrões com condicionais.]

?=  -> positive lookahead.         [Se a linha termina com..?]
?!  -> negative lookahead.         [Se a linha não termina com..?]

?<= -> positive lookbehind.        [Se a linha começa com...?]
?<! -> negative lookbehind.        [Se a linha não começa com...?]

?<= -> positive lookbehind.        [Se a linha começa com...?]
?<! -> negative lookbehind.        [Se a linha não começa com...?]


!Sempre que for trabalhar linha a linha, utilize a flag "m" pois em conjunto com "^" e "$" conseguimos tornar nossa busca muito inteligente.
*/


let { lookahead } = require('./base');

// Retorna Qualquer coisa que termina com active.
// console.log(lookahead.match(/.+\sactive$/gim)); /*||*/ console.log(lookahead.match(/.+[^in]active$/gim)); 

// Retorna [sem o active] todas as linhas que possuem o active. [Se existir, me retorna sem a palavra.]
// console.log(lookahead.match(/.+(?=[^in]active)/gim));  

// Retorna todas as linhas que possuem " inactive";
// console.log(lookahead.match(/.+(?=\s+inactive)/gim))

// Retorna todas as linhas que não possuem "active" ou se a palavra "active" não existir na frase, você me retorna a frase.
// console.log(lookahead.match(/^(?!.*[^in]active).+$/gim));

// Retorna, tudo aquilo que começa com online e que possui um ou mais espaços, e que depois pode ou não ter textos.
// console.log(lookahead.match(/(?<online\s+).*/gim));

// Encontre tudo aquilo que começa com qualquer coisa a não ser "(?<!online.+)" algo que comece com "online".
console.log(lookahead.match(/^.+(?<!online.+)$/gim));