import { AdultUsersNamesPipe } from './adult-users-names.pipe';
import { User } from './app.component';

const users: User[] = [
  {
    firstName: 'bla name',
    lastName: 'bla lastname',
    age: 6,
  },
  {
    firstName: 'bla2 name',
    lastName: 'bla2 lastname',
    age: 20,
  },
  {
    firstName: 'bla3 name',
    lastName: 'bla3 lastname',
    age: 30,
  },
];

describe('AdultUsersNamesPipe', () => {
  it('create an instance', () => {
    const pipe = new AdultUsersNamesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return firstNames of adult users', () => {
    const pipe = new AdultUsersNamesPipe();
    const result = pipe.transform(users);

    const adultUserNames = users
      .filter((u) => u.age >= 18)
      .map((u) => u.firstName);

    expect(result).toEqual(adultUserNames);
  });
});
