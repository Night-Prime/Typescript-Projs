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
