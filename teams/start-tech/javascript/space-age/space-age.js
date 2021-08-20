//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planeta, segundos) => {
  
  const segundosEmAnoTerrestre = 31557600;
  let anoNovoPlaneta;
  let idadeNovoPlaneta;

  // identifico o planeta e atribuo o valor da ano no onvo planeta em relação à Terra
  switch(planeta){
    case 'mercury':
      anoNovoPlaneta = 0.2408467;
      break;

    case 'venus':
      anoNovoPlaneta = 0.61519726;
      break;

    case 'earth':
      anoNovoPlaneta = 1;
      break;

    case 'mars':
      anoNovoPlaneta = 1.8808158;
      break;

    case 'jupiter':
      anoNovoPlaneta = 11.862615;  
    break;

    case 'saturn':
      anoNovoPlaneta = 29.447498;
      break;

    case 'uranus':
      anoNovoPlaneta = 84.016846;
      break;

    case 'neptune':
      anoNovoPlaneta = 164.79132;
      break;
    default: 
      throw "Parâmetro inválido"; // retorna o erro escrito

    //  return -1; // retorna erro, caso não seja nenhum desses planetas
  }

// calculo a idade no novo planeta
let anoFinal = segundos/anoNovoPlaneta/segundosEmAnoTerrestre;

// toFixed fixa o resultado em duas casas decimais, mas retorna uma string
// parseFloalt converte a string em número
//idadeNovoPlaneta = parseFloat(anoFinal.toFixed(2));

idadeNovoPlaneta = +(anoFinal.toFixed(2));

return idadeNovoPlaneta;
};
