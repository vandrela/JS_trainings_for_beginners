const findShort = require("../challenges/9_find_shorter");

describe.skip("findShort", () => {
  it("returns the length of the shortest word in a string", () => {
    expect(findShort("Test where final word shortest see")).toEqual(3);
    expect(findShort("Lets all go on holiday somewhere very cold")).toEqual(2);
    expect(
      findShort("i want to travel the world writing code one day")
    ).toEqual(1);
  });

  it("returns 0 for an empty string", () => {
    expect(findShort("")).toEqual(0);
  });
});
