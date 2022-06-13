// O arquivo "Main" é a parte suja, onde instânciamos nossos métodos e etc.,
// Open/Closed Principle:
// → Entidades devem estar abertas para extensões e fechadas para modificações.

import { ShoppingCart } from "./entities/shopping_cart";
import { Order } from "./entities/order";
import { Messages } from "./services/messages";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";

const discount = 1;
const cart = new ShoppingCart;
const msg = new Messages;
const persistency = new Persistency
const order = new Order(cart, msg, persistency, discount);


cart.add_item(new Product('Pizza Mozzarela', 0.9));
cart.add_item(new Product('Coke', 1.7));
cart.add_item(new Product('Snickers', 0.5));
cart.add_item(new Product('Red Wine', 12.12));

console.log(cart); 
order.checkout();
console.log(order.order_status);