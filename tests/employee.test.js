const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should return an object when called with the 'new' keyword", () => {
    const obj = new Employee();
    expect(typeof obj).toEqual("object");
  });

  it("should return name during construction", () => {
    const name = "Tom";
    const obj = new Employee(name);
    expect(obj.name).toEqual(name);
  });

  it("should return id during construction", () => {
    const testValue = 2;
    const obj = new Employee("Tom", testValue);
    expect(obj.id).toEqual(testValue);
  });

  it("should return email durign construction", () => {
    const testValue = "abc@gmail.com";
    const obj = new Employee("Tom", 1, testValue);
    expect(obj.email).toEqual(testValue);
  });

  describe("getName", () => {
    it("should return name", () => {
      const testValue = "Tom";
      const obj = new Employee(testValue);
      expect(obj.getName()).toEqual(testValue);
    });
  });

  describe("getId", () => {
    it("should return id", () => {
      const testValue = 2;
      const obj = new Employee("Tom", testValue);
      expect(obj.getId()).toEqual(testValue);
    });
  });

  describe("getEmail", () => {
    it("should return email address", () => {
      const testValue = "abc@gmail.com";
      const obj = new Employee("Tom", 1, testValue);
      expect(obj.getEmail()).toEqual(testValue);
    });
  });

  describe("getRole", () => {
    it("should return Employee", () => {
      const testValue = "Employee";
      const obj = new Employee("Tom", 1, "abc@gmail.com");
      expect(obj.getRole()).toEqual(testValue);
    });
  });
});
