
(function sistema(){
    
    const elementos = [                                     
        {tag: 'p', texto: 'Frase1'},
        {tag: 'div', texto: 'Frase2'},
        {tag: 'footer', texto: 'Frase3'},
        {tag: 'section', texto: 'Frase4'},
    
    ];
    
    const criaDiv = () => {
        const section = document.querySelector('section'); //Seleciona o local.
        const div = document.createElement('div');         //Cria o elemento desejado para ser anexado
        div.id = 'div'                                     //Adiciona um identificador ou Classe

        section.appendChild(div);                          //Anexe no local desejado.
    }; 
    criaDiv();
    

    for (i = 0; i < elementos.length ; i++){                // 'A cada loop / laço execute...'
        const { tag, texto } = elementos[i];                //Atrib. por Desestruturação.
        const elemento = document.createElement(tag);       //Cria tag.  ( Poderia apenas adicionar (elementos[i].tag) )
        elemento.innerText = texto;                         //Adiciona texto. ( e aqui elementos[i].texto)

        const local = document.querySelector('#div');       //Seleciona local desejado para anexar.
        local.appendChild(elemento);                        //Anexa.
    }

})();









