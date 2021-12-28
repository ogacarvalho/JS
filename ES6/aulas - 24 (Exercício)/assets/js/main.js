

const estilo = getComputedStyle(document.body);   // 1.  Crie acesso aos dados de estilo do documento.
const background = estilo.backgroundColor;        // 2.  Extraia as informações do estilo desejada.
 
let ps = document.querySelectorAll('p');          // 3.  Selecione os elementos que sofreram a alteração.


for (let p of ps){                                // 4.  Para modifica-los é necessário torna-los iteráveis.
    p.style.backgroundColor = background;         // 4.1 Dentro do bloco de execução agora iteráveis é possível realizar modificações.
}


