'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  this.accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
  };
  this.brake = function () {
    this.speed -= 5;
    console.log(this.speed);
  };
};
const bmw = new Car('BMW', 120);
console.log(bmw);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
const mercedes = new Car('Mercedes', 95);
console.log(mercedes);
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.brake();
