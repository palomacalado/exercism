
export function isPangram(frase: string):boolean {

  let fraseFiltrada = frase.toUpperCase().split("").filter(caracter => caracter >= 'A' && caracter <= 'Z');

  const setFraseFiltrada = new Set(fraseFiltrada); // o set ignora todos os caracteres repitidos

  return setFraseFiltrada.size == 26;
  
}
