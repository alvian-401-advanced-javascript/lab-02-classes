'use strict';

const VehicleConstructor = require('../vehicle-constructor.js');
const {Car, Motorcycle } = require('../vehicle-class');
const factoryFunction = require('../vehicle-factory');

let types = ['Constructor', 'Class', 'Factory'];

describe('Vehicles', () => {

  describe('Car', () => {

    function getCar(type) {
      switch (type) {
      case 'Constructor':
        return new VehicleConstructor.Car('foo');
      case 'Class':
        return new Car('please work');
      case 'Factory':
        return factoryFunction.CarFactory('factory sucks');
  
      default:
        return {};
      }
    }

    types.forEach(type => {

      let car = getCar(type);

      it(`${type} (Car) has 4 wheels`, () => {
        expect(car.wheels).toEqual(4);
      });

      it(`${type} (Car) can drive`, () => {
        expect(car.drive()).toBeTruthy();
      });

      it(`${type} (Car) can stop`, () => {
        expect(car.stop()).toBeTruthy();
      });

      it(`${type} (Car) cannot do a wheelie`, () => {
        expect(car.wheelie).toBeUndefined();
      });
    });

  });

  describe(`Motorcycle`, () => {

    function getMotorcycle(type) {
      switch (type) {
      case 'Constructor':
        return new VehicleConstructor.Motorcycle('foo');
      case 'Class':
        return new Motorcycle('I said please');
      case 'Factory':
        return factoryFunction.MotorcycleFactory('factory sucks');
      default:
        return {};
      }
    }

    types.forEach(type => {

      let motorcycle = getMotorcycle(type);

      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) can drive`, () => {
        expect(motorcycle.drive()).toBeTruthy();
      });

      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle.stop()).toBeTruthy();
      });

      it(`${type} (Motorcycle) cannot do a wheelie`, () => {
        expect(motorcycle.wheelie()).toBeTruthy();
      });

    });

  });

});
