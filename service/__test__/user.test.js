const userService = require('../user');

describe('user service', () => {
  test('does nothing if separation is already correct', () => {
    const { fName, mNames, lName } = userService.sanitizeNames(
      'John',
      'Alexander Brian',
      'Smith'
    );

    expect(fName).toEqual('John');
    expect(mNames).toEqual('Alexander Brian');
    expect(lName).toEqual('Smith');
  });

  test('correct separation of firstName if it contains spaces', () => {
    const { fName, mNames, lName } = userService.sanitizeNames(
      'John Alexander',
      'Brian',
      'Smith'
    );

    expect(fName).toEqual('John');
    expect(mNames).toEqual('Alexander Brian');
    expect(lName).toEqual('Smith');
  });
});
