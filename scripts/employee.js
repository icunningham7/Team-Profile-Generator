class Employee {
    constructor(name, id, email) {
        if (!id || !name || !email) {
            throw new Error('Invalid Employee');
        }
        this.id = id;
        this.name = name;
        this.email = `Email: <a href="mailto:${email}">${email}</a>`;
        this.role = 'Employee'
    }

    getName() { return this.name };
    getId() { return this.id };
    getEmail() { return this.email };
    getRole() { return this.role };

}

export { Employee };