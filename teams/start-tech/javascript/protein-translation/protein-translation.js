//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const translate = (RNA = '') => {
 //cria o objeto proteina com todas as sequencias de codons e suas respectivas proteinas
const bancoDeCodons= {
  AUG: 'Methionine',
  UUU:'Phenylalanine',
  UUC:'Phenylalanine',
  UUA:'Leucine',
  UUG:'Leucine',
  UCU:'Serine',
  UCC:'Serine',
  UCA:'Serine',
  UCG:'Serine' ,
  UAU:'Tyrosine',
  UAC:'Tyrosine',
  UGU:'Cysteine',
  UGC:'Cysteine',
  UGG:'Tryptophan', 
  UAA:'STOP',
  UAG:'STOP',
  UGA:'STOP' 
};

  //testa se a string passada é válida
  if(RNA !== ''){

  //separa o array em trios através do split executando as expressão regular
  let codonsSeparados = RNA.match(/.{1,3}/g);
  //array vazio para guardar a lista das proteinas já traduzidas
  let proteinasTraduzidas = [];
  // o every faz com que a sequencia de rna seja alcançada
  codonsSeparados.every((rna) => {
    //verifica se o codon acessado no banco de codons é um que tem condição de parada
    if(bancoDeCodons[rna] === 'STOP'){
      return false;
      // senão, verifica se a entrada foi um codon válido
    }else if(bancoDeCodons[rna] === undefined){
      throw new Error ('Invalid codon');
      // enfim, passando pelos testes anteriores, temos uma sequencia de codons válidas e 
      //conferimos no banco de codons qual era a tradução
    }else{
      proteinasTraduzidas.push(bancoDeCodons[rna]);
      return true;
    }
  });
    // retorna a lista de proteínas traduzidas
    return proteinasTraduzidas;
  // caso o rna passado nao exista, retorna uma lista de 
  }else{
    return [];
  }
  
};
