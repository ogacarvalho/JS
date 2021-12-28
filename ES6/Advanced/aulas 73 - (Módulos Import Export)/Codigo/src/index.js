
/* Modulos Import | Export
São excelente pois fornecem o máximo controle e privacidade.
! Só pode ter 01 Default por arquivo.
! Durante a exportação ou importação sempre os apelide: ( i_ = imported );

Importação / Exportação - Básico
• Após definir no mod. de exportação e apelidar para evitar conflitos, realizamos a importação:
> import { i_variável, i_função, ...  } from './modulo';
• Para importar todos os exports:
> import * as nomeescolhido from './modulo';

Exportação Direta
• Basta adicionar o export atrás do objeto desejado, e ele poderá ser importado normalmente. (recomendado)

Default
Para exportar uma função como default:
> export default () => ...

Para exportar uma variável como default:
> export {variavel as default, x..., y..., z...};

Para importar o default:
> import nome from './modulo';
! Não usa chaves {}.

*/

//Importação clássica:
import {
    i_nome,
    i_sobrenome,
    i_idade,
    i_soma
} from './modulo'; 

console.log(i_nome, i_sobrenome, i_idade, i_soma(5,5));


//Importando objetos de exportação direta:
import {
    variavel as i_variavel,
    funcao as i_funcao,
    Classe as i_Classe
} from './modulo';

let classeExportada = new i_Classe(1,2,3);
classeExportada.method();
console.log(i_variavel, i_funcao());


//Importação Default:
import padrao, {outro, outros}from './modulo';
console.log(padrao(), outro, outros);

