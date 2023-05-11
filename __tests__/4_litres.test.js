const litres = require("../challenges/4_litres");

it.skip("Returns 0 when time is 0", () => {
  expect(litres(0)).toBe(0);
});

it.skip("Rounds down to the smallest value", () => {
  expect(litres(1.4)).toBe(0);
  expect(litres(0.82)).toBe(0);
});

it.skip("Returns the number of litres of water Nathan will drink", () => {
  expect(litres(2)).toBe(1);
  expect(litres(12.3)).toBe(6);
  expect(litres(11.8)).toBe(5);
  expect(litres(1787)).toBe(893);
});
