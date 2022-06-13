
// Modificador de Acesso: Protected
// → Permite que as sub-classes tenham acesso aos atributos.
// ! Private: não permite acesso nenhum fora da super-classe.

export class Empresa {
    public readonly name: string;
    protected readonly colaboradores: Colaborador[] = [];        // "colaboradores" receberá um [], do tipo "Colaboradores[]"
    private readonly cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    // Método que adiciona o objeto do tipo Colaborador à um array de Objetos do tipo Colaborador.
    addColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);                  // Atributo privado recebe parâmetro do tipo "Classe Colaborador" via método.
    }

    // Mostra array de objetos do tipo Colaborador.
    showColaboradores(): void {
        console.log(this.colaboradores);
    }

};

// Essa classe será usada para estabelecer um padrão ou melhor um "tipo" de objetos.
export class Colaborador {
    constructor(public readonly nome: string, public readonly sobrenome: string) { }
};

// Primeira sub-classe "Udemy" do tipo "Empresa === { nome, cnpj }"
export class Udemy extends Empresa {
    constructor() {
        super('Udemy', '000.000/0001-10'); // argumentos para preencher o tipo.
    }

    // O método retornará um elemento do tipo Colaborador, logo o tipo do método deve ser o mesmo do seu retorno.
    // Existe a possibilidade de não existir, logo é preciso validar.
    removeColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop();
        if (colaborador) return colaborador; // se existir, remova.
        return null;
    }

}

const enterprise = new Empresa('Enterprise LTDA', '31739873987');
const colaborador_1 = new Colaborador('Gabriel', 'Carvalho');
const colaborador_2 = new Colaborador('Gabriel', 'Carvalho');

enterprise.addColaborador(colaborador_1);
enterprise.addColaborador(colaborador_2);
enterprise.showColaboradores();
