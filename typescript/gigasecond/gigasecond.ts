export class Gigasecond {

  private readonly gigaDate: number;
  //construtor gigasecond
  public constructor (anoInicial: Date){
    this.gigaDate = anoInicial.getTime();
  }


  public date(): Date {
    let dataNova = new Date(this.gigaDate + 1e12);
    return dataNova;
  }
}
