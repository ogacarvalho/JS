
//Importando qualquer dado do exports de LoginModel
const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado');
    return res.render('login');
};

//Usando constructor vamos passar os dados por ele e validá-los.
exports.register = async (req, res) => {
    
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
        
        req.flash('success', 'Seu usuário foi criado!');
        req.session.save(function (){ 
            return res.redirect('back');
        });
    }catch(e){
        console.log(e);
        return res.render('404');
    };

};

exports.login = async (req, res) => {
    
    try{
        const login = new Login(req.body); 
        await login.login(); 

        if(login.errors.length > 0){ 
            req.flash('errors', login.errors);
            req.session.save(function (){ 
                return res.redirect('back');
            });

            return;
        };
        
        req.flash('success', 'Login bem sucedido.');
        req.session.user = login.user;
        req.session.save(function (){ 
            return res.redirect('back');
        });
    }catch(e){
        console.log(e);
        return res.render('404');
    };

};

exports.logout = function (req, res){
    req.session.destroy();
    res.redirect('/');
};