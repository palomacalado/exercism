//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (numero) => {

  //testa se o numero é natural
  if (numero <= 0){
    throw new Error('Classification is only possible for natural numbers.');
  }

  //essa variável me auxiliará no somatório  
  var somatorio = 0;
  
  //percorro de  1 ao valor do número procurando seus divisores
  for(let i=1 ; i< numero ; i++){

    //se i for divisível pelo numero, somo.
    if(numero%i == 0){
      somatorio += i;
   }
    
  }
  //confiro se o somatório de seus divisores é maior, menor ou igual
  if(somatorio == numero){
   return "perfect";
  }
  if (somatorio > numero){
    return "abundant";
  }
  if (somatorio < numero){
    return "deficient";
  }

};
