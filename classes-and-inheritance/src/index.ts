// let person = {
//   name: 'John',
//   email: 'john@gmail.com',
//   greet: () => console.log(`Hello ${person.name}`),
// };

class Person {
  name= "John";
  email= "john@gmail.com";
  greet() {
    return`Hello John`;
  }
}

const person = new Person();

console.log(person); // Person { name: 'John', email: '....}

console.log(person.greet()); // Hello John
