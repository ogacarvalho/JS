
//Analisando arquivos do Sistema com FileSystem (Node)


const fs = require('fs').promises;                                                //Promises para que vejamos os resultados completos.
const path = require('path');                                                     //Usaremos o path em conjunto para facilitar as buscas.

async function readdir(rootDir) {                                                 //Func. recebe o caminho absoluto.
  rootDir = rootDir || path.resolve(__dirname);                                   //Se o caminho estiver quebrado, use o path.
  const files = await fs.readdir(rootDir);                                        //Files recebe a lista de diretórios do FS.
  walk(files, rootDir);                                                           //Func. Walk recebe a lista e o caminho.
}

async function walk(files, rootDir) {                                             //Func. Walk vai percorrer os dados e filtra-los.
  for(let file of files) {                                                        //For of para mostrar os dados recebidos filesystem.
    const fileFullPath = path.resolve(rootDir, file);                             //Mostrará o caminho completo entre raiz e novos arquivos.
    const stats = await fs.stat(fileFullPath);                                    //Retorna se é arquivo, ou diretório..

    if (/\.git/g.test(fileFullPath)) continue;                                    //Filtro: remove arquivos .git
    if (/node_modules/g.test(fileFullPath)) continue;                             //Filtro: remove pastas node_modules

    if(stats.isDirectory()) {                                                     //Se for pastas..
      readdir(fileFullPath);                                                      //Leia o caminho completo.            
      continue;                                                                   //E continue lendo, (não descerá a função enquanto não acabar)
    }

    if (                                                                          //Após lido..
      !/\.html$/g.test(fileFullPath)                                              //Se o arquivo não terminar com .html ignore.
    ) continue;
    console.log(fileFullPath);                                                    //Agora ele mostrará todos os arquivos HTML da pasta ES6.
  }
}
readdir('/home/ogacarvalho/Documents/Desenvolvimento/JS/ES6');
