type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
}

type Cat = {
  name: string;
  purrs: boolean;
}

type DogAndCatUnion = Dog | Cat; // Union type,combine Dog and Cat

let dog: DogAndCatUnion = {
  name: 'Fido',
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: 'Whiskers',
  purrs: true,
  barks: false,
};

let dogAndCat : DogAndCatUnion = {
  name: 'Fido',
  barks: true,
  wags: true,
  purrs: true,
};

// let dogAndCat1 : DogAndCatUnion = { // Error: Property 'wags' is missing in type '{ name: string; barks: true; }' but required in type 'Dog'.
//   name: 'Fido',
//   barks: true,
// };
