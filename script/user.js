// you only can export 1 thing per file by default (if have to)!
// normaly it's the class in this file... for example: class User.

export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printName(user) {
  console.log(`User's name is ${user.name}`);
}

export function printAge(user) {
  console.log(`User is ${user.age} years old`);
}
