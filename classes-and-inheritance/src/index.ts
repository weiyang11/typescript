// let person = {
//   name: 'John',
//   email: 'john@gmail.com',
//   greet: () => console.log(`Hello ${person.name}`),
// };

class Person {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return`Hello ${this.name}`;
  }
}

const person = new Person( "Jon",  "ddwqd@ff.com");

console.log(person);

console.log(person.greet()); // Hello Jon

const person2 = new Person("John", "fe@fe.fe");

console.log(person2); // Person { name: 'John', email: '....}
