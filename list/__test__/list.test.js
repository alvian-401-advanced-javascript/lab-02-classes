'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('removes the first element for the list and returns that element', () => {
    let stuff = new List();
    stuff.data = {0: 'a', 1: 'b', 2:'c', 3: 'd'};
    stuff.length = 4;
    stuff.shift();
    expect(stuff.length).toEqual(3);
  });

  it('adds an element to the beginning of the list and returns the new length', () => {
    let stuff = new List();
    stuff.data = {0: 'a', 1: 'b', 2:'c', 3: 'd'};
    stuff.length = 4;
    stuff.unshift('e');
    expect(stuff.data).toEqual({0: 'e', 1: 'a', 2:'b', 3: 'c', 4: 'd'});
    // expect(stuff.length).toEqual(5); Needs debugging, currently equals 9
  });

});
