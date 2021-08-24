//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//Cria o objero resistores com todas as propriedades que ele pode assumir
const resistores = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};
// de acordo com a cor de entrada, retorna o valor da resistência correspondente
export const colorCode = (cor) => {
  return (resistores[cor]);
};
//retorna a lista de propriedades do objeto resistores em forma de array
export const COLORS = Object.keys(resistores);

