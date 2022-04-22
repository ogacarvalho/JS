// Single Responsability: Classes com apenas uma responsabilidade.
// Uma classe geralmente é coesa, quando seus métodos usam seus atributos (propriedades).

import { cart_item } from "../interfaces/cart_item";
                                                                                                        
export class ShoppingCart {                
    private readonly _items: cart_item[] = [];                                                         

    add_item(item: cart_item): void { this._items.push(item) };

    remove_item(index: number): void { this._items.splice(index, 1) };

    total(): number { return +this._items.reduce((total, current) => total + current['price'], 0).toFixed(2) };

    is_empty(): boolean { return this._items.length === 0 };

    clear(): void { this._items.length = 0; return console.log('Carrinho livre!') };

    get items(): Readonly<cart_item[]> { return this._items };

};

