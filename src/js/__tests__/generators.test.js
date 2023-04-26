import Person from '../generators/person';
import Team from '../generators/team';

test('"Person" and "Team" classes exist', () => {
  expect(Person).toBeDefined();
  expect(Team).toBeDefined();
});

const team = new Team();

test('class "Team" has the "members" property with Set object', () => {
  expect(team.members).toBeDefined();
  expect(team.members instanceof Set).toBeTruthy();
});

team.members.add(new Person('person'));

test('instance of class "Team" has a generator', () => {
  const result = () => [...team];
  expect(result).not.toThrow();
  expect(team[Symbol.iterator].constructor.name).toBe('GeneratorFunction');
  expect(result()).toEqual([...team.members]);
});