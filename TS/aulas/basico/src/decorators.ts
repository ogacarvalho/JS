
/* Decoradores para classes: 
    → Funções que fingem ser objetos com objetivo de adicionar ou modificar funcionalidades, sem alterar a classe original.
    ! É necessário habilita-los em tsconfig: emitDecoratorMetaData | experimentalDecorator 
*/

class Animal {                                                                                  // Classe de exemplo.
    constructor (public raca: string){}
}

function decorator<T>(target: T) {                                                              // Criando função decoradora [decorator].
    console.log('Interceptado :(')
    return target;
};

const Animal_decorator = decorator(Animal);                                                     // Atribuição de classe ao decorator.

const animal = new Animal_decorator('poodle');
console.log(animal);



























export default 1; //module mode
