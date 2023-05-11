const multiple3or5 = require("../challenges/2_multiple3or5");
const { describe } = require("@jest/globals");

it.skip("Multiples of 3 or 5", () => {
  it("should return the sum of all multiples of 3 or 5 below the number passed in", () => {
    expect(multiple3or5(10)).toBe(23);
    expect(multiple3or5(16)).toBe(60);
    expect(multiple3or5(4)).toBe(3);
  });
  it("should return 0 for negative numbers", () => {
    expect(multiple3or5(-1)).toBe(0);
  });
  it("should return 0 for 0", () => {
    expect(multiple3or5(0)).toBe(0);
  });
});
