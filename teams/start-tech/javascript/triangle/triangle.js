//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { triggerAsyncId } from "async_hooks";

export class Triangle {
  constructor(lado1,lado2,lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;

  }

  get isEquilateral() {

    let somaTresLados = Triangle.lado1 +Triangle.lado2 + Triangle.lado3;

    if (somaTresLados>)
    switch(Triangle){
      case (somaTresLados>180) :
        return "não é um triângulo";
    }

   /* if((Triangle.lado1 === Triangle.lado2) && (Triangle.lado2 === Triangle.lado3)){
      return true;
    }*/

  }

  get isIsosceles() {
    throw new Error('Remove this statement and implement this function');
  }

  get isScalene() {
    throw new Error('Remove this statement and implement this function');
  }
}
