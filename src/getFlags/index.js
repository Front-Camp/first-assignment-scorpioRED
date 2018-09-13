/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  /* your logic here...*/
  let arrayToReturn = new Array();

  arr.forEach(ellOfArr => {
    arrayToReturn = arrayToReturn.concat(ellOfArr["flags"])
  })

  return arrayToReturn;
};

export default getFlags;
