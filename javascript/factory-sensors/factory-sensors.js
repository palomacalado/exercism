// @ts-check

import { assertFunctionDeclaration } from "@babel/types";

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {

  if (humidityPercentage > 70){
    throw new Error();

  }
  return;
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {

  if(temperature === null){
    throw new ArgumentError();
  }
  if (temperature > 500) {
    throw new OverheatingError(temperature);
  }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {

  try{
    actions.check();
  }catch (error){ // actions.check() lança erros e o cach recebe e trata cada um deles
    if(error instanceof ArgumentError){ // se o erro for do tipo argumentError
      actions.alertDeadSensor();

    } else if(error instanceof OverheatingError && error.temperature >= 600){
      actions.shutdown();
    }
    else if(error instanceof OverheatingError && error.temperature < 600) {
      actions.alertOverheating();
    }
    else{
      throw error ;
    }
    
  }

  }
