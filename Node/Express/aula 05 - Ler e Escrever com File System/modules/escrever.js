/* Escrevendo com File System (API nativa - Node) 
Neste arquivos, vamos criar um módulo de exportação com função única, que usará o WriteFiles para escrever arquivos.

1.  Primeiro vamos importar a api (fs)                                       !Com Promises, para manipular os resultados.
2.  O método writeFiles permite escrevermos dados em arquivos.
3.  fs.writeFiles(./local, 'frase\n', {opções: abc}).                        !\n para quebrar a linha a cada nova atualização.

Opções
3.1 Flag(w):    Vai zerar o arquivo caso ele já exista.
3.2 Flag(a):    Vai somar os dados do arquivo caso ele já exista.
3.3 Flag(utf8): Tipo de caractere (Porém não é necessário... pois é default)

Criando um arquivo com Path.
1.  caminho = path.resolve(__dirname, '..', 'teste.txt');
1.1 Path vai criar um arquivo, em uma pasta anterior a atual. Pasta de destino == (aula 05);
*/


const fs = require('fs').promises;           

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' });
};
