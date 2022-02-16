import validator from "validator";
export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass);
        this.events

    }

    init(){
        this.events();
    };

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    };

    validate(e){
        const elemento = e.target;
        const emailInput = elemento.querySelector('input[name="email"]'); //Estamos selecionando o input que tem o name = email.
        const passwordInput = elemento.querySelector('input[name="password"]');
        let error = false;                                                //Flag
        
        if(!validator.isEmail(emailInput.value)) {                        //Importamos o pacote de validação, e o usamos normalmente.
            alert('Email inválido');
            error = true;
        };

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){                        //Importamos o pacote de validação, e o usamos normalmente.
            alert('A senha precisa ter entre 3 e 50 caracteres.');
            error = true;
        };

        if(!error) elemento.submit();                                  //Contrário do preventDefault.
    };

};