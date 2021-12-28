/* Método Reduce
Desenvolvido para reduzir um array á um número, diferenças principais fica por conta do parâmetro extra, que fará a função de reagir a cada loop com o array, acumulando os resultados.

1. Reduce só retorna o valor acumulado.
2. Se o valor acumulado for nulo, então ele pega o primeiro do array. E o segundo parâmetro, fica com o segundo valor. (VAlor)
*/

//Exemplo 1;
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

let teste = numbers.reduce((acumulador, valor, indice , array) => { 
    if(valor % 2 !== 0) acumulador += valor;                                // Soma dos valores ímpares.
    return acumulador
}, 0); // <- Acumulador                                                     // '0' é o valor inicial escolhido para o acumulador
                                                                            //... Se não tiver ele usa o primeiro valor do índice
                                                                            //Recebe o valor do acumulador.



// O reduce, só retorna o valor acumulado.
// O acumulador está se comparando com o segundo valor do índice. 

const pessoas = [                    // A : V
    {nome: 'Gabriel', idade: 62},    // G > P? S - 62 (Acumulador) -> Retorno Geral 62 
    {nome: 'Pedrinho', idade: 13},   // P > M? N - 65 (Valor) 
    {nome: 'Maria', idade: 65},      // M > F? S - 65 (Acumulador) -> Retorno Geral 65
    {nome: 'Felipe', idade: 23},     // F > D? N - 73 (Valor)
    {nome: 'Daniel', idade: 73},     // D > M? S - 73 (Acumulador) -> Retorno Geral 73
    {nome: 'Marcelo', idade: 53},    // A partir daqui o acumulador não é mais retornado, logo o valor fica congelado em 73 (Ult. Retorno)
    {nome: 'Flávio', idade: 24},
];


teste = pessoas.reduce((acumulador, valor, indice, array) => {
    if(acumulador.idade > valor.idade) return acumulador; // Quando vencer irá retornar o -> acumulador
    return valor;                                         // Valor (Valor geral) é o retorno da ultima vitória do acumulador.
});

/* 
    Abstração
    - Segundo o professor, quem for mais velho termina sendo o acumulador.

*/
