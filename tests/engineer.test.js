const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should return GitHub name during construction", () => {
    const testValue = "GitHubName";
    const obj = new Engineer("Tom", 1, "abc@gmail.com", testValue);
    expect(obj.github).toEqual(testValue);
  });

  describe("getGithub", () => {
    it("should return GitHub name", () => {
      const testValue = "GitHubName";
      const obj = new Engineer("Tom", 1, "abc@gmail.com", testValue);
      expect(obj.getGithub()).toEqual(testValue);
    });
  });

  describe("getRole", () => {
    it("should return role Engineer", () => {
      const testValue = "Engineer";
      const obj = new Engineer("Tom", 1, "abc@gmail.com", "GitHubName");
      expect(obj.getRole()).toEqual(testValue);
    });
  });
});
