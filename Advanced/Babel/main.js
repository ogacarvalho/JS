
/* Aqui temos o script que será transpilado via Babel. (bundle.js)
Instalação
1. Iniciamos a gerenciados de pacotes do node:
-> npm init -y
2. Após iniciado, instalamos o babel:
-> npm install --save-dev @babel/cli @babel/preset-env @babel/core
3. Após instalado, podemos opcionalmente ignorar a pasta modules:
-> cria arquivo: .gitignore > node_modules;

Transpilação
1. Na pasta do arquivo, digite no terminal:
-> npx babel arquivo.js -o bundle.js --presets=@babel/env

Atualização do código
Ao invés de toda vez, realizarmos a transpilação, podemos automatizar o processo, através do package.json.
1. Em "script" criaremos uma nova chave com o seguinte código:
-> "babel ./main.js -o ./bundle.js --presets=@babel/env -w"
!. Flags: -o (output) -w (watching) - toda vez que salvar o arquivo main, o -w irá recompilar o bundle.

2. Código criado, agora vamos ativar o código:
-> npm run babel
!. Isso fará com que ele fique assistindo o código.
!. Para sair ctrl + c
*/

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

const gabriel = new Pessoa ('Gabriel', 'Carvalho');
console.log(gabriel);