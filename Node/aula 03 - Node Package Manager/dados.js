
/*  Node Package Manager  
    • Dev Dependecies é uma Flag que impede que packages de desenvolvedor como "Webpack" sejam enviados juntos no deploy.
    • Toda versão que tiver o símbolo "^" significa que o Minor e o Patch poderão ser atualizados.
    • Nomenclatura das versões: "@1.5.4"
    - @         1         5         4
    - Versão    Major     Minor     Patch

    - Major > Uma versão completamente nova que pode afetar a compatibilidade.
    - Minor > Novos recursos que não afetam a compatibilidade.
    - Patch > Correção de bugs.

    Manipulando o package.json:
    1.  Instalar pacotes:                               npm i pacote
    2.  Congela Atualização Minor e Patch:              npm i pacote -E                !remove ^
    3.  Atualizar pacotes:                              npm update                     !apenas pacotes com ^
    4.  Mover para devdep:                              npm i pacote --save-dev
    5.  Mover para dependecies:                         npm i pacote --save-prod
    6.  Instalar versão específica:                     npm i pacote@1.5.4 -E
    7.  Instalar a última versão da Major específica:   npm i pacote@1.x
    8.  Desinstalar um pacote:                          npm uninstal pacote
    9.  Listar os pacotes instalados                    npm ls
    10. Listar apenas os pacotes que você instalou:     npm ls --depth=0
    11. Pacotes Desatualizados:                         npm outdated

    package.json: {
                    "name": "aula-03---node-package-manager",
                    "version": "1.0.0",
                    "description": "",
                    "main": "index.js",
                    "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                    },
                    "keywords": [],
                    "author": "",
                    "license": "ISC"
                    }

*/