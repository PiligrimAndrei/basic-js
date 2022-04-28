const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
   //throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
   let ind = email.indexOf('@');
   console.log('index:', ind, 'slice:', email.slice(ind + 1, email.length));
   result = email.slice(ind + 1, email.length);
   console.log(result, result.length)
   return result;

}
console.log(getEmailDomain('prettyandsimple@example.com'));
module.exports = {
   getEmailDomain
};
