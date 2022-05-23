const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}
// we create a type alias

type Drink = [ string, boolean, number];

const pepsi: [string, boolean,number] = ['brown', true, 40];
const sprite : Drink = [ 'clear', false , 25]; // implementing type alias created here
