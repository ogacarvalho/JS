
/* Modularização NODE (Import/Export)
O processo de exportação no node é diferente, o fazemos configurando o objeto nativo "modules";

1. console.log(module) -> Veja o objeto {}.
2. Exportando nosso código: 
-   exports.nome = NOME;
-   exports.func = falaNomes;                     !Será executado manualmente.
-   this.qualquernome = qualquercoisa;            !O this usado globalmente, conectado ao module.exports.

3. Para importar "requeremos" o módulo inteiro.
-   const modulo = require("./modulo1");          !Pasta atual, arquivo modulo1.

!Módulos instalados via NPM (Não requerem o caminho "./" apenas o NOME)
*/

const NOME = 'Gabriel'; const SOBRENOME = 'Carvalho';

const falaNomes = () => console.log(NOME,SOBRENOME);

exports.nome = NOME;
exports.sobrenome = SOBRENOME;
this.sistema = falaNomes;

//Exportando uma classe
class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}
exports.Pessoa = Pessoa;
