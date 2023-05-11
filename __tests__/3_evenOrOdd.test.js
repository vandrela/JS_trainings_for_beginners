const even_or_odd = require("../challenges/3_evenOrOdd");

it.skip("even_or_odd", () => {
  it('should return "Even" for even numbers', () => {
    expect(even_or_odd(0)).toBe("Even");
    expect(even_or_odd(2)).toBe("Even");
    expect(even_or_odd(4)).toBe("Even");
    expect(even_or_odd(10)).toBe("Even");
    expect(even_or_odd(100)).toBe("Even");
  });

  it('should return "Odd" for odd numbers', () => {
    expect(even_or_odd(1)).toBe("Odd");
    expect(even_or_odd(3)).toBe("Odd");
    expect(even_or_odd(5)).toBe("Odd");
    expect(even_or_odd(11)).toBe("Odd");
    expect(even_or_odd(-3)).toBe("Odd");
  });

  it("should throw an error for non-integer input", () => {
    try {
      even_or_odd("not a number");
    } catch (error) {
      expect(error.message).toBe("Input must be an integer");
    }

    try {
      even_or_odd(null);
    } catch (error) {
      expect(error.message).toBe("Input must be an integer");
    }

    try {
      even_or_odd(undefined);
    } catch (error) {
      expect(error.message).toBe("Input must be an integer");
    }

    try {
      even_or_odd([]);
    } catch (error) {
      expect(error.message).toBe("Input must be an integer");
    }

    try {
      even_or_odd({});
    } catch (error) {
      expect(error.message).toBe("Input must be an integer");
    }
  });
});
