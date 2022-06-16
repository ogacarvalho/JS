// Padrão de Projeto (Singleton) - Gang of Four (GOF)
// → Este padrão de projeto explora os recursos da keyword Static possibilitando criar objetos únicos, ou seja que não podem ser duplicados.
// → Seu funcionamento só é possível pois o static só pode conter dados únicos, e uma vez preenchidos nos fornece a possibilidade de realizar uma
// validação para verificar se este atributo estático por exemplo já foi preenchido, e sim voltará sempre ele. Se não aceitará o novo dado através
// de um método também estático, tornando possível criar um objeto apenas 1 vez.
// ! Independente do arquivo, se a classe já foi instanciada anteriomente e possui o dado preenchido, não poderá ser preenchido novamente.
// ! Se o constructor for privado, nem a classe pode ser instanciada, só pode ser chamada.

export class Database {
    private static database: Database;

    private constructor(
        private host: string,
        private user: string,
        private password: string
    ){}

    static getDB(host:string, user:string, password:string):Database {
        if(!Database.database) return Database.database = new Database(host, user, password);
        return Database.database;
    };

    connect():void {
        console.log(`Conectado: ${this.host} | ${this.user} | ${this.password}`);
    }
};

const DB = Database.getDB('Local', 'Gabriel C.', 'XXX-XXX'); // DB.connect();
const DB_1 = Database.getDB('Server', 'José P.', 'YYY-YYY'); // DB_1.connect();
