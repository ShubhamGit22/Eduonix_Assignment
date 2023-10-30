alert(" Real world examples for following inheritance types:-\n i. Multiple Inheritance.\n ii. Hybrid Inheritance.\n iii. Hierarchical Inheritance.");

//multiple inheritance
console.log("1. Multiple inheritance");
class Chef {
    constructor(name) {
      this.name = name;
    }
  
    cook() {
      console.log(`${this.name} is cooking a delicious meal.`);
    }
  }
  
  class Artist {
    constructor(name) {
      this.name = name;
    }
  
    createArt() {
      console.log(`${this.name} is creating a beautiful painting.`);
    }
  }
  
  class CreativeChef {
    constructor(name) {
      this.name = name;
      this.chef = new Chef(name);
      this.artist = new Artist(name);
    }
  
    expressCreativity() {
      this.chef.cook();
      this.artist.createArt();
      console.log(`${this.name} is a creative chef.`);
    }
  }
  
  const julia = new CreativeChef('Julia');
  julia.expressCreativity();
  
  //Hybrid Inheritance
console.log("\n2. Hybrid Inheritance");
  class Person {
    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      console.log(`Hi, I am ${this.name}.`);
    }
  }
  
  class Worker {
    constructor(name, job) {
      this.job = job;
      this.person = new Person(name);
    }
  
    work() {
      this.person.introduce();
      console.log(`I am a ${this.job}.`);
    }
  }
  
  class Student {
    constructor(name, major) {
      this.major = major;
      this.person = new Person(name);
    }
  
    study() {
      this.person.introduce();
      console.log(`I am majoring in ${this.major}.`);
    }
  }
  
  class Employee {
    constructor(name, job, major, project) {
      this.job = new Worker(name, job);
      this.major = new Student(name, major);
      this.project = project;
    }
  
    perform() {
      this.job.work();
      this.major.study();
      console.log(`I am also working on the ${this.project} project.`);
    }
  }
  
  const john = new Employee('John', 'Software Developer', 'Computer Science', 'XYZ Project');
  john.perform();

  
  //Hierarchical Inheritance
  console.log("\n3. Hierarchical Inheritance");
  class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    start() {
      console.log(`${this.make} ${this.model} has started.`);
    }
  
    stop() {
      console.log(`${this.make} ${this.model} has stopped.`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, numDoors) {
      super(make, model);
      this.numDoors = numDoors;
    }
  
    drive() {
      console.log(`${this.make} ${this.model} with ${this.numDoors} doors is driving.`);
    }
  }
  
  class Bike extends Vehicle {
    constructor(make, model, type) {
      super(make, model);
      this.type = type;
    }
  
    ride() {
      console.log(`${this.make} ${this.model} of type ${this.type} is riding.`);
    }
  }
  
  const sedan = new Car('Toyota', 'Camry', 4);
  const motorcycle = new Bike('Harley-Davidson', 'Sportster', 'Cruiser');
  
  sedan.start();
  sedan.drive();
  sedan.stop();
  
  motorcycle.start();
  motorcycle.ride();
  motorcycle.stop();
  