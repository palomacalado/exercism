// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    
    case 'Energizer':
    case 'Green Garden':
      return 1.5;

    case 'Tropical Island':
      return 3;
    
    case 'All or Nothing':
      return 5;
  
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let totalDeLimas = 0;

  for (let i = 0; i < limes.length; i++) { 
    // atribui o tamanho do array para sair do for se o numero de limões já forem suficientes
    if (wedgesNeeded <= 0){
      i = limes.length;
    } 

    if (limes[i] === 'small') {
       wedgesNeeded -= 6 ;
      totalDeLimas ++ ;
    }
    if (limes[i] === 'medium') {
      wedgesNeeded -= 8 ; 
      totalDeLimas ++ ;
    }
    if (limes[i] === 'large') {
      wedgesNeeded -= 10 ; 
      totalDeLimas ++ ;
    }
  }  
   
    
  return totalDeLimas;

}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let tempoRestante = timeLeft;

  while(tempoRestante > 0) {
    
    tempoRestante -= timeToMixJuice(orders[0]);
    orders.shift();
    
  }
  return orders;
}
