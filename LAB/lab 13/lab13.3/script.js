'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}`);
};
// const bmw = new CarCl('BMW', 120);
// console.log('Car:', bmw);
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// console.log('Speed US:', bmw.speedUS);
// bmw.speed = 210;
// console.log('Car after set new speed:', bmw);
// const mercedes = new CarCl('Mercedes', 95);
// console.log('Car:', mercedes);
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.brake();
// console.log('Speed US:', mercedes.speedUS);
// mercedes.speed = 210;
// console.log('Car after set new speed:', mercedes);
const EvCar = function (make, speed, charge) {
  Car.call(this, make, speed);

  this.charge = charge;
  console.log(
    `${this.make} going at ${this.speed} with a charge at ${this.charge}%`
  );
};
EvCar.prototype = Object.create(Car.prototype);
EvCar.prototype.chargeBattery = function (changeTo) {
  this.charge = changeTo;
  console.log(
    `${this.make} going at ${this.speed} with a charge at ${this.charge}%`
  );
};
EvCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} with a charge at ${this.charge}`
  );
};

const tesla = new EvCar('Tesla', 120, 23);

tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.chargeBattery(90);
