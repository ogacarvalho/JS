// Implementação de estrutura de dados (stack)
// "Pilha de livros": Uma pilha de livros, você coloca o livro no final (em cima) e tira o último, você não mexe nos do meio.
// Este exemplo foi usado para mostrar que dependendo do tamanho da classe, o Generics não consegue ser inferido automaticamente, nos obrigado à inferir manualmente o tipo.

export class Stack<T> {
    private contador = 0;
    private elementos: { [k: number]: T } = {}; // a propriedade elementos é um objeto cuja chave (k) é um number e o valor é um T.

    push(elemento: T):void {
        //   objeto    :   chave          valor
        this.elementos[this.contador] = elemento
        this.contador++;
    }

    isEmpty(): boolean {
        return this.contador === 0;
    }

    pop(): T | void {
        if (this.isEmpty()) return undefined;
        this.contador--;

        const elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    }

    size(): number {
        return this.contador;
    }

    show(): void {
        for (const chave in this.elementos){
            console.log(this.elementos[chave]);
        }
    }
}
// Genéricos, não conseguem inferir todos os tipos sempre. Atenção à isso.
// Exemplo:              ↓↓↓↓
const pilha = new Stack<number>();
pilha.push(1);
pilha.show();