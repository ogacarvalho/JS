/* Polimorfismo - É o uso modificado dos métodos originais.
Super Classe = Classe Mãe/Pai
Classe = Função Construtora
Sub-Classes = Filhas de funções contrutoras (métodos)

*/

//Super Classe = Classe Mãe/Pai
function Conta(agencia, conta, saldo){
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;

}

//Método 1 (Sacar)
Conta.prototype.sacar = function(valor){
  if(valor > this.saldo){
    console.log(`Saldo Insuficiente!`);
    return 
  }
  this.saldo -= valor
  console.log(`Saque realizado com sucesso.
  Saldo: R$ ${this.saldo.toFixed(2)}`);
};

//Método 2 (Depositar)
Conta.prototype.depositar = function(valor){ 
  this.saldo += valor; 
  this.verSaldo(); 
};

//Método 3 (verSaldo)
Conta.prototype.verSaldo = function(){
  console.log(`Agência: ${this.agencia}
  Conta: ${this.conta}
  Saldo: R$ ${this.saldo.toFixed(2)}`)
};


//Classe = Função Construtora
function Cc(agencia, conta, saldo, limite){
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;

};

Cc.prototype = Object.create(Conta.prototype); //Herda métodos
Cc.prototype.constructor = Cc; //Re-estabelece ID Constructor

//Polimorfismo.
Cc.prototype.sacar = function(valor){
  if(valor > (this.saldo + this.limite)){
    console.log(`O valor ultrapassou o limite.`);
    return 
  }else{
    this.saldo -= valor;
    console.log(`Saque realizado com sucesso.
  Saldo: R$ ${this.saldo.toFixed(2)}`);
  };

};

//Especialização de 'Conta';
function Cp(agencia, conta, saldo){
  Conta.call(this, agencia, conta, saldo);
};
Cp.prototype = Object.create(Conta.prototype); //Herda métodos da Super Classe
Cp.prototype.constructor = Cp; //Re-estabelece ID Constructor

const contaP = new Cp('5947', '25475-7', 0); //A conta poupança possui os métodos clássicos, não modificados.
const gabriel = new Cc('4836', '14364-6', 0, 100); //A conta corrente, possui polimorfismo, métodos especializados.
