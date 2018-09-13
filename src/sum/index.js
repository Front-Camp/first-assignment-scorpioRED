/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
const sum = (a, b) => {
  /* your logic here...*/
  function isArgumentAllowed(arg) {
    return isFinite(arg) && !isNaN(arg) && typeof arg === 'number';
  }

  if (isArgumentAllowed(a) && isArgumentAllowed(b)){
    return a+b;
  }else {
    throw new Error('one of arguments is not a number');
  }

};

export default sum;
