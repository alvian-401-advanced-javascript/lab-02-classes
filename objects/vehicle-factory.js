
'use strict';

function CarFactory() {
  const car = {
    name: 'factory car',
    wheels: 4,
    drive: function () {
      return 'moving forward';
    },
    stop: function () {
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
    stop: function () {
      return 'stopping';
    },
    wheelie: function () {
      return 'pop a wheelie';
    },
  };
  return motorcycle;
}

module.exports = { CarFactory, MotorcycleFactory};