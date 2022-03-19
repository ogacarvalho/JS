// Composição:
// → E a relação mais forte entre uma classe e outra, como se fosse um carro e um motor, ou o corpo e o coração, ou seja uma depende da outra para existir.

class Carro {                                                    // A Classe é composta por um atributo com outra classe.
    private readonly motor = new Motor();                        // A Classe maior aciona os métodos da classe menor os instânciando em sí mesma.

    ligar():void {                                               // "Ao acionar o meu método, acionará o método do meu atributo".
        this.motor.ligar();
    }

    acelerar():void {
        this.motor.acelerar();
    }

    parar():void {
        this.motor.parar();
    }

    desligar():void {
        this.motor.desligar();
    }
}

class Motor {                                                   // Classe instânciada, e seus métodos.
    ligar():void {
        console.log('Motor: ligado.');
    }

    acelerar():void {
        console.log('acelerando...')
    }

    parar():void {
        console.log('parando...')
    }

    desligar():void {
        console.log('Motor: desligado.');
    }
}

const carro = new Carro;
carro.ligar();