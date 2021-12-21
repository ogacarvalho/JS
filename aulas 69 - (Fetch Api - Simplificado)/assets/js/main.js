
/* Fetch API(GET) Simplificando o AJAX.
-  O addEventlistener para automatizar a detecção de cliques em links.
-  Se um click no link for detectado, acionará a requisição e automaticamente mostrará o resultado no local desejado.

IMPORTANTE: Este é um código exemplo, e não possui tratamento de erros com try, catch e não possui ordem de execução com async / await.
*/

document.addEventListener('click', e =>{
    let elemento = e.target;                                //0. Detecta elemento.
    let href = elemento.getAttribute('href');               //1. Recupera o conteúdo do atributo "href".
    let local = document.querySelector('.resultado');       //2. Local cujo objetivo é inserir o html.
                                                           
    if(elemento.tagName === 'A'){
        e.preventDefault();                                  //0. Previne o redirecionamento.
        fetch(href)                                          //1. Carrega o link via fetch.
        .then(response => response.text())                   //2. Método que retorna uma promise com o html em texto.
        .then(html => local.innerHTML = html)                //3. Aplica o texto no local desejado.
    }
});

