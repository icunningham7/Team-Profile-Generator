import { Employee } from "./employee.js";

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = `School: ${school}`;
        this.role = 'Intern';
    }

    getContact() { return this.school };
}

export { Intern };