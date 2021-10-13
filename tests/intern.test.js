const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should return school name during construction", () => {
    const testValue = "GT";
    const obj = new Intern("Tom", 1, "abc@gmail.com", testValue);
    expect(obj.school).toEqual(testValue);
  });

  describe("getSchool", () => {
    it("should return school name", () => {
      const testValue = "GT";
      const obj = new Intern("Tom", 1, "abc@gmail.com", testValue);
      expect(obj.getSchool()).toEqual(testValue);
    });
  });

  describe("getRole", () => {
    it("should return role Intern", () => {
      const testValue = "Intern";
      const obj = new Intern("Tom", 1, "abc@gmail.com", "GT");
      expect(obj.getRole()).toEqual(testValue);
    });
  });
});
