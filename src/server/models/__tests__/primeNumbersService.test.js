const primeNumbersServiceTest = require('../primeNumbersService')

describe('primeNumbers function', () => {
  test('prime numbers under 10', async () => {
    const expected = [2, 3, 5, 7];
    const res = await primeNumbersServiceTest.primeNumbers(10);
    expect(res).toEqual(expected);
  });

  test('prime numbers under 1', async () => {
    const expected = 'upper limit number cannot less than 2';
    try {
      await primeNumbersServiceTest.primeNumbers(1);
    } catch (e) {
      expect(e).toEqual(expected);
    }
  });

  test('prime numbers under abc', async () => {
    const expected = 'upper limit number is not an integer';
    try {
      await primeNumbersServiceTest.primeNumbers('abc');
    } catch (e) {
      expect(e).toEqual(expected);
    }
  });
});

describe('mediansOfArray function', () => {
  test('medians of array successful result - even items', () => {
    const res = primeNumbersServiceTest.mediansOfArray([1,2,3,4]);
    expect(res).toEqual([2,3]);
  });

  test('medians of array successful result - odd items', () => {
    const res = primeNumbersServiceTest.mediansOfArray([1,2,3]);
    expect(res).toEqual([2]);
  });

  test('medians of array successful result - <= 2 items', () => {
    const res = primeNumbersServiceTest.mediansOfArray([1,2]);
    expect(res).toEqual([1,2]);
  });

  test('medians of array failed result', () => {
    const res = primeNumbersServiceTest.mediansOfArray('test');
    expect(res).toEqual('The argument is not an array');
  });
});