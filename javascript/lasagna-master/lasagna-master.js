/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */


export function cookingStatus(tempo){

    switch (tempo) {
        case 0:
            return "Lasagna is done.";
        
        case null:
        case undefined:
            return 'You forgot to set the timer.';

        default:
            return 'Not done, please wait.';
    }
}

export function preparationTime(camadas, tempoMedio){

    if (!tempoMedio) tempoMedio = 2;

    return camadas.length * tempoMedio;
}

export function quantities(camadas){
    var lasanha = {noodles: 0, sauce: 0 };
   
    for (let i = 0 ; i < camadas.length; i++){
        if (camadas[i] == 'noodles') {
            lasanha.noodles += 50;
        }

        if (camadas[i] == 'sauce') {
            lasanha.sauce += 0.2;
        }
    }
    return lasanha;

}

export function addSecretIngredient(ingredientesAmigo, minhaLista){

    let trocaIngredientes = ingredientesAmigo[ingredientesAmigo.length - 1];
    minhaLista.push(trocaIngredientes);
}

export function scaleRecipe (receita, porcoes){
    let receitaCalculada = { };

        for (const ingrediente in receita){
            receitaCalculada[ingrediente] = receita[ingrediente] * porcoes/2;
        }

        
    return receitaCalculada;

}