const Manager = require('../lib/Manager')

describe("getOffice", () => {
  it("should get the manager's office number from the 'getOffice' method", () => {
    const officeTest = "13";
    const emp = new Manager("Aditya", "7", "email@email.com",officeTest);

    expect(emp.getOffice()).toBe(officeTest);
  });
});

describe("GetRole", () => {
  it("should get the manager role from the 'getRole' method", () => {
    const roleTest = "Manager";
    const emp = new Manager("Aditya", "7", "email@email.com", "13");

    expect(emp.getRole()).toBe(roleTest);
  });
});
