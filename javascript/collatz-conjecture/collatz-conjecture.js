//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const steps = (numero) => {
  
  let contador = 0;
  let numeroAux = numero;

  if(numero <= 0){
    throw new Error('Only positive numbers are allowed')
  } 
  

  while(numeroAux !== 1){
    if (numeroAux %2 === 0) {
      numeroAux = numeroAux/2;
      contador++;
    }else{
      numeroAux = 3*numeroAux +1;
      contador ++;
    }
    
  }

  return contador;
  
    
}