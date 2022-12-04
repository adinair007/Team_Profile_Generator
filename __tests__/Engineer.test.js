const Engineer = require("../lib/Engineer");

describe("GetGithub", () => {
  it("should get github username from 'getGithub' method", () => {
    const gitTest = "git007";
    const emp = new Engineer("Aditya", "7", "email@email.com", gitTest);

    expect(emp.getGithub()).toBe(gitTest);
  });
});

describe("GetRole", () => {
  it("should get the engineer role from the 'getRole' method", () => {
    const roleTest = "Engineer";
    const emp = new Engineer("Aditya", "7", "email@email.com", "git007");

    expect(emp.getRole()).toBe(roleTest)
  });
});
