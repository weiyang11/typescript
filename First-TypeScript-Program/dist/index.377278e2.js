console.log("hello");
const students = [
    {
        name: "John",
        age: 25
    },
    {
        name: "Jane",
        age: 24
    }
];
for (const student of students)console.log(student.name);
//@ts-ignore, stop throwing errors for the next line
function addNumbers(a, b) {
    return a + b;
} //a and b are of type any
console.log(addNumbers(1, 2)); // 3
console.log(addNumbers("text", 2)); // text2

//# sourceMappingURL=index.377278e2.js.map
