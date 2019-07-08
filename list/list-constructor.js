'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  let returnValue = this.data[0];
  delete this.data[0];
  --this.length;
  return returnValue;
};

List.prototype.unshift = function(item) {
  for(let i = this.length; i > -1; i--) {
    this.data[i+1] = this.data[i];
    this.length++;
  }
  this.data[0] = item;
  return this.length;
};

List.prototype.forEach = function (callback) {
  if (this.length)
    for(let i = 0; i < this.length; i++) {
      callback(this[i], i);
    }
};

List.prototype.filter = function (callback) {
  if ( ! this.length) {return undefined; }
  let result = new List();
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i], i);
    }
  }
  return result;
};

List.prototype.reduce = function(callback, state) {
  if (! this.length ) {return undefined;}
  for (let i = 0; i < this.length; i++) {
    state = callback(state, this[i], i);
  }
  return state;
};
module.exports = List;
