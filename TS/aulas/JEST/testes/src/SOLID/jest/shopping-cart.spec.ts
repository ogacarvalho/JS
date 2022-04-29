
import { Discount, FiftyPercentDiscount, NoDiscount } from '../classes/discount';
import { ShoppingCart } from '../classes/shopping-cart';

// [Teste real + maneira sofisticada]
const createSUT = (class_name: new () => Discount): ShoppingCart => new ShoppingCart(new class_name);

// [Teste contido, maneira simples]
// const createSUT = (discount: Discount ) => new ShoppingCart(discount);

const mock = {
    product: { name: 'Product', price: 10 },
    discount: () => { class Disc extends Discount {}; return new Disc() },
}

describe('Shopping Cart', () => {

    afterEach(() => jest.clearAllMocks());

    it('Cart should start empty:', () => {
        const sut = createSUT(NoDiscount);

        expect(sut.isEmpty()).toBe(true);
    });


    it('Cart should have 2 products', () => {
        const sut = createSUT(NoDiscount);

        sut.addItem(mock.product);
        sut.addItem(mock.product);

        expect(sut.isEmpty()).toBe(false);
        expect(sut.items.length).toBe(2);

    });

    it('Cart should sum the 2 products', () => {
        const sut = createSUT(NoDiscount);

        sut.addItem(mock.product);
        sut.addItem(mock.product);

        expect(sut.total()).toBe(20);

    });

    it('Cart should have 50% discount summing the 2 products', () => {
        const sut = createSUT(FiftyPercentDiscount);

        sut.addItem(mock.product);
        sut.addItem(mock.product);

        expect(sut.totalWithDicount()).toBe(10);

    });

    it('Cart should be cleaned:', () => {
        const sut = createSUT(FiftyPercentDiscount);

        sut.addItem(mock.product);
        sut.addItem(mock.product);

        sut.clear();
        expect(sut.isEmpty()).toBe(true);

    });

    it('Specific method have to be called when...', () => {
        const test_discount = mock.discount();
        const sut = new ShoppingCart(test_discount);
        const spy = jest.spyOn(test_discount, 'calculate');
        
        sut.totalWithDicount();                                 // O método de desconto usa o método total para disparar o calculate.
        expect(spy).toHaveBeenCalledWith(sut.total());

    });

});
