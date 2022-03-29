
// Generics com restrições:
// → É quando precisamos definir um "limite de origem" à um generic, pois seu valor pode ser muito amplo, abrindo margem para falhas.

// Este tipo (interface) representa uma função, que recebe dois parâmetros, com tipo objeto(o) e chave(k).
// type obter_chave_fn = <O, K>(objeto: O, chave: K) => O[K];
// !Problema: Esta função não pode acontecer pois o tipo "K" é muito amplo para ser usado como index de um objeto. 
// Solução: Para resolver isso, atribuiremos ou melhor "limitaremos" (K) ao (O), usando a palavra: [extends keyof]


// Esqueleto (base estrutural) ao qual a função quando criada, deve seguir.
type obter_chave_fn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

// Função criada:
const obter_chave: obter_chave_fn = (objeto, chave) => objeto[chave];

const animal = {
    nome: 'Joselito',
    raca: 'poodle',
    vacinas: ['abc', 'cde', 'fgh'],
    cor: 'branco'
};

const vacinas = obter_chave(animal, 'vacinas'); console.log(vacinas);