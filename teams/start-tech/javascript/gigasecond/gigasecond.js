//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = ( dataInicial ) => {

  var dataAux = dataInicial.getTime(); // pega o numero de milissegundos da datainicial desde 1970
  var giga = dataAux +1e9 * 1000; // somando um gigasegundo a data e multiplica por mil( Milissegundos)
  return new Date(giga);

  /*var dataAux = new Date((dataInicial).setSeconds(segundos+1e9));
  (dataInicial).setSeconds(segundos+1e9)*/
  
};
