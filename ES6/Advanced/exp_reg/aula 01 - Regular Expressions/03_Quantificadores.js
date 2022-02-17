/* Expressões Regulares - Quantificadores, servem para encontrarmos coisas independente da maneira que forem escritas.


-> {mínimo, máximo} - quantas vezes vai aparecer                    [ texto.match(/Jo{1,}ã{1,}/gi) ] encontra: Jooooãoooo
-> * - {0, }  Quantifica zero ou mais vezes.
-> ? - {0,1} Quantifica zero ou uma vez.
-> + - {1, }  Quantifica uma ou mais vezes,                                [ texto.match(/Jo+ão+/gi) ]  encontra: Jooooãooooo                            
-> \ - Caractere de escape.


! Para usar o "ponto" como uma string, temos que escapá-lo.         [ texto.match(/\.jpe?g/gi)]
*/

let { texto, arquivos } = require('./base');

const REGEXP = /(\.jpe?g)/gi;

for(const arquivo of arquivos){
    const valido = arquivo.match(REGEXP);
    if(!valido) continue
    console.log(arquivo, valido);
}

// Encontrará todos os arquivos [jpg ou jpeg]
