import Person from './person';

export default class Team {
  constructor() {
    this.players = [];
  }

  add(player) {
    if (player instanceof Person) {
      this.players.push(player);
    } else {
      throw new Error('Не валидный объект!');
    }
  }

  [Symbol.iterator]() {
    let current = 0;
    const { players } = this;
    return {
      next() {
        if (current < players.length()) {
          return {
            value: players[current++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}