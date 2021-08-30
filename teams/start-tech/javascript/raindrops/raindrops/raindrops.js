export const convert = (numero) => {
    let resultado =  '';

    if (numero%3 == 0){
        resultado += "Pling";
    }
    if(numero%5 == 0 ){
        resultado += "Plang";
    }
    if(numero%7 == 0){
        resultado += "Plong";
    }
    if (numero%3 != 0 && numero%5 != 0 && numero%7 != 0 ){
        return resultado +numero;
    }
    return resultado;
    
};