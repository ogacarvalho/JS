
/* Decorator: Propriedades
    → É uma maneira ainda "rústica" de interceptar métodos.
*/

function decorator(                                                             // Configurações do Decorator
    class_prototype: any,
    property_name: string | symbol,
):any {
    let property_value: any;
    return {
        get: () => property_value,
        
        set: (value: any) => {
            // Typegard
            if(typeof value === 'string'){
                property_value = value.split('').reverse().join('');
                return
            }
            property_value = value;
        },
    };
};

class Person {
    @decorator                                                                   // Chamamos o decorator logo acima da propriedade.
    name: string;
    surname: string;
    age: number;

    constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
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
console.log(person.name);






































export default 1;