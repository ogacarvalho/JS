/* Para injetar dados no view, o enviamos um objeto como segundo parâmetro, na função render. (Após o index.)
! É possível injetar dados tanto aqui, na pagina específica, ou no middleware global.

*/


exports.paginaInicial = (req,res) => {
    res.render('index', {
        titulo: 'Este é o titulo',
        numeros: [1,2,3,4,5,6,7,8,9]
    });
    return;
};


exports.trataPost = (req, res) => {
    res.send(req.body);
};

