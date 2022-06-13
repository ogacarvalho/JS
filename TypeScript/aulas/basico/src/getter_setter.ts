
// Getter & Setter
// → O getter serve para você acessar o valor, e modificá-lo se necessário.
// → O setter serve para você definir um novo valor.

export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        private _cpf: string,                                                 // Por convenção o atributo que sustenta, recebe _underline.
    ) { };

    get cpf(): string {                                                       // Método nativo que se comporta como atributo.
        return this._cpf.replace(/\D/g, '');
    }

    set cpf(valor: string) {                                                  // Método nativo que se comporta como atributo.
        this._cpf = valor;
    }

}
const EXEMPLO = new Pessoa('Gabriel', 'Felipe', 25, '456.260.598-73');



//          SETTER                                  GETTER
EXEMPLO.cpf = '123.456.789-00'; console.log(EXEMPLO.cpf);