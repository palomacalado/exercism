export function isLeap(ano:number):boolean {
  let ehBissexto: boolean;
  let divisivelPor400: boolean = ano % 400 === 0;
  let divisivelPor100 : boolean = ano % 100 === 0;
  let divisivelPor4 : boolean = ano % 4 === 0 ;
  
  ehBissexto = divisivelPor400 || divisivelPor4 && !divisivelPor100;

  return ehBissexto;

}
