let number2: readonly number[] = [1, 2, 3, 4, 5];

// number2.push(6); // Error

// number2.pop(); // Error

// number2[0] = 10; // Error


type readOnlyPerson = readonly [string, string, number?]; // Tuple && Readonly

let person2: readOnlyPerson = ["John", "Doe", 30];

// person2[0] = "Jane"; // Error

// person2.pop(); // Error

type q = Readonly<number[]>;

let number3: q = [1, 2, 3, 4, 5];

// number3.push(6); // Error

type r = Readonly<[string, string, number]>;

let person3: r = ["John", "Doe", 30];

// person3[0] = "Jane"; // Error
