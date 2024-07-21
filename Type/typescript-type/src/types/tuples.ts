let person1: [string,string,number?]; // Tuple

person1 = ["John", "Doe", 30];

person1 = ["John", "Doe"];

type listOfStudents = [number, boolean, ...string[]];

let student1: listOfStudents = [2, true, "John", "Doe"];

type StringBooleanNumber = [string, ...boolean[], number];


let stringBooleanNumber : StringBooleanNumber = ["Hello", true, false, true, 1];
