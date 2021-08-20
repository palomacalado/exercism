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
  }

// calculo a idade no novo planeta
idadeNovoPlaneta = parseFloat((segundos/anoNovoPlaneta/segundosEmAnoTerrestre).toFixed(2));

return idadeNovoPlaneta;
};
