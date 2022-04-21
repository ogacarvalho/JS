
type cart_item = { name: string; price: number };                                                      // Type para representar a estrutura dos itens do carrinho.
type order_status = 'open' | 'closed';                                                                 // Type para representação de Flag.

/* Classe Carrinho de Compras:
    A estrutura irá conter duas propriedades privadas uma que representará o carrinho propriamente dito, e receberá uma lista de itens do type "cart_item", iniciando-se como um array vázio.
    A segunda propriedade será uma flag indicará se o carrinho está em uso ou não.

    O restante da estrutura, será composta por métodos básicos, e gets para permitir a visualização das propriedades privadas da classe.
*/
class ShoppingCart {                
    private readonly _items: cart_item[] = [];                                                         // Terá um [] de cart_items e começará como um [].
    private _order_status: order_status = 'open';                                                      // Flag de carrinho, inicialmente aberta.

    
    add_item(item: cart_item): void {                                                                  // Push do objeto na propriedade privada "_items".
        this._items.push(item);
    }


    remove_item(index: number): void {                                                                 // Remoção do objeto com splice via [index], enviado no parâmetro do método.
        this._items.splice(index, 1);
    }

    // O [+] converte novamente para number, uma vez que o toFixed retorna string.
    total(): number {                                                                                  // Ferramenta de soma com [reduce] > Acumulador + index[0]['propriedade_do_objeto']
        return +this._items.reduce((total, current) => total + current['price'], 0).toFixed(2);
    }

    is_empty(): boolean {                                                                              // Método que diz se o carrinho está vázio.
        return this._items.length === 0;
    }

    send_message(msg: string): void {                                                                  // Log do argumento.
        return console.log(msg);
    }

    save_order(): void {                                                                               // "Fake"
        return console.log('Pedido salvo.');
    }

    clear(): void {                                                                                    // Zera o carrinho através do reset do tamanho.
        this._items.length = 0;
        return console.log('Carrinho livre!');
    }

    checkout(): void {                                                                                 // Método que aciona conjunto de outros métodos para realizar o "Checkout"
        if(this.is_empty()) {
            console.log('Seu carrinho está vázio.');
            return;
        }

        this._order_status = 'closed';
        this.send_message(`Seu pedido no total de R$ ${this.total()} foi processado com sucesso!`);
        this.save_order();
        this.clear();
        return;
    }

    get items(): Readonly<cart_item[]> {                                                               // Get para visualização dos valores da propriedade privada [carrinho]
        return this._items;
    }

    get order_status(): Readonly<order_status> {                                                       // Get para visualizar o estado do carrinho.
        return this._order_status;
    }
};

const cart = new ShoppingCart;
const pizza: cart_item = { name: 'Mozzarela', price: 0.9 };      cart.add_item(pizza);
const soda: cart_item = { name: 'Coke', price: 1.7 };            cart.add_item(soda);
const chocolate: cart_item = { name: 'Snickers', price: 0.5 };   cart.add_item(chocolate);
const wine: cart_item = { name: 'Red Wine', price: 12.12 };      cart.add_item(wine);

console.log(cart); cart.checkout();
console.log(cart.order_status);



































export default 1;
