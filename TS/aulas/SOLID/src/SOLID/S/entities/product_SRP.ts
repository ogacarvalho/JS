import { cart_item } from "../interfaces/cart_item";

export class Product implements cart_item {                             // Classe que deve seguir o contrato de implementação [interface] "cart_item"
    constructor(public name: string, public price: number){}
}