// Construtor de Modelos Home para BD.
// Tudo relacionado a base de dados e modelagem de Collections/Tabelas será nesta pasta.
// Que será exportada e utilizada pelo Controller para que ele defina qual view e model a requisição da rota indicada irá utilizar.

//Importação do recurso de Modelagem da tabelas.
const mongoose = require('mongoose');

//Exemplo de uma Collection/Tabela
const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true },
    descricao: String
});

//Armazenamento (atribuição de um modelo)
const HomeModel = mongoose.model('Home', HomeSchema);

//Exemplo vázio de uma classe que será utilizada em nosso BD.
class Home{

}

module.exports = Home;
