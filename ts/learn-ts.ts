// type annotations
let a:number;
let b:string;
let c:boolean;
let d: any;

enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3, Yellow = 4};
const BackgroundColor = Color.Red;

// type assertions
// var message:string;
// message = 'abc';
// var endsWithC = (<string>message).endsWith('c');
// var alternative = (message as string).endsWith('c');

// Concept of Arrow functions

let doLog= (message) => {
    console.log(message);
}

// Working with Classes

class Point {
    x: number;
    y: number;

    // introduce a constructor function
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' +this.x + ' Y: ' + this.y);
    }
}

let point = new Point(3,6);
point.draw();

// Alternative implementation for OOP with Access Modifier

class altPoint {
    constructor(
        private x?: number,
        private y?: number){

    }

    draw() {
        console.log('X: ' +this.x + ' Y: ' + this.y);
    }
    // a Getter function
    get X(){
        return this.x;
    }
    // a Setter function
    set X(value){
        if (value < 0){
            console.log('Values cannot be less than zero');
        }
        this.x = value;
    }
}

let altpoint = new altPoint(3,6);
let x = altpoint.X;
altpoint.X = 10; // a much cleaner way to call a method using properties on line 53 & 57 respectively
altpoint.draw();
