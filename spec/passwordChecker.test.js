import { Main } from "../src/passwordChecker.js";

describe("passwordChecker function should return the answer ", function () {

  it("Should return false for 1 characters ", function () {
    const main = new Main();

    const result = main.passwordChecker("a");

    expect(result).toBe(false);
  });

  it("Should return false for 4 characters ", function () {
    const main = new Main();

    const result = main.passwordChecker("abcd");

    expect(result).toBe(false);
  });

  it("Should return false for 5 characters ", function () {
    const main = new Main();

    const result = main.passwordChecker("abcde");

    expect(result).toBe(false);
  });

});


