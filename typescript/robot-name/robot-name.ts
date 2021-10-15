
export class Robot {
  private readonly alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  private static listaDeNomes = new Set<string>() ;

 private meuNome:string = "";
  constructor() {
    this.resetName();
        
  }
  private geradorDeNome(): string {   
    let nomeGerado = "";
     
    for (let i = 0; i < 5 ; i++) {
      
      if(i < 2){
       nomeGerado += this.alfabeto[Math.floor(Math.random()*26)]; 
      }

      if(i >= 2) {
       nomeGerado += Math.floor(Math.random()*10); 
      }
   
    }
    return nomeGerado;
    
  }

  public get name(): string {
    return this.meuNome;
  }

  public resetName():void {

    let novoNome = this.geradorDeNome();

    while(Robot.listaDeNomes.has(novoNome)){
      novoNome = this.geradorDeNome();
    }

    Robot.listaDeNomes.add(novoNome);
    this.meuNome = novoNome;
    
  }

  public static releaseNames(): void{
    Robot.listaDeNomes.clear() ;
  }
}
