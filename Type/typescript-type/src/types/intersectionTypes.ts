type Cat1 = {
  name: string;
  purrs: boolean;
  color: string;
};

type Dog1 = {
  name: string;
  barks: boolean;
  color: string;
};


type HybridAnimal = Dog1 & Cat1; // Intersection type, combine Dog and Cat

let hybridAnimal: HybridAnimal = {
  name: 'Fido',
  barks: true,
  purrs: true,
  color: 'brown',
};

// let hybridAnimal1: HybridAnimal = { //color is missing
//   name: 'Fido',
//   barks: true,
//   purrs: true,
// };

// let hybridAnimal2: HybridAnimal = {
//   name: 'Fido',
//   barks: true,
//   purrs: true,
//   color: 'brown',
//   age: 3, // Error: Object literal may only specify known properties, and 'age' does not exist in type 'HybridAnimal'.
// };
