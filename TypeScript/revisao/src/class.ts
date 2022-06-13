// Classes: São funções criadora de objetos, que servem para criarmos objetos em json que entregaremos ao front-ent.
// As Classes permitem a criação de objetos complexos com métodos e atributos vivos.
// É fundamental a compreensão de classes.
// É importante ressaltar que classes em typescript possui a configuração dos atributos primeiro.
// Em seguida, temos o constructor que é onde trabalhamos com os parâmetros de referência e fazemos as devidas atribuições.
// Feito isso, temos os métodos, que são funções exclusivas da classe que farão coisas específicas, com os dados da classe ou dos parâmetros.


export class Empresa {                                         // O export serve para que possamos acessar esta classe de outro arquivo.
    public readonly nome: string;                              // Modificadores de acesso servem para ajustar o acesso de um atributo.
    private readonly colaborador: Colaborador[] = [];        
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string){
        this.nome = nome;
        this.cnpj = cnpj;
    }

    public addColaborador(colaborador: Colaborador):void {
        this.colaborador.push(colaborador);
    }

    public showColaborador():void {
        for(const colaborador of this.colaborador){
            console.log(colaborador);
        }
    }
}

// Classe Curta, geralmente utilizada para casos onde temos poucos parâmetros para trabalhar, então fazemos a declaração dos atributos no próprio construtor usando o mesmo,
// nome do parâmetro como do atributo, no entanto só configuramos [obrigatório] o acesso através dos modificadores de acesso, dizendo se vai ser assim ou assado.

export class Colaborador {
    constructor(public readonly nome: string, public readonly sobrenome: string){};
};