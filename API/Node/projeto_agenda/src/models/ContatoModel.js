const mongoose = require('mongoose');                                                                 //Recurso de Comunicação com Banco de Dados
const validator = require('validator');                                                               //Recurso de Validação de Email.


const ContatoSchema = new mongoose.Schema({                                                           //Molde de inserção de dados JSON no MongoDB.
    nome:      {type: String, required: true },
    sobrenome: {type: String, require: false, default: ''},
    email:     {type: String, require: false, default: ''},
    telefone:  {type: String, required: false, default: ''},
    criadoEm:  {type: Date, default: Date.now}
});


const ContatoModel = mongoose.model('Contato', ContatoSchema);                                        //"Contato" recebe molde "ContatoSchema" !Método Mongoose.

function Contato(body){                                                                               //Função Construtora( Parâmetros da requisição )
    this.body = body;                                                                                 //Corpo da requisição = Parâmetros da requisição.
    this.errors = [];                                                                                 //Erros = Array vazia.
    this.dados = null;                                                                                //Dados = inicia nulo.
};

//Prototype -> Local no qual armazenamos métodos que poderão ser futuramente acessados via herança.
Contato.prototype.register = async function(){                                                        //Método de Registro   !BD === Promises
    this.valida();                                                                                    //Aciona método de validação desta classe.
    if(this.errors.length > 0) return;                                                                //Erros? Retorna.
    this.dados = await ContatoModel.create(this.body);                                                //Erros False? Registra no MongoDB dados recebe -> objeto {modelado}.

};


Contato.prototype.valida = function (){                                                               //Método de validação.
    this.cleanUp();                                                                                   //Executa CleanUp.
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');   //Short.Circuit. Se há email e da erro na validação, push dos erros.
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório');                              //Não há nome e não há telefone? -> Erros!
    if(!this.body.email && !this.body.telefone){
        this.errors.push('Ao menos uma forma de contato precisa ser enviado: e-mail ou telefone.');
    }
}


Contato.prototype.cleanUp = function (){                                                              //CleanUp
    for(const key in this.body) {                                                                     
        if ( typeof this.body[key] !== 'string' ){                                                    //Se o conteúdo de alguma chave for diferente de string...
         this.body[key] = '';                                                                         //Então, a chave recebe "".
        };
    };

    this.body = {                                                                                     //Tudo correto? Então o formato do corpo da req. será assim:
        nome:      this.body.nome,
        sobrenome: this.body.sobrenome,
        email:     this.body.email,
        telefone:  this.body.telefone
    };
};

Contato.prototype.edit = async function (id){                                                        //Edit recebe "id".
    if(typeof id !== 'string') return;                                                               //ID diferente de string? Return.
    this.valida();                                                                                   //Checa validação novamente.
    if(this.errors.length > 0) return;                                                               //Se houver erros retorna.
    this.dados = await ContatoModel.findByIdAndUpdate(id, this.body, {                               //Não há erros? -> dados recebe contato atualizado.
        new: true //Quando terminar retorne os dados atualizados.
    });
};

//Métodos estáticos não vao para o Prototype, logo não são instânciados, e nem acessados via herança.
Contato.buscaPorId = async function(id){                                                             //Buscará pelo id no banco de dados.
    if(typeof id != 'string') return;                                                                //Diferente de string? -> retorna.
    const contato = await ContatoModel.findById(id);                                                 //Constante "contatos" recebe contato "encontrado"
    return contato;                                                                                  //Retorna a constante.
};

Contato.buscaContatos = async function(){                                                            //Busca Contatos (todos por data de criação)
    const contatos = await ContatoModel.find()                                                      //Constante recebe contatos do banco de dados.
    .sort({ criadoEm: -1 })                                                                          //organizados por data de criação, decrescente.
    return contatos;                                                                                 //Retorna a constante.
};

Contato.delete = async function(id){                                                                 //Função deletar recebe parâmetro ID.
    if(typeof id != 'string') return;                                                                //ID diferente de string? -> Retorna.
    const contato = await ContatoModel.findOneAndDelete({_id: id});                                  //Constante recebe atualização sobre a tentativa de apagar com id.
    return contato;                                                                                  //Retorna a constante.
};



module.exports = Contato;                                                                             //Arquivo, exporta a Classe Contato.
