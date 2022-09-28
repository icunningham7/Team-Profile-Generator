import { Employee } from "../scripts/employee.js";
import { Manager } from "../scripts/manager.js";
import { Engineer } from "../scripts/engineer.js";
import { Intern } from "../scripts/intern.js";


describe('Employee', () => {
    it("should require name, id, and email arguments", () => {
        expect(() => {
            new Employee()
        }).toThrow(new Error('Invalid Employee'));
    });
    it("should return the employee's name", () => {
        let empl = new Employee('fakeName', 12, 'test@place.com');

        expect(empl.getName()).toEqual('fakeName');
    });
    it("should return the employee's id", () => {
        let empl = new Employee('name', 12, 'test@place.com');

        expect(empl.getId()).toEqual(12);
    });
    it("should return the employee's email", () => {
        let empl = new Employee('name', 12, 'test@place.com');

        expect(empl.getEmail()).toEqual('Email: <a href="mailto:test@place.com">test@place.com</a>');
    });
    it("should return the employee's role", () => {
        let empl = new Employee('name', 12, 'test@place.com');

        expect(empl.role).toEqual('Employee');
    });
});

describe('Manager', () => {
    it("should return the employee's contact information", () => {
        let empl = new Manager('fakeName', 12, 'test@place.com', 'H23');

        expect(empl.getContact()).toEqual('Office Number: H23');
    });
    it("should return the employee's role", () => {
        let empl = new Manager('name', 12, 'test@place.com', 'H23');

        expect(empl.role).toEqual('Manager');
    });
});

describe('Engineer', () => {
    it("should return the employee's contact information", () => {
        let empl = new Engineer('fakeName', 12, 'test@place.com', 'username');

        expect(empl.getContact()).toEqual('Github: <a href="https://github.com/username">username</a>');
    });
    it("should return the employee's role", () => {
        let empl = new Engineer('name', 12, 'test@place.com', 'username');

        expect(empl.role).toEqual('Engineer');
    });
});

describe('Intern', () => {
    it("should return the employee's contact information", () => {
        let empl = new Intern('fakeName', 12, 'test@place.com', 'schoolName');

        expect(empl.getContact()).toEqual('School: schoolName');
    });
    it("should return the employee's role", () => {
        let empl = new Intern('name', 12, 'test@place.com', 'schoolName');

        expect(empl.role).toEqual('Intern');
    });
});