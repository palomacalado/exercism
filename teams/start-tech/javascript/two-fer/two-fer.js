//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (nome) => {
  
  //testa se a entrada é indefinida e diferente de vazia
  if( nome != undefined && nome != '' ){
    return 'One for '+ nome + ', one for me.'; // a soma concatena as strings
                                               // uma outra forma é 'One for ${nome}$, one for me'
  }
  // testa se a entrada é nula ou indefinida ou vazia
  if (nome == null || nome == undefined || nome == '' ){
    return 'One for you, one for me.';
  }



};
