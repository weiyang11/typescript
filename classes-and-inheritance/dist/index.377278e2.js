// let person = {
//   name: 'John',
//   email: 'john@gmail.com',
//   greet: () => console.log(`Hello ${person.name}`),
// };
class Person {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    greet() {
        return `Hello John`;
    }
}
const person = new Person("Jon", "ddwqd@ff.com");
console.log(person);
console.log(person.greet()); // Hello John
const person2 = new Person("John", "fe@fe.fe");
console.log(person2); // Person { name: 'John', email: '....}

//# sourceMappingURL=index.377278e2.js.map
