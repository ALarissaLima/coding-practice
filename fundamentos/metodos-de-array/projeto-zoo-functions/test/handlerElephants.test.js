const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna 4 se o argumento passado for `count`', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('retorna array contendo nomes se o argumento passado for `names`', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toStrictEqual(expected);
  });
  it('retorna número próximo de 10.5 se o argumento passado for `averageAge`', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });
  it('retorna `Parâmetro inválido, é necessário uma string` se o argumento passado NÃO for do tipo string', () => {
    const actual = handlerElephants(11);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toStrictEqual(expected);
  });
  it('retorna `undefined` se o argumento passado NÃO for passado', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toStrictEqual(expected);
  });
});
