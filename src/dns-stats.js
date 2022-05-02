const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {};
  for (let i = 0; i < domains.length; i++) {
    let arrDomains = domains[i].split(".")
    let reverseDomains = arrDomains.reverse();
    for (let j = 0; j < reverseDomains.length; j++) {
      let domain = `.${reverseDomains.slice(0, j + 1).join('.')}`
      dns[domain] = dns[domain] ? dns[domain] + 1 : 1

    }
  }
  return dns
}

/*console.log(getDNSStats([
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
]))*/

module.exports = {
  getDNSStats
};
//node ./src/dns-stats.js