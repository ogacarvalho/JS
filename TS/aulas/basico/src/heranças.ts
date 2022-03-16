
// Heranças em TypeScript:
// → Geralmente utilizada para polimorfismo ou re-utilização de código!

export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ) { };

    getNomeCompleto(): void {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}

// Bônus: É possível modificar um método herdado!
export class Aluno extends Pessoa {
    getNomeCompleto(): void {
        console.log(`Cliente é uma pessoa, Aluno é uma pessoa! → Polimorfismo, é quando podemos ter variações de uma mesma origem!`);
    }
};

const GABRIEL = new Aluno('Gabriel', 'Carvalho', 25, '456260598-73'); GABRIEL.getNomeCompleto(); 
