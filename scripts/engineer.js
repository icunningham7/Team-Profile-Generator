import { Employee } from "./employee.js";

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = `Github: <a href="https://github.com/${github}">${github}</a>`;
        this.role = 'Engineer';
    }

    getContact() { return this.github };
}

export { Engineer };