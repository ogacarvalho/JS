// Super!: como ter acesso à classe mãe a partir das sub-classes?
// → Com super podemos acessar os métodos originais!

export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ) { };

    getIdade(): void {
        console.log(this.idade);
    }

    getCpf(): void {
        console.log(this.cpf);
    }

    getNomeCompleto(): void {
        console.log(`${this.nome} ${this.sobrenome}`);
    }

}

export class Aluno extends Pessoa {

    // ! Para adicionar novos atributos em uma sub-classe, primeiro preenchemos com os atributos anteriores da super classe.
    constructor( nome: string, sobrenome: string, idade: number, cpf: string, private escola: string ) {
        super(nome, sobrenome, idade, cpf);
    }

    showEscola():void {
        console.log(this.escola);
    }

    // Alteração temporária com super classe:
    getNomeCompleto(): void {
        console.log(`Modificando método herdado e retornando o método original via super!`);
        return super.getNomeCompleto();
    }
};

const GABRIEL = new Aluno('Gabriel', 'Carvalho', 25, '456260598-73', 'Lygia');
GABRIEL.getNomeCompleto(); GABRIEL.showEscola();
