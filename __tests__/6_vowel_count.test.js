const getCount = require("../challenges/6_vowel_count");

test.skip("counts vowels correctly", () => {
  expect(getCount("hello")).toBe(2);
  expect(getCount("world")).toBe(1);
  expect(getCount("")).toBe(0);
  expect(getCount("aeiou")).toBe(5);
  expect(getCount("bcd")).toBe(0);
  expect(getCount("abracadabra")).toBe(5);
});
