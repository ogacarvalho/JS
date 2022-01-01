/* Home Controller
Todas as requisições relacionadas a página home, provenientes da porta 3000 serão roteirizadas para este módulo, que ficará responsável por decidir as ações necessárias para cada tipo de requisição.
*/

exports.paginaInicial = (req,res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" placeholder = "     digite aqui seu nome" name="nome">
    <button> Enviar Formulário </button>
    </form>`);
};


exports.trataPost = (req, res) => {
    res.send(`Olá, ${req.body}!<br> Recebemos o seu formulário!`);
}