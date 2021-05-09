const userService = require('../user');

describe('user service', () => {
  test('does nothing if separation is already correct', () => {
    const { fName, mNames, lName } = userService.sanitizeNames(
      'John',
      'Alexander',
      'Smith'
    );

    expect(fName).toEqual('John');
    expect(mNames).toEqual('Alexander');
    expect(lName).toEqual('Smith');
  });

  test('correct separation of firstName if it contains spaces', () => {
    const { fName, mNames, lName } = userService.sanitizeNames(
      'Jack Dean',
      'Alexander',
      'Gates'
    );

    expect(fName).toEqual('Jack');
    expect(mNames).toEqual('Dean Alexander');
    expect(lName).toEqual('Gates');
  });
});
