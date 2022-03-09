
import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGE = 'show-error-message';
const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function(event: Event){
    event.preventDefault();
    hideErrorMessages(this);                                                      // No submit, limpamos o erros anteriores. (this = form)

    // Validações
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPasswords(password, password2);
    if(shoudSend(this)) console.log('form.submit()');
});

// No submit, limpa os erros anteriores (se existirem).
function hideErrorMessages(form: HTMLFormElement):void {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(item => item.classList.remove(SHOW_ERROR_MESSAGE));
    /*
    Dentro de formulário, todas as classes '.show-error-message' [gera um array]
    Para cada elemento, (forEach) remova esta classe. 
    Portanto, se houver mensagens de erro serão capturadas e removidas.
    */
};

// Pega o pai do input e atribui a classe de erro + adiciona mensagem na div que representa o erro.
function showErrorMessages(input: HTMLInputElement, msg: string):void {
    const field = input.parentElement as HTMLDivElement;                                  // Do input pegaremos o seu campo de formulário pai.
    const field_error = field.querySelector('.error-message') as HTMLSpanElement;         // Do pai, selecionamos o campo das mensagens de erro.

    field_error.innerText = msg;                                                          // Mensagens de erro, recebe: parâmetro mensagem.

    field.classList.add(SHOW_ERROR_MESSAGE);                                              // O (pai do parâmetro recebido), aciona classe que gera erro.
};  

// Com forEach verifica se algum elemento do array de inputs está vazio e então executa a função que adiciona erro.
function checkForEmptyFields(...inputs: HTMLInputElement[]):void {                // Ao usar [spread] automaticamente o retorno será um array.
    inputs.forEach((input) => {                                                   // Sendo um array, pegamos o parâmetro e adicionamos uma ação para cada elemento.
        if(!input.value) showErrorMessages(input, 'Campo em branco.');            // Se não houver valor em cada elemento, gere um erro tal.
    });
};

// Com validator, recebe o input e joga ele no método "isEmail";
function checkEmail(input: HTMLInputElement):void {
    if(!isEmail(input.value)) showErrorMessages(input, 'Email inválido.')
};

// Compara os dois inputs, se forem diferentes adiciona mensagem de erro.
function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement):void {
    if(password.value !== password2.value) showErrorMessages(password2, 'As senhas não correspodem.');
}

// Seleciona todos os elementos do formulário com erros[gera um array], se existir algum erro, altera a flag para "false", retorna o estado da flag.
function shoudSend(form: HTMLFormElement): boolean {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => send = false);
    return send;
};