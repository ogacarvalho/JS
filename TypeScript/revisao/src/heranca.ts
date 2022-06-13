// Heranças TypeScript
// → Geralmente utilizamos heranças para complementar uma classe existente, ou seja a modificação sem comprometer a segurança do sistema.
// → No entanto, a instância deverá receber os mesmos argumentos solicitados pela classe mãe.
// → Através da herança é permitido realizar modificações em métodos existentes, e substitui-los de maneira como quiser.
// → A criação de uma herança é somente uma nova classe com a palavra-chave extends. [Extensão].

export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        private cpf: string,
    ){};

    get_nome_completo():void { console.log(`Meu nome é ${this.nome} ${this.sobrenome}!`); };
};

export class Aluno extends Pessoa {
    get_nome_completo(): void {
        console.log('Quem usar a instância herdada "Aluno" vai estar utilizando um método modificado.');
    }
};