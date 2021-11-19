// @ts-check

/**
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} 
 */
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

/**
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} 
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/**
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean}
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return archerIsAwake ? false : prisonerIsAwake;
}

/**
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean}
 */
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (petDogIsPresent && !archerIsAwake) 
  || (!petDogIsPresent && prisonerIsAwake)
  && (!archerIsAwake && !knightIsAwake)
  ? true : false;
}
