class Person1 {
  // protected name: string;
  // public age: number;

  constructor(protected name: string, public age: number) {
    // this.name = name;
    // this.age = age;
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
// protected access modifier restricts the access of the property from outside the class but allows access from the derived class.

class Admin extends Person1 {
  public returnName (){
    return this.name;
  }
}

const admin1: Admin = new Admin('Mark', 30);

console.log(admin1.returnName()); // Mark
// console.log(admin1.name); // Error: 'name' is protected
