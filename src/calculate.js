let pi = 3.14159;
function calculate(radii) {
  for (let i = 0; i < radii.length; i++) {
    radii[i] = pi * radii[i] * radii[i];
  }
  return radii;
}
