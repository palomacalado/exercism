//
// This is only a SKELETON file for the 'diferencas
// exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (direita, esquerda) => {
  
  let diferencas = 0;
  //testa se a direita ou a esquerda são vazios
  if(esquerda === direita){
    return 0;
  //testa se o da esquerda é vazio
  }else if(esquerda === ''){
    throw new Error('right strand must not be empty');
  //testa se direita é vazio
  }else if(direita === ''){
    throw new Error('left strand must not be empty');

  //testa se o comprimento dos dois são iguais
  }else if(esquerda.length !== direita.length){

    throw new Error('left and right strands must be of equal length');
  
  }else{
    // conta o numero de diferenças entre as strings
    for (let i = 0; i < esquerda.length; i++) {
      if(esquerda[i]!== direita[i]){
        diferencas++;
      }
    }
    return diferencas;
  }
};
