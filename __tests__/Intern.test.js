const Intern = require("../lib/Intern");

describe("getSchool", () => {
  it("should get the intern's school name from the 'getSchool' method", () => {
    const schoolTest = "academy";
    const emp = new Intern("Aditya", "7", "email@email.com", schoolTest);

    expect(emp.getSchool()).toBe(schoolTest);
  });
});

describe("GetRole", () => {
  it("should get the intern role from the 'getRole' method", () => {
    const roleTest = "Intern";
    const emp = new Intern("Aditya", "7", "email@email.com", "academy");

    expect(emp.getRole()).toBe(roleTest);
  });
});
