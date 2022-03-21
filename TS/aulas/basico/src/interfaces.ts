
// Interfaces, uma classe abstrata simples mas não tão simples quanto Type Alias!
// → É uma maneira de dizer quais atributos e métodos a classe deve conter, específico para modelagem de objetos.
// → A única diferênça é que com Interface temos Declaration Merging (merge de duas interfaces com mesmo nome).


interface Tipo_01 {              // → Declaration Merging
    atributo_01: string;
}

interface Tipo_01 {              // → Declaration Merging
    atributo_02: string;
    metodo(): string;
}

interface Tipo_02 {
    atributo_03: string;
}

interface Tipos extends Tipo_01, Tipo_02 {};

class Classe implements Tipos {
    constructor(public atributo_01: string, public atributo_02: string, public atributo_03: string) {};
    metodo(): string {
        return this.atributo_01 + ' ' + this.atributo_02, + ' ' + this.atributo_03;
    }
}

export const teste = new Classe('atributo_01', 'atributo_02', 'atributo_03');
