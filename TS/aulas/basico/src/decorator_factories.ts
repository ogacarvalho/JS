
/* Decorator Factories: Passando parâmetros para um decorador!
→ Para fazer isso, é necessário usar "closure" ou seja, tornar o nosso decorator anônimo e retorna-lo em uma nova função.
→ De modo prático, basta envolve-lo dentro de uma nova função cujo nome é o mesmo, e retorna-lo de maneira anônima.

*/


@decorator('A', 'B')                                                                               // Call do Decorator com Argumentos

class Animal {
    constructor (public raca: string){}
}

function decorator(value:string, value_2:string) {                                                 // A nova função, recebe o nome do decorator

    return function <T extends new (...args: any[]) => any>(target: T): T {                        // Return do decorator [agora anônimo].
        return class extends target {
            raca: string;
            constructor(...args: any[]) {
                super(...args);
                this.raca = args[0].split('').reverse().join('') + " " + value + " " + value_2;    // Interceptação com uso de parâmetros.
            }
        }
    };
}


const animal = new Animal('poodle');
console.log(animal);



























export default 1; //module mode
