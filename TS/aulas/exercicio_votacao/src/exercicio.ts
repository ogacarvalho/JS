
// Base estrutural: representará um objeto de opção de voto que será usado dentro de um Array.
type VotationOption = {
    numberOfVotes: number;
    option: string;
};

// Sistema de votação, cujo parâmetro será a chamada da votação, e a propriedade privada, as opções de votos.
export class Votation {
    private _votationOptions: VotationOption[] = [];                         // Armazena as opções de votos, com base estruturada (tipo específico).
    constructor(public details: string) {};                                  // Chamada da votação.

    addVOP(VotationOption: VotationOption): void {                           // Este método adiciona as opções de voto, no array da propriedade privada.
        this._votationOptions.push(VotationOption);                          // A propriedade da instância, recebe opção de voto.
    }

    vote(votationIndex: number):void {                                       // Sistema que adiciona votos via index.
        if(!this._votationOptions[votationIndex]) return;                    // Se não houver index, retorna.
        this._votationOptions[votationIndex].numberOfVotes += 1;             // Se houver, soma 1.

    }

    get votationOptions(): VotationOption[] {                                // BYPASS na propriedade privada, para disponibilizar os resultados.
        return this._votationOptions
    }
}


// Aplicativo de votação:
export class VotationApp { 
    private votations: Votation[] = [];                                      // Propriedade do sistema, que poderá receber votações, de base estruturada específica.

    addVotation(votation: Votation): void {                                  // Método para adicionar objeto de votação à propriedade privada do sistema.
        this.votations.push(votation);
    }

    results(): void {                                                        // Itera sob as possíveis votações, e as loga no sistema.
        for (const votation of this.votations) {
            console.log(votation.details);

            for (const votationOption of votation.votationOptions) {         // Itera sobre o get que bypassa os resultados e os loga tbm.
                console.log(votationOption.option, votationOption.numberOfVotes)
            }
        }
    }
}

// Abrindo votação:
const voto = new Votation('Qual sua linguagem de programação favorita?');

// Adicionando opções de votos:
// addVOP: Método que recebe um array de objetos do type VotationOption{}
voto.addVOP({option: 'TypeScript', numberOfVotes: 0}); const typescript = 0;           // Nomeando índices       
voto.addVOP({option: 'JavaScript', numberOfVotes: 0}); const javascript = 1; 
voto.addVOP({option: 'Python', numberOfVotes: 0});         const python = 2;

// Votações:
voto.vote(typescript);
voto.vote(typescript);
voto.vote(javascript);

// "Aplicativo:"
const votationApp = new VotationApp;                                                    // Gera instância do Aplicativo
votationApp.addVotation(voto);                                                          // Adiciona votação.
votationApp.results();                                                                  // Mostra Resultados.