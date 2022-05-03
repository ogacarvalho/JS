import { CartItem } from '../classes/interfaces/cart-item';
import { ShoppingCartProtocol } from '../classes/interfaces/shopping-cart-protocol';
import { MessagingProtocol } from '../classes/interfaces/messaging-protocol';
import { PersistencyProtocol } from '../classes/interfaces/persistency-protocol';
import { CustomerOrder } from '../classes/interfaces/customer-protocol';
import { Order } from '../classes/order';

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]> {
      return [];
  }
  addItem(item: CartItem): void {};
  removeItem(index: number): void {};
  total(): number {  return 1 };
  totalWithDicount(): number { return 1};
  isEmpty(): boolean { return false };
  clear(): void {};
};

class MessagingMock implements MessagingProtocol {
    sendMessage(msg: string): void {}
}

class PersistencyMock implements PersistencyProtocol{
    saveOrder(): void {}
}

class CustomerMock implements CustomerOrder {
    getName(): string {
        return ''
    }
    getIDN(): string {
        return ''
    }
}

// Quando criamos desta maneira, todo processo é amarrado, portanto não haverão instâncias soltas.
// O uso dos mocks é porque não queremos testa-los, queremos isolar apenas o comportamento do SUT.
const createSUT = () => {
    const shoppingCart = new ShoppingCartMock();
    const messaging = new MessagingMock();
    const persistency = new PersistencyMock();
    const customer = new CustomerMock();
    const sut = new Order(shoppingCart, messaging, persistency, customer);

    return { sut, shoppingCart, messaging, persistency, customer }
}

describe('Order', () => {
    afterEach(() => jest.clearAllMocks());

    it('Cart cannot checkout while isEmpty()', () => {
        const { sut, shoppingCart } = createSUT();                                          // Pegando retornos específicos com Destructuring
        const shopping_spy = jest.spyOn(shoppingCart, 'isEmpty').mockReturnValueOnce(true); // Este método faz com que ele finja um retorno específico.
        sut.checkout();
        expect(shopping_spy).toHaveBeenCalledTimes(1);
        expect(sut.orderStatus).toBe('open');                                               // Deve estar aberto, enquanto o carrinho estiver vázio.
    });

    it('Cart can checkout when isEmpty() is false', () => {
        const { sut, shoppingCart } = createSUT();                                          // Pegando retornos específicos com Destructuring
        const shopping_spy = jest.spyOn(shoppingCart, 'isEmpty').mockReturnValueOnce(false); // Este método faz com que ele finja um retorno específico.
        sut.checkout();
        expect(shopping_spy).toHaveBeenCalledTimes(1);
        expect(sut.orderStatus).toBe('closed');
    });

    it('Cart should send an e-mail to customer when checkout.', () => {
        const { sut, messaging } = createSUT(); 
        const messaging_spy = jest.spyOn(messaging, 'sendMessage');
        sut.checkout();
        expect(messaging_spy).toHaveBeenCalledTimes(1);
    });

    it('Cart should save order', () => {
        const { sut, persistency } = createSUT(); 
        const persistency_spy = jest.spyOn(persistency, 'saveOrder');
        sut.checkout();
        expect(persistency_spy).toHaveBeenCalledTimes(1);
    });

    it('Cart should save order', () => {
        const { sut, persistency } = createSUT(); 
        const persistency_spy = jest.spyOn(persistency, 'saveOrder');
        sut.checkout();
        expect(persistency_spy).toHaveBeenCalledTimes(1);

    });
});