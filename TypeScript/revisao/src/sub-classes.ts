// Sub-Classes - Uma herança tunada.
// → Em resumo as sub-classes são iguais as heranças porém com a possibilidade de adicionar atributos e usar a palavra chave (super).
// → O único requisito é que em sub-classes precisamos atribuir os parâmetros originais como argumentos do super() para então, adicionar novos atrbs.
// → A palavra super() representa a classe mãe, e podemos inclusive retornar metodos originais.
// → As instâncias das sub-classes bem com das heranças possuem acesso à todos os métodos publicos, originários.

export class ClasseMae {
    constructor( public a: string, public b: string ){};

    getAB():void {
        console.log(`${this.a}+${this.b}`);
    }
};

export class SubClasse extends ClasseMae {
    constructor( a:string, b:string, public c: string ) { super(a,b) };

    getABC():void {
        return super.getAB();
    }
};
