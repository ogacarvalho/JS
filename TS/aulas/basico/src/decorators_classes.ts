
/* Decoradores para classes: 
    → Funções que fingem ser objetos com objetivo de adicionar ou modificar funcionalidades, sem alterar a classe original.
    ! É necessário habilita-los em tsconfig: emitDecoratorMetaData | experimentalDecorator 
*/

@decorator

class Animal {                                                                         // Classe de exemplo.
    constructor (public raca: string){}
}

//  [Constraint] → "T" representará o construtor do "alvo"
function decorator<T extends new (...args: any[]) => any>(target: T): T {              // Criando função decoradora [decorator].
    return class extends target {                                                      // Criando uma classe Anônima que extenderá a classe original.
        raca: string;                                                                  // Propriedade que será interceptada.
        constructor(...args: any[]) {                                                  // Configurando estrutura anônima com spread para os parâmetros anteriores.
            super(...args);                                                            // Instância mãe recebe os argumentos da classe anônima. [spread]
            this.raca = args[0].split('').reverse().join('');                          // Interceptação.
        }
    }
};

const animal = new Animal('poodle');
console.log(animal);



























export default 1; //module mode
