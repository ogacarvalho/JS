// Verificar se o método foi chamado com tal parâmetro.

import { Messaging } from '../services/messaging';
const createSUT = () => new Messaging();                                        // Boa prática.

describe('Messaging', () => {
    afterEach(() => jest.clearAllMocks());                                      // Boa prática.

    it('sendMessage should return console.log with "..., msg":', () => {
        const sut = createSUT();
        const console_spyon = jest.spyOn(console, 'log');

        sut.sendMessage('Parâmetro');
        expect(console_spyon).toHaveBeenCalledWith('Mensagem enviada:', 'Parâmetro');
    });

});

