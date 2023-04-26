export default class Team {
  constructor() {
    this.members = new Set();
  }

  * [Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}