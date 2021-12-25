import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function() {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();


//Um gerador de CPF nada mais é do que o envio de 9 digitos aleatórios e o retorno apenas dos digitos gerados a partir do cpf.