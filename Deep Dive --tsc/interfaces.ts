interface Reportable{
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: 2000,
  isBroken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
};

const drink = {
  color: 'Brown',
  carbonated: true,
  sugar: 20,
  summary(): string {
    return `my drink has more ${drink.sugar} than any other drink`
  }
};

const printModel = (model: Reportable):void => {
  console.log(model.summary());

}

printModel(oldCivic);
printModel(drink);



// we can express functions and not just variables in an interface.
// any object that have a function from the interface automatically implemnts it(interface)
