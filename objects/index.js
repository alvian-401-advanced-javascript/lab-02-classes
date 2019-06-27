'use strict';

const VehicleConstructor = require('./vehicle-constructor');
const {Car, Motorcycle } = require('./vehicle-class');
const factoryFunction = require('./vehicle-factory');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const audi = new Car('Audi A5');
console.log(audi.name, audi.drive(), audi.break());

const Yamaha = new Motorcycle('Yamaha 350');
console.log(Yamaha.name, Yamaha.wheelie(), Yamaha.break());

// Implement a car and motorcycle using a Factory
const factoryCar = factoryFunction.CarFactory();
console.log(factoryCar.name, factoryCar.drive(), factoryCar.break());

const factoryBike = factoryFunction.MotorcycleFactory();
console.log(factoryBike.name, factoryBike.wheelie(), factoryBike.break());
