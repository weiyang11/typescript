let lastName: string = 'Doe';

let fullName: string = 'John ' + " " + lastName;


fullName.split(" "); // ['John', 'Doe']

// fullName = 1234; // Error: Type '1234' is not assignable to type 'string'.

// Math.log(fullName); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
