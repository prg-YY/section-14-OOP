'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const josub = new Person('Josub', 1987);
const jacub = new Person('jacub', 1964);
console.log(jacub, josub);

console.log(jonas instanceof Person);

//Prototypes

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
josub.calcAge();
jacub.calcAge();

console.log(josub.__proto__);
console.log(josub.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(josub));
console.log(Person.prototype.isPrototypeOf(jacub));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, josub.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
