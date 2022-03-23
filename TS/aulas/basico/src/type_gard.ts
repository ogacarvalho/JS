
// Type Gard: Refinando os tipos!
// → Este refinamento garante que uma função funcione mesmo que ela receba dois types diferentes, cuja propriedade só exista em um.
// → Então é feita a validação, da propriedade, com "in" ou "instanceof".
// → Ou adição da propriedade "tipo" no type, e validação com switch.

const add = (a: unknown, b:unknown) => typeof a === 'number' && typeof b === 'number'?  a + b:`${a}${b}`;

type Pessoa = {
    nome: string,
}

type Animal = {
    raca: string,
}

type PessoaOuAnimal = Pessoa | Animal;

class Aluno implements Pessoa {
    constructor( public nome: string ) {};
}

const mostra_dados = (obj: PessoaOuAnimal):void => {

    if(obj instanceof Aluno ) console.log(obj.nome);            // TypeGard

    if('raca' in obj) console.log(obj.raca)                     // TypeGard
}

const gabriel = new Aluno('Gabriel'); mostra_dados(gabriel);