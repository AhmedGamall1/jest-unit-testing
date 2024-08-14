const sum = require("../sum");

test("return 0 if no number", () => {
  expect(sum()).toBe(0);
});

test("return number", () => {
  expect(sum(10)).toBe(10);
});

test("return sum of two number", () => {
  expect(sum(10, 10)).toBe(20);
});

test("return sum of three number", () => {
  expect(sum(10, 10, 10)).toBe(30);
});
