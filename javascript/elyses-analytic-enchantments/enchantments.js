// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
export function getCardPosition(stack, card) {
  for (let i = 0; i < stack.length; i++) {
    if(stack[i]== card){
      return i;
    }
    
  }
  return -1;
}

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
export function doesStackIncludeCard(stack, card) {

  for (let i = 0; i < stack.length; i++) {
    if(stack[i]== card){
      return true;
    }
    
  }
  return false;
}

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
export function isEachCardEven(stack) {
  for (let i = 0; i < stack.length; i++) {
    if(stack[i]%2 != 0){
      return false;
    }
    
  }
  return true;
  
}

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
export function doesStackIncludeOddCard(stack) {
  for (let i = 0; i < stack.length; i++) {
    if(stack[i]%2 != 0){
      return true;
    }
    
  }
  return false;
}

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number} the first odd value
 */
export function getFirstOddCard(stack) {
 
  for (let i = 0; i < stack.length; i++) {
    if(stack[i]%2 != 0){
      return stack[i];
    }
    
  }
  return;
}

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
export function getFirstEvenCardPosition(stack) {
  for (let i = 0; i < stack.length; i++) {
    if(stack[i]%2 == 0){
      return i;
    }
    
  }
  return -1;
}
