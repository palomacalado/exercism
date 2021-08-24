/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = (tamanho) => {
  var total = 0;
  // o valor de entrada não pode ser menor que  1 ou mairor que 64 
  if(tamanho>64 || tamanho<1){
    throw new Error('square must be between 1 and 64');
  }else{
   //utiliza o BigInt para representar numeros maiores que (2^23)-1
    total =  BigInt(2**(tamanho-1));
    return total;
  }
};

export const total = () => {
  var somatorio =BigInt(0);
  for(let i=0; i<64 ; i++){

    somatorio +=BigInt( 2**i);
  }
   
  return somatorio;
};
