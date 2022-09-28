import { Employee } from "./employee.js";

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, 'Manager');
        this.office = `Office Number: ${office}`;
    }

    getContact() { return this.office };
}

export { Manager };