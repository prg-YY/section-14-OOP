'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const josub = new Person('Josub', 1987);
// const jacub = new Person('jacub', 1964);
// console.log(jacub, josub);

// console.log(jonas instanceof Person);

// //Prototypes

// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();
// josub.calcAge();
// jacub.calcAge();

// // console.log(josub.__proto__);
// // console.log(josub.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(josub));
// // console.log(Person.prototype.isPrototypeOf(jacub));
// // console.log(Person.prototype.isPrototypeOf(Person));

// //.prototypeOfLinkedObjects

// // Person.prototype.species = 'Homo Sapiens';
// // console.log(jonas.species, josub.species);

// // console.log(jonas.hasOwnProperty('firstName'));
// // console.log(jonas.hasOwnProperty('species'));

// // //
// // // Prototypal Inheritance on Built-In Objects
// // console.log(jonas.__proto__);
// // // Object.prototype (top of prototype chain)
// // console.log(jonas.__proto__.__proto__);
// // console.log(jonas.__proto__.__proto__.__proto__);

// // console.dir(Person.prototype.constructor);

// // const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype);

// // console.log(arr.__proto__.__proto__);

// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(arr.unique());

// // const h1 = document.querySelector('h1');
// // console.dir(x => x + 1);

// // Coding Challenge #1
// // Your tasks:
// // 1. Useaconstructorfunctiontoimplementa'Car'
// // .Acarhasa'make'anda 'speed' property. The 'speed'
// //  property is the current speed of the car in km/h
// // 2. Implementan'accelerate'methodthatwillincreasethecar
// // 'sspeedby10, and log the new speed to the console
// // 3. Implementa'brake'methodthatwilldecreasethecar'sspeedby5
// // ,andlog the new speed to the console
// // 4. Create2'Car'objectsandexperimentwithcalling'accelerate'and
// //  'brake' multiple times on each of them
// // Test data:
// // § Data car 1: 'BMW' going at 120 km/h
// // § Data car 2: 'Mercedes' going at 95 km/h
// // GOOD LUCK 😀

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };
// // Car.prototype.acceleration = function () {
// //   this.speed += 10;
// //   console.log(`${this.make} is goiong at ${this.speed}Km/h`);
// // };
// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`${this.make} is goiong at ${this.speed}Km/h`);
// // };

// // const bmw = new Car('BMW', 120);
// // const mercedes = new Car('Mercedes', 95);
// // console.log(bmw);

// // bmw.acceleration();
// // bmw.acceleration();
// // bmw.acceleration();

// // bmw.brake();
// // bmw.brake();
// // bmw.brake();

// // mercedes.acceleration();
// // mercedes.acceleration();
// // mercedes.acceleration();

// // mercedes.brake();
// // mercedes.brake();
// // mercedes.brake();

// //class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   //Methods will be added to .prototype property

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// const prg = new PersonCl('Josub', 1987);
// console.log(prg);
// prg.calcAge();

// console.log(prg.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// prg.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizes
//3. Classes are executed in strict mode

const account = {
  owner: 'josub',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
