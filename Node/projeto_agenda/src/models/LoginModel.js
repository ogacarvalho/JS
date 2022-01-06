const mongoose = require('mongoose');
const validator = require('validator'); //Pacote de validação de dados de email.
const bcryptjs = require('bcryptjs');


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

    async login(){
        this.valida();
        if(this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email });

        if(!this.user) {
            this.errors.push('Usuário não existe.')
            return;
        }

        if( !bcryptjs.compareSync(this.body.password, this.user.password) ){
            this.errors.push('Senha inválida.');
            this.user = null; //Garantir que o usuário continue sendo nulo enquanto não acertar tudo.
            return;
        };

        //Se passar aqui daqui, criaremos uma sessão no controller.

    }

    async register(){                                                          //A criação de dados é por padrão uma Promise logo precisamos de Async.
        this.valida();
        if(this.errors.length > 0) return;                                     //Se der erro nos dados puros do usuário, será parado aqui. (Validação Dupla)

        await this.userExists();
        if(this.errors.length > 0) return;                                      //Não há erros nos dados puros, então verifique o e-mail.

        const salt = bcryptjs.genSaltSync();                                    //Executa o salt.
        this.body.password = bcryptjs.hashSync(this.body.password, salt)        //Gera o hash no password, antes de registrar.
        this.user = await LoginModel.create(this.body);                         //Após ser validado e encriptado, podemos registrar o usuário, no banco de dados.
    }

    async userExists(){
        this.user = await LoginModel.findOne({ email: this.body.email });          //Procure nos e-mails da base de dados por este e-mail.
        if(this.user) this.errors.push('Usuário já existe.');                      //Já existe? Lança o erro.
        
    };

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
