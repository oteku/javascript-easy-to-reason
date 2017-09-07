import { areas, diameters, doubles, squares, negates } from './immutableEx.js';
import { List } from 'immutable';

describe('calculate area from radii', () => {
  test('area for [1]', () => {
    const radii = List([1]);
    const expectedResult  = List([3.14 * 1 * 1]);
    expect(areas(radii)).toEqual(expectedResult);
  });

  test('area for [1, 2]', () => {
    const radii = List([1, 2]);
    const expectedResult  = List([3.14 * 1 * 1, 3.14 * 2 * 2]);
    expect(areas(radii)).toEqual(expectedResult);
  });

  test('result must always be the same', () => {
    const radii = List([1, 2]);
    const expectedResult = areas(radii);
    expect(areas(radii)).toEqual(expectedResult);
  });

});

// describe('calculate diameters from radii', () => {
//     test('area for [1]', () => {
//       const radii = List([1]);
//       const expectedResult  = List([2 * 3.14 * 1]);
//       expect(diameters(radii)).toEqual(expectedResult);
//     });

//     test('area for [1, 2]', () => {
//       const radii = List([1, 2]);
//       const expectedResult = List([2 * 3.14 * 1, 2 * 3.14 * 2]);
//       expect(diameters(radii)).toEqual(expectedResult);
//     });

//     test('result must always be the same', () => {
//       const radii = List([1, 2]);
//       const expectedResult = diameters(radii);
//       expect(diameters(radii)).toEqual(expectedResult);
//     });

// });

// describe('calculate doubles from numbers list', () => {
//     test('double for [1]', () => {
//       const numbers = List([1]);
//       const expectedResult  = List([2 * 1]);
//       expect(doubles(numbers)).toEqual(expectedResult);
//     });

//     test('double for [1, 2]', () => {
//       const numbers = List([1, 2]);
//       const expectedResult  = List([2 * 1, 2 * 2]);
//       expect(doubles(numbers)).toEqual(expectedResult);
//     });

//     test('result must always be the same', () => {
//       const numbers = List([1, 2]);
//       const expectedResult = doubles(numbers);
//       expect(doubles(numbers)).toEqual(expectedResult);
//     });

// });

// describe('calculate squares from numbers list', () => {
//     test('square for [1]', () => {
//       const numbers = List([1]);
//       const expectedResult  = List([1 * 1]);
//       expect(squares(numbers)).toEqual(expectedResult);
//     });

//     test('square for [1, 2]', () => {
//       const numbers = List([1, 2]);
//       const expectedResult  = List([1 * 1, 2 * 2]);
//       expect(squares(numbers)).toEqual(expectedResult);
//     });

//     test('result must always be the same', () => {
//       const numbers = List([1, 2]);
//       const expectedResult = squares(numbers);
//       expect(squares(numbers)).toEqual(expectedResult);
//     });

// });

// describe('calculate negate from numbers list', () => {
//     test('negate for [1]', () => {
//       const numbers = List([1]);
//       const expectedResult  = List([-1]);
//       expect(negates(numbers)).toEqual(expectedResult);
//     });

//     test('negate for [1, 2]', () => {
//       const numbers = List([1, 2]);
//       const expectedResult  = List([-1, -2]);
//       expect(negates(numbers)).toEqual(expectedResult);
//     });

//     test('result must always be the same', () => {
//       const numbers = List([1, 2]);
//       const expectedResult = negates(numbers);
//       expect(negates(numbers)).toEqual(expectedResult);
//     });

// });