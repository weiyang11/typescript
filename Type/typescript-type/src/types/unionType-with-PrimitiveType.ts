type stringOrNumber = string | number;

function addNumberString(a: stringOrNumber , b: stringOrNumber) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.toString() + b.toString();
  } else {
    throw new Error('Parameters must be the same type');
  };

}


console.log(addNumberString(1, 2)); // 3
console.log(addNumberString('Mark', '2'));  // Mark2
// console.log(addNumberString(1, 'Mark')); // Error: Parameters must be the same type
// console.log(addNumberString('Mark', null)); // null not assignable to string or number
