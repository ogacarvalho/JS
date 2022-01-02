/* Home Controller
Todas as requisições relacionadas a página home, provenientes da porta 3000 serão roteirizadas para este módulo, que ficará responsável por decidir as ações necessárias para cada tipo de requisição.
*/

exports.paginaInicial = (req,res, next) => {
    res.render('index')
};


exports.trataPost = (req, res, next) => {
    res.send(`Olá, ${req.body}!<br> Recebemos o seu formulário!`);
}