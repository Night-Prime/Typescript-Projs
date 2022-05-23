// type annotations for functions
const add = (a: number, b: number): number => {
  return a + b;
};

function divide (a: number, b: number): number{
  return a / b;
}

// anonymous functions
const multiply = function (a: number, b: number): number {
  return a * b;
}

// working with void and never

const logger = (message: string): void => {
  console.log(message);
}
// we are not returning anything here
const throwError = (message: string): never => {
  throw new Error(message);
}

// Destructuring with Typescript

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ( {date, weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};
let todaysWeather:any;
logWeather(todaysWeather);
