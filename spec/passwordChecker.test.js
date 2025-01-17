import { Main } from "../src/passwordChecker.js";

describe("passwordChecker function should return the answer ", function () {
    const main = new Main();

  it("Should return false for 1 characters ", function () {
    const result = main.passwordChecker("a");

    expect(result).toBe(false);
  });

  it("Should return false for 4 characters ", function () {
    const result = main.passwordChecker("abcd");

    expect(result).toBe(false);
  });

  it("Should return false for 5 characters ", function () {
    const result = main.passwordChecker("abcde");

    expect(result).toBe(false);
  });

  it("Should return false for 9 characters ", function () {
    const result = main.passwordChecker("abcdefghi");

    expect(result).toBe(true);
  });

});


