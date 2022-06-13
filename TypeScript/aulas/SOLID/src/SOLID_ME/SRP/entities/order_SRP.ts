// Entidade [Classe] responsável pelo processamento e gerenciamento do pedido.

//                                                                                  Importação de Dependências.
import { order_status } from "./interfaces/order_status";                          // Importação do contrato [interface] estrutural da flag de ordem.
import { ShoppingCart } from "./shopping_cart_SRP";                                 // Classe [Entidade] responsável pelo "Carrinho de Compras"
import { Messages } from "../services/messages_SRP";                                // Classe [Serviço] responsável pela mensageria.
import { Persistency } from "../services/persistency_SRP";                          // Classe [Serviço] responsável por gerenciar a atividade corrente.

export class Order {
    private _order_status: order_status = 'open';                                   // Flag de atividade, inicia-se aberta.

    constructor(                                                                    // Injeção de Dependências
        private readonly cart: ShoppingCart,                                        // [Erro] DIP - Dependências deveriam ser "abstratas" | "genericas"
        private readonly msg: Messages,                                             // [Erro] DIP - Dependency Inversion
        private readonly persistency: Persistency                                   // [Erro] DIP - Dependency Inversion
        ) {};

    checkout(): void {                                                              // Método responsável por finalizar o pedido.
        if(this.cart.is_empty()) console.log('Seu carrinho está vázio.');           // Validação de tentativa de checkout com carrinho vázio.
        
        this.msg.send_message(`Seu pedido no total de R$ ${this.cart.total()} foi processado com sucesso!`);
        this.persistency.save_order();
        this.cart.clear();
        this._order_status = 'closed';
        return;
    }

    get order_status(): Readonly<order_status> { return this._order_status };       // Getter que captura propriedade privada: "_order_status"
}
