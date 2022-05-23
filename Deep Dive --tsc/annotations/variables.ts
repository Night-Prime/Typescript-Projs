let apples:number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing : undefined = undefined;

// type annotations is simply when we (developers) tell what type of value a variable is

// built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'blue', 'green', 'yellow'];
let myNumber: number[] = [1,2,3];
let truths: boolean[] = [true, false, false, true, false];

//objects
class Car {

}
let car: Car = new Car();

// object literal --> a little bit nasty
let point: {x: number; y: number} = {
  x: 10,
  y: 20
}

// functions --> also nasty
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// when to use 'any' type annotations
// 1) functions that use the 'any' type
const json = '{"x": 10, "y": 10}';
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line and initialize after

let words = ['red', 'green', 'blue', 'yellow'];
let foundWords: boolean = false;

for(let i =0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWords = true;
  }
}

// 3) variable whose type cannot be inferred correctly
let numbers = [-10,20, 3];
let numberAboveZero: boolean | number = false; // <--- type union occured here!

for( let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

