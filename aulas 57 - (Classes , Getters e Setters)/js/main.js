//Classes - Getters and Setters

/*
Usando Symbol para criação de chaves privadas
1.  Primeiro criamos a chave que receberá o atributo Symbol.
2.  Compartilhamos o link para a chave através da atribuição dinâmica --> instância.[chave];
2.1 Este 'truque' criará uma espécie de encriptação temporária, que tornará o acesso exclusivo para chaves que compartilham o código vigente.
*/

const _velocidade = Symbol('velocidade'); //Embora esteja escrito _velocidade, na verdade agora este nome não existe, é inacessível.

class Carro {

  constructor(nome){
    this.nome = nome;
    this[_velocidade] = 0; //this[id aleatório] = recebe velocidade 0.
  }

  set velocidade(valor){ // O set é o que queremos que retorne, toda vez em que a func. à ele atribuída sofrer modificações.
    if(typeof valor !== 'number') return; //Se for diferente de 'number', volta.
    if(valor > 100 || valor < 0 ) return;//Se for maior que 100 ou menor que zero, volta.
    this[_velocidade] = valor; //Se passar pelos valores atrás, então instância[idaleatório] recebe o valor solicitado.
  }

  get velocidade(){ //O get é o que queremos que retorne, toda vez em que a func. á ele atribuída for chamada. 'exemplo.velocidade()'
    return this[_velocidade];
  }
   
  acelerar(){
    if(this[_velocidade] > 100) return;
    this[_velocidade]++; 
  }

  freiar(){
      if(this[_velocidade] < 0) return;
      this[_velocidade]--;
  }
}
const fusca = new Carro('Fusca');

fusca.velocidade = 101; //SETTER 
console.log(fusca.velocidade); //GETTER
