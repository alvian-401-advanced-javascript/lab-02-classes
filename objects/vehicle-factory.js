
'use strict';

function CarFactory() {
  const car = {
    name: 'factory car',
    wheels: 4,
    drive: function () {
      return 'moving forward';
    },
    break: function () {
      return 'stopping';
    },
  };
  return car;
}

function MotorcycleFactory() {
  const motorcycle = {
    name: 'factory cycle',
    wheels: 2,
    drive: function () {
      return 'moving forward';
    },
    wheelie: function () {
      return 'pop a wheelie';
    },
    break: function () {
      return 'stopping';
    },
  };
  return motorcycle;
}

module.exports = { CarFactory, MotorcycleFactory}