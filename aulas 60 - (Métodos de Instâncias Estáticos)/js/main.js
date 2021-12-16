

/* Métodos Estáticos
- São funções seguidas da palavra "static" que as tornam exclusivas da classe mãe. Exemplo: 'Math.random()'
- utilizadas normalmente para fins de organização.
- Lembrando que métodos estáticos, são apenas funções estáticas e não possuem acesso aos dados das instâncias.
*/

let teste = () => console.log('Este é meu teste');
class RemoteControl {
  constructor(tv){
    this.tv = tv;
    this.volume = 0;

    //Apenas lembrando que podemos usar funções de fora da funções construtora, tranquilamente.
    teste(); 
  }

  //Métodos de Instâncias - serão utilizados pelas instâncias.
  volup(){ this.volume += 2; }
  voldown(){ this.volume -= 2;}

  //Método Estático - apenas a classe construtora consegue utiliza-lo.
  static changeBattery(){ console.log('All changed')}
}

const controller = new RemoteControl('LG'); //"teste()" foi ativado pois acionamos o constructor com a palavra "new".

