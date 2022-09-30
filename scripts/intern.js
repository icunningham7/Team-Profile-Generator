import { Employee } from "./employee.js";

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern');
        this.school = `School: ${school}`;
    }

    getSchool() { return this.getContact() };
    getContact() { return this.school };
}

export { Intern };