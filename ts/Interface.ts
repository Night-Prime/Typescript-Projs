// interface for every object properties
interface vehicle {
    model: string | number;
    color ?: string;
    isElectric : boolean | string | null;
    orderAlert() : string;
}

// class objects
const Honda: vehicle = {
    model: 'Accord',
    color: 'Skyline Blue',
    isElectric : false,
    orderAlert() {
        return "You request for a " + this.color + this.model ;
    }
};

const Toyota: vehicle = {
    model: 'Corolla',
    color: 'Red',
    isElectric : false,
    orderAlert() {
        return "You request for a " + this.color + this.model ;
    }
}

const Tesla: vehicle ={
    model: 'Red S',
    color: 'Silver',
    isElectric : true,
    orderAlert() {
        return "You request for a " + this.color + this.model ;
    }
}

console.log(Honda.orderAlert());

// Implementing Interface with Class
interface UserInterface {
    getFullName(): string;
}

class User implements UserInterface {
    firstName: string;
    lastName: string;
    readonly data: string;
    // Implementing a static properties
    static readonly maxAge: number = 50;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        // implementing a Read Only
        this.data = firstName;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }

}

class Admin extends User {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEditor(): string {
        return this.editor;
    }
}

const intern = new User("Abati", "Daniel");
console.log(intern.getFullName());

const admin = new Admin("Mobola", "Johnson");
console.log(admin);
