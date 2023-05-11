const positiveSum = require("../challenges/8_sum_of_positives");

describe.skip("positiveSum", () => {
  test("returns the sum of all positive numbers in the array", () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
    expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
    expect(positiveSum([-1, 2, 3, 4, -5])).toBe(9);
    expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
  });

  test("returns 0 if the array is empty", () => {
    expect(positiveSum([])).toBe(0);
  });
});
