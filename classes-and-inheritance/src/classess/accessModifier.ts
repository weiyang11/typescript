class Person1 {
  private name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName(){
    return this.name;
  }
}


let person3: Person1 = new Person1('John', 30);
console.log(person3.getName()); // John


// person3.name = 'Mark'; // Error: 'name' is private


// public access modifier allows us to access the property from outside the class.
// private access modifier restricts the access of the property from outside the class.
