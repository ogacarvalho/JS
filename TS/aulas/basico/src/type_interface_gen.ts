
// Generics também podem ser usados, e devem ser usados com Interfaces e Type Alias
// > É possível adicionar valores padrão, como podemos ver logo em seguida:

// A interface recebeu um parâmetro (Generics) e obriga as propriedades a obedecerem o <tipo> que lhe forem atribuidos, porém por padrão é string | number.
interface Protocolo_A<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;
}

// As propriedades do objeto aluno definidas pela interface, deverão receber valores que sejam string[] e number[].
const aluno_0: Protocolo_A <string[], number[]> = {
    nome: ['Gabriel', 'Felipe'],
    sobrenome: ['Carvalho', 'de Paula'],
    idade: [25, 1.80],
}


type Protocolo_B <T = string, U = number> = {
    nome: T;
    sobrenome: T;
    idade: U;
}

// As propriedades do objeto aluno definidas pela interface, deverão receber valores que sejam string e number. [default: definido acima.]
const aluno_1: Protocolo_B = {
    nome: 'Gabriel',
    sobrenome: 'Carvalho',
    idade: 25,
}