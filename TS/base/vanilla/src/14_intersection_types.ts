// Intersection types(&): porta lógica (&)

type temNome = { nome: string };
type temSobrenome = { sobrenome: string };
type temIdade = { idade: number };

// Union Types
type PessoaX = temNome | temSobrenome | temIdade; //objeto que usar esse type pode ter um dos três.

// Intersection Types
type PessoaY = temNome & temSobrenome & temIdade; //objeto que usar esse type deverá ter os três.

const pessoa: PessoaY = {
  idade: 25,
  nome: 'Gabriel',
  sobrenome: 'Carvalho',
}

console.log(pessoa);

export default 0;
