//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { triggerAsyncId } from "async_hooks";


export class Triangle {
  ladoA = 0;
  ladoB = 0;
  ladoC = 0;

  constructor(...lados) {
    this.ladoA = lados[0];
    this.ladoB = lados[1];
    this.ladoC = lados[2];

  }
  //método que testa se os parâmetros passados caracterizam um triangulo
  get ehValido(){

    // se todos os lados são maiore que zero
    return this.ladoA > 0 && this.ladoB > 0 && this.ladoC;
  };
  
  // confere se a soma de dois lados do triangulo é maior ou igial ao terceiro lado
  
  get ehDesigual(){
    
    const ehBaseseValidaA = (this.ladoA + this.ladoB) >= this.ladoC;
    const ehBaseseValidaB = (this.ladoB + this.ladoC) >= this.ladoA;
    const ehBaseseValidaC = (this.ladoC + this.ladoA) >= this.ladoB;
     return ( ehBaseseValidaA && ehBaseseValidaB && ehBaseseValidaC) ;
  };

  // confere se a entrada é um triangulo válido
  get ehTrianguloValido(){
    return this.ehValido && this.ehDesigual;
  };

  get isEquilateral() {

  return this.ehTrianguloValido && (this.ladoA  == this.ladoB && this.ladoB == this.ladoC); 

   /* if((Triangle.ladoA === Triangle.ladoB) && (Triangle.ladoB === Triangle.ladoC)){
      return true;
    }*/

  };
  //confere se o triangulo é válido e se pelo menos dois lados são iguais 
  get isIsosceles() {
    return this.ehTrianguloValido && (this.ladoA === this.ladoB || this.ladoB === this.ladoC || this.ladoA === this.ladoC);
  }

  //confere se o triangulo é valido e se todos os lados têm tamanhos diferentes
  get isScalene() {
    return this.ehTrianguloValido && (this.ladoA !== this.ladoB && this.ladoB !== this.ladoC && this.ladoA !== this.ladoC);
  }
  // confere se a soma de dois lados é igual ao terceiro lado
  get isDegenerate(){
return this.ehTrianguloValido && (this.ladoA +this.ladoB === this.ladoC || this.ladoB + this.ladoC === this.ladoA || this.ladoA + this.ladoC === this.ladoB);

  }
}
