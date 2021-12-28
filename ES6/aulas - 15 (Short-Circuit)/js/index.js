
//  Short-Circuit
//  Os operadores lógicos possuem comportamentos padrões, e sabendo disso podemos explorar alguns recursos interessantes, como o Curto-Circuito que fornece vantagens de performance, onde o navegador quer apenas encontrar o valor verdadeiro ou falso. 


const a = true;
const b = true;
const c = 'Para eu aparecer todos os elementos anteriores devem ser true';
const curtoCircuitoAND = a && b && c;

const x = false;
const y = 'Retornará o primeiro valor verdadeiro que encontrar';
const z = 'Segundo valor verdadeiro';
const curtoCircuitoOU = x || y || z;

// console.log(curtoCircuitoAND);

//Exemplo prático 'Se o usuário não escolher nenhuma cor, então a cor será preto..'
const corUsuario = null;
const corSite = corUsuario || 'preto';
console.log(corSite);