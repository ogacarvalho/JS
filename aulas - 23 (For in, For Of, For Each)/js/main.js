
const pessoas = {
    nome: 'Gabriel',
    sobrenome: 'Carvalho',
    idade: 25,    
};

const nomes = ['Gabriel', 'Felipe', 'Luiz'];
const nome = 'Gabriel';

// For in
for (let i in pessoas){ console.log(pessoas[i]) }// For in, ideal para iterar objetos.
console.log('----------------')

// For of
for (let valor of nome){ console.log(valor) }   // For Of, ideal para iterar arrays que não precisam de [i].
console.log('----------------')

//ForEach
nomes.forEach((valor, indice, array) => {        // ForEach, com parâmetros pré-definidos auxilia na aplicação de funções em arrays.
    return console.log(indice);
});

