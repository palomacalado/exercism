// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let numero1 = +array1.join('');
  let numero2 = +array2.join('');
  //console.log(numero1 , numero2);
  return numero1 + numero2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let numero = String(value);
  let numeroInvertido = "";

  for (let i = numero.length-1; i >=0; i--) {
    numeroInvertido += numero[i];
    
  }
  
  if(numero === numeroInvertido){
    return true;
  }else {
    return false;
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {

  if (input === "" || input === null || input === undefined) {
    return 'Required field';
  } else if (!Number(input)||Number(input) === 0){
    return 'Must be a number besides 0';
  }else{
    return "";
  }
  
  
}
