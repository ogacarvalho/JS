
/* Decorator: Methods (Experimental)
    → É uma maneira ainda "rústica" de interceptar métodos.
*/

function method_decorator(                                                             // Configurações do Decorator
    class_prototype: any,
    method_name: string,
    descriptor: PropertyDescriptor,
):any {
    console.log(class_prototype);
    console.log(method_name);
    console.log(descriptor);

    return { 
        value: (...args: string[]) => args + ' <- Interceptado :(' 
    };
}

class Person {
    name: string;
    surname: string;
    age: number;

    constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    @method_decorator                                                                   // Chamamos o decorator logo acima do próprio método.
    method(message: string):string {
        return `${this.name} ${this.surname} ${this.age}: ${message}`;
    }

    get fullname(): string {
        return `${this.name} ${this.surname}`;
    }

    set fullname(value:string){
        const words = value.split(/\s+/g);
        const first_name = words.shift();
        if (!first_name) return;
        this.name = first_name;
        this.surname = words.join(' ');
    }
}

const person = new Person('Gabriel', 'Carvalho', 26);
const method = person.method('Original');
console.log(method);







































export default 1;