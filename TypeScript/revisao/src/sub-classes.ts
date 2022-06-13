// Sub-Classes - Uma herança tunada.
// → Em resumo as sub-classes são iguais as heranças porém com a possibilidade de adicionar atributos e usar a palavra chave (super).
// → O único requisito é que em sub-classes precisamos atribuir os parâmetros originais como argumentos do super() para então, adicionar novos atrbs.
// → A palavra super() representa a classe mãe, e podemos inclusive retornar metodos originais.
// → As instâncias das sub-classes bem com das heranças possuem acesso à todos os métodos publicos, originários.

export class ClasseMae {
    constructor( public a: string, public b: string, protected c: string, private d: string ){};

    getABCD():string {
        return `${this.a}+${this.b}+${this.c}+${this.d}`;
    }
};

export class SubClasse extends ClasseMae {
    constructor( a:string, b:string, c:string, d:string, public e: string ) { super(a,b, c, d) };

    getABCDE():string {
        return super.getABCD()+`+${this.e}`;
    }
};
