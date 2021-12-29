

/* Módulos 2 - Exportação Única e Navegação entre Pastas

1. Módulos de função única, são módulos (arquivos) que possuem apenas um propósito. (Similar ao default ES6)

Navegando entre Pastas
• Pasta atual a diante: ./
• Voltar uma pasta: ../
• Retorna o caminho absoluto até o arquivo atual: console.log(__filename);
• Retorna o caminho absoluto até a pasta   atual: console.log(__dirname);
• Retorna o caminho independentemente do OS: let path = require('path') | path.resolve('__dirname');
*/

module.exports = class Animal {                                           //Essa classe será o único dado do module.exports deste arquivo.
    constructor(nome, tipo, cor){
        this.nome = nome;
        this.tipo = tipo;
        this.cor = cor;
    }

    dados() { console.log(`${this.nome} é um(a) ${this.tipo} ${this.cor}!`) };
}


