
// Padrão de projeto (Singleton): 
// → Só será possível criar uma instância caso ela não exista anteriormente.

//                                                                                                Funcionamento:
class Database {
    private static database: Database;                                                            // Atributo estático, armazena a própria classe (objeto).

    private constructor(                                                                          // Construtor e atributos privados, não podem ser acessados de fora.
        private host: string,                                                                     
        private user: string,
        private password: string,
    ) { };
//                                                                                                Método estático & publico:
    static getDB(host: string, user: string, password: string): Database {                        // Argumentos recebidos no padrão Database, devem ser validados.
        if (!Database.database) return Database.database = new Database(host, user, password);    // Não há registro? Então registre, e o retorne.
        return Database.database;                                                                 // Há registro? retorne-o.

    }                                                                                             // ! Desta maneira, não será possível sobrescrever os dados.

    connect(): void {                                                                             // Método completamente acessível.
        console.log(`Conectado: ${this.host} | ${this.user} | ${this.password}`);
    }

}

const DB = Database.getDB('Local', 'Gabriel C.', '123-456');                                      DB.connect();
const DB_1 = Database.getDB('Localidade', 'José', '1234-256');                                    DB_1.connect();

// Basicamente:
// Estamos acessando um método de um objeto protegido, que verifica se os argumentos já existem, se não então os registra.