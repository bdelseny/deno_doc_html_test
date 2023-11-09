/**
 * A function that only logs its parameters
 * @param {string} str a string
 * @param {number} int a number
 * @param {boolean} bool a boolean
 * @param {any[]} array an array
 * @param {string|number|string[]} optional an optional value with many type possible
 */
export function doesNothing(str, int, bool, array, optional = "optional") {
  console.table(str, int, bool, array, optional);
}

/**
 * A class not doing much
 * @property {string} str a string
 * @property {number} int a number
 * @property {boolean} bool a boolean
 * @property {any[]} array an array
 * @property {string|number|string[]} optional an optional value with many type possible
 */
export class EmptyClass {
  str;
  int;
  bool;
  array;
  optional = "optional";
  /**
   * EmptyClass constructor
   * @param {string} str a string
   * @param {number} int a number
   * @param {boolean} bool a boolean
   * @param {any[]} array an array
   * @param {string|number|string[]} optional an optional value with many type possible
   */
  constructor(str, int, bool, array, optional = "optional") {
    /** @type {string} */
    this.str = str;
    /** @type {number} */
    this.int = int;
    /** @type {boolean} */
    this.bool = bool;
    /** @type {any[]} */
    this.array = array;
    /** @type {string|number|string[]} */
    this.optional = optional;
  }
}
