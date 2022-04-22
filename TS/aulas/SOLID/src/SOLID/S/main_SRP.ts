// O arquivo "Main" é a parte suja, onde instânciamos nossos métodos e etc.,

import { ShoppingCart } from "./entities/shopping_cart_SRP";
import { Order } from "./entities/order_SRP";
import { Messages } from "./services/messages_SRP";
import { Persistency } from "./services/persistency_SRP";
import { Product } from "./entities/product_SRP";

const cart = new ShoppingCart;
const msg = new Messages;
const persistency = new Persistency
const order = new Order(cart, msg, persistency);

cart.add_item(new Product('Pizza Mozzarela', 0.9));
cart.add_item(new Product('Coke', 1.7));
cart.add_item(new Product('Snickers', 0.5));
cart.add_item(new Product('Red Wine', 12.12));

console.log(cart); order.checkout();
console.log(order.order_status);