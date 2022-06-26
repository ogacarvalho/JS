// Classe humana
// Atributos físicos
// Atributos emocionais
// Atributos individuais [personalidade]
// Que interferem uma % x [tendências]
// Resultando em escolhas.
// Que devem ser armazenadas de alguma forma.
// E isso deve interferir.

// Tudo com base em alguns tipos de Math.random()
// 1. 1 | 0
// 2. T | F
// 3. 1 | 0 tendencioso.

export class Human {
    private memoria: string[] = [];
    constructor(){};
    
    pergunta: (question:string) => void = (question:string) => {
        const memoria = this.memoria.includes(question);
        
        const tipo_de_pergunta_ACHOU = question.includes('achou') || question.includes('acha') || question.includes('achando');
        const tipo_de_pergunta_GOSTA = question.includes('gosta') || question.includes('gostou');
        const tipo_de_pergunta_JA = question.includes('já');
        const local_memoria = this.memoria.indexOf(question);
        let resposta: any;

        if(tipo_de_pergunta_ACHOU && memoria){
            if(this.memoria[local_memoria + 1] == 'sim') this.memoria[local_memoria + 1] = 'achei Legal';
            if(this.memoria[local_memoria + 1] == 'não') this.memoria[local_memoria + 1] = 'não achei muito legal';

            resposta = `Você já me perguntou isso não? Eu lembro que respondi que ${this.memoria[local_memoria + 1]}!`;
        };

        if(tipo_de_pergunta_ACHOU && !memoria){
            const escolha = Math.round(Math.random() * 1);
            let decisao: string = escolha? 'sim':'não';
            resposta = escolha? `Eu acho top.`: `Eu não gosto muito.`;
            this.memoria.push(question); this.memoria.push(decisao);
        };
        
        if(tipo_de_pergunta_GOSTA && memoria){
            if(this.memoria[local_memoria + 1] == 'sim') this.memoria[local_memoria + 1] = 'eu gosto muito!';
            if(this.memoria[local_memoria + 1] == 'não') this.memoria[local_memoria + 1] = 'que não gosto!';

            resposta = `Você já me perguntou isso não? Eu lembro que respondi que ${this.memoria[local_memoria + 1]}!`;
        }

        if(tipo_de_pergunta_GOSTA && !memoria){
            const escolha = Math.round(Math.random() * 1);
            let decisao: string = escolha? 'sim':'não';
            resposta = escolha? `Eu adoro!`: `Eu não curto muito.`;
            this.memoria.push(question); this.memoria.push(decisao);
        }


        if(tipo_de_pergunta_JA && memoria){
            if(this.memoria[local_memoria + 1] == 'sim') this.memoria[local_memoria + 1] = 'Já!';
            if(this.memoria[local_memoria + 1] == 'não') this.memoria[local_memoria + 1] = 'Ainda não!';

            resposta = `Você já me perguntou isso não? Eu lembro que respondi que ${this.memoria[local_memoria + 1]}!`;
        }

        if(tipo_de_pergunta_JA && !memoria){
            const escolha = Math.round(Math.random() * 1);
            let decisao: string = escolha? 'sim':'não';
            resposta = escolha? `Eu já!`: `Nunca :/`;
            this.memoria.push(question); this.memoria.push(decisao);
        }

        return console.log(`Pergunta: ${question}
        Resposta: ${resposta}`);
    }
};

const humano = new Human();
humano.pergunta('Você gosta de viajar?');
humano.pergunta('Você gosta de esquiar?');
humano.pergunta('Você já assistiu The Office?');
humano.pergunta('Você já assistiu The Office?');
humano.pergunta('Você já assistiu Breaking Bad?');
humano.pergunta('Você já assistiu Nauticos?');
humano.pergunta('Você já comeu banana split?');
humano.pergunta('Você já comeu banana split?');
humano.pergunta('O que você acha dos humanos?');


// Sugestões:
// Math random nas respostas para cada tipo, de acordo com o tipo de pergunta, tipo "eu gosto, eu adoro";