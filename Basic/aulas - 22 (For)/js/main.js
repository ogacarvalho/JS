
/* Estruturação Clássica de um Laço / Loop / For

A estrutura do for clássico é divida em 3 partes + bloco de execução
- 1. Criação da variável de controle e dar à ela o parâmetro de ínicio. (índice recebe zero)
- 2. Definir quando o loop / for deve parar, pode ser lido também como: enquanto i for menor que..
- 3. Finalmente dar impulso ao for, para que ele a cada loop incremente o i até podermos chegar ao fim (5).
- bloco de execução: Que serve para adicionar uma ação para cada laço.

Leitura:
índice recebe zero, enquanto o índice for menor ou igual à 5 incremente 1, e para cada laço execute...

Exemplo
for ( i = 0; i <= 5; i++ ){ ... };

*/


for (let i = 0; i <= 20; i++ ) {
    const resultado = i % 2 === 0 ?  `${i} é par` : `${i} é ímpar`;
    console.log(resultado);
};
/*
log: O é par.
log: 1 é impar.
log: 2 é par.
log: ...
*/


const frutas = ['Banana', 'Laranja', 'Maçã'];

for ( let i = 0; i < frutas.length; i++ ){
    console.log(frutas[i]);
}



