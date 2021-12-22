
/* Fetch - Manipulando JSON
Com fetch, é simples
1. Envia o arquivo json fetch(arquivo.json)
2. Com o método response.json() extraimos um array com o json pronto para uso.
3. Acionamos uma função que tratará os dados recebidos e os anexará em uma tabela.
!. Importante: Este é um trabalho *client-side* ou seja, trabalhar via navegador.
!. Importante: Para ver e manipular adequadamento, o array extraído precisa ser iterado via for of.
*/

//Fetch
(async() => {
    try{
        let data = await fetch('pessoas.json');                 
        let json = await data.json();
        system(json);
    } catch (e){console.log(e)};
})();


/*Convertendo o JSON com FOR OF e mostrando em uma tabela:
1. Convertemos o arquivo, e durante a conversão solicitamos que a cada laço seja criada uma linha(tr) e três colunas (td).
2. Cria coluna, coluna recebe dados, coluna é anexada a linha ( 3x ).
3. Para finalizar o laço, a tabela armazena a linha.
4. Finalizado o laço, uma div vazia (result) recebe a tabela inteira.
*/

function system(json){                                    //Durante o sistema...
    let table = document.createElement('table');          // 1.Cria tabela.

    for(let pessoa of json){                              //Durante a iteração...
        const tr = document.createElement('tr');          // 1.Cria linha.
                                                          
        let td = document.createElement('td');            // 2.Cria coluna.
        td.innerHTML = pessoa.nome;                       // 3.Coluna recebe dados.
        tr.appendChild(td);                               // 4.Linha recebe coluna.

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = `R$ ${pessoa.salario},00`;
        tr.appendChild(td);

        table.appendChild(tr);                            // 5.Tabela recebe linha.
    }
                                                          
    const result = document.querySelector('.resultado');  // 2. Cria local.
    result.appendChild(table);                            // 3. Local recebe tabela.

}
