class Vehicle {
  constructor(public color: string) {
  }
  drive(): void {
    console.log('Chugagaga');
  }
  private honk():void {
    console.log('pon! pon!')
  }
  dangerSignal () {
    this.honk(); // notice how the method can be called within the class
  }
}

const vehicle = new Vehicle('orange')

class Car extends Vehicle {
  constructor(public wheels: number,color: string) {
    super(color); //<-- reference to the constructor method in the parent class.
  }

  drive(): void {
    console.log('vroom!');
  }
}

const car = new Car(4,'red');
