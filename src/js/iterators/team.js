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

  [Symbol.iterator]() {
    let current = 0;
    const { persons } = this;
    return {
      next() {
        if (current < persons.length) {
          return {
            value: persons[current++],
            done: false
          };
        }
        return {
          value: undefined,
          done: true
        };
      },
    };
  }
}