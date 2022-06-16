// Palavra-chave: Static
// → Usado quando você quer criar métodos/atributos que são exclusivos da classe e não podem ser modificados, ou seja que apresentem informações estáticos.
// → Usado para configurações ou valores padrão.

export class Exemplo {
    static atrb_estatico: string = `Não sou instânciável, não é possível me herdar e não é possível me modificar. Numero da sorte: ${(Math.random() * 100).toFixed(0)}`;

    constructor(){};

    static metodo_estatico():string {
        return `Não sou instânciável, não é possível me herdar e não é possível me modificar. Numero da sorte: ${(Math.random() * 100).toFixed(0)}`;
    }

};