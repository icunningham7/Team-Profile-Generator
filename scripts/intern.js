import { Employee } from "./employee.js";

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern');
        this.school = `School: ${school}`;
    }

    getContact() { return this.school };
}

export { Intern };