/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  /* your logic here...*/

  let sum = 0;
  arr.forEach(el =>{
    if(!isNaN(parseFloat(el) + 1) && isFinite(parseFloat(el)) ){
      if(isNaN(Number(el))){
        el = parseFloat(el)
      }
      sum = sum + Number(el);
    }
  })

  return sum;

};


export default sumElements;
