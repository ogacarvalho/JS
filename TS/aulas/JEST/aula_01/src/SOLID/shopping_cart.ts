// Single Responsability: Classes com apenas uma responsabilidade.

type cart_item = { name: string; price: number };                                                      
type order_status = 'open' | 'closed';                                                                 

class ShoppingCart {                
    private readonly _items: cart_item[] = [];                                                         
    private _order_status: order_status = 'open';                                                      

    add_item(item: cart_item): void { this._items.push(item) };

    remove_item(index: number): void { this._items.splice(index, 1) };

    total(): number { return +this._items.reduce((total, current) => total + current['price'], 0).toFixed(2) };

    is_empty(): boolean { return this._items.length === 0 };

    send_message(msg: string): void { return console.log(msg) };

    save_order(): void { return console.log('Pedido salvo.') };

    clear(): void { this._items.length = 0; return console.log('Carrinho livre!') };

    checkout(): void {                                                                                 
        if(this.is_empty()) console.log('Seu carrinho está vázio.');
        
        this.send_message(`Seu pedido no total de R$ ${this.total()} foi processado com sucesso!`);
        this.save_order();
        this.clear();
        this._order_status = 'closed';
        return;
    }

    get items(): Readonly<cart_item[]> { return this._items };

    get order_status(): Readonly<order_status> { return this._order_status };
};

const cart = new ShoppingCart;
const pizza: cart_item = { name: 'Mozzarela', price: 0.9 };      cart.add_item(pizza);
const soda: cart_item = { name: 'Coke', price: 1.7 };            cart.add_item(soda);
const chocolate: cart_item = { name: 'Snickers', price: 0.5 };   cart.add_item(chocolate);
const wine: cart_item = { name: 'Red Wine', price: 12.12 };      cart.add_item(wine);

console.log(cart); cart.checkout();
console.log(cart.order_status);

export default 1;