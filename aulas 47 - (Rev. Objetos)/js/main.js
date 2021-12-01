/* Revisão de objetos
1.   O objeto é formado por pares de { chave: valor };
2.   É possível acessar o objeto de duas maneiras: Notação > objeto.chave || Colchetes > objeto['chave'];
2.1  O uso dos [colchetes] embora verboso é excelente pois permite o acesso a chaves dinâmicamente.
3.   É possível criar objetos com object constructor > const objeto = new Object();
4.   Para deletar chaves basta digitar > delete objeto.chave;
*/

const objeto = { chave: 'valor' };

let database = 'chave';            //"Base de dados", possui a chave.
let chave = objeto[database];      // Desta forma, conseguimos ter acesso à uma chave remota.

//O método é uma função que está dentro do objeto.
objeto.metodo  = function() { return `Dentro desta chave temos o "${this.chave}"` };

console.log( objeto.metodo() );
