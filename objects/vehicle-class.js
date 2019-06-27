'use strict';

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  
  drive() {
    return 'Moving Forward';
  }

  break() {
    return 'Stopping';
  }
}

class Car extends Vehicle {
//   constructor() {
//     super();
//     // this.wheels = 4;
//   }
}

class Motorcycle extends Vehicle {
  wheelie() {
    return 'Pop a wheelie';
  }
}

// let mazda = new Car('mazda', 4);
// console.log(mazda);


module.exports = {
  Vehicle,
  Car,
  Motorcycle,
};