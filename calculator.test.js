// importing our function (which we have assumed we will create in future) to be tested from the calculator.js file to our test file
const calculator = require("./calculator");

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.sum(1, 2)).toBe(3);
});
test("subtracting 2 - 1 to equal 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});
test("multiplying 2 * 2 to equal 4", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
test("dividing 4 / 2 to equal 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});
test("Find the remainder of dividing numbers using the modulo method", () => {
  expect(calculator.modulo(10, 2)).toBe(0);
});
