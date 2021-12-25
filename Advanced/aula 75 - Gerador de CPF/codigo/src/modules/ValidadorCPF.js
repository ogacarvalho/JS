export default class ValidadorCPF {
  constructor(cpf){
      this.cpf = cpf;
  }

  check(){
      let selecao = (input) => {
          input = input.replace(/\D+/g,'');
          return input
      };
      
      let input = this.cpf
      let CPF = selecao(input);
      
      const calculo1 = (documento) => {
          let soma = [];
          let fita = [10,9,8,7,6,5,4,3,2];
          let calc;
          
          for (let i = 0; i < documento.length; i++){
              calc = documento[i] * fita[i];
              soma.push(calc);
          }
          return soma;
      };
      
      const calculo2 = (documento) => {
          let soma = [];
          let fita = [11,10,9,8,7,6,5,4,3,2];
          let calc;
          
          for (let i = 0; i < documento.length; i++){
              calc = documento[i] * fita[i];
              soma.push(calc);
          }
          return soma;
      };
      
      let primeiroCalculo = calculo1(CPF);
      
      let somando = primeiroCalculo.reduce((acumulador, valor) => {
          return acumulador += valor;
      });
      // Por padrão o acumulador, assume o valor do primeiro índice.
      
      let formula = (valor) => {
          let formula = 11 - (valor % 11);
          if(formula > 9){ return 0}
          return formula;
      };
      let primeiroResultado = formula(somando);

      let CPF2 = selecao(input) + primeiroResultado;
      
      
      let segundoCalculo = calculo2(CPF2);
      
      let somando2 = segundoCalculo.reduce((acumulador, valor) => {
          return acumulador += valor;
      });
      
      let segundoResultado = formula(somando2);
      
      let cpfBruto = CPF2 + segundoResultado;
            
      return cpfBruto;
      };
  
}