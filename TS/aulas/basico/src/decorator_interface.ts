
/* Decorator com Interfaces: Um modo simples.
    → Para facilitar o uso do Decorator, podemos tipar o generic que representava o construtor, e depois re-utiliza-lo.
*/

interface Constructor { new (...args: any[]): any };                         // Tipamos o constructor, para facilitar o uso do decorators.                                      

@decorator('Interceptado :(')

class Animal {
    constructor (public raca: string){}
}

function decorator(parametro: string) {                                      // Closure no Decorator para uso dos parâmetros.

    return function (target: Constructor) {                                  // Função anônima, cujo parâmetro é a interface Constructor (Representação da Classe)
        return class extends target {                                        // O retorno é o decorador, que na verdade é uma extensão da classe representada.
            raca: string;
            constructor(...args: any[]) {
                super(...args);
                this.raca = args[0].split('').reverse().join('') + " " + parametro;    // Interceptação com uso de parâmetros.
            }
        }
    };
}

const animal = new Animal('poodle');



























export default 1; //module mode
