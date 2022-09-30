import { Intern } from "../scripts/intern.js";

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