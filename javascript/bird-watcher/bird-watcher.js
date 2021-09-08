// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalPassaros = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalPassaros += birdsPerDay[i];
  }
  return totalPassaros;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  //calcula em qual índice começa a semana que foi passada no parâmetro
  let indiceSemana = (week*7) - 7;
  let resultadoFinal = 0;

  for (let i = indiceSemana; i < (week*7)  ; i++){
    resultadoFinal += birdsPerDay[i];
  }

  return resultadoFinal;

}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
 
  for (let i = 0; i < birdsPerDay.length; i+=2) {
    birdsPerDay[i]++ ; 
  }
  
  return birdsPerDay;
}
