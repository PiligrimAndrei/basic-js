//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
   //throw new NotImplementedError('Not implemented');
   console.log(members, Array.isArray(members));
   if (Array.isArray(members)) {
      let res = members.filter((item) => typeof (item) === 'string').map((item) => item.substr(0, 1)).sort();
      return res;
   } else return false;

}

console.log(createDreamTeam(['Amelia', 'Grace', 'Lily', 'Ruby']));
/*module.exports = {
   createDreamTeam
};
*/