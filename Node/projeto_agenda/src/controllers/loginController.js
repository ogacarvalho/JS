
const Login = require('../models/LoginModel');                                    //Login recebe dados de LoginModel.js


exports.index = (req, res) => {                                                   //Requisição da rota login/index                                             
    if(req.session.user) return res.render('login-logado');                       //Se o usuário estiver em sessão, renderiza a página "login-logado"
    return res.render('login');                                                   //Se não, renderiza a página para login.
};

exports.register = async (req, res) => {                                          //Usuário clicou em "registrar-se"         !BD === Promises

    try{
        const login = new Login(req.body);                                         //Clicou no submit, nosso server chama a func. cst.
        await login.register();                                                    //E executamos o método de registro, que acionará uma cadeia de eventos.

        if(login.errors.length > 0){                                               //Vamos exibir as mensagens de erro (se existirem)
            req.flash('errors', login.errors);                                     //Objeto "errors" em Flash, receberá os erros.
            req.session.save(function (){                                          //Salve a sessão, e redirecione a página para a anterior.
                return res.redirect('back');
            });

            return;                                                                //Quit da função, para que ela não vá para "sucesso"
        };
        
        req.flash('success', 'Seu usuário foi criado!');                           //Não houve erros, flash msgs irá mostrar o conteúdo da propriedade "success"
        req.session.save(function (){                                              //Salva a session.
            return res.redirect('back');
        });
    }catch(e){                                                                     //Se houver erros, renderiza a página 404.
        console.log(e);
        return res.render('404');
    };

};

exports.login = async (req, res) => {                                              //Usuário quer efetuar o login. !BD === Promises
    
    try{                                                                           //login recebe classe Login com parâmetros da requisição (post)
        const login = new Login(req.body); 
        await login.login();                                                       //Executa método Login() - Cadeia de eventos e submétodos.

        if(login.errors.length > 0){                                               //Se houver erros, mostre-os, e salve a sessão.
            req.flash('errors', login.errors);
            req.session.save(function (){ 
                return res.redirect('back');
            });

            return;
        };
        
        req.flash('success', 'Login bem sucedido.');                                //Flash mostra mensagem de sucesso.
        req.session.user = login.user;                                              //Sessions recebe dados do usuário.
        req.session.save(function (){                                               //Salva a session.
            return res.redirect('back');
        });
    }catch(e){
        console.log(e);
        return res.render('404');
    };

};

exports.logout = function (req, res){                                               //Usuário solicita Logout
    req.session.destroy();                                                          //Sessions apaga todos os dados relacionados ao ip.
    res.redirect('/');                                                              //Redireciona para a home.
};