// Tipo Void
// → Significa que uma função ou método não retorna nada.
// ! Quando usamos [...rest operator], ele automaticamente, aguarda por um array[].

// → Essa função, sem retorno irá receber um array de strings nos parâmetros.
// → O TypeScript nos impede de usar variáveis cujo nome já existe mesmo que ela esteja em outro arquivo dentro da mesma pasta.
// → Sempre que possível, busque por explicitar a assinatura de suas funções ou métodos.

function noReturn(...args: string[]): void {
  console.log(args);
}

const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Carvalho',
  mostraNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }

};

noReturn('a', 'b', 'c');
pessoa.mostraNome();

export { pessoa };
