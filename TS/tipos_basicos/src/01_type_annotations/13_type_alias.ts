// Type Alias: permite que façamos os nossos próprios types, configurando nome e valores.

// Ao usar "idade" como um type automaticamente usará "number";
type Idade = number;

// Quando configuramos um type deste modo, estamos solicitando que obrigatoriamente use estes parâmetros.
type Pessoa = {
  nome: string;
  idade: Idade; // number
  salario: number;
  corPreferida?: string;

};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Yellow' | 'Black';
type corPreferida = CorRGB | CorCMYK; // (Union Types)

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Gabriel',
  salario: 7_000,
};

// O parâmetro não receberá somente um tipo "objeto", será um objeto do tipo "Pessoa" ou seja, precisa conter certas chaves.
function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return {...pessoa, corPreferida: cor} // Shallow copy
};

console.log(setCorPreferida(pessoa, 'Black'));

export default 0;
