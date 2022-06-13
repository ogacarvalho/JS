// Getters e Setters!
// Métodos usados para tratar atributos privados de maneira segura ou seja sem alterar o input principal.
// O Get captura o atributo privado, e permite que você através do método, tenha acesso.
// O Set captura o atributo privado, e atribui um argumento á ele.

export class Pessoa {
    constructor(
        public name: string,
        private cpf: string,
    ){};

    getCPF():string {
        return this.cpf.replace(/\D/g, ''); // remove todos os simbolos por nada.
    }

    setCPF(valor:string):string {
        return this.cpf = valor;
    }
};
