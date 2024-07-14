let firstname = 'john'

// firstname= 25; // Error: Type '25' is not assignable to type 'string'

const num = 85;

// num = 75; // Error: Cannot assign to 'num' because it is a constant.

let numTwo = 90;

numTwo = 100; // Works

let finalResult: number;

function addNumber (a: number, b: number){
  return a + b;
}

finalResult = addNumber(2, 3);
