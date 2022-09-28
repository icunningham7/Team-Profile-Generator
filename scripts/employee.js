class Employee {
    constructor(name, id, email, role = 'Employee') {
        if (!id || !name || !email) {
            throw new Error('Invalid Employee');
        }
        this.id = id;
        this.name = name;
        this.email = `Email: <a href="mailto:${email}">${email}</a>`;
        this.role = role;
    }

    getName() { return this.name };
    getId() { return this.id };
    getEmail() { return this.email };
    getRole() { return this.role };

}

export { Employee };