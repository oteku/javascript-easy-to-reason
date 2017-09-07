import { calculate } from './flowEx.js';

describe('calculate area from radii', () => {
  test('area for [1]', () => {
    const radii = [1];
    const expectedResult = [3.14 * 1 * 1];
    expect(calculate(radii, 3.14)).toEqual(expectedResult);
  });

  test('area for [1, 2]', () => {
    const radii = [1, 2];
    const expectedResult = [3.14 * 1 * 1, 3.14 * 2 * 2];
    expect(calculate(radii, 3.14)).toEqual(expectedResult);
  });

  test('result must always be the same', () => {
    const radii = [1, 2];
    const expectedResult = calculate(radii, 3.14);
    expect(calculate(radii, 3.14)).toEqual(expectedResult);
  });

  //No need to test type errors delegated to type system
});