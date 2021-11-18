// Factory Functions -> Funções criadoras de Objetos

const criaPessoa = (nome,sobrenome,peso, altura) => {
    return {

        nome,
        sobrenome,
        peso,
        altura,

        // Função dentro de objeto = Método
        fala(assunto = 'Nada!'){
            return `${this.nome} está ${assunto}`        //O this se refere sempre ao sujeito da operação. 
        },

        // Getter, serve para transformar funções em atributos.
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter, serve para configurar o valor recebido pela função (que agora é um atributo)
        set nomeCompleto(valor){
            valor = valor.split(' '); //Transforma a string em Array
            this.nome = valor.shift(); //Shift para retirar o primeiro elemento do array (nome recebe ele).
            this.sobrenome = valor.join(' '); // Este método concatena os elementos de um array e os separa por uma string específica. (' ? ')
        },
        
        // É possível utilizar apenas como Getter.
        get imc(){
            const ind = this.peso / (this.altura ** 2);
            return ind.toFixed(2);
        }
    }
};

const gabriel = criaPessoa('Gabriel', 'Felipe',98, 1.76);
gabriel.nomeCompleto = 'Gabriel Felipe Carvalho de Paula';

console.log(gabriel.nomeCompleto);