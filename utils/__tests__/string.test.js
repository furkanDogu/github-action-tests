import { firstLetter, length } from "../string";

describe("String tests", () => {
  it("should return first letter of the string correctly", () => {
    expect(firstLetter("hey")).toBe("h");
  });
  it("should return length of the string correctly", () => {
    expect(length("hey")).toBe(3);
  });
});
