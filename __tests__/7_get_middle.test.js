const getMiddle = require("../challenges/7_get_middle");

test.skip("returns the middle character for odd length string", () => {
  expect(getMiddle("test")).toBe("es");
  expect(getMiddle("A")).toBe("A");
});

test.skip("returns the middle two characters for even length string", () => {
  expect(getMiddle("testing")).toBe("t");
  expect(getMiddle("middle")).toBe("dd");
});
