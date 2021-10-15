import { Person } from './Person';

class Student implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

export { Student };
