// Tipando funções: ao tipar uma função, o typescript automaticamente descobre métodos para ela, e passa a sugerir.
// → Uma tipagem correta torna seu código muito mais fluído.
// ! Quando a tipagem está correta, o TS faz sugestões de métodos, e auxiliar melhor no código.

//   nome       recebe            retorna
type callback = (item: string) => string;


// Map (Raiz) com TypeScript [A função recebe um array e aplica um callback para cada elemento utilizando for clássico]
export default function mapeando(array: string[], callbackfn: callback): string[] {
  const newArray: string[] = [];

  for(let i = 0; i < array.length; i++){
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;

}

const abc = ['a', 'b', 'c', 'd'];

console.log(mapeando(abc, item => item.toLocaleUpperCase()));
