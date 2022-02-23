
/* Type Annotations é o ato de descrever o tipo:

Tipos básicos (inferência automatica)
• let nome:     string = 'Gabriel';
• let idade:    number = 30;
• let adulto:   boolean = true;
• let simbolos: symbol = Symbol('abc');
• let big:      bigint = 999...;

! Tipos (pessoais), devem ser escritos com letras maiúsculas: [Exemplo]
! Type Alias → Ato de armazenar os tipos em uma variável, para diminuir a verbosidade.
*/

// Tipos passados por referência [Genéricos]

// Array
let arrayNumbers: Array<number> = [1,2,3];
let arrayStrings: Array<string> = ['a','b','c'];

// ou...
let arrayNumber: number[] = [1,2,3];
let arrayString: string[] = ['a','b','c'];


// Objetos [ ? → chave opcional ]
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Gabriel',
  idade: 25,
}

// Funções !Normalmente, a inferência automatica(return) é limitada a tipos básicos.
function soma(x: number, y:number):number {
  return x + y;
}

//Type Alias   parâmetros             retorno   sistema
const divide: (x:number, y:number) => number = (x, y) => x / y;
// Divide recebe parâmetros x e y cujo tipo é number, e o retorno deve ser number, esses tipos recebem o seguinte sistema: (x,y) => x / y;
