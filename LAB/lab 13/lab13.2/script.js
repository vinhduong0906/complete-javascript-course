'use strict';

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
    console.log(`${this.make} going at ${this.speed}`);
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(`${this.make} going at ${this.speed}`);
  }
}
const bmw = new CarCl('BMW', 120);
console.log('Car:', bmw);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
console.log('Speed US:', bmw.speedUS);
bmw.speed = 210;
const mercedes = new CarCl('Mercedes', 95);
console.log('Car:', mercedes);
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
console.log('Speed US:', mercedes.speedUS);
mercedes.speed = 210;
