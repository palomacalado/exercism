//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
 // var numero;
 // var somaDosQuadrados;
 // var quadradoDaSoma;

  constructor(numero) {
    this.numero = numero;
    
  }

  get sumOfSquares() {
    var somaDosQuadrados = 0;
    for(let i=0; i<=this.numero;i++){
     somaDosQuadrados += i**2;
    }
    return somaDosQuadrados;
  }

  get squareOfSum() {
    var aux = 0;
    var quadradoDaSoma = 0;

    for(let i=0; i<=this.numero;i++){
      aux += i;
    };
    quadradoDaSoma = aux**2;

    return quadradoDaSoma;
  };

  get difference() {
    var soma = this.sumOfSquares;
    var quadrado = this.squareOfSum;
    return quadrado - soma;
  };
};
