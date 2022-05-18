const myName : string = "Daniel";

const yes:boolean = true;

const ten:number = -10;

const nothingHere:null = null;

const noDefinition:undefined = undefined;

const joinstring = function(a:string, b:string):string {
  return 'Dhaniel'
}


// Working with Decorators

const Component = ( target: any) => { // <--- this is a plain decorator
  console.log(target);
}

@Component
class Car {
};

// Building Generics

class valueHolder<TypeValueProperty> {
  value: TypeValueProperty;
}

const numberHolder = new valueHolder<number>();
numberHolder.value;

//  using generics with functions
const numberWrapper = (value: number) :number[] => {
  return [value];
};

//  generic function
const valueWrapper=<TypeValueProperty>(value: TypeValueProperty):TypeValueProperty[] => {
  return [value];
}

valueWrapper<number>(10);
valueWrapper<boolean>(true);
