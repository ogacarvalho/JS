class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos(); //O método está sendo chamado aqui, para que ele seja executado imediatamente quando a classe for acionada.
  }


  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e); //Submit? Aciona o método instanciado.
    });
  }


  handleSubmit(e) { //Manipulando (SEGURANDO) o envio do Submit. (Antes de enviar, checar tudo abaixo.)
    e.preventDefault(); //Pausa o envio dos dados do formulário.
    const camposValidos = this.camposSaoValidos(); //O retorno geral é true || false. (Checagem Geral)
    const senhasValidas = this.senhasSaoValidas();

    //Validação mais importante de todas
    if(camposValidos && senhasValidas) { //Se ambas checagens retornarem true, então "handle fará isso."
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
    }

    if(senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
    }

    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.error-text')) { //errorText recebe todos os campos que deram erro.
      errorText.remove();                                                   //... e os apaga, a cada submit.
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) { //Estamos pegando o "input" mas não o  value.
      const label = campo.previousElementSibling.innerText; //Este método, pega o texto do elemento anterior que no caso é o nome do campo.

      if(!campo.value) { //Se algum dos campos estiver com string vazia..
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`); //Aciona o método de erro, que recebe o campo e a msg.
        valid = false; //Valida como falso.
      }

      if(campo.classList.contains('cpf')) { //Se o campo contém a classe 'CPF'...
        if(!this.validaCPF(campo)) valid = false; //Se o CPF for inválido, seta a flag para false, mas não return, se não para né a func. né.
      }

      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valid = false;
      }

    }

    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) { //Expressão Regular que impede símbolos. (Apenas letras e Números definidos.)
      this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) { //Quando acionado, criará uma instância da nossa função antiga.
    const cpf = new ValidaCPF(campo.value); //Instância recebe o que estiver escrito no campo que contém a classe "CPF".

    if(!cpf.valida()) { //Função Estrangeira.
      this.criaErro(campo, 'CPF inválido.'); //Aciona método que cria elemento adjacente com o texto selecionado.
      return false; //Retorna false, e a flag vira false.
    }

    return true; //Retorna true e a flag continua true.
  }

  criaErro(campo, msg) {
    const div = document.createElement('div'); //Cria uma div
    div.innerHTML = msg; //Div recebe a mensagem de erro.
    div.classList.add('error-text'); //Classe para adiciona CSS aos alertas.
    campo.insertAdjacentElement('afterend', div); //Método que anexa um elemento logo após o seu fim. 
  }
}

const valida = new ValidaFormulario();
