function intro(name : string , age: number) : string{
  return `Hello, my name is ${name} and I am ${age} years old.`;
} // Function declaration

const intro2 = function intro (name : string , age: number) : string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
} // Function expression

const intro3 = (name : string , age: number) : string => {
  return `Hello, my name is ${name} and I am ${age} years old.`;
} // Arrow function
