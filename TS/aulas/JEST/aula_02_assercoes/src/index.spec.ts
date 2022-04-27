
// Assertion: São testes cujo o estilo de trabalho é através de afirmações, como no exemplo abaixo.
// → Queremos que [x] retorne [y] - Uma afirmação [asserção].
// Cada um destes métodos são [asserções]. Há uma lista enorme de asserções possíveis.

describe('Primitive Values', () => {
  it('testing jest assertions', () => {

    const number = 10;

    expect(number).toBe(10);                
    expect(number).toEqual(10);
    expect(number).not.toBeNull();
    expect(number).toBeGreaterThan(9);
    expect(number).toHaveProperty('toString');     // Number contém a propriedade [método] "toString()"
    expect(number).toBeCloseTo(10.002);
    expect(number).toBeCloseTo(9.996);

  });
});

describe('Objects', () => {
  it('Testing Objects', () => {
    const example_1 = { name: 'Gabriel', age: 26};
    const example_2 = { ...example_1 };

    expect(example_1).toEqual(example_2);
    expect(example_2).toHaveProperty('age', 26);   // Propriedade "age" existe e tem o valor 26?
    expect(example_2.age).toBe(26);

  });
});
