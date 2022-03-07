
// Undefined - Quando algo ainda não foi definido.
// → Cautela ao trabalhar com valores opcionais, pois geram undefined, tornando necessário a checagem para evitar problemas.
// Null - É uma definição, normalmente utilizada propositalmente, ou seja você deve sempre ser específico com os outputs.

let x;
if(typeof x === 'undefined') x = 20;

//                           abertura da função                      type anotation
export function createPerson(firstName: string, lastName?: string): { firstName: string; lastName?: string; }
{
  return {
    firstName,
    lastName
  };
};

// Sempre validar/checar os outputs, não deixando espaços para "undefined".
export function squareOf(x: any) {
  if(typeof x === 'number') return x * x;
  return null;
}
