import { Main } from "../src/passwordChecker.js";

describe("passwordChecker function should return the answer ", function () {

  it("Should return false for 1 characters minute", function () {
    const main = new Main();

    const result = main.passwordChecker("a");

    expect(result).toBe(false);
  });

});


