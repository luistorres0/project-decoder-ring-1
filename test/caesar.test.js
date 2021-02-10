// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar()", () => {
  it("should return an encoded string if correct input given", () => {
    const input = "This is a secret message!";
    const shift = 8;
    const actual = caesar(input, shift);
    const expected = "bpqa qa i amkzmb umaaiom!";

    expect(actual).to.be.equal(expected);
  });

  it("should return a decoded string if correct input given", () => {
    const input = "BPQA qa I amkzmb umaaiom!";
    const shift = 8;
    const actual = caesar(input, shift, false);
    const expected = "this is a secret message!";

    expect(actual).to.be.equal(expected);
  });

  it("should maintain spaces and any other non-alphabetic symbols", () => {
    const input = "Hello, Bob.";
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "ifmmp, cpc.";

    expect(actual).to.be.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "HELLO World.";
    const shift = -10;
    const actual = caesar(input, shift);
    const expected = "xubbe mehbt.";

    expect(actual).to.be.equal(expected);
  });

  it("should return false if shift value not given", () => {
    const input = "thinkful";
    const actual = caesar(input);

    expect(actual).to.be.false;
  });

  it("should return false if shift equals 0", () => {
    const input = "thinkful";
    const actual = caesar(input, 0);

    expect(actual).to.be.false;
  });

  it("should return false if shift is greater than 25", () => {
    const input = "thinkful";
    const actual = caesar(input, 50);

    expect(actual).to.be.false;
  });

  it("should return false if shift is less than -25", () => {
    const input = "thinkful";
    const actual = caesar(input, -50);

    expect(actual).to.be.false;
  });

  it("should wrap around to end of alphabet when shift goes past beginning of alphabet", () => {
    const actual = caesar("apple", -2);
    const expected = "ynnjc";
    expect(actual).to.equal(expected);
  });

  it("should wrap around to beginning of alphabet when shift goes past end of alphabet", () => {
    const actual = caesar("zebra", 3);
    const expected = "cheud";
    expect(actual).to.equal(expected);
  });
});
