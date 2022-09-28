import { Employee } from "../scripts/employee.js";
import { Manager } from "../scripts/manager.js";
import { Engineer } from "../scripts/engineer.js";
import { Intern } from "../scripts/intern.js";


describe('Employee', () => {
    it("should require name, id, and email arguments", () => {
        let err = new Error('Invalid Employee');
        let empl = new Employee();

        expect(empl).toThrowError(err);
    });
    it("should return the employee's name", () => {
        let empl = new Employee('fakeName', 12, 'test@place.com');
        let emplName = empl.getName();

        expect(emplName).toEqual('fakeName');
    });
    it("should return the employee's id", () => {
        let empl = new Employee('name', 12, 'test@place.com');
        let emplId = empl.getId();

        expect(emplId).toEqual(12);
    });
    it("should return the employee's email", () => {
        let empl = new Employee('name', 12, 'test@place.com');
        let emplEmail = empl.getEmail();

        expect(emplEmail).toEqual('Email: <a href="mailto:test@place.com">test@place.com</a>');
    });
    it("should return the employee's role", () => {
        let empl = new Employee('name', 12, 'test@place.com');
        let emplRole = empl.role;

        expect(emplRole).toEqual('Employee');
    });
});

describe('Manager', () => {
    it("should return the employee's contact information", () => {
        let empl = () => new Manager('fakeName', 12, 'test@place.com', 'H23');
        let emplContact = empl.getContact();

        expect(emplContact).toEqual('Office Number: H23');
    });
    it("should return the employee's role", () => {
        let empl = () => new Employee('name', 12, 'test@place.com', 'H23');
        let emplRole = empl.role;

        expect(emplRole).toEqual('Manager');
    });
});

describe('Engineer', () => {
    it("should return the employee's contact information", () => {
        let empl = () => new Engineer('fakeName', 12, 'test@place.com', 'username');
        let emplContact = empl.getContact();

        expect(emplContact).toEqual('Github: <a href="https://github.com/username">username</a>');
    });
    it("should return the employee's role", () => {
        let empl = () => new Engineer('name', 12, 'test@place.com', 'username');
        let emplRole = empl.role;

        expect(emplRole).toEqual('Engineer');
    });
});

describe('Intern', () => {
    it("should return the employee's contact information", () => {
        let empl = () => new Intern('fakeName', 12, 'test@place.com', 'schoolName');
        let emplContact = empl.getContact();

        expect(emplContact).toEqual('School: schoolName');
    });
    it("should return the employee's role", () => {
        let empl = () => new Intern('name', 12, 'test@place.com', 'schoolName');
        let emplRole = empl.role;

        expect(emplRole).toEqual('Intern');
    });
});