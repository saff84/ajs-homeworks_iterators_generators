import Person from './person';

export default class Team {
  constructor() {
    this.persons = [];
  }

  add(person) {
    if (person instanceof Person) {
      this.persons.push(person);
    } else {
      throw new Error('Не является экземпляром Person!');
    }
  }

  *[Symbol.iterator]() {
    for (const person of this.persons) {
      yield person;
    }
  }
}