/* Criando classes com heranças...  
    Extends - Smartphone herda métodos(prototypes) de Dispositivos.
    Super = 'Dispositivos' que recebe os argumentos dos filhos.
*/

class Dispositivos {

  constructor(nome){
    this.nome = nome;
    this.status = false;
  }

  ligar(){
    if(this.status){
      console.log(`O ${this.nome} já está ligado.`);
      return;
    }
    this.status = true;
    console.log(`${this.nome} Ligado.`);
  }

  desligar(){
    if(!this.status){
      console.log(`O ${this.nome} já está desligado.`);
      return;
    }
    this.status = false;
  }
}
let celular = new Dispositivos('celular');


class Smartphone extends Dispositivos {            
  constructor(nome, cor){
    super(nome)
    this.cor = cor;
  }
};

let iPhone = new Smartphone('iPhone');