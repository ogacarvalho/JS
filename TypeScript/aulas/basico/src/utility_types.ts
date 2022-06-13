
// Utility Types: São generics padrão do typescript.

interface Pessoa_opcional {
    nome?: string,
    sobrenome?: string,
    idade?: number,
}

interface Pessoa_required {
    nome: string,
    sobrenome: string,
    idade: number,
}

// Record< >: Faz por padrão a inferência (chave:valor).
const objeto_0: Record<string, string | number> = {
    chave_0 : 'valor',
    chave_1 : 100,
}

// Partial< >: Todas as propriedades obrigatórias, ficam opcionais.
const objeto_1: Partial<Pessoa_required> = {};


// Required< >: Ao envolver o "tipo" dentro de Required, todas as propriedades opcionais, ficam obrigatórias.
const objeto_2: Required<Pessoa_opcional> = {
    nome: 'Gabriel',
    sobrenome: 'Carvalho',
    idade: 25
};

// Redonly< >: Todas as propriedades ficam bloqueadas em apenas leitura.
const objeto_3: Readonly<Pessoa_required> = {
    nome: 'Gabriel',
    sobrenome: 'Carvalho',
    idade: 25,
};



// Utility Types: São generics padrão do typescript.


// Pick< >: Seleciona especificamente, quais propriedades poderão ser usadas.
const objeto_4: Pick<Pessoa_required, 'nome' | 'sobrenome'> = {
    nome: 'Gabriel',
    sobrenome: 'Carvalho',
};

// Exclude<,> & Extract<,>: São generics de comparação, onde o primeiro parâmetro é retornado após ser comparado com o segundo.
type A = '1' | '2' | '3';
type B = '3' | '4' | '5';

// Exclude<A,B>: Tudo que existe no tipo A e que também existe no tipo B é excluido.
type type_exclude = Exclude<A,B>; // A: ["1","2"]

// Extract<A,B>: Tudo que existe no tipo A e que também existe no tipo B é mantido.
type type_extract = Extract<A,B>; // A: ["3"]



export default 1; //module mode

