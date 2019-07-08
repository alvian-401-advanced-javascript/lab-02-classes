'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }
  shift() {
    let returnValue = this.data[0];
    delete this.data[0];
    --this.length;
    return returnValue;
  }

  unshift(item) {
    for(let i = this.length; i > -1; i--) {
      this.data[i+1] = this.data[i];
      this.length++;
    }
    this.data[0] = item;
    return this.length;
  }

  filter(callback) {
    if ( ! this.length) {return undefined; }
    let result = new List();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        result.push(this[i], i);
      }
    }
    return result;
  }

  reduce(callback, state) {
    if (! this.length ) {return undefined;}
    for (let i = 0; i < this.length; i++) {
      state = callback(state, this[i], i);
    }
    return state;
  }
}

module.exports = List;
