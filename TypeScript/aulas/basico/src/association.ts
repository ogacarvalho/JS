
// Associação:
// → é quando associamos a nossa classe de alguma maneira à outra classe.

class Escritor {
    private _ferramenta: Ferramenta | null = null;                                                // Isto é uma associação.
    constructor(private _nome: string) { };

    set ferramenta(ferramenta: Ferramenta | null) {                                               // O setter (atributo) irá definir a ferramenta do escritor. (associação)
        this._ferramenta = ferramenta;                                                            // Ferramenta do escritor recebe o argumento do tipo Ferramenta.
    }

    get ferramenta():Ferramenta | null {
        return this._ferramenta;
    }

    escreve():void {
        if(!this._ferramenta) { return console.log('Não posso escrever sem ferramenta') };
        this._ferramenta.escrever();                                                              // Se existir uma ferramenta, acionará o método de escrever dela.
    }
}

abstract class Ferramenta {                                                                       // Classe abstrata: não instânciável.
    constructor( protected _nome: string ) { };
    abstract escrever(): void;                                                                    // Método obrigatório nas sub-classes.

    get nome():string { return this._nome; }                                                      // Getter: classe_concreta.nome;
}

// Sub-classe: Caneta  (classe concreta)
class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está escrevendo...`);
    }
}
// Sub-classe: Máquina (classe concreta)
class Maquina extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está digitando...`);
    }
}

const ferramenta_1 = new Caneta('Caneta');                               ferramenta_1.escrever();
const ferramenta_2 = new Maquina('Máquina de escrever');                 ferramenta_2.escrever();

//                                                                               setter                                        getter
const escritor = new Escritor('Gabriel');                           escritor.ferramenta = ferramenta_2;   console.log(escritor.ferramenta);    escritor.escreve();
