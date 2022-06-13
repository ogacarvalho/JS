
// Classe Abstrata, para funcionar precisamos instânciar a classe via parâmetros, e para obter classes via parâmetros, chamamos o constructor.

import { Discount, FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from "../classes/discount";

const createSUT = (class_name: new () => Discount): Discount => new class_name();                      // Para chamar classes nos parãmetros, usamos constructor.

describe('Discount', () => {
    afterEach(() => jest.clearAllMocks());

    it('Shouldnt have Discount', () => {
        const sut = createSUT(NoDiscount);
        expect(sut.calculate(10)).toBe(10);
    });

    it('Should have 50% discount', () => {
        const sut = createSUT(FiftyPercentDiscount);
        expect(sut.calculate(10)).toBe(5);
    });

    it('Should have 10% discount', () => {
        const sut = createSUT(TenPercentDiscount);
        expect(sut.calculate(10)).toBe(9);
    })

});

