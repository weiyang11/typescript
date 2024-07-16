// null, undefined

// let user: string;

// console.log(user); // undefined

let saveButton = document.getElementById('save');

console.log(saveButton); // null

let loggedInUsername: string;

const users =[
    {
        name: 'John Doe',
        age: 32
    },
    {
        name: 'Jane Doe',
        age: 31
    }
];

const loggedInUser = users.find(user => user.name === loggedInUsername);

// console.log(loggedInUser.age); // undefined

let saveButton1 :HTMLElement |null = document.getElementById('save') ;

if (saveButton1 !== null) {
  //don't need to check for null
}
