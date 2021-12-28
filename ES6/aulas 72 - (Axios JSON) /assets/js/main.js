
/* Simplificando o Fetch ( .. ) com Axios.
1. Axios retorna um objeto cujo conteúdo possui o atributo (data) que é um array já convertido e pronto para ser iterado.
2. Desta forma, economizando "promises", só temos que importar o script via html.
*/

//Axios (Economizando promises)
(async() => {
    try{
        let dados = await axios('pessoas.json');      // 1. Dados receberá um objeto com dados da requisição, através do axios.   
        system(dados.data);                           // 2. Função recebe atributo com JSON já extraído e convertido em Array.
    } catch (e){console.log(e)};
})();

function system(json){                          
    let table = document.createElement('table');
    let n = 1;

    for(let pessoa of json){                    
        const tr = document.createElement('tr');
                                                          
        let td = document.createElement('td');  
        td.innerHTML = n++;            
        tr.appendChild(td);        
        
        td = document.createElement('td');  
        td.innerHTML = pessoa.nome;             
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = `R$ ${pessoa.salario},00`;
        tr.appendChild(td);

        table.appendChild(tr);                           
    }
                                                          
    const result = document.querySelector('.resultado'); 
    result.appendChild(table);                           

}
