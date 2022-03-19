
// Tipos, uma classe abstrata muito mais simples!
// → É uma maneira de dizer quais atributos e métodos a classe deve conter.

type Tipo_01 = {
    atributo_01: string;
}

type Tipo_02 = {
    atributo_02: string;
    metodo(): string;
}


class Classe implements Tipo_01, Tipo_02 {
    constructor(public atributo_01: string, public atributo_02: string) {};
    metodo(): string {
        return this.atributo_01 + ' ' + this.atributo_02;
    }
}

const teste = new Classe('atributo_01', 'atributo_02');
