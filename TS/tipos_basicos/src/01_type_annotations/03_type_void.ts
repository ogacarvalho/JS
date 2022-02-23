// Tipo Void
// → Significa que uma função ou método não retorna nada.
// ! Quando usamos [...rest operator], ele automaticamente, aguarda por um array[].

// Essa função, sem retorno irá receber um array de strings nos parâmetros.
function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('a', 'b', 'c');
