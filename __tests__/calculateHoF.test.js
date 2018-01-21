// // @flow
// import { List } from "immutable";
// import {
//   areas,
//   diameters,
//   negates,
//   squares,
//   doubles
// } from "../src/calculateHoF";

// describe("areas should return area of circles", () => {
//   test("area for [1]", () => {
//     const radii = List([1]);
//     const expectedResult = List([3.14159 * 1 * 1]);
//     expect(areas(radii)).toEqual(expectedResult);
//   });

//   test("areas for [1, 3]", () => {
//     const radii = List([1, 3]);
//     const expectedResult = List([3.14159 * 1 * 1, 3.14159 * 3 * 3]);
//     expect(areas(radii)).toEqual(expectedResult);
//   });

//   test("result must always be the same", () => {
//     const radii = List([1, 2]);
//     areas(radii);
//     const a = areas(radii);
//     expect(a).toEqual(areas(List([1, 2])));
//   });
// });

// describe("diameters should return area of circles", () => {
//   test("diameters for [1, 3]", () => {
//     const radii = List([1, 3]);
//     const expectedResult = List([3.14159 * 1 * 2, 3.14159 * 3 * 2]);
//     expect(diameters(radii)).toEqual(expectedResult);
//   });
// });

// describe("negates should return negates of integers", () => {
//   test("negates for [1, 3, -2]", () => {
//     const radii = List([1, 3, -2]);
//     const expectedResult = List([-1, -3, 2]);
//     expect(negates(radii)).toEqual(expectedResult);
//   });
// });

// describe("squares should return squares of integers", () => {
//   test("squares for [1, 3, -2]", () => {
//     const radii = List([1, 3, -2]);
//     const expectedResult = List([1 * 1, 3 * 3, -2 * -2]);
//     expect(squares(radii)).toEqual(expectedResult);
//   });
// });

// describe("doubles should return doubles of integers", () => {
//   test("doubles for [1, 3, -2]", () => {
//     const radii = List([1, 3, -2]);
//     const expectedResult = List([1 * 2, 3 * 2, -2 * 2]);
//     expect(doubles(radii)).toEqual(expectedResult);
//   });
// });
