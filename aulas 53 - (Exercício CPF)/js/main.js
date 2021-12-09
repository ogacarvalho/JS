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
let selecao = (digitos) => {
    digitos = digitos.slice(0,11);
    return digitos.replaceAll('.', '');
};
let input = '456.260.598.73';
let CPF = selecao(input);

const calculo1 = (documento) => {
    let soma = [];
    let fita = [10,9,8,7,6,5,4,3,2];
    
    for (let i = 0; i < documento.length; i++){
        calc = documento[i] * fita[i];
        soma.push(calc);
    }
    return soma;
};

const calculo2 = (documento) => {
    let soma = [];
    let fita = [11,10,9,8,7,6,5,4,3,2];
    
    for (let i = 0; i < documento.length; i++){
        calc = documento[i] * fita[i];
        soma.push(calc);
    }
    return soma;
};

let primeiroCalculo = calculo1(CPF);

let somando = primeiroCalculo.reduce((acumulador, valor) => {
    return acumulador += valor;
});

let formula = (valor) => 11 - (valor % 11);
let primeiroResultado = formula(somando);
let CPF2 = selecao(input) + primeiroResultado;


let segundoCalculo = calculo2(CPF2);

let somando2 = segundoCalculo.reduce((acumulador, valor) => {
    return acumulador += valor;
});

let segundoResultado = formula(somando2);

let cpfBruto = CPF2 + segundoResultado;

let convert = (input) => {
    input = input.replaceAll('.', '');
    input = input.replaceAll('-','');
    return input;
}

let cpfOriginal = convert(input);

let validador = (original, resultado) => original === resultado;

let teste = validador(cpfOriginal, cpfBruto);

console.log(teste);