let lastName: string = 'Doe'; //annotation

let fullName: string = 'John ' + " " + lastName;


fullName.split(" "); // ['John', 'Doe']

let student = 32;

let studentAsString = student.toString(); // '32'

// fullName = 1234; // Error: Type '1234' is not assignable to type 'string'.

// Math.log(fullName); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
