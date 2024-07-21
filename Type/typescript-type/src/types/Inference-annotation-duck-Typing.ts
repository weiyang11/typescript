// Duck typing is used by typescript for inferrence of types
// * if it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck

type CustomString = string; //declaring a custom type

let firstname4: CustomString = 'john'; // annoting a variable with a custom type, assigning a string value

//inferred type is string
function add (a: number, b: number){
  return a + b;
}

let result = add(2, 3); // inferred type is number
