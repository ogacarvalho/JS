
// A classe é um molde para criação de objetos com métodos.
// O construtor representa as chaves que são enviadas como argumentos através dos parâmetros e geralmente são apontadas para a instância com *this*.

// Molde de um futuro objeto com métodos.
class Pessoa {
    constructor(nome, sobrenome, idade, peso){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.peso = peso;
        // todos estes parâmetros serão chaves da instância.
    }

    metodo(fala) {
        console.log(`${this.nome} ${this.sobrenome} com peso de ${this.peso}Kgs e ${this.idade} anos está falando: ${fala}`)
    }
    // O método será atribuído à instância.
}


// Gabriel é um objeto com métodos.
const gabriel = new Pessoa('Gabriel', 'Carvalho', 25, 90);
console.log(gabriel);
gabriel.metodo('MIMIMIMIMI');

