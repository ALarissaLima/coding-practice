const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('retorna objeto com dias e horarios de funcionamento se o argumento for undefined', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('retorna error se o argumento for inválido', () => {
    const expected = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Arron')).toThrow(expected);
  });
  it('retorna `The zoo is closed` se o argumento for qualquer horario após as `10:00-PM`', () => {
    const actual = getOpeningHours('Wednesday', '12:22-Am');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('retorna error se o argumento NÃO for algo entre entre 0 e 12', () => {
    const expected = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Wednesday', '22:22-Pm')).toThrow(expected);
  });
  it('retorna error se os minutos do argumento NÃO for algo entre entre 0 e 59', () => {
    const expected = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Monday', '01:87-Pm')).toThrow(expected);
  });
  it('retorna error se o argumento NÃO for AM ou PM', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Friday', '03:20-BR')).toThrow(expected);
  });
});
