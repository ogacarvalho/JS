
// Builder (GoF)
// → Inicialização gradual de um construtor muito grande, via this polimorfico.

export class Builder {
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setMethod(method: 'get'|'post'):this {
        this.method = method;
        return this;
    }

    setURL(url: string):this {
        this.url = url;
        return this;
    }
    
    send():void {
        console.log(`Enviando dados via ${this.method} para ${this.url}`);
    }
};

const request = new Builder(); 
request.setURL('https://google.com.br').setMethod('get').send();