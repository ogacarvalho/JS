const mongoose = require('mongoose');
const validator = require('validator'); //Pacote de validação de dados de email.


const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true },
    password: {type: String, require: true}
});


const LoginModel = mongoose.model('Login', LoginSchema);                                             //Retorna uma promise.

//A func. Construtora, vai criar objetos e métodos para validarmos os dados.
//Login é o nome do objeto, e body é uma das propriedades do objeto. (No caso do objeto vigente (this))
class Login{
    constructor(body){
        this.body = body;
        this.errors = []; //Vai controlar se o usuário pode ou não ser criado na BD.
        this.user = null;
    }
    async register(){    //A criação de dados é por padrão uma Promise logo precisamos de Async.
        this.valida();

        //Checagem da existência de erros.                     !Se passar daqui, o usuário precisa ser registrado na BD.
        if(this.errors.length > 0) return; 

        try{
            //Registro do usuário no banco de dados.               Se o usuário passar na validação, então a propriedade "user" receberá os dados.
            this.user = await LoginModel.create(this.body);        //Login{user: recebe o usuário (email/senha)} e poderá ser acessado em Controller.

        }catch(e){console.log(e)};

    }

    valida(){
        this.cleanUp();
        //Validação (Poderiamos criar um reg.exp porém já existe um pacote chamado Validator que faz tudo isso, vamos instala-lo)

        //Se o email não passar pela validação, objeto errors recebe 'Email inválido';
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

        //A senha precisa ter entre 03 e 50 caracteres.
        if(this.body.password.length < 3 || this.body.password.length > 50){
            this.errors.push('A senha precisa ter entre 3 e 50 carácteres.');
        };
    }

    cleanUp(){
        //Vai iterar os dados do body, e garantir que tudo é uma string.
        for(const key in this.body) {
            if ( typeof this.body[key] !== 'string' ){
             this.body[key] = '';  
            }
        };

        //Garantindo que nosso objeto tem somente os campos desejados. (Token não aparece mais)
        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = Login;
