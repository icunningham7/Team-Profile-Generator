import { Employee } from "../scripts/employee.js";

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
