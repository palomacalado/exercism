//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (frase) => {
  
  const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  if (frase === '' || frase === undefined || frase === null){
    return false;
  }
  // põe toda frase em minuscula e divide as palavras
  let fraseTratada = frase.toLowerCase().split("");
  
  // percorre o alfabeto
  for (let i = 0; i < alfabeto.length; i++) {
    
    // se a letra não estiver no alfabeto, retorna falso
    if(!fraseTratada.includes(alfabeto[i])){
      return false;
    }    
  }
  //senao retorna true
  return true;
  
};
