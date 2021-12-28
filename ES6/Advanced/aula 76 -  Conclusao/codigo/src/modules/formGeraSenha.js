import geraSenha from './geradores';

//Pegando os dados de input. (True, false, valor)
const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

//Se houver click o html recebe os dados da função GERA()
export default () => {
  gerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera();
  });
};

//Função gera, retorna uma constante senha que receberá os dados da GeraSenha()
function gera() {
  const senha = geraSenha(  //Função{valor, true?,true?,true?...}
    qtdCaracteres.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );

  return senha || 'Nada selecionado.';
}
