import Person from '../generators/person';
import Team from '../generators/team';

const team = new Team();

const person = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}

const person1 = new Person({
  name: 'Лучник1',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
});

const person2 = new Person({
  name: 'Лучник2',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
});

const person3 = new Person({
  name: 'Лучник3',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
});

test('проверка генератора и ошибки', () => {
  expect(()=>{team.add(person)}).toThrow('Не является экземпляром Person!');

  team.add(person1)
  team.add(person2)
  team.add(person3)

  const result = [...team];
  
  expect(result).toEqual([...team.persons]);
});