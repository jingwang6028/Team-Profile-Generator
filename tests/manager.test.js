const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should return office number", () => {
    const testValue = 555;
    const obj = new Manager("Tom", 1, "abc@gmail.com", testValue);
    expect(obj.officeNumber).toEqual(testValue);
  });

  describe("getRole", () => {
    it("should return role value Manager", () => {
      const testValue = "Manager";
      const obj = new Manager("Tom", 1, "abc@gmail.com", 555);
      expect(obj.getRole()).toEqual(testValue);
    });
  });
});
