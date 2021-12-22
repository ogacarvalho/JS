/* Trabalhando com AJAX e XMLHttpRequest (Lembrando que atualmente se usa AXIOS)
1. Cria a função que realiza o request.
2. Encontra o elemento(link) clicado e extrai os dados dele para um objeto que deve receber (Tipo, URL, e método.)
3. Envia os dados extraídos como argumento da função request e pega o retorno dela.
4. Se der tudo certo, ela retornará um HTML em texto, que você pode usar como quiser, neste caso colocamos no innerHTML de uma div vazia.
*/

const request = (objeto) => {                             //1. Cria função de requisição.  
    return new Promise((resolve, reject) => {             //2. Request cria uma promise. (Resolve | Reject)
        const xhr = new XMLHttpRequest();                 //3. Request declara const (convenção xhr) que cria objeto requisitador.
        xhr.open(objeto.method, objeto.url , true);       //4. Request executa o método open('GET', 'URl', async?) que recebe configurações.
        xhr.send();                                       //4. Request executa o método send(...) que aciona a requisição.
        
        //Pulo do gato! Aqui definirá o que vai acontecer, caso o retorno do request seja TRUE of FALSE.
        xhr.addEventListener('load', () => {              //5. Request escuta o xhr.status para compreender o resultado da requisição.      
            if(xhr.status >= 200 && xhr.status < 300){    //6. OK? Então o retorno do Request(..) será a promise resolve(argumento)
                resolve(xhr.responseText);                //7. Se a requisição funcionar retornará o HTML inteiro em TEXTO.
            }else{
                reject({                                  //8. Fail? Então retornará um objeto com dados do erro.                 
                    code: xhr.status,
                    msg: xhr.statusText
                });
            }
        });                      
    });
    };

//A partir daqui, nada mais é do que funções para conseguir os dados do Objeto e aplicar a função na página.    


//Aqui vamos descobrir qual elemento está sendo clicado e vamos enviá-lo para outra função.
document.addEventListener('click', e =>{                         //9. Se o usuário clicar em um link na página...
    const elemento = e.target;                                   // elemento: <a href='site.com' >Link</a>
    const tag = elemento.tagName.toLowerCase();                  
                                                           
    if(tag === 'a'){                                             //10. Se o elemento clicado for um "link"
        e.preventDefault();                                      //11. Bloqueie a mudança de paǵina.
        carregaPagina(elemento);                                 //12. Execute carregaPagina(), com o elemento clicado como argumento
    }
});

//Com o elemento que foi clicado, vamos conseguir criar um objeto com as configurações para realizar a requisição.
//Com o objeto de configuração pronto, vamos envia-lo como argumento e acionar a função request().
//A função request vai retornar ou erro ou o HTML prontinho em texto, e vamos armazenar este HTML.
//Vamos enviar o HTML armazenado para a última função que irá MOSTRAR o resultado.
async function carregaPagina(elemento){                         //13. Carregapagina recebe elemento: <a...>
    const href = elemento.getAttribute('href');                 //14. Carregapagina armazena o conteúdo do atributo href.
    const objeto = {                                            //15. Objeto recebe configurações de requisição
        method: 'GET',                                          //16. Método "GET" - solicita
        url: href                                               //17. Link solicitado.
    };
    try {                                                       //18.Capturando erros.. e acertos para o Async/Await.
        let response;                                           //19.Response recebe retorno do request que pode ser um HTML inteiro em texto.
        response = await request(objeto);                       //20.Response executa o request(com o objeto que contém os dados da req.)
        carregaResultado(response);                             //21.Carregapágina executa carreresultado() que aplicará o retorno de response.
    } catch (e) {console.log(e)};
    
};

//Esta função irá mostrar o resultado, nada mais é do que um innerHTML de uma div vazia, com o retorno do REQUEST(OBJETO).
function carregaResultado(response){                            //22.CarregaResultado possui como argumento o resultado de response.
    const resultado = document.querySelector('.resultado');     //23.Variável recebe elemento html preparado (div vazia.)
    resultado.innerHTML = response;                             //24.Se for OK, a div vazia receberá um HTML inteiro em texto.
};

