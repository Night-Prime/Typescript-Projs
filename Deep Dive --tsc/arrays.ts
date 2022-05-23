const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMakers: string[][] = [
  ['F-150'],
  ['Corolla'],
  ['Camarro']
];

// help with inference when extracting values
const myCar = carsByMakers.pop();

//help with map functions
carMakers.map((car: string): string => {
  return car.toLowerCase();
})

// Multiple Types of values

const importantDates: (Date | string)[] = [new Date(), '2030-10-21'];
importantDates.push('2030-06-21');
