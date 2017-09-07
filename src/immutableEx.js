// @flow
import { List } from 'immutable';

function area(radius: number, pi: number = 3.14): number {
  return pi * radius * radius;
}
function diameter(radius: number, pi: number = 3.14): number {
  return 2 * pi * radius;
}
function square(x: number): number {
  return x * x;
}
function double(x: number): number {
  return x * 2;
}
function negate(x: number): number {
  return -x;
}

const actionOnList = (action: Function, values: List<number>): List<number> => values.map(x => action(x));

export const areas = (radii: List<number>): List<number> => actionOnList(area, radii);
export const diameters = (radii: List<number>): List<number> => actionOnList(diameter, radii);
export const doubles = (numbers: List<number>): List<number> => actionOnList(double, numbers);
export const squares = (numbers: List<number>): List<number> => actionOnList(square, numbers);
export const negates = (numbers: List<number>): List<number> => actionOnList(negate, numbers);