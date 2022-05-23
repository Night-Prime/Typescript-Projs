const profile = {
  name: 'alex',
  age: 20,
  coords : {
    lat: 10.5,
    long: 5.6
  },
  setAge(age:number, name:string): void {
    this.age = age;
    this.name = name;
  }
};

const { age }: {age:number} = profile;
const { coords: {lat, long} }: { coords: {lat:number, long:number} } = profile;
// when we use desturcturing above we have to call the structure when type annotating.

