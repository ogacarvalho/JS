/* Importando Módulos (Node);
Para importar utilizamos a palavra "require(./arquivo)";        !Importará o 'module' inteiro.

- MODULO agora possui o objeto com todos os dados exportados e usando as chaves podemos acessá-los.
- É possível importar chaves exclusivamente, ou simplesmente armazena-las em uma variável.

*/

//Maneiras de se importar dados!
const MODULO = require("./modulo1");
let importacaoExclusiva = require("./modulo1").sistema; 
let chaveEspecifica = MODULO.sistema; //Desse modo, podemos enviar a função armazenada na chave à uma variável.

MODULO.sistema();
importacaoExclusiva();
chaveEspecifica();