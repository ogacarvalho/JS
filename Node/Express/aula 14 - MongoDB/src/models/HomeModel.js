
/* Criação teste de um Model
1. Importamos o mongoose (gerenciador do banco de dados)
2. Criamos um Schema e jogamos suas configurações.
3. Criando o Model: const HomeModel = mongoose.model('nomedomodel', schema );
4. Colocamos o model no objeto de exportação. *module.exports*
5. Agora importaremos o model no nosso homeController.
!! Continua no homeController...


!Lembrando que o MongoDB é um banco de dados NOSQL / Não relacional. (Ou seja, faça o que quiser.)
*/

const mongoose = require('mongoose');
const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true },                          //Título !precisa! ser enviado.
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);                     //Criado o model.

class Home{

}

module.exports = Home;
