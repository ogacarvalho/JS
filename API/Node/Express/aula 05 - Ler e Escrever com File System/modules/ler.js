//Módulo de função única - readfile(...)
//!Lembrando que ao importar os dados do FileSystem com promises, todos seus métodos retornarão promises.

const fs = require('fs').promises;

module.exports = (caminho) => fs.readFile(caminho, 'utf8'); //UTF8 será o padrão, codificação de caracteres.
//Exportando função que retorna os dados lidos do arquivo referenciado no caminho, através do método node nativo do filesystem *readfiles*.