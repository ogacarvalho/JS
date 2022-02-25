
// Type Union: É a possibilidade de um elemento ter mais de um tipo.
// → Simplesmente utilizando um single pipe para casos como (ou): string | number | boolean
// ! Porém, o typescript é "chato" então você deve sempre, validar removendo as possibilidades de falhas/leaks no seu código.

export function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
};

console.log(addOrConcat(10,20));
console.log(addOrConcat('10','20'));
console.log(addOrConcat('10',10));
