

/* Método Splice - A ferramenta multi-uso.
Parâmetros
1. Indice Atual
2. Quantos elementos eu quero remover.
3. Quais elementos quero adicionar, separados por vírgula.

*/
//                -6        -5        -4        -3        -2         -1    //Contagem para esquerda.
//                 0         1         2         3         4          5    //Contagem para direita.
const array = ['Gabriel', 'Milly', 'Eduardo', 'Theó', 'Isabella', 'Maria'];
let valorMax = Number.MAX_VALUE;

let removidos = array.splice(-1, 1)    // A partir do [-1] quero remover 1 elemento.             log: ['Maria']; -> Remove 
array.splice(0, valorMax);             // A partir do [0] quero remover o maior número possível. log: [];        -> Remove Múltiplos
array.splice(0,0, 'Josué');            // A partir do [0] remova [0] e adicione 'Josué'.         log: Josué[0];  -> Adiciona
array.splice(4,1,'Leka');              // A partir do [4] quero remover [1] e adicionar 'Leka'.  log: Leka[4];   -> Troca

