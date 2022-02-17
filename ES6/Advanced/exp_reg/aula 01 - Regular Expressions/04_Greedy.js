
/* Expressões Regulares - Greedy, Non Greedy (Lazy), uma excelente maneira de encontrar tags e padrões, porém cautela com os comportamentos.

[.] - O ponto significa qualquer caractere.                                      [ texto.match(/<.*>.*<\/.*>/gi) ] = encontrará, "<p>Olá mundo!</p>"

! [Greedy]     Os quantificadores, são by default [greedy] ambiciosos, ou seja, não irão separar as palavras, colocaram todas em um só index.
! [Non-Greedy] Para evitar este comportamento, usamos o quantificador [?] [zero ou uma vez]
*/

let { html } = require('./base');

const GREEDY =  html.match(/<.+>.+<\/.+>/g);              // [ '<p>Olá mundo!</p> <p>Olá de novo</p>' ]
const NONGREEDY =  html.match(/<.+?>.+?<\/.+?>/g);        // [ '<p>Olá mundo!</p>', '<p>Olá de novo</p>' ]

