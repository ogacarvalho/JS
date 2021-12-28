/* Informações 
Programa para distribuição aleatória de tarefas para membros de uma equipe.

Objetivo: Distribuir 5 tarefas, para 5 integrantes.

*/

let tarefas = []; //Tarefa só será adicionada, se não existir na lista baseada na quantidade de pessoas enquanto acontece o loop aleatório.
let equipe = ['Gabriel', 'Pedro', 'Maria', 'Leandro', 'Roberto', 'Andressa'];
let sistema;

let contador = 0;
let tentativas = 0;

while(contador < equipe.length){                          // Enquanto o contador for menor que a quantidade de pessoas na equipe, execute...
    sistema = Math.ceil(Math.random() * equipe.length);   // ... o sistema aleatório, que retorna números arredondados de 1 a 6.

    if(!tarefas.includes(sistema)){                       // Se a lista de tarefas não tiver o número que está no sistema...
        tarefas.push(sistema)                             // Adicione o número do sistema na lista de tarefas.
        contador++                                        // e incremente o contador. (que funcionará enquanto houver participantes.)
        console.log(`${equipe[contador -1]} recebe tarefa: ${tarefas[contador -1]}`) //Fix por conta do arrendondamento pra cima.
        
    }

    tentativas++

    if(tarefas.length == equipe.length){
        console.log(`
        Número de tentativas: ${tentativas} 
        Número de Tarefas: ${tarefas.length}
        `);
    }
    
}