/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/

  if(typeof str === 'string' ){
    str = str.split('');

    let reversedStr = '';

    for(var i=1; i <= str.length; i++){
      reversedStr = reversedStr + str[str.length-i];
    }
    return reversedStr;

  }else {
    return new Error('this is not a string');
  }
};

export default turnMeBaby;
