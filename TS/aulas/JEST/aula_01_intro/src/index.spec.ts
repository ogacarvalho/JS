describe('Agrupador de testes', () => {
    it('Esperamos que "number" seja "1"', () => {
      const number = 1;
      expect(number).toBe(1);
    });
  })
  
  describe('Agrupador de testes!', () => {
    test('Esperamos que "nome" não seja "Gabriel".', () => {
      const nome = 'Josélito';
      expect(nome).not.toBe('Gabriel');
    });
  })
  
    