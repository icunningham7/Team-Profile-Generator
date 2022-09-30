import { Engineer } from "../scripts/engineer.js";

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
