//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (ano) => {

  
  const divisivelPor4 = ano%4 === 0; // verifica se o ano é divisível por 4
  const divisivelPor100 = ano%100 === 0; // verifica se o ano é divisível por 100
  const divisivelPor400 = ano%400 === 0; // verifica se o ano é divisível por 400
  const testaBissexto = divisivelPor4 && !divisivelPor100 || divisivelPor400; // regras para ser bissexto
  
  //retorna se o ano é bissexto ou não 
  return testaBissexto ;
  
};
