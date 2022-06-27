// O que é o ser humano?
// O humano nasce com atributos individuais e genéticos, dos quais são alguns mútaveis e outros não. O ser humano, é a reação destes atributos à
// Experiências voluntárias ou não, e o armazenamento das sinteses destas reações à memória.
// Na qual será utilizada para compor as futuras decisões baseadas na qualidade da reação alocada na memória, com o objetivo. 
// Objetivo do qual é variável de acordo com o tipo de circunstância, sendo ela prazer, necessidade ou sonho, a qualificação do que é bom ou ruim
// é altamente baseado nas primeiras experiẽncias.

// A vida está sendo proporcionada aos humanos através de um enorme e complexo eco-sistema equilibrado o suficiente para tal, onde há diversas
// outros tipos de vida, porém todos seguindo a mesma regra básica: Ganharam a vida, ou seja a oportunidade de aprender e reagir a experiẽncias
// vonluntárias e involuntárias.

// Machine learn, é o disparo aleatório de tentativas e o armazenamento das melhores e o seu re-disparo de maneira cumulativa, iniciando-se sempre
// de onde parou.


// O desafio é traduzir o texto em código, ou seja submeter um recipiente de reações, à experiências involuntárias e lhe dar o poder de
// aprender a escolher, munido de uma memória sempre ativa através do push aleatório de combinações de palavras [ideias][influenciaveis] que se traduziram
// em reações positivas ou negativas e em seguida produzindo ou não ações de acordo com o nível emocional causado pelo "cálculo" destas idéias.
// Idéias originadas internamente ou externamente.

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