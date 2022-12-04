const Employee = require('../lib/Employee');

describe("EmployeeObject", () => {
    it("should create an employee object", () => {
        const emp = new Employee();

        expect(typeof(emp)).toBe('object');
    });
});

describe("GetName", () => {
    it("should get name from 'getName' method", () => {
        const nameTest = "Aditya";
        const emp = new Employee(nameTest);

        expect(emp.getName()).toBe(nameTest);
    })
});

describe("GetId", () => {
    it("should get ID number from 'getId' method", () => {
        const idTest = "7";
        const emp = new Employee("Aditya", idTest);

        expect (emp.getId()).toBe(idTest);
    });
});

describe("GetEmail", () => {
    it("should get email address from 'getEmail' method", () =>{
        const emailTest = "email@email.com";
        const emp = new Employee("Aditya", "7", emailTest);

        expect (emp.getEmail()).toBe(emailTest);
    });
});

describe("GetRole", () => {
    it("should return role from the the 'getRole' method", () => {
        const roleTest = "Employee";
        const emp = new Employee("Aditya", "7", "email@email.com");
    
        expect (emp.getRole()).toBe(roleTest);
    });
});