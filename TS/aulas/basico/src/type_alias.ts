
// Tipos, uma classe abstrata muito mais simples!
// → É uma maneira de dizer quais atributos e métodos a classe deve conter.

type Tipo_01 = {
    atributo_01: string;
}

type Tipo_02 = {
    atributo_02: string;
    atributo_03?: string;
    metodo(): string;
}

type Tipos = Tipo_01 & Tipo_02;

class Classe implements Tipos {
    constructor(public atributo_01: string, public atributo_02: string, public atributo_03?: string) {};
    metodo(): string {
        return this.atributo_01 + ' ' + this.atributo_02;
    }
}

const teste = new Classe('atributo_01', 'atributo_02');
