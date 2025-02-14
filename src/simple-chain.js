const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    this.chain.length;
    return this
  },
  addLink(value) {
    /*if (arguments.length == 0) {
      this.chain.push('');
    } else if (value === null) {
      this.chain.push('null');
    }
    else {
      //console.log(value);*/
    this.chain.push(`( ${value} )`);
    //console.log(this.chain.length, "add", this.chain);

    return this
  },
  removeLink(position) {
    //if (typeof (position) !== 'number' || !Number.isInteger(position) || position > this.length || position <= 0) {
    if (!this.chain[position - 1]) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chain.splice(position - 1, 1);
      return this
      //console.log(this.chain.length, "--", position, "remove", this.chain);
    }

  },
  reverseChain() {

    this.chain.reverse();
    //console.log('reverse', this.chain);
    return this
  },
  finishChain() {
    let finishArr = this.chain.join('~~');
    this.chain = [];
    return finishArr
  },
  chain: []
}

//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
module.exports = {
  chainMaker
}
