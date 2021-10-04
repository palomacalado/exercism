import { TypeofTypeAnnotation } from "@babel/types";

type baseDna = keyof typeof basesDna;

enum basesDna{
  G = 'C',
  C = 'G',
  T = 'A',
  A = 'U'
}

export function toRna(dna: string): string {
let resultado :string = "";
 
for (const elemento of dna){
  if (!(elemento in basesDna)) {
    throw new Error ("Invalid input DNA.");
  }

  resultado += basesDna[<baseDna>elemento];

}

return resultado;
}


