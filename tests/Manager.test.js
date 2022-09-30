import { Manager } from "../scripts/manager.js";

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
