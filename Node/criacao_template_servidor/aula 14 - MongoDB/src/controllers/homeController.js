/* Model Exemplo
1. Importaremos o nosso model.
2. HomeModel.create({com os dados a serem preenchidos no HomeModel(titulo descricao)}); -> Criará algo na base de dados.
!! Deve ser de acordo com as configurações do modelo criado (String, Number..etc)
!! O retorno da criação é uma (promise) com os dados do documento que foi criado e o *ID*.
!! Para confirmar se o dado foi criado, vá até o site da base de dados e confira "collections"
!! Toda vez que o dado for atualizado, "requisitado" irá salvar na base de dados um novo objeto.
!! Ou seja, cada atualização do create será registrada no banco de dados.

3. Para acessar/buscar os dados, apenas mudamos o HomeModel.create({}) para HomeModel.find('vazio retornará todo os dados');


*/

exports.paginaInicial = (req,res) => {
    res.render('index');
    return;
};


exports.trataPost = (req, res) => {
    res.send(req.body);
};

