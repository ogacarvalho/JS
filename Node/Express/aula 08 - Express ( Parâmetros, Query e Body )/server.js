/*  
Requisições de Parâmetros, Query e Body 

página  |parâmetros |query strings par de chave e valor, que começam com ? e continuam com &.
profiles/12345678910?campanha=googleads&nome_campanha=seila

*/

const express = require('express');
const app = express();

//Solicitando que o express trate os dados do req.body. Ou seja, estamos pedindo que o app trate o body das REQUISIÇÕES, o que nos permitirá acessá-las e usa-las como bem quisermos.
app.use( express.urlencoded( {extended: true} ) );

app.get('/form', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" placeholder = "     digite aqui seu nome" name="nome">
    <button> Enviar Formulário </button>
    </form>`);
});

//Acessos aos dados do GET
//Para adicionar parâmetros use --> :
//Para que o parâmetros seja opcional use --> ?
//Acessando os parâmetros res.send(req.params); (retorna um JSON)
//Adicionando query strings --> ?nome=Gabriel&sobrenome=Carvalho
//Acessando as query strings --> req.query
//Lembrando que tanto query quanto params no geral retornam objetos que podem ser acessados especificamente com ponto.

app.get('/teste/:parametro_1?/:parametro_2?', (req,res) => {
    res.send(req.query.site); //Acessando as querys.
});



//Acessos aos dados do POST, portanto responderemos a requisição com o método POST, e os dados da requisição, neste caso serão usados no corpo do arquivo post que enviaremos como resposta.
app.post('/', (req, res) => {
    console.log(req.body);     //Após tratado com app.use agora temos acesso aos dados do objeto (body).
 res.send(`Olá ${req.body.nome}<br> seu formulário foi enviado!`) //"nome" está vindo da tag name no input.
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
});


