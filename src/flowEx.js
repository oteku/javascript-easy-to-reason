// @flow

export function calculate(radii:Array<number>, pi:number) : Array<number> {
    const areas = radii.map(radius => pi * radius * radius);
    return areas;
  }


const obj1: { foo: boolean } = { foo: true }; //works

const obj2 = {
  foo: 1,
  bar: true,
  baz: 'three',
};
const foo: number  = obj2.foo; // Works!
const bar: boolean = obj2.bar; // Works!
const inferbar: typeof obj1.foo = obj2.bar; // Works!