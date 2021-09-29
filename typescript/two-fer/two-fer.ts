/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(nome?:string ): string {
  // ^                 ^   ^ this is called a return type; it's the type of the
  // ^                 ^     value that is returned from this function
  // ^                 ^
  // ^                 parameters go here
  // ^
  // allows the tests to import this function and call it
  // <-- Your code goes here. You may remove all the commentary in this file.
  if (nome == undefined){
    nome = "you";
  }
  switch(nome){
    case undefined:
      return `One for you, one for me.`;
    default:
      return `One for ${nome}, one for me.`;
  }

}
