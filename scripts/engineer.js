import { Employee } from "./employee.js";

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer');
        this.github = `Github: <a href="https://github.com/${github}">${github}</a>`;
    }

    getGithub() { return this.getContact() };
    getContact() { return this.github };
}

export { Engineer };