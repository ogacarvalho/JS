
/* DICAS
1. Sempre que precisar referenciar um objeto de dentro de uma chave de um objeto é necessário o uso do (This)
2. Em objetos, se você criar um elemento/objeto e incluir nele funções (métodos) o this muda de pai, a menos que use arrow. (bind(this))
3. Checar erro? Valide o eval() || Executar ao clicar no enter? Evento + KeyCode === 13
*/

(() => {
    
    function Calculadora(){
        this.input = document.querySelector('.input');
        this.inicia = () => {
            document.addEventListener('click', (e) => {
                let elemento = e.target;
                let classe = (nome) => elemento.classList.contains(nome);
                let display = (input) => this.input.value += input;
                let clear = () => this.input.value = '';
                let del = () => this.input.value = this.input.value.slice(0,-1);
                let enter = () => this.input.value = eval(this.input.value);

                    if(classe('btn__num')) {display(elemento.innerText);}
                    if(classe('btn__cle')) {clear();}
                    if(classe('btn__del')) {del();}
                    if(classe('btn__equ')) {this.input.value? enter():alert('Calculadora vazia.')}
            })
        };
    };
    const calculadora = new Calculadora();
    calculadora.inicia();
    
})();


    // calculadora = {
    //     input: document.querySelector('.input'),                                           

    //     inicia(){                                                                           

    //     document.addEventListener('click', (e) => {                                      // Tracking do Click
            
    //         let elemento = e.target;   
    //         let classe = (nome) => elemento.classList.contains(nome);
    //         let display = (input) => this.input.value += input;
    //         let clear = () => this.input.value = ''; 
    //         let del = () => this.input.value = this.input.value.slice(0, -1);           // mostra input (menos) último caráctere
    //         let enter = () => this.input.value = eval(this.input.value);                // Executa o que estiver dentro.
                                    
    //             if(classe('btn__num')) {display(elemento.innerText)}
    //             if(classe('btn__cle')) {clear()}
    //             if(classe('btn__del')) {del()}
    //             if(classe('btn__equ')) {this.input.value? enter():alert('Digite algo.')}

    //     })  

    //     },

    // }
    // calculadora.inicia();


