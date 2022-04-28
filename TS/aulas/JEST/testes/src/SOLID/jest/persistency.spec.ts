
// SUT   - System Under Test - Descreve a classe principal que está sob testes.
// SPYon - Serve para monitorar alguma função, sendo que o primeiro parâmetro é a propriedade e o segundo o método.
// No teste abaixo vamos testar se o retorno do método é undefined, se o método chama o console.log 1 vez e se o retorno do console log é tal coisa.

import { Persistency } from '../services/persistency'

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());                     // É importante lembrar de limpar o mock para cada teste.

  it('should return undefined:', () => {
    const sut = new Persistency();
    expect(sut.saveOrder()).toBe(undefined);
  });

  it('should call console.log() once:', () => {
    const sut = new Persistency();
    const console_spyon = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(console_spyon).toHaveBeenCalledTimes(1);
  });

  it('should call console.log() with: "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const console_spyon = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(console_spyon).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});

