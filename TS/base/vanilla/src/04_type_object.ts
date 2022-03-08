// Tipo Objetos → Um tipo muito importante, e deve ser bem compreendido.
// → Uma vez que o tipo foi inferido, não conseguimos mais alterá-lo nem adicionar itens a ele.
// → Para criar um objeto totalmente aberto use: const objeto: Record<string, unknown> = {}...

// ! É extremamente importante, verificar a real necessidade de se desenvolver um objeto tão aberto assim, ou se é um problema no seu design.

const objeto: {
  chave_a: string;
  readonly chave_b: string;                       // A chave não pode mais ser alterada.
  chave_c?: any;                                  // Permite a criação de uma nova (chave_c)
  [key: string]: unknown;                         // [Index signature] → Permite a criação de novas chaves, mesmo com objeto inferido.
} = {
  chave_a: 'a',
  chave_b: 'b',
};


objeto.chave_c = 'c';
objeto.chave_d = 'd';


