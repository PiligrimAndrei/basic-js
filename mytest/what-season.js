//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
   //throw new NotImplementedError('Not implemented');
   console.log('date.toSource', date.toSource);
   function isValidDate(value) {
      let dateWrapper = new Date(value);
      console.log(value, !isNaN(dateWrapper.getDate()));
      return (!isNaN(dateWrapper.getDate()));
   }
   if (date) {
      //if (Object.prototype.toString.call(date) === "[object Date]") {
      if (isValidDate(date)) {
         let month = date.getMonth();
         //console.log(month);
         if (month == 0 || month == 1 || month == 11) return 'winter';
         else if (month == 2 || month == 3 || month == 4) return 'spring';
         else if (month == 5 || month == 6 || month == 7) return 'summer'
         else return 'autumn';
      } else return new NotImplementedError('Invalid date!')
   }
   else return 'Unable to determine the time of year!'
}
let input = new Date(1994, 8, 26, 3, 0, 11, 500);
console.log(getSeason(input));
/*module.exports = {
   getSeason
};*/
