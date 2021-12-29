/* Importando Módulos (Node);
Para importar utilizamos a palavra "require(./arquivo)";        !Importará o 'module' inteiro.

- MODULO agora possui o objeto com todos os dados exportados e usando as chaves podemos acessá-los.
- É possível importar chaves exclusivamente, ou simplesmente armazena-las em uma variável.

*/

//Maneiras de se importar dados!

const MODULO = require("./modulo1");
let axios = require("axios"); //Pacote NPM requisitador de dados, tipo fetch() porém melhor.

let importacaoExclusiva = require("./modulo1").sistema; 
let chaveEspecifica = MODULO.sistema; //Desse modo, podemos enviar a função armazenada na chave à uma variável.
let iPessoa = require("./modulo1").Pessoa; //iPessoa (imported) recebe a Classe armazenada em Módulo.

MODULO.sistema();
importacaoExclusiva();
chaveEspecifica();

//Aqui estamos requisitando dados da internet que retornam um grupo em json de pessoas.
( async() => {
    try {
        let json = await axios('https://www.otaviomiranda.com.br/files/json/pessoas.json'); //isso retorna uma promisse.
        console.log(json.data);
    } catch(e){console.log(e)};

})();