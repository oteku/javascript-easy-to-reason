test("area for [1]", () => {
  const radii = [1];
  const expectedResult = [3.14159 * 1 * 1];
  expect(calculate(radii)).toEqual(expectedResult);
});
