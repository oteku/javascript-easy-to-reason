// @flow
import { List } from 'immutable';

const list: List<number> = List([1, 2]);

function calculate(radii: List<number>, pi: number = 3.14): List<number> {
  const areas = radii.map(radius => pi * radius * radius);
  return areas;
}

console.log(calculate(list));

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

const actionOnList = (action: Function, values: List<number>): List<number> =>
  values.map(action);

const areas: List<number> = actionOnList(area, list);
const diameters: List<number> = actionOnList(diameter, list);
const doubles: List<number> = actionOnList(double, list);
const squares: List<number> = actionOnList(square, list);
const negates: List<number> = actionOnList(negate, list);
