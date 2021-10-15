export class Clock {
  private readonly hora: number;
  private readonly minutos : number;

  constructor(hour: number, minute? : number /*ou minute: number = 0*/) {
    this.hora = this.ajustarHora(hour, minute?? 0);
    this.minutos = this.ajustarMinutos(minute ?? 0); // quando minute for underfined atribuirá o valor zero


  }

  private ajustarMinutos(minute: number): number {
  
    let minutos: number;

    // retorna o resto da divisão de minutos por 60
    minutos = minute % 60;

    if(minutos < 0){
      minutos = minutos + 60;
    }
      
    return minutos;
   

  }
  private ajustarHora(hour: number, minute: number): number {
    
    let hora: number = hour;

    // pega a parte inteira da divisão para somar à hora
    hora += Math.trunc(minute/60);
    
    // se o resto de minutos por 60 for negativo, deverá subtrair uma hora
    if(minute % 60< 0){
      hora --;
    }

    hora = hora % 24;
        
    if(hora < 0){
      hora = 24 + hora;

    }

    return hora;
  }

  public toString(): string {

    return `${this.hora.toString().padStart(2,'0')}:${this.minutos.toString().padStart(2,'0')}`;
  }

  public plus(minutes: number): Clock {

    return new Clock(this.hora,this.minutos+minutes);
  }

  public minus(minutes: number): Clock {
    
    return new Clock(this.hora,this.minutos - minutes);
  }

  public equals(other: Clock): boolean {
   
   return (this.hora == other.hora && this.minutos == other.minutos);
   
  }
}
