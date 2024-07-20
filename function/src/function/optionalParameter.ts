function intro4(name : string , age?: number) : string{
  return `Hello, my name is ${name} and I am ${age} years old.`;
} // Function declaration, age is optional and name is required

console.log(intro4("John", 30)); // Hello, my name is John and I am 30 years old.

console.log(intro4("Jane")); //error TS2554: Expected 2 arguments, but got 1.
