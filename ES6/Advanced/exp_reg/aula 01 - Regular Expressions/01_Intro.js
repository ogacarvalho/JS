/* Expressões Regulares - Buscando padrões em Strings 

Flags
- [Global] Encontra todas as ocorrências:                                              [ /teste/g ]
- [Insensitive] Não importa se é maiúscula ou minúscula:                               [ /teste/i ]
- [Grupos] Separando os dados em grupos:                                               [ /(ab)(c)/i ]



! Testar sua expressão regular:                                                        [ regexp.test( abc ) ] 
! Extrair dados do texto:                                                              [ regexp.exec( abc ) ]
! Buscar dados em grupos:                                                              [ /(ab)(c)/i ]
! Porta lógica [ou]:                                                                   [ /(João | Maria)(trouxe)/i ]
*/

let { texto } = require('./base');
const REGEXP = /(João | Maria)(trouxe)/i;
const FOUND = REGEXP.exec(texto);

console.log(FOUND);