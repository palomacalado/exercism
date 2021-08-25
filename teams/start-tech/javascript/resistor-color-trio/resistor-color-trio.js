//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { ValidationError } from "jest-validate";

const resistores = {
  black: '0',
  brown: '1',
  red: '2',
  orange: '3',
  yellow: '4',
  green: '5',
  blue: '6',
  violet:'7',
  grey: '8',
  white: '9'
};

export class ResistorColorTrio {
  

  constructor(cores) {
    this.cor1 = +(resistores[cores[0]]);
   // console.log(cores);
    this.cor2 = +(resistores[cores[1]]);
    this.cor3 = +(resistores[cores[2]]);
    
  };

  get label() {

    let doisPrimeiros = +(""+ this.cor1 + this.cor2);
    /*multiplica dos dois primeiros números por 10^ ao terceiro numero para
      calcular o número de zeros */
    let valorTotal = doisPrimeiros* (10**this.cor3);

    if (Number.isNaN(doisPrimeiros)|| doisPrimeiros === undefined ){
      throw new Error('invalid color');
    }

    if (Math.log10(valorTotal) < 3){
      return `Resistor value: ${valorTotal} ohms`;
    
    }else{
      return `Resistor value: ${valorTotal/1000} kiloohms`;
    }

  }
}
