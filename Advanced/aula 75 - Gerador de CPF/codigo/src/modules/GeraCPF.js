import ValidadorCPF from './ValidadorCPF';

export default class GeraCPF {
  //Gera número de 9 digitos aleatório.
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  //Formatador de CPF
  formatado(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }

  //Concatena e converte o resultado.
  geraNovoCpf() {
    const cpfSemDigito = this.rand();
    let novoCPF = new ValidadorCPF(cpfSemDigito);
    return this.formatado(novoCPF.check());
  }
}
