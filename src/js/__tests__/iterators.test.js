import Person from '../iterators/person';
import Team from '../iterators/team';

test('"Person" and "Team" classes exist', () => {
  expect(Person).toBeDefined();
  expect(Team).toBeDefined();
});

test('instance of class "Person" has correct property names', () => {
  const expected = [
    'name',
    'type',
    'health',
    'level',
    'attack',
    'deffence',
  ];

  expect(Object.keys(new Person('person'))).toEqual(
    expect.arrayContaining(expected),
  );
});

const team = new Team();

test('class "Team" has the "members" property with Set object', () => {
  expect(team.members).toBeDefined();
  expect(team.members instanceof Set).toBeTruthy();
});

team.members.add(new Person('person'));

test('instance of class "Team" has an iterator', () => {
  const result = () => [...team];
  expect(result).not.toThrow();
  expect(result()).toEqual([...team.members]);
});