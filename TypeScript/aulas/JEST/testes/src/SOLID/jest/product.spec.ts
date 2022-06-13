
import { Product } from '../classes/product';
const createSUT = (string:string, number:number): Product => new Product(string, number);

describe('Product', () => {
    afterEach(() => jest.clearAllMocks());

    it('Shoud...', () => {
        const sut = createSUT('Camisa', 49.9);

        expect(sut).toHaveProperty('name', 'Camisa');
        expect(sut.price).toBeCloseTo(49.9);                    // Numeros flutuantes, é recomendado que teste desta forma.
    });
});

