const addnumber = (): void => {
  // return 5; // Error: Type '5' is not assignable to type 'void'.
  console.log(5);
}


addnumber(); // void function, can't return anything

const throwNewError = (): never => {
  throw new Error('This is an error'); // never function, can't return anything
}

throwNewError(); // never function, can't return anything
