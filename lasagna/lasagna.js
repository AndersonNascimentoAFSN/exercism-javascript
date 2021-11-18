// @ts-check
const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * @param {number} actualMinutesInOven
 * @returns {number}
*/
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}

/**
 * @param {number} numberOfLayers
 * @returns {number}
*/
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER
}

/**
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number}
*/
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
