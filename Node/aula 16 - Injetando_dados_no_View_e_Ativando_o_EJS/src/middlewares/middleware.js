/* Aqui também é possível injetar dados, para depois serem extraídos, utilizando o objeto res.locals.variavelLocal; 
Resumindo, o objeto locals permite que injetemos dados diretamente em todas as responses. Ao invés de ir a cada final de rota (controllers)

*/


exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Este é o valor da variável local';
    next();
};