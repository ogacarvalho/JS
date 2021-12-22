
/* Ajax + Fetch + Async: Requisições elegantes.
Aqui vamos capturar o elemento e enviar o seu link ao fetch, que estará dentro do ambiente async manipulando e tratando as promises
*/

document.addEventListener('click', e => {
    let elemento = e.target;                                //0. Detecta elemento.
    let href = elemento.getAttribute('href');               //1. Recupera o conteúdo do atributo "href".
    let local = document.querySelector('.resultado');       //2. Local cujo objetivo é inserir o html.
                                                           
    if(elemento.tagName === 'A'){
        e.preventDefault();                                  //0. Previne o redirecionamento.
        (async () => {                                       //1. Criamos um ambiente anônimo auto-invocável onde o async irá trabalhar.
            try{                                             //2. Try receberá as promises.
            let data = await fetch(href);                    //3. Fetch recebe o link, e entrega o objeto com os dados para data.
            if(data.status !== 200) throw new Error();       //4. Ocorrências de erro, serão enviadas ao catch.
            let html = await data.text();                    //3. Extraímos o texto de 'data' e a variável html o recebe.
            local.innerHTML = html;                          //4. Local desejado, recebe o texto html.
            } catch (e){console.warn(e)};                    //5. Erros serão logados.
        })();

    }
});

