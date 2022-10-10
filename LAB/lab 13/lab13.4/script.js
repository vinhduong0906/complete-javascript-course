'use strict';

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log('Speed after accelerate:', this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
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
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
    console.log(
      `${this.make} going at ${this.speed} with a charge at ${this.#charge}%`
    );
  }
  chargeBattery(changeTo) {
    this.#charge = changeTo;
    console.log(
      `${this.make} going at ${this.speed} with a charge at ${this.#charge}%`
    );
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} with a charge at ${this.#charge}%`
    );
    return this;
  }
}
const evCar = new EVCl('Tesla', 120, 23);

evCar.accelerate().accelerate();
evCar.brake().brake();
evCar.chargeBattery(90).chargeBattery(100);
