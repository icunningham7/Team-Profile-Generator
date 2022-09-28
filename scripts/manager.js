import { Employee } from "./employee.js";

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = `Office Number: ${office}`;
        this.role = 'Manager';
    }

    getContact() { return this.office };
}

export { Manager };