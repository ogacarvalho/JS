
/* Expressões Regulares - Match & Replace

Flags
- [Global] Encontra todas as ocorrências:                           [ /teste/g ]

Base
! Match, usamos de modo inverso ao exec:                            [ texto.match( REGEXP ) ]
! Replace, alterando dados dentro do texto:                         [ texto.replace( REGEXP, 'Gabriel' ) ]
! Quando usamos parênteses, podemos adicionar coisas usando '$1'    [ texto.replace( /(João|Maria)/gi, '"$1"' ) ]        !Todo joão ou maria encontrado, coloque aspas.
! Aplicando Funções:                                                [ texto.replace( /(João|Maria)/gi, input => input.toUpperCase()); ]
*/

let { texto } = require('./base');

const REGEXP = /(João|Maria)/gi;

const REPLACE = texto.replace(REGEXP, '$1');
const APPLY_FUNCTION = texto.replace(REGEXP, input => input.toUpperCase());

console.log(APPLY_FUNCTION);