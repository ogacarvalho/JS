/* Trabalhando com AJAX e XMLHttpRequest.
1. Faremos uma função de requisição.
2. XHR = XMLHttpRequest = Ajax.
•
*/


const request = (objeto) => {                           //Função de requisição.

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();                   //XHR recebe objeto construtor e seus métodos.
        xhr.open(objeto.method, objeto.url , true);         //XHR recebe método('GET','URL', e Async?).
        xhr.send();                                         //Se fosse "POST" então seria método .send(null).
        xhr.addEventListener('load', () => {                //Checando o término da requisição (Vai retornar o código da operação (sucesso?))
            if(xhr.status >= 200 && xhr.status < 300){      //Se o retorno for positivo, então criaremos uma função de callback.
                resolve(xhr.responseText);            //Objeto.sucess (convenção) recebe o conteúdo solicitado.
            }else{
                reject({                              //Em caso de erro, retorna o um objeto do código do erro e o seu texto.
                    code: xhr.status,
                    msg: xhr.statusText
                });
            }
        });                      
    });
    };

    



document.addEventListener('click', e =>{            //Escutando o documento todo..
    const elemento = e.target;                      //Retorna o elemento que está sendo clicado no documento.
    const tag = elemento.tagName.toLowerCase();     //Retorna o nome da 'tag" do elemento clicado. (Se for h1 retorna h1.. e etc.,)

    if(tag === 'a'){                                //Se o elemento clicado for uma tag A.
        e.preventDefault(); //Prevenindo evento.    //Então, pause o update da página..
        carregaPagina(elemento);                    //E acione esta função.
        
    }
});

function carregaPagina(elemento){
    const href = elemento.getAttribute('href');     //Vai me retornar o conteúdo do HREF.
    const objeto = {
        method: 'GET',
        url: href
    };
    request(objeto).then(response => carregaResultado(response)).catch(e => console.log(e));
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;  //A div está recebendo o conteúdo da página clicada.
};

