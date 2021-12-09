/* Validador de CPF
1. 705.484.450-52  2. 070.987.720-03

7   0  5  4  8  4  4  5  0 -> Primeiros Dígitos
10  9  8  7  6  5  4  3  2 -> Multiplicados.
70  0  40 28 48 20 16 15 0 -> Resultado

11 - (237 % 11) = 5 -> Fórmula 237 = soma do resultado.

7   0   5   4   8   4   4   5   0  5  -> Primeiros Dígitos + Resultado
11  10  9   8   7   6   5   4   3  2  -> Multiplicados.
70  0   40  28  48  20  16  15  0  10 -> Resultado

11 - (284 % 11) = 2 

705.484.450 + ultimos dígitos gerados (52) = 705.484.450-52
Se CPF com digitos gerados for igual ao CPF original então é Válido.
*/

/*
Compreendendo solução:
Pegar os primeiros 9 dígitos.
Limpar e iterar. 
Para cada laço, fazer uma multiplicação dinâmica.

*/

let CPF = '456.260.598-73'
let cpfCleaner = CPF.replace(/\D+/g, '');

let cpfCleanedToArray = Array.from(cpfCleaner);
//log: [ '4', '5', '6', '2', '6'...];