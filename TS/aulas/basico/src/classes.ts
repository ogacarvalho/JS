// Classes TS → A única diferença é que precisamos configurar o parâmetros antes do constructor:
// Configurações: 
// Public   → Acessível a qualquer pessoa (redundante)
// readonly → Não modificável.

// Modo longo: precisa fazer tudo.
export class Empresa {
    public readonly name: string;                              // Configurando atributos.
    private readonly colaboradores: Colaborador[] = [];        // Atributo privado que pode ser usado via método. 
    protected readonly cnpj: string;

    constructor(name: string, cnpj: string){
        this.name = name;
        this.cnpj = cnpj;
    }

    public addColaborador(colaborador: Colaborador):void {
        this.colaboradores.push(colaborador);                  // Atributo privado recebe parâmetro do tipo "Classe Colaborador" via método.
    }

    public showColaboradores():void {
        for ( const colaborador of this.colaboradores){
            console.log(colaborador);
        }
    }

};

// Modo curto: Configura, Define e Instância automaticamente.
export class Colaborador {
    constructor (public readonly nome: string, public readonly sobrenome: string) {}
};

const enterprise = new Empresa('Enterprise LTDA', '31739873987'); 
const colaborador_1 = new Colaborador('Gabriel', 'Carvalho');

enterprise.addColaborador(colaborador_1);
enterprise.showColaboradores();
