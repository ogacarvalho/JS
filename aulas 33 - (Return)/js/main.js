

const multiplicador = (multiplicador) => {       // A variável vai receber uma função argumentada que vai transforma-la em uma função.
    return (n) => {                              // A variável que receber essa função vai se tornar " variavel(n) "
        return n * multiplicador;                // Dependendo do argumento da 'variavel(n)' será multiplicada pelo argumento inicial.
    };
};

let duplica = multiplicador(2);                  // Variável recebe função argumentada (2) que transforma variavel em -> variavel(n)
console.log(duplica(5));                         // variavel(5) * multiplicador (2) = log 10


// Linha do Tempo
/*
1. Duplica recebe função + argumento. 'duplica = multiplicador(2)'
2. Duplica agora, se tornou função com parâmetro. 'duplica === duplica(n)'
3. Duplica pode ser usado com argumento. 'duplica(2)'
4. O argumento de Duplica vai ser multiplicado pelo argumento do Multiplicador (2); '2 * 2' || ' n * multiplicador '
*/