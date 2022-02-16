
/* Importando e navegando entre pastas.
1. Aqui estamos importando de modo similar ao Default ES6 no qual o módulo (arquivo) inteiro realiza apenas uma função.
2. Maneiras de navegar entre as pastas, e de solicitar caminhos independemente do sistema operacional através do path.
*/


const iAnimal = require('./arquivo');                        //iAnimal recebe os dados do arquivo. (F. C. (Classe) Animal)                  

const milly = new iAnimal('Milly', 'Poodle', 'Branca');
milly.dados();


const path = require('path');                                //Recurso Node que encontra o caminho independemente do OS.

console.log(__dirname);                                                        //Caminho atual (Original)
console.log(path.resolve(__dirname, '..', '..', '..', 'arquivos', 'imagens'))  //Caminho atual menos 2 pastas mais 2 pastas modificadas.
console.log(path.resolve(__dirname, 'arquivos', 'imagens'));                   //Caminho atual mais 2 pastas.


// /home/ogacarvalho/Documents/Desenvolvimento/JS/Node/aula 02 - Modulos Import e Export 2                   //Original
// /home/ogacarvalho/Documents/Desenvolvimento/arquivos/imagens                                              //Modificado
// /home/ogacarvalho/Documents/Desenvolvimento/JS/Node/aula 02 - Modulos Import e Export 2/arquivos/imagens  //Modificado

