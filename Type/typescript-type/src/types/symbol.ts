let id: symbol = Symbol(1234);
let aplhabeticId: symbol = Symbol('id');

let user = {
  [id]: '1234',
  name: 'John',
  getId() {
    return this[id];
  }
}

console.log(user[id]); // 1234, unique id
console.log(id);     // Symbol(1234)
console.log(user.getId()); // 1234
