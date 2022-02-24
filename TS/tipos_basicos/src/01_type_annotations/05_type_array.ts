
// Tipo: Array
// → Criação de Array com (Generics): Array<T>
// → Criação de Array sem (Generics): T[]

function multiplyArguments(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor , 1)
};

//                                recebe     return
function concatArguments(...args: string[]): string[] {
  return args.map(valor => valor.toLowerCase());
};

console.log(multiplyArguments(1,2,3));
console.log(concatArguments('G','A','B','S'));
