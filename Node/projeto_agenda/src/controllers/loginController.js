
//Importando constructor de Models.
const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
};

//Usando constructor vamos passar os dados por ele e validá-los.
exports.register = async function (req, res){
    
    try{
        const login = new Login(req.body);                                             //Clicou no submit, nosso server chama a func. cst.
        await login.register();                                                    //E executamos o método de registro, que acionará uma cadeia de eventos.
        if(login.errors.length > 0){                                               //Vamos exibir as mensagens de erro (se existirem)
            req.flash('errors', login.errors);                                     //Objeto "errors" em Flash, receberá os erros.
            req.session.save(function (){                                          //Salve a sessão, e redirecione a página para a anterior.
                return res.redirect('back');
            });
            return;                                                                //Quit da função.
            
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