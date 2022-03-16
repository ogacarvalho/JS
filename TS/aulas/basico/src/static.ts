
// Métodos Estáticos:
// O método estático é de uso exclusivo da classe, e não pode ser acessado pelas instâncias.
// → Pode ser usado para criar configurações exclusivas da classe.

// Atributos Estáticos:
// O atributo estático é de uso exclusivo da classe, e não pode ser acessado pelas instâncias.
// → Pode ser usado como um valor padrão.

export class Pessoa {

    static idade_default = 0;                                                    // Valor padrão.
    static cpf_default   = '000.000.000-00';                                     // Valor padrão.

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string,
    ) { };

    static shorterVersion(nome: string, sobrenome: string):Pessoa {              // Por exemplo, instânciar a classe com menos dados.
        return new Pessoa(nome, sobrenome, Pessoa.idade_default, Pessoa.cpf_default);
    }
}

const exemplo = new Pessoa('Gabriel', 'Felipe', 25, '456260598-73');              

const exemplo_2 = Pessoa.shorterVersion('Gabriel', 'Carvalho');                   console.log(exemplo, exemplo_2);