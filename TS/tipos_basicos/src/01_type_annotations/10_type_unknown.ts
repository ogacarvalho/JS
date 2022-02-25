
// Unknown: É o pai de todos os tipos, usando quando se desconhece o typeof dos inputs.
// ! É muito mais indicado utilizar o Unknown pois além de alertar diferenças de typeof ele obriga que você valide, enquanto o Any permite fazer qualquer coisa.

let x: unknown;

x = 'a';
x = 100;

const y = 800;
if(typeof x === 'number') console.log(x + y);
