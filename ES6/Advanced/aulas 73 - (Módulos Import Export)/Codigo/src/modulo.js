/* 
Módulo Exemplo - Exportação
! Sempre apelide as exportações.

Exportação Direta
• Basta adicionar o export atrás do objeto desejado, e ele poderá ser importado normalmente.


*/

//Exportação Conjunta
const nome      = 'Gabriel';
const sobrenome = 'Carvalho'; 
const idade     = 25;


function soma(x,y){
    return x + y;
};
export {nome as i_nome, sobrenome as i_sobrenome, idade as i_idade, soma as i_soma};


//Exportação Direta
export const variavel = 'Variável';
export const funcao = () => 'Sou um Função exportada diretamente'; 
export class Classe {
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    method(){
        return console.log(`${this.a}, ${this.b}, ${this.c} sou uma classe e fui exportada diretamente.`)
    }
};
export const outro     = 'exemplo';
export const outros    = 'exemplos';

//Exportação Default
export default () => `Exportação Default: () => ...`;