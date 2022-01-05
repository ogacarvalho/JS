

/* 
Abstração:
Criando, escrevendo e lendo um arquivo com FileSystem e JSON.
!Interessante para armazenamento de dados, e scripts de configuração de arquivos.

Módulo Escrever (Função única)
Com os dados recebidos aplicará o writefiles.        !retorna promises.

Módulo ler (Função única)
Com os dados recebidos aplicará o readfiles.         !retorna promises.
*/

const path = require('path');                                    //Importa api path. (para usar seus recursos)
const caminhoArquivo = path.resolve(__dirname, 'teste.json');    //na pasta atual, cria o arquivo 'teste.json'.
const escreve = require('./modules/escrever');                   //Importa módulo escrever. (Push dos dados no teste.json)
const ler = require('./modules/ler');                            //Importa módulo ler.      (Fetch dos dados no console.log)

//Dados
const pessoas = [
  { nome: 'João' },
  { nome: 'Maria' },
  { nome: 'Eduardo' },
  { nome: 'Luiza' },
];

const json = JSON.stringify(pessoas,'', 2);          //Converte objeto pessoas em JSON                   ! '' -> string vazia, 2 -> identação
escreve(caminhoArquivo, json);                       //Mód. Escrever recebe dados prontos.

async function leArquivo(caminho) {                  //Módulo ler receberá o caminho do arquivo teste.json
  const dados = await ler(caminho);                  //fs.readfiles() no módulo ler retornará o que está escrito em teste.json.
  console.log(dados)                                 //os dados em teste.json é o objeto pessoas convertido em json.
  renderizaDados(dados);                             //Essa função nos permitirá manipular estes dados. (converter, transformar...etc)
}

function renderizaDados(dados) {                     //Recebe os dados provenientes da promise fs.readfiles(caminho)
  dados = JSON.parse(dados);                         //Converte os dados (JSON) em um Objeto.
  dados.forEach(val => console.log(val.nome));       //Aplica um forEach, que retornará a cada laço o valor da chave nome.
}

leArquivo(caminhoArquivo);

