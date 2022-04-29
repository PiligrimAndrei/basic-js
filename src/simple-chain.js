const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === null) {
      this.chain.push(null)
    } else {
      this.chain.push(value);
    }
    console.log(this.chain);
    return this;
  },
  removeLink(position) {
    console.log(position);
    if (typeof (position) != 'number' || !Number.isInteger(position) || position > this.chain.length - 1 || position < 0) {
      chain = [];
      console.log('ERROR');
      throw new NotImplementedError('You can\'t remove incorrect link!');
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return '( ' + this.chain.join(' )~~( ') + ' )';
  },
  chain: [],
};

//console.log(chainMaker.reverseChain().reverseChain().addLink(NaN).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(true).finishChain());
module.exports = {
  chainMaker
};
