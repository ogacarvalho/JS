
// This Polimorfico
// → É quando o this, é migrado e automaticamente se refere á outra instância como no caso abaixo.


class Calculadora {
    constructor(public numero: number){};

    add(n: number):this {
        this.numero += n;
        return this;
    }

    sub(n: number):this {
        this.numero -= n;
        return this;
    }
}

class SuperCalculadora extends Calculadora {

    div(n: number):this {
        this.numero /= n;
        return this;
    }

    mul(n: number):this {
        this.numero *= n;
        return this;
    }
}
// Só é possível chamar métodos em cadeia, quando o retorno é a própria instância.
const calculadora = new SuperCalculadora(10);    calculadora.add(10).mul(10).div(10).sub(10);    console.log(calculadora.numero);