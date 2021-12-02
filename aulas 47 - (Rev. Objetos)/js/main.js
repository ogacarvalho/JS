/* Revisão de objetos
1.   O objeto é formado por pares de { chave: valor };
2.   É possível acessar o objeto de duas maneiras: Notação > objeto.chave || Colchetes > objeto['chave'];
2.1  O uso dos [colchetes] embora verboso é excelente pois permite o acesso a chaves dinâmicamente.
3.   É possível criar objetos com object constructor > const objeto = new Object();
4.   Para deletar chaves basta digitar > delete objeto.chave;
5.   Com for in é possível iterar o objeto e verificar o seu conteúdo.
6.   A criação automatizada (recomendada) de objetos pode ser feita com Factory / Constructor Func. ou Classes.
7.   Dentro das funções automatizadoras de objetos temos os Getters e os Setters.
7.1  Getter serve para transformar métodos em atributos
7.2  Setter, serve para configurar as "funções" do getter que agora é um atributo.
8.   O this respeita o produto (objeto) da função construtora.
9.   Variável aponta para o endereço e o endereço aponta para o valor.
10.  Para travar objetos você pode usar o Object.freeze(objeto)
*/

const objeto = { chave: 'valor' };

let database = 'chave';            //"Base de dados", possui a chave.
let chave = objeto[database];      // Desta forma, conseguimos ter acesso à uma chave remota.

// Construct Function, if you notice, we aren't using commas, only semicollon. The special feature here its the word 'new' that creates a new object automaticly and also creates a relation between 'this' and the 'subject function' plus the implicit auto-return with the constructor name.
function Object(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.method = function(){ return `Inside this function we have the "${this.name} ${this.surname}"`};

    Object.freeze(this); //--->  This feature allows to freeze any element (object).
}

const someone = new Object('Gabriel', 'Felipe', 25) // Why we need to use the "this" word ? Because when we creates a constructor function we're creating a base object for multiple purpose so that word need to respect the current 'product' of this constructor instead the "main object" or "constructor function" itself, therefore the word "this" respect the object (product) of a constructor function..

