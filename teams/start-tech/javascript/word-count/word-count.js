//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (frase) => {

/* com o regex ele ignora os itens não alfanumeticos e os espaços, mantendo o apostrofo
   e substitui por espaço*/
frase = frase.replace(/[^'\w\s,]|_|\s'|'(\s|$)/g, ' ');

//poe toda string em minusculo
frase = frase.toLowerCase();

//separa as palavras por espaço
const palavrasSeparadas  = frase.split(/[\s,]+/).filter(valor =>valor);


//cria o objeto do resultado final
let resultadoFinal = {};

//procura a palavra dentro de palavrasSeparadas
for (let palavra of palavrasSeparadas) {
  
  // se não for achado, acrescenta com valor 0
  resultadoFinal[palavra] ??= 0;
  //se encontrar um igual, soma 1
  resultadoFinal[palavra] += 1;
}

//retorna o objeto
return resultadoFinal;
}