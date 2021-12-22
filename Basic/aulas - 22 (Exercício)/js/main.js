
(function sistema(){
    
    // Aqui criamos uma função que cria uma DIV com um identificador.
    const criaDiv = () => {
        const div = document.createElement('div');
        div.id = 'div'
        const section = document.querySelector('section');
        section.appendChild(div);
    }; 
    criaDiv();

    // Aqui temos o array onde cada índice deste array é um objeto, contendo a tag e o conteúdo.
    const elementos = [
        {tag: 'p', texto: 'Frase1'},
        {tag: 'div', texto: 'Frase2'},
        {tag: 'footer', texto: 'Frase3'},
        {tag: 'section', texto: 'Frase4'},
    
    ];
    
    // Um loop que anexará o conteúdo da array no índex.
    for (i = 0; i < elementos.length ; i++){

        const elemento = document.createElement(elementos[i].tag); // cria o elemento da tag.
        elemento.innerHTML = elementos[i].texto;                   // adiciona o conteúdo à tag recém criada.

        const local = document.querySelector('#div');          // Seleciona um local 
        local.appendChild(elemento);                           // Anexa a variável que está armazenando o conteúdo ao local desejado.

    }

})();






