
/* Funções (Avançado)

- Toda Arrow Function é anônima, funções anônimas não possuem nome.
- Toda função pode ser tratada como dados, é o ato de armazena-las em variáveis podendo utiliza-la como dados. (Objetos de primeira-classe)

*/


// 1. Declaração Clássica (Esc. Global)
hoistingON();
function hoistingON () {console.log('Tudo ON')};                         // 1.  Expressa desta forma, tudo é possível. Mas não é seguro.

// 2. Arrow Function Auto-Inv. Tratada como dados (OPC) + (Esc. Global)
(hoistingOFF = () => console.log('Hoisting OFF | auto-invoked ON'))();   // 2.  Aqui é mais seguro.. mas ainda não é o ideal.

// 3. Arrow Function (OPC) + (Esc. Privado)
const tudoOFF = () => console.log('Tudo OFF');                           // 3.  O ideal da boa prática, código simplificado e segurança extrema.


// 4. Objeto de Primeira-Classe                                          // 4.  Toda função pode ser tratada como dados.
const executando = (funcao) => funcao();
executando(tudoOFF);

// 5. Objeto recebendo função tratada como dados (OPC).
const obj = {
    opc: executando(tudoOFF),
    nome: 'Gabriel'
};

obj.opc;
console.log(obj.nome);


const abc = 'Escopo léxico';
(() => {console.log(abc)})(); // Array Function Anônima IIFE utilizando escopo léxico.
