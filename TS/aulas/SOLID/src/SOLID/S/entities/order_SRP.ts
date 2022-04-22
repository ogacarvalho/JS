
import { order_status } from "../interfaces/order_status";
import { ShoppingCart } from "./shopping_cart_SRP";
import { Messages } from "../services/messages_SRP";
import { Persistency } from "../services/persistency_SRP";

export class Order {
    private _order_status: order_status = 'open';

    constructor(                                                                    // Injeção de Dependências
        private readonly cart: ShoppingCart,                                        // [Erro] as dependências deveriam ser "abstratas" | "genericas"
        private readonly msg: Messages,                                             // [Erro] DIP - Dependency Inversion
        private readonly persistency: Persistency) {};                              // [Erro] DIP - Dependency Inversion

    checkout(): void {
        if(this.cart.is_empty()) console.log('Seu carrinho está vázio.');
        
        this.msg.send_message(`Seu pedido no total de R$ ${this.cart.total()} foi processado com sucesso!`);
        this.persistency.save_order();
        this.cart.clear();
        this._order_status = 'closed';
        return;
    }

    get order_status(): Readonly<order_status> { return this._order_status };
}