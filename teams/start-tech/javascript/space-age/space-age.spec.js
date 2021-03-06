import { age } from './space-age';

describe('Space Age', () => {
  test('age on Earth', () => {
    expect(age('earth', 1000000000)).toEqual(31.69);
  });

  test('age on Trololo', () => {
    expect(() =>age('trololo', 1000000000)).toThrowError("Parâmetro inválido");
  });

  test('age on Underfined', () => {
    expect(() =>age(undefined, 1000000000)).toThrow();
  });

  test('age on null', () => {
    expect(() =>age(null, 1000000000)).toThrow(Error);
  });

  test('age on "" ', () => {
    expect(() =>age('', 1000000000)).toThrow("Parâmetro inválido");
  });

  test('age on Mercury', () => {
    expect(age('mercury', 2134835688)).toEqual(280.88);
  });

  test('age on Venus', () => {
    expect(age('venus', 189839836)).toEqual(9.78);
  });

  test('age on Mars', () => {
    expect(age('mars', 2129871239)).toEqual(35.88);
  });

  test('age on Jupiter', () => {
    expect(age('jupiter', 901876382)).toEqual(2.41);
  });

  test('age on Saturn', () => {
    expect(age('saturn', 2000000000)).toEqual(2.15);
  });

  test('age on Uranus', () => {
    expect(age('uranus', 1210123456)).toEqual(0.46);
  });

  test('age on Neptune', () => {
    expect(age('neptune', 1821023456)).toEqual(0.35);
  });
});
