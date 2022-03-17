
// Classes Abstratas:
// → faz com que a classe não possa ser instanciada diretamente, apenas via sub-classes (classes concretas).

// Método Abstrato:
// → Obriga que as instâncias tenham este método e o desenvolva.
// → Não pode ter corpo na classe mãe, este corpo deverá ser desenvolvido nas sub-classes. (classes concretas).

// Atributo Abstrato:
// → Todas as instâncias são obrigadas a implementar.


abstract class Personagem {                                                                          // Classe abstrata: não pode ser usada diretamente.
    protected abstract guild: string;                                                                // Atributo abstrato: deve existir obrigatoriamente nas sub-classes.

    constructor (
        protected nome: string,
        protected ataque: number,
        protected vida: number,
    ) {};

    atacar(personagem:Personagem):void {
        this.fala();
        console.log(`${this.nome} está atacando ${personagem.nome}!`)
        personagem.perder_vida(this.ataque);
    }

    perder_vida(ataque: number){
        this.vida -= ataque;
        console.log(`${this.nome} recebeu dano e está com ${this.vida} de vida!`);
    }

    abstract fala():void                                                                             // Método abstrato: obrigatório nas sub-classes.
}

class Guerreira extends Personagem {
    protected guild = 'The Castle \u{1F9DD}';
    fala():void {
        console.log(`Guild: ${this.guild}`);
        console.log('Guerreira: Eu vou te destruir!');
    }
};
class Monstro extends Personagem {
    protected guild = 'The Monsters \u{1F9DF}';
    fala():void {
        console.log(`Guild: ${this.guild}`);
        console.log('Monstro: AWRRRR!');
    }
};

const guerreira = new Guerreira('Guerreira', 100, 1000);                                             // classe concreta ( ...new Sub-classe )
const monstro = new Monstro('Monstro', 87, 1000);                                                    // classe concreta
guerreira.atacar(monstro); monstro.atacar(guerreira);