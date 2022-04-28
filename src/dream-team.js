const { NotImplementedError } = require('../extensions/index.js');

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
  if (Array.isArray(members)) {
    let res = members.filter((item) => typeof (item) === 'string').filter((item) => item != " ").map((item) => item.trim().substr(0, 1).toUpperCase()).sort().join('');
    return res;
  } else return false;

}

//console.log(createDreamTeam(['Amelia', 'Grace', 'Lily', 'Ruby']));
module.exports = {
  createDreamTeam
};
